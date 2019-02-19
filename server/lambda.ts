import * as compression from 'compression';
import * as express from 'express';
import * as serverless from 'serverless-http';
import { parse } from 'url';
import { join } from 'path';
import rootStaticFiles from './rootStaticFiles';

// setup Express and hook up Next.js handler
const app = express();
app.use(compression());

// host the static files
app.use('/_next/static', express.static(__dirname + '/static'));
app.use('/service-worker.js', express.static(__dirname + '/service-worker.js'));

app.get('/', require('./serverless/pages/index').render);
app.get('/a', require('./serverless/pages/a').render);

app.get('*', (req, res) => {
  const parsedUrl = parse(req.url, true);

  if (rootStaticFiles.includes(parsedUrl.pathname)) {
    const path = join(__dirname, '..', 'static', parsedUrl.pathname);

    res.sendFile(path);
  } else {
    require('./serverless/pages/_error').render(req, res);
  }
});

// export the wrapped handler for the Lambda runtime
exports.handler = serverless(app);

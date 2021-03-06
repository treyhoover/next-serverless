import * as compression from 'compression';
import * as express from 'express';
import * as serverless from 'serverless-http';

// setup Express and hook up Next.js handler
const app = express();
app.use(compression());

// host the static files
app.use('/_next/static', express.static(__dirname + '/static'));

app.get('/', require('./serverless/pages/index').render);
app.get('/a', require('./serverless/pages/a').render);

app.get('*', (req, res) => {
  require('./serverless/pages/_error').render(req, res);
});

// export the wrapped handler for the Lambda runtime
exports.handler = serverless(app);

import * as compression from 'compression';
import * as express from 'express';
import * as serverless from 'serverless-http';

// setup Express and hook up Next.js handler
const app = express();
app.use(compression());

// host the static files
app.use('/_next/static', express.static(__dirname + '/static'));

app.get('/b', require('./serverless/pages/b').render);

// export the wrapped handler for the Lambda runtime
exports.handler = serverless(app);

import { parse } from 'url';
import { join } from 'path';
import * as next from 'next';
import * as express from 'express';
import rootStaticFiles from './rootStaticFiles';

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(
    '/service-worker.js',
    express.static(__dirname + '/service-worker.js')
  );

  server.get('/a', (req, res) => {
    return app.render(req, res, '/a', req.query);
  });

  server.get('/b', (req, res) => {
    return app.render(req, res, '/b', req.query);
  });

  server.get('*', (req, res) => {
    const parsedUrl = parse(req.url, true);

    if (rootStaticFiles.includes(parsedUrl.pathname)) {
      const path = join(__dirname, '..', parsedUrl.pathname);

      res.sendFile(path);
    } else {
      handle(req, res, parsedUrl);
    }
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});

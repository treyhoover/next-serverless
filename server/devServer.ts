import { parse } from 'url';
import { join } from 'path';
import * as next from 'next';
import * as express from 'express';
import rootStaticFiles from './rootStaticFiles';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = parseInt(process.env.PORT, 10) || 3000;

app.prepare().then(() => {
  const server = express();

  server.get('/a', (req, res) => {
    return app.render(req, res, '/a', req.query);
  });

  server.get('/b', (req, res) => {
    return app.render(req, res, '/b', req.query);
  });

  server.get('*', (req, res) => {
    const parsedUrl = parse(req.url, true);

    if (rootStaticFiles.includes(parsedUrl.pathname)) {
      const path = join(__dirname, '..', 'static', parsedUrl.pathname);

      app.serveStatic(req, res, path);
    } else {
      handle(req, res, parsedUrl);
    }
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});

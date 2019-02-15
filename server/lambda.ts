const compression = require("compression");
const express = require("express");
const serverless = require("serverless-http");
const isProduction = process.env.NODE_ENV === "production";

// setup Express and hook up Next.js handler
const app = express();
app.use(compression());

// host the static files
app.use("/_next/static", express.static(__dirname + "/static"));

app.get("/", require("./serverless/pages/index").render);
app.get("/a", require("./serverless/pages/a").render);
app.get("/b", require("./serverless/pages/b").render);

app.get("*", (req, res) => {
  require("./serverless/pages/_error").render(req, res);
});

// export the wrapped handler for the Lambda runtime
exports.handler = serverless(app);

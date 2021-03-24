const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const origin = process.env.PUBLIC_DOMAIN;
const corsConfig = { origin, credentials: true };

module.exports = (app) => {
  app.use(cors(corsConfig));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());
};

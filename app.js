require("dotenv").config();
const express = require("express");
const app = express();

require("./config/db.config")();
require("./config/middleware.config")(app);
require("./config/session.config")(app);

const todoRoutes = require("./routes/todo.routes");
app.use("/todo", todoRoutes);
const authRoutes = require("./routes/auth.routes");
app.use("/", authRoutes);

app.listen(process.env.PORT, () => console.log("server running"));

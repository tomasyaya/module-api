require("dotenv").config();
const express = require("express");
const app = express();

require("./config/db.config")(app);
require("./config/middleware.config")(app);
require("./config/session.config");

const authRoutes = require("./routes/auth.routes");
app.use("/", authRoutes);
const todoRoutes = require("./routes/todo.routes");
app.use("/todo", todoRoutes);

app.listen(process.env.PORT, () => console.log("server running"));

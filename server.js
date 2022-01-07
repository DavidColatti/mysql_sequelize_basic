const express = require("express");
const app = express();
const db = require("./models");
const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apiRoutes = require("./routes/apiRoutes");
app.use("/api", apiRoutes);

const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

const profileRoutes = require("./routes/profileRoutes");
app.use("/api/profiles", profileRoutes);

const postRoutes = require("./routes/postRoutes");
app.use("/api/posts", postRoutes);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on: http://locationhost:${PORT}`);
  });
});

// Notes:

// 1) Initialize sequelize with command 'npx sequelize init' in order to create config/models/seeder file.

// 2) In workbench, create your database:
//     DROP DATABASE IF EXISTS database_name;
//     CREATE DATABASE database_name;

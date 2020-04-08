const mongoose = require("mongoose");

function connectToDB() {
  mongoose.connect(process.env.DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "DB Connection error."));
  db.once("open", console.log.bind(console, "Connected to DB."));
}

module.exports = connectToDB;

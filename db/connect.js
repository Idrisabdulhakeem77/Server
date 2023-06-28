const mongoose = require("mongoose");
const winston  = require('winston')

module.exports = function (url) {
     return mongoose.connect(url).then(() => winston.info("Successfully Connected to the database") )
};

require("express-async-errors");
require("dotenv").config();

const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const notFoundMiddleware = require('./middleware/not-found')



const blogs = require('./routes/blog')

app.use('/api/v1/blogs' , blogs)



app.use(notFoundMiddleware)


const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Listening on port ${port}`));
  } catch (err) {
    console.log(err);
  }
};

start();

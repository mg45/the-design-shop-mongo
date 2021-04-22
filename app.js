const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config()
const PORT = process.env.PORT || 5000
const app = express()

const articleRoutes = require('./routes/article-routes')
const Article = require('./models/article');

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('DB connections success!')
  })
  .then(() => {
    app.listen(PORT);
  })
  .catch(err => {
    console.log(err)
  });

  app.use(articleRoutes);
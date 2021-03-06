const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;

const app = express();

app.use('/static', express.static('public'));

app.set('view engine', 'pug');

const mainRoutes = require('./routes');
const aboutRoutes = require('./routes/about');
const projRoutes = require('./routes/projects');

app.use(mainRoutes);
app.use('/about', aboutRoutes);
app.use('/projects', projRoutes);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
});

app.listen(port, () => {
  console.log('The application is running on localhost:3000');
});

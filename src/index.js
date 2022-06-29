var path = require('path');
const morgan = require('morgan')
const express = require('express');
const methodOverride = require('method-override');
const hbs = require('express-handlebars');
const route = require('./routes/index.js');
const db = require('./config/db');
const app = express();
const port = 3000;
const cookieParser = require('cookie-parser');

db.connect();
app.use(cookieParser('Secret'))
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));
app.engine(
  'hbs',
  hbs.engine({
    extname: '.hbs',
  }),
);
app.set('view engine', 'hbs');
app.set('views', './src/resources/views');


app.use(morgan('combined'))
app.use(methodOverride('_method'))

//Route
route(app);
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});


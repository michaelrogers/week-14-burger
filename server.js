const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

//Set template engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
const routes = require('./controllers/burgerController.js');

//Use routes defined in burger_controller
app.use("/", routes);
app.listen(port);
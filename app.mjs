import cookieParser from "cookie-parser";
import express from "express";
import createError from "http-errors";
import logger from "morgan";
import path from "path";
import setRoutes from "./routes/index.mjs";
import jsend from "jsend";
import cors from 'cors'
import db from './mongoDb/connection.mjs'

const __dirname = path.resolve();

var app = express();
const corsOptions = {
  
  origin: [
    'http://localhost:3001',
  ]
}
app.use(cors(corsOptions));


// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(jsend.middleware);

//db connection
db()

//Passing app to routes
setRoutes(app);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export default app;

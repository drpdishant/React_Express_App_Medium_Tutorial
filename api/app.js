const actuator = require('express-actuator'); // Java Actuator Implementation for Express
var cron = require('node-cron');
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var testAPIRouter = require("./routes/testAPI");
var corsRouter = require("./routes/cors");
var app = express();
const date = require('date-and-time');
var systemInfo = {
    cpu: '*',
    osInfo: '*',
    system: '*'
}

// Cron Scheduling Example
var cronInfo = {
    expression: '*/30 * * * * *',
    message: 'A Cron Job that Runs Every 30 Seconds',
    LastRun: 'Waiting for the first Run'
}
cron.schedule(cronInfo.expression, () => {
    var now = new Date();
    cronInfo.LastRun = date.format(now, 'YYYY/MM/DD HH:mm:ss');
});

const si = require('systeminformation');
const options = {
    // basePath: '/management', // It will set /management/info instead of /info
    infoGitMode: 'full', // the amount of git information you want to expose, 'simple' or 'full',
    infoBuildOptions: null, // extra information you want to expose in the build object. Requires an object.
    infoDateFormat: null, // by default, git.commit.time will show as is defined in git.properties. If infoDateFormat is defined, moment will format git.commit.time. See https://momentjs.com/docs/#/displaying/format/.
    customEndpoints: [
        {
            id: 'systeminfo', // used as endpoint /dependencies or ${basePath}/dependencies
            controller: (req, res) => { // Controller to be called when accessing this endpoint
                si.get(systemInfo)
                .then(data => res.send(data))
                .catch(error => res.status(404).send(siError))
            }
        },
        {
            id: 'cron', //Cron Info In actuator
            controller: (req, res) => {
                res.send(cronInfo)
            }
        }
    ]
};

global.allowedDomains = ['http://localhost:3000','apps.openxcell.dev'];
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(actuator(options));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// app.use(cors())

// app.user
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/testAPI", testAPIRouter);
app.use("/cors", corsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

// Cron Scheduling Example


module.exports = app;


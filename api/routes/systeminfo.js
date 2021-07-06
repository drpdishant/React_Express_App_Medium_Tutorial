const actuator = require('express-actuator');
const app = express();
const si = require('systeminformation');

// promises style - new since version 3

app.use(actuator());

module.exports = systeminfo;
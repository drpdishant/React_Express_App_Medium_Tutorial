var cron = require('node-cron');
var scheduler = ""
cron.schedule('*/3 * * * * *', () => {
  console.log('running a task every 3 seconds in background');
});
module.exports = scheduler;
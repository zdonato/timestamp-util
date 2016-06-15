var moment = require('moment');

var timestamp = function (msg) {
    console.log('[' + moment().format('MMMM Do YYYY, h:mm:ss a') + ']: ' + msg);
};

module.exports = timestamp;

var moment = require('moment');

var timestamp = function (msg) {
    return '[' + moment().format('MMMM Do YYYY, h:mm:ss a') + ']: ' + msg;
};

module.exports = timestamp;

var path = require('path');
var config = {};

//Config variables for the app
config.session_file_path = path.join(__dirname, 'session.txt');
config.startTime = 9;
config.endTime = 12;

config.dayStartTime = 13;
config.dayEndTime = 17;

config.num_tracks = 2;

config.lightningTime = 60;

module.exports = config;

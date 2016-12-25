var express = require('express');
var router = express.Router();
var fileService = require('../node_modules/services/fileService');
var schedularService = require('../node_modules/services/schedularService');
var app_config = require('../config');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Conference Planning Software' });
});

router.get('/read', function(req, res, next) {
  var file = app_config.session_file_path;
  var fileContent = fileService.fileReaderService(file);
  console.log("I am reading the sessions data from session.txt in project root folder." );
  console.log("Here is what We found : ");
  console.log(fileContent);
  res.render('read', { title: 'Conference Planning Software', description : 'I am reading the sessions data from session.txt in project root folder.', result: 'Here is what We found : ', fileData: fileContent });
});

router.get('/createPlan', function(req, res, next) {
   var file = app_config.session_file_path;
   var fileContent = fileService.fileReaderService(file);
   var tracks = schedularService.scheduleManager(fileContent);
   if(tracks['status'] === false) {
       console.log("There is some error in your input file : ");
       console.log(tracks['msg']);
       res.render('read', { title: 'Conference Planning Software', description : 'We created the following combination as per the assignment.', result: 'There is some error in your input file : ', fileData: tracks['msg'] });
   } else {
       console.log("We created the following combination as per the assignment.");
       console.log("One of the possible solutions");
       console.log(tracks);
       res.render('read', { title: 'Conference Planning Software', description : 'We created the following combination as per the assignment.', result: 'One of the possible solutions : ', fileData: tracks });
   }
});

module.exports = router;

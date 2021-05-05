"use strict";

var path = require('path');

var multer = require('multer');

var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, '../public/images/user-avatars');
  },
  filename: function filename(req, file, cb) {
    var newFilename = 'avatar-' + Date.now() + path.extname(file.originalname);
    cb(null, newFilename);
  }
});
var upload = multer({
  storage: storage
});
module.exports = upload;
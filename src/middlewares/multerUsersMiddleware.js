const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, '../public/images/user-avatars'); 
    }, 
    filename: function (req, file, cb) { 
       const newFilename = 'avatar-' + Date.now() + path.extname(file.originalname);
       cb(null, newFilename);  
    } 
})

const upload = multer({ storage: storage })

module.exports = upload;
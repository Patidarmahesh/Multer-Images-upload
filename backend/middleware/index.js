const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "imagestorage");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
})

const upload = multer({
    storage,  
}).array('image',5);

module.exports = upload;

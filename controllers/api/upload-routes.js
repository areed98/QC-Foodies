const router = require('express').Router();
const cloudinary = require('../../config/cloudinaryConfig')
//const con = require('../../config/connection')
const mysql = require('mysql2');
const multer  = require('multer')
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const { v4: uuidv4 } = require('uuid');


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'lamwil10',
    database: 'newsfeed_db'
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'QCFoodies',
        format: async (req, file) => 'png',
        public_id: (req, file) => uuidv4(),
    },
});

const upload = multer({storage})

router.post('/',  upload.single('postImage'), function (req, res, next) {
    console.log(req.file.path);
    console.log('test');
    // var imageLink = req.file.path;

//     var sql = 'INSERT INTO post (image_path) VALUES ("' + imageLink + '")'
//   db.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//  });
})

module.exports = router;

var cloudinary = require('cloudinary');

const uploader = (req, res, next) => {
    document.querySelector("#upload-form").addEventListener("submit", async function (e) {
    e.preventDefault()
    console.log(document.querySelector("#file-field").files[0]);
  
      cloudinary.v2.uploader
      .upload(document.querySelector("#file-field").files[0])
      .then(result=>console.log(result));
    })
};
var CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dqtyj8zwp/upload';
var CLONDINARY_UPLOAD_PRESET = 'wps8scvk';
var imgPreview = document.getElementById('img-preview');
var fileUpload = document.getElementById('file-upload');

fileUpload.addEventListener('change', function(event) {
    var file = event.target.files[0];
    var formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLONDINARY_UPLOAD_PRESET);
    axios({
        url: CLOUDINARY_URL,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data:  formData
    }).then(function(res) {
        console.log(res);
    }).catch(function(err) {
        console.error(err);
    });
});
const { errorhandler } = require('../../errors');
const { filesOptions } = require('../../constants');

module.exports = async (req, res , next) => {
    req.photo = [];
    req.docs = [];

    if (!req.files){
        return next();
    };

    const files = Object.values(req.files);

    for (let file of files){
        const { size, mimetype, name } = files;

        if(filesOptions.PHOTOS_MIMETYPES.includes(mimetype)) {
            if(size > filesOptions.PHOTO_MAX_SIZE) {
                return next (new errorhandler('Photo size is not valid',400));
            }
            req.photo.push(file);

        } else if (filesOptions.FILE_MAX_SIZE.includes(mimetype)) {
            if(size > filesOptions.FILE_MAX_SIZE) {
                return next (new errorhandler('File size is not valid',400));
            }
            req.docs.push(file)
        }
        return next(new errorhandler(`File ${name} is not valid`,400));

    }
};

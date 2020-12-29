const { errorhandler, statusErrors:{MANY_PHOTOS, NOT_PHOTO} } = require('../../errors');

module.exports = (req , res, next ) => {
    try{
        if(req.docs.length){
            return next(new errorhandler( MANY_PHOTOS ));
        }

        if(req.photo.length > 1){
            return next(new errorhandler( NOT_PHOTO ));
        }

    } catch(e){
        next(e);
    }
}





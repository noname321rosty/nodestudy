module.exports = class ErrorHandler extends Error {
    constructor(message, customCode, status) {
        super(message);
        this.status = status;
        this.customCode = customCode;

        Error.captureStackTrace(this, this.constructor)
    }

}

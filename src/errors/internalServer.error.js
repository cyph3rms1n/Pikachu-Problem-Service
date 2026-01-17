const BaseError = require('./base.error');
const { SatusCodes, StatusCodes } = require('http-status-codes');

class InternalServerError extends BaseError{
    constructor(details){
        super("InternaleServerError", StatusCodes.INTERNAL_SERVER_ERROR, "Something went wrong !!", details);
    }
}

module.exports = InternalServerError;
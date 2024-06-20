class ExpressError extends Error {
    constructor (statusCode, message) {
        super();
        this.statusCode= statusCode;
        this.message= message;
    }
}

// The super keyword is used to call the constructor of the parent class. In this case, the parent class is Error.

module.exports= ExpressError;
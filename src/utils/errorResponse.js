"use strict";
exports.__esModule = true;
exports.errorHandler = void 0;
var errorHandler = function (error) {
    if (error.message) {
        return {
            success: false,
            message: error.message
        };
    }
    else {
        console.log(error);
        return {
            success: false,
            message: "Internal Server Error"
        };
    }
};
exports.errorHandler = errorHandler;

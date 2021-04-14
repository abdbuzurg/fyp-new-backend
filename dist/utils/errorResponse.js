"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (error) => {
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
//# sourceMappingURL=errorResponse.js.map
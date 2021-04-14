"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
const User_1 = require("../entity/User");
const errorResponse_1 = require("../utils/errorResponse");
const Auth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        if (!token) {
            throw new Error("User not authenticated");
        }
        const decodedToken = jsonwebtoken_1.verify(token, "secret");
        const userId = decodedToken.userId;
        if (!(yield User_1.User.findOne(userId))) {
            throw new Error("Unauthorized user");
        }
        req.body.userId = userId;
        next();
    }
    catch (error) {
        res.send(errorResponse_1.errorHandler(error));
    }
});
exports.default = Auth;
//# sourceMappingURL=Auth.js.map
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Auth_1 = __importDefault(require("../middlewares/Auth"));
const UserController = __importStar(require("../controllers/UserController"));
const userRouter = express_1.Router();
userRouter.get("/", Auth_1.default, UserController.getUsers);
userRouter.get("/myself", Auth_1.default, UserController.myself);
userRouter.post("/", UserController.createUser);
userRouter.put("/", Auth_1.default, UserController.updateUser);
userRouter.delete("/:id", Auth_1.default, UserController.deleteUser);
userRouter.post("/login", UserController.login);
userRouter.post("/getUser", UserController.getUser);
exports.default = userRouter;
//# sourceMappingURL=userRouter.js.map
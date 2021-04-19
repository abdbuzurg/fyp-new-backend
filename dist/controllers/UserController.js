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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.login = exports.getUsers = void 0;
const argon2_1 = __importDefault(require("argon2"));
const User_1 = require("../entity/User");
const errorResponse_1 = require("../utils/errorResponse");
const jsonwebtoken_1 = require("jsonwebtoken");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield User_1.User.find();
    res.send(users);
});
exports.getUsers = getUsers;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Logging in user");
    try {
        const user = yield User_1.User.findOne({ username: req.body.username });
        if (!user) {
            throw new Error("Invalid credentials: User does not exist");
        }
        if (!(yield argon2_1.default.verify(user.password, req.body.password))) {
            throw new Error("Invalid credentials: Incorrect Password");
        }
        res.send({
            success: true,
            message: "Logged in",
            token: jsonwebtoken_1.sign({ userId: user.id }, "secret", { expiresIn: "60m" })
        });
    }
    catch (error) {
        res.send(errorResponse_1.errorHandler(error));
    }
});
exports.login = login;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (yield User_1.User.findOne({ email: req.body.email })) {
            throw new Error("User exist with the same email");
        }
        if (yield User_1.User.findOne({ username: req.body.username })) {
            throw new Error("User exist with the same username");
        }
        const hashedPassword = yield argon2_1.default.hash(req.body.password);
        const newUser = yield User_1.User.create({
            username: req.body.username,
            password: hashedPassword,
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            mobileNumber: req.body.mobileNumber,
            superUser: false
        }).save();
        res.send({
            success: true,
            message: "User has been created"
        });
    }
    catch (error) {
        console.log(error);
        res.send(errorResponse_1.errorHandler(error));
    }
});
exports.createUser = createUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.User.findOne(+req.params.id);
        if (!user) {
            throw new Error("User does not exist");
        }
        user.username = req.body.username;
        user.email = req.body.email;
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.mobileNumber = req.body.mobileNumber;
        user.password = yield argon2_1.default.hash(req.body.password);
        user.save();
        res.send({
            success: true,
            message: "User has been updated"
        });
    }
    catch (error) {
        res.send(errorResponse_1.errorHandler(error));
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield User_1.User.delete({ id: +req.params.id });
    res.send({
        success: true,
        message: "User has been deleted"
    });
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=UserController.js.map
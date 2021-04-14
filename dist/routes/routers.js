"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientFeedRoutes_1 = __importDefault(require("./clientFeedRoutes"));
const driverFeedRouter_1 = __importDefault(require("./driverFeedRouter"));
const userRouter_1 = __importDefault(require("./userRouter"));
const allRoutesV1 = express_1.Router();
allRoutesV1.use('/user/', userRouter_1.default);
allRoutesV1.use('/driver/', driverFeedRouter_1.default);
allRoutesV1.use('/client/', clientFeedRoutes_1.default);
exports.default = allRoutesV1;
//# sourceMappingURL=routers.js.map
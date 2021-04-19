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
const DriverFeedController = __importStar(require("../controllers/DriverFeedController"));
const Auth_1 = __importDefault(require("../middlewares/Auth"));
const driverFeedRouter = express_1.Router();
driverFeedRouter.get("/", Auth_1.default, DriverFeedController.getAll);
driverFeedRouter.post("/", Auth_1.default, DriverFeedController.create);
driverFeedRouter.put("/:id", Auth_1.default, DriverFeedController.update);
driverFeedRouter.delete("/:id", Auth_1.default, DriverFeedController.deleteFeed);
exports.default = driverFeedRouter;
//# sourceMappingURL=driverFeedRouter.js.map
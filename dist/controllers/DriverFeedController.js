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
exports.getSpecific = exports.history = exports.deleteFeed = exports.update = exports.create = exports.getAll = void 0;
const errorResponse_1 = require("../utils/errorResponse");
const DriverFeed_1 = require("../entity/DriverFeed");
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const take = 10;
        const pagination = +req.params.pagination * take;
        const all = yield DriverFeed_1.DriverFeed.find({
            order: { id: "DESC" },
            skip: pagination,
            take: take
        });
        res.send({
            success: true,
            data: all,
            message: "All the data is provided for Driver"
        });
    }
    catch (error) {
        res.send(errorResponse_1.errorHandler(error));
    }
});
exports.getAll = getAll;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield DriverFeed_1.DriverFeed.create({
        clientId: req.body.userId,
        destinationFrom: req.body.destinationFrom,
        destinationTo: req.body.destinationTo,
        pricing: req.body.pricing,
        departureDate: new Date(+req.body.departureDate)
    }).save();
    res.send({
        success: true,
        message: "Post has been created"
    });
});
exports.create = create;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const driverFeed = yield DriverFeed_1.DriverFeed.findOne(req.params.id);
        if (!driverFeed) {
            throw new Error("The post does not exist");
        }
        driverFeed.departureDate = new Date(+req.body.departureDate);
        driverFeed.pricing = req.body.pricing;
        driverFeed.destinationFrom = req.body.destinationFrom;
        driverFeed.destinationTo = req.body.destinationTo;
        driverFeed.save();
        res.send({
            success: true,
            message: "Post has been updated"
        });
    }
    catch (error) {
        res.send(errorResponse_1.errorHandler(error));
    }
});
exports.update = update;
const deleteFeed = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield DriverFeed_1.DriverFeed.delete(req.params.id);
    res.send({
        success: true,
        message: "Post has been deleted"
    });
});
exports.deleteFeed = deleteFeed;
const history = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const feed = yield DriverFeed_1.DriverFeed.find({ where: {
                clientId: req.body.userId
            } });
        const currentDate = new Date().getTime();
        const pastAction = feed.filter((value) => currentDate - new Date(value.departureDate).getTime() > 0);
        const futureAction = feed.filter((value) => new Date(value.departureDate).getTime() - currentDate > 0);
        const result = { pastAction: pastAction, futureAction: futureAction };
        res.send({
            success: true,
            message: "Fetching complete",
            data: result
        });
    }
    catch (err) {
        res.send(errorResponse_1.errorHandler(err));
    }
});
exports.history = history;
const getSpecific = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const specific = yield DriverFeed_1.DriverFeed.findOne(req.params.id);
        res.send({
            success: true,
            message: "Specific Post Has been found",
            data: specific
        });
    }
    catch (error) {
        res.send(errorResponse_1.errorHandler(error));
    }
});
exports.getSpecific = getSpecific;
//# sourceMappingURL=DriverFeedController.js.map
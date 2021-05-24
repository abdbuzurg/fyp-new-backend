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
exports.getSpecific = exports.history = exports.deleteFeed = exports.update = exports.create = exports.getAll = exports.getCount = void 0;
const errorResponse_1 = require("../utils/errorResponse");
const ClientFeed_1 = require("../entity/ClientFeed");
const getCount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield ClientFeed_1.ClientFeed.query("SELECT COUNT(*) FROM client_feed");
        res.send({
            success: true,
            message: "Counting finished",
            data: result
        });
    }
    catch (err) {
        res.send(errorResponse_1.errorHandler(err));
    }
});
exports.getCount = getCount;
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const take = 10;
        const pagination = +req.params.pagination * take;
        const all = yield ClientFeed_1.ClientFeed.find({
            order: { id: "DESC" },
            skip: pagination,
            take: take
        });
        res.send({
            success: true,
            data: all,
            message: "All the data is provided for Client"
        });
    }
    catch (error) {
        res.send(errorResponse_1.errorHandler(error));
    }
});
exports.getAll = getAll;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield ClientFeed_1.ClientFeed.create({
            driverId: req.body.userId,
            destinationFrom: req.body.destinationFrom,
            destinationTo: req.body.destinationTo,
            pricing: +req.body.pricing,
            carModel: req.body.carModel,
            numberOfSeats: +req.body.numberOfSeats,
            departureDate: new Date(+req.body.departureDate)
        }).save();
        res.send({
            success: true,
            message: "Post has been created",
        });
    }
    catch (error) {
        res.send(errorResponse_1.errorHandler(error));
    }
});
exports.create = create;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clientFeed = yield ClientFeed_1.ClientFeed.findOne(req.params.id);
        if (!clientFeed) {
            throw new Error("Post does not exist");
        }
        clientFeed.destinationFrom = req.body.destinationFrom,
            clientFeed.destinationTo = req.body.destinationTo,
            clientFeed.pricing = req.body.pricing,
            clientFeed.carModel = req.body.carModel,
            clientFeed.numberOfSeats = req.body.numberOfSeats,
            clientFeed.departureDate = new Date(+req.body.departureDate);
        clientFeed.save();
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
    yield ClientFeed_1.ClientFeed.delete(req.params.id);
    res.send({
        success: true,
        message: "Post has been deleted"
    });
});
exports.deleteFeed = deleteFeed;
const history = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const feed = yield ClientFeed_1.ClientFeed.find({ where: {
                driverId: req.body.userId
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
        const specific = yield ClientFeed_1.ClientFeed.findOne(req.params.id);
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
//# sourceMappingURL=ClientFeedController.js.map
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
exports.deleteFeed = exports.update = exports.create = exports.getAll = void 0;
const errorResponse_1 = require("../utils/errorResponse");
const ClientFeed_1 = require("../entity/ClientFeed");
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const all = yield ClientFeed_1.ClientFeed.find();
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
//# sourceMappingURL=ClientFeedController.js.map
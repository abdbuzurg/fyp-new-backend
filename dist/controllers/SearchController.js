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
exports.search = void 0;
const ClientFeed_1 = require("../entity/ClientFeed");
const DriverFeed_1 = require("../entity/DriverFeed");
const errorResponse_1 = require("../utils/errorResponse");
const search = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const initialLocation = req.body.initialLocation;
        const finalLocation = req.body.finalLocation;
        const isClientFeed = Boolean(req.body.isClientFeed);
        let both;
        let basedOnInitialLocation;
        let basedOnFinalLocation;
        let result;
        if (isClientFeed) {
            both = yield ClientFeed_1.ClientFeed.find({ where: { destinationFrom: initialLocation, destinationTo: finalLocation } });
            basedOnInitialLocation = yield ClientFeed_1.ClientFeed.find({ where: { destinationFrom: initialLocation } });
            basedOnFinalLocation = yield ClientFeed_1.ClientFeed.find({ where: { destinationTo: finalLocation } });
        }
        else {
            both = yield DriverFeed_1.DriverFeed.find({ where: { destinationFrom: initialLocation, destinationTo: finalLocation } });
            basedOnInitialLocation = yield DriverFeed_1.DriverFeed.find({ where: { destinationFrom: initialLocation } });
            basedOnFinalLocation = yield DriverFeed_1.DriverFeed.find({ where: { destinationTo: finalLocation } });
        }
        if (both.length > 0)
            result = [...both];
        else
            result = [...basedOnInitialLocation, ...basedOnFinalLocation];
        res.send({
            success: true,
            message: "Search completed",
            data: result,
        });
    }
    catch (error) {
        res.send(errorResponse_1.errorHandler(error));
    }
});
exports.search = search;
//# sourceMappingURL=SearchController.js.map
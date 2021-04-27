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
        let result;
        if (isClientFeed) {
            const both = yield ClientFeed_1.ClientFeed.find({ where: { destinationFrom: initialLocation, destinationTo: finalLocation } });
            const basedOnInitialLocation = yield ClientFeed_1.ClientFeed.find({ where: { destinationFrom: initialLocation } });
            const basedOnFinalLocation = yield ClientFeed_1.ClientFeed.find({ where: { destinationTo: finalLocation } });
            console.log(both, basedOnInitialLocation, basedOnFinalLocation);
            result = [...both, ...basedOnInitialLocation, ...basedOnFinalLocation];
        }
        else {
            const both = yield DriverFeed_1.DriverFeed.find({ where: { destinationFrom: initialLocation, destinationTo: finalLocation } });
            const basedOnInitialLocation = yield DriverFeed_1.DriverFeed.find({ where: { destinationFrom: initialLocation } });
            const basedOnFinalLocation = yield DriverFeed_1.DriverFeed.find({ where: { destinationTo: finalLocation } });
            result = [...both, ...basedOnInitialLocation, ...basedOnFinalLocation];
        }
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
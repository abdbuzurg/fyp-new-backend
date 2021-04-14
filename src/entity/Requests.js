"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Requests = void 0;
var typeorm_1 = require("typeorm");
var User_1 = require("./User");
var Requests = /** @class */ (function (_super) {
    __extends(Requests, _super);
    function Requests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Requests.prototype, "id");
    __decorate([
        typeorm_1.Column()
    ], Requests.prototype, "ownerOfTheFeedId");
    __decorate([
        typeorm_1.ManyToOne(function () { return User_1.User; }, function (user) { return user.ownerOfTheFeed; }),
        typeorm_1.JoinColumn({ name: "ownerOfTheFeedId" })
    ], Requests.prototype, "ownerOfTheFeed");
    __decorate([
        typeorm_1.Column()
    ], Requests.prototype, "requestorId");
    __decorate([
        typeorm_1.ManyToOne(function () { return User_1.User; }, function (user) { return user.requestor; }),
        typeorm_1.JoinColumn({ name: "requestorId" })
    ], Requests.prototype, "requestor");
    __decorate([
        typeorm_1.Column()
    ], Requests.prototype, "feedType");
    __decorate([
        typeorm_1.Column()
    ], Requests.prototype, "feedId");
    __decorate([
        typeorm_1.Column()
    ], Requests.prototype, "requestStatus");
    __decorate([
        typeorm_1.Column()
    ], Requests.prototype, "responseStatus");
    __decorate([
        typeorm_1.CreateDateColumn()
    ], Requests.prototype, "createdAt");
    __decorate([
        typeorm_1.UpdateDateColumn()
    ], Requests.prototype, "updatedAt");
    __decorate([
        typeorm_1.DeleteDateColumn()
    ], Requests.prototype, "deletedAt");
    Requests = __decorate([
        typeorm_1.Entity()
    ], Requests);
    return Requests;
}(typeorm_1.BaseEntity));
exports.Requests = Requests;
var Status;
(function (Status) {
    Status[Status["declined"] = 0] = "declined";
    Status[Status["pending"] = 1] = "pending";
    Status[Status["accepted"] = 2] = "accepted";
})(Status || (Status = {}));
var FeedType;
(function (FeedType) {
    FeedType[FeedType["ClientFeed"] = 0] = "ClientFeed";
    FeedType[FeedType["DriverFeed"] = 1] = "DriverFeed";
})(FeedType || (FeedType = {}));

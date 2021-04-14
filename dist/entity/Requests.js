"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Requests = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
let Requests = class Requests extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Requests.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Requests.prototype, "ownerOfTheFeedId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => User_1.User, user => user.ownerOfTheFeed),
    typeorm_1.JoinColumn({ name: "ownerOfTheFeedId" }),
    __metadata("design:type", User_1.User)
], Requests.prototype, "ownerOfTheFeed", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Requests.prototype, "requestorId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => User_1.User, user => user.requestor),
    typeorm_1.JoinColumn({ name: "requestorId" }),
    __metadata("design:type", User_1.User)
], Requests.prototype, "requestor", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Requests.prototype, "feedType", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Requests.prototype, "feedId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Requests.prototype, "requestStatus", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Requests.prototype, "responseStatus", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Requests.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Requests.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.DeleteDateColumn(),
    __metadata("design:type", Date)
], Requests.prototype, "deletedAt", void 0);
Requests = __decorate([
    typeorm_1.Entity()
], Requests);
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
//# sourceMappingURL=Requests.js.map
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
exports.User = void 0;
var typeorm_1 = require("typeorm");
var ClientFeed_1 = require("./ClientFeed");
var DriverFeed_1 = require("./DriverFeed");
var Requests_1 = require("./Requests");
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], User.prototype, "id");
    __decorate([
        typeorm_1.Column()
    ], User.prototype, "email");
    __decorate([
        typeorm_1.Column()
    ], User.prototype, "username");
    __decorate([
        typeorm_1.Column()
    ], User.prototype, "password");
    __decorate([
        typeorm_1.Column()
    ], User.prototype, "firstName");
    __decorate([
        typeorm_1.Column()
    ], User.prototype, "lastName");
    __decorate([
        typeorm_1.Column()
    ], User.prototype, "mobileNumber");
    __decorate([
        typeorm_1.Column()
    ], User.prototype, "superUser");
    __decorate([
        typeorm_1.CreateDateColumn()
    ], User.prototype, "createdAt");
    __decorate([
        typeorm_1.UpdateDateColumn()
    ], User.prototype, "updatedAt");
    __decorate([
        typeorm_1.DeleteDateColumn()
    ], User.prototype, "deletedAt");
    __decorate([
        typeorm_1.OneToMany(function () { return DriverFeed_1.DriverFeed; }, function (driverFeed) { return driverFeed.client; })
    ], User.prototype, "driverFeed");
    __decorate([
        typeorm_1.OneToMany(function () { return ClientFeed_1.ClientFeed; }, function (clientFeed) { return clientFeed.driver; })
    ], User.prototype, "clientFeed");
    __decorate([
        typeorm_1.OneToMany(function () { return Requests_1.Requests; }, function (requests) { return requests.requestor; })
    ], User.prototype, "requestor");
    __decorate([
        typeorm_1.OneToMany(function () { return Requests_1.Requests; }, function (requests) { return requests.ownerOfTheFeed; })
    ], User.prototype, "ownerOfTheFeed");
    User = __decorate([
        typeorm_1.Entity()
    ], User);
    return User;
}(typeorm_1.BaseEntity));
exports.User = User;

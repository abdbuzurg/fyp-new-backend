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
exports.ClientFeed = void 0;
var typeorm_1 = require("typeorm");
var User_1 = require("./User");
var ClientFeed = /** @class */ (function (_super) {
    __extends(ClientFeed, _super);
    function ClientFeed() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], ClientFeed.prototype, "id");
    __decorate([
        typeorm_1.Column()
    ], ClientFeed.prototype, "driverId");
    __decorate([
        typeorm_1.ManyToOne(function () { return User_1.User; }, function (user) { return user.clientFeed; }),
        typeorm_1.JoinColumn({ name: "driverId" })
    ], ClientFeed.prototype, "driver");
    __decorate([
        typeorm_1.ManyToMany(function () { return User_1.User; }),
        typeorm_1.JoinTable()
    ], ClientFeed.prototype, "reservedBy");
    __decorate([
        typeorm_1.Column()
    ], ClientFeed.prototype, "destinationFrom");
    __decorate([
        typeorm_1.Column()
    ], ClientFeed.prototype, "destinationTo");
    __decorate([
        typeorm_1.Column()
    ], ClientFeed.prototype, "pricing");
    __decorate([
        typeorm_1.Column()
    ], ClientFeed.prototype, "carModel");
    __decorate([
        typeorm_1.Column()
    ], ClientFeed.prototype, "numberOfSeats");
    __decorate([
        typeorm_1.Column()
    ], ClientFeed.prototype, "departureDate");
    __decorate([
        typeorm_1.CreateDateColumn()
    ], ClientFeed.prototype, "createdAt");
    __decorate([
        typeorm_1.UpdateDateColumn()
    ], ClientFeed.prototype, "updatedAt");
    __decorate([
        typeorm_1.DeleteDateColumn()
    ], ClientFeed.prototype, "deletedAt");
    ClientFeed = __decorate([
        typeorm_1.Entity()
    ], ClientFeed);
    return ClientFeed;
}(typeorm_1.BaseEntity));
exports.ClientFeed = ClientFeed;

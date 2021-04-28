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
exports.ClientFeed = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
let ClientFeed = class ClientFeed extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ClientFeed.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], ClientFeed.prototype, "driverId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => User_1.User, user => user.clientFeed),
    typeorm_1.JoinColumn({ name: "driverId" }),
    __metadata("design:type", User_1.User)
], ClientFeed.prototype, "driver", void 0);
__decorate([
    typeorm_1.ManyToMany(() => User_1.User),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], ClientFeed.prototype, "reservedBy", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ClientFeed.prototype, "destinationFrom", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ClientFeed.prototype, "destinationTo", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], ClientFeed.prototype, "pricing", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ClientFeed.prototype, "carModel", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], ClientFeed.prototype, "numberOfSeats", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], ClientFeed.prototype, "departureDate", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], ClientFeed.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], ClientFeed.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.DeleteDateColumn(),
    __metadata("design:type", Date)
], ClientFeed.prototype, "deletedAt", void 0);
ClientFeed = __decorate([
    typeorm_1.Entity()
], ClientFeed);
exports.ClientFeed = ClientFeed;
//# sourceMappingURL=ClientFeed.js.map
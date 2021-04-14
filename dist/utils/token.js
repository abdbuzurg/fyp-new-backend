"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAccessToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const createAccessToken = (user) => {
    return jsonwebtoken_1.sign({ userId: user.id }, "secret", { expiresIn: "9999m" });
};
exports.createAccessToken = createAccessToken;
//# sourceMappingURL=token.js.map
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const typeorm_1 = require("typeorm");
const routers_1 = __importDefault(require("./routes/routers"));
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const app = express_1.default();
        yield typeorm_1.createConnection();
        const port = process.env.PORT || 3000;
        app.use(cors_1.default());
        app.use(express_1.default.json());
        app.get('/', (req, res) => {
            res.send("Welcome to the API");
        });
        app.use('/api/v1/', routers_1.default);
        app.listen(port, () => console.log(`Server created at http://localhost:${port}`));
    }
    catch (err) {
        console.log(err);
    }
}))();
//# sourceMappingURL=index.js.map
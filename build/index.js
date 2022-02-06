"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const router_1 = __importDefault(require("./router"));
const logger_1 = __importDefault(require("./config/logger"));
const database_1 = require("./config/database");
const error_middleware_1 = require("./middlewares/error.middleware");
dotenv_1.default.config();
const app = (0, express_1.default)();
// core setup
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.listen(process.env.PORT || 3000, () => {
    // router setup
    (0, router_1.default)(app);
    app.use(error_middleware_1.ErrorMiddleware);
    // db connection
    (0, database_1.ConnectDB)();
    logger_1.default.info(`🚀🚀🚀 Server listing on port:${process.env.PORT} 🔥🔥🔥`);
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const error_constant_1 = require("../helpers/constants/error.constant");
const NotFoundException_1 = require("../helpers/errors/NotFoundException");
const default_router_1 = __importDefault(require("./default.router"));
const favorite_router_1 = __importDefault(require("./favorite.router"));
function routes(app) {
    app.use('/', default_router_1.default);
    app.use('/repos/favorites', favorite_router_1.default);
    app.all('*', () => {
        throw new NotFoundException_1.NotFoundException(error_constant_1.NOT_FOUND_ERROR_MSG);
    });
}
exports.default = routes;

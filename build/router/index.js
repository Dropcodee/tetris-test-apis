"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const default_router_1 = __importDefault(require("./default.router"));
const favorite_router_1 = __importDefault(require("./favorite.router"));
function routes(app) {
    app.use('/', default_router_1.default);
    app.use('/repos/favorites', favorite_router_1.default);
    app.all('*', () => {
        // throw new NotFoundException(NOT_FOUND_ERROR_MSG);
    });
}
exports.default = routes;

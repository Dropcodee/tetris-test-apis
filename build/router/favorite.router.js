"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const favorite_handler_1 = require("../handlers/favorite.handler");
const favorite_schema_1 = require("../schemas/favorite.schema");
const validation_middleware_1 = __importDefault(require("../middlewares/validation.middleware"));
const favoriteRouter = (0, express_1.Router)();
favoriteRouter.post('/', (0, validation_middleware_1.default)(favorite_schema_1.CreateFavoriteSchema), favorite_handler_1.AddFavoriteRepo);
favoriteRouter.get('/', favorite_handler_1.FetchFavoriteRepos);
exports.default = favoriteRouter;

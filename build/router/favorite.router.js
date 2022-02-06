"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const favorite_handler_1 = require("../handlers/favorite.handler");
const favoriteRouter = (0, express_1.Router)();
favoriteRouter.post('/', favorite_handler_1.AddFavoriteRepo);
favoriteRouter.get('/', favorite_handler_1.FetchFavoriteRepos);
exports.default = favoriteRouter;

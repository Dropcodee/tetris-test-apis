"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchFavoriteRepos = exports.AddFavoriteRepo = void 0;
const messages_constant_1 = require("../helpers/constants/messages.constant");
const BadRequestException_1 = require("../helpers/errors/BadRequestException");
const favorite_service_1 = require("../services/favorite.service");
// create function for adding favorite repo to database
// req body is passed to a service class to interact with db
async function AddFavoriteRepo(req, res) {
    try {
        const favoriteRepo = await favorite_service_1.FavoriteService.AddNewFavorite(req.body);
        res.status(201).json({ message: messages_constant_1.REQUEST_CREATED_MSG, ...favoriteRepo });
    }
    catch (error) {
        throw new Error(error.message);
    }
}
exports.AddFavoriteRepo = AddFavoriteRepo;
async function FetchFavoriteRepos(req, res, next) {
    try {
        const favoriteRepos = await favorite_service_1.FavoriteService.GetFavoriteRepos();
        res.status(200).json({ message: 'favorite repositories retrieved successfully', data: favoriteRepos });
    }
    catch (error) {
        next(new BadRequestException_1.BadRequestException(error.message));
    }
}
exports.FetchFavoriteRepos = FetchFavoriteRepos;

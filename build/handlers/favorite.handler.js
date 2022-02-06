"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchFavoriteRepos = exports.AddFavoriteRepo = void 0;
const favorite_service_1 = require("../services/favorite.service");
async function AddFavoriteRepo(req, res) {
    try {
        const favoriteRepo = await favorite_service_1.FavoriteService.AddNewFavorite(req.body);
        res.status(201).json({ message: 'favorite repository added successfully', favoriteRepo });
    }
    catch (error) {
        throw new Error(error.message);
    }
}
exports.AddFavoriteRepo = AddFavoriteRepo;
async function FetchFavoriteRepos(req, res) {
    try {
        const favoriteRepos = await favorite_service_1.FavoriteService.GetFavoriteRepos();
        res.status(200).json({ message: 'favorite repositories retrieved successfully', data: favoriteRepos });
    }
    catch (error) {
        throw new Error(error.message);
    }
}
exports.FetchFavoriteRepos = FetchFavoriteRepos;

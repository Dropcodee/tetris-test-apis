"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteService = void 0;
const Favorite_1 = require("../entity/Favorite");
class FavoriteService {
    static AddNewFavorite = async (repoData) => {
        try {
            const newFavorite = await Favorite_1.Favorite.create({
                repo_id: repoData.repo_id,
                name: repoData.name,
                login: repoData.login,
                avatar_url: repoData.avatar_url,
                size: repoData.size,
                favorite: true,
                description: repoData.description,
                repo_url: repoData.repo_url,
            });
            await newFavorite.save();
            return newFavorite;
        }
        catch (error) {
            throw error;
        }
    };
    static GetFavoriteRepos = async () => {
        try {
            const repos = await Favorite_1.Favorite.find();
            return repos;
        }
        catch (error) {
            throw error;
        }
    };
}
exports.FavoriteService = FavoriteService;

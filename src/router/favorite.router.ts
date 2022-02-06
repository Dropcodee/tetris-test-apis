import { Router } from "express";
import { AddFavoriteRepo, FetchFavoriteRepos } from "../handlers/favorite.handler";

const favoriteRouter = Router();

favoriteRouter.post('/', AddFavoriteRepo)
favoriteRouter.get('/', FetchFavoriteRepos)

export default favoriteRouter
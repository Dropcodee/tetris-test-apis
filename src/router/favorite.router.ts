import { Router } from "express";
import { AddFavoriteRepo, FetchFavoriteRepos } from "../handlers/favorite.handler";
import {CreateFavoriteSchema} from '../schemas/favorite.schema'
import validateResource from '../middlewares/validation.middleware'

const favoriteRouter = Router();

favoriteRouter.post('/', validateResource(CreateFavoriteSchema), AddFavoriteRepo)
favoriteRouter.get('/', FetchFavoriteRepos)

export default favoriteRouter
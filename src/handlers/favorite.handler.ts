import {Request, Response, NextFunction} from 'express'
import { BadRequestException } from '../helpers/errors/BadRequestException'
import {FavoriteService} from '../services/favorite.service'

export async function AddFavoriteRepo(req: Request, res: Response) {
try {
    const favoriteRepo = await FavoriteService.AddNewFavorite(req.body) 
    res.status(201).json({message: 'favorite repository added successfully', favoriteRepo})
} catch (error: any) {
    throw new Error(error.message)
}
}

export async function FetchFavoriteRepos(req: Request, res: Response, next: NextFunction) {
    try {
        const favoriteRepos = await FavoriteService.GetFavoriteRepos() 
        res.status(200).json({message: 'favorite repositories retrieved successfully', data: favoriteRepos})
    } catch (error: any) {
        next(new BadRequestException(error.message))
    }
}
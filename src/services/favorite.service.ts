import {Favorite} from '../entity/Favorite'
export class FavoriteService {
    static AddNewFavorite = async (repoData: Favorite): Promise<Favorite> => {
        try {
            const newFavorite = await Favorite.create({
                repo_id: repoData.repo_id,
                name: repoData.name,
                login: repoData.login,
                avatar_url: repoData.avatar_url,
                size: repoData.size,
                favorite: true,
                description: repoData.description,
                repo_url: repoData.repo_url,
            })
            await newFavorite.save()
            return newFavorite
        } catch (error) {
            throw error
        }
    }
    static GetFavoriteRepos = async (): Promise<Favorite[]> => {
        try {
            const repos = await Favorite.find()
            return repos
        } catch (error) {
            throw error
        }
    }
}
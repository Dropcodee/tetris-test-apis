import { Favorite } from '../entity/Favorite';
import { FavoriteInterface } from '../helpers/interfaces/dtos.interface';
export class FavoriteService {
    static AddNewFavorite = async (
        repoData: Favorite
    ): Promise<FavoriteInterface> => {
        try {
            // create a new favorite repo 
            const newFavorite = await Favorite.create({
                repo_id: repoData.repo_id,
                name: repoData.name,
                login: repoData.login,
                avatar_url: repoData.avatar_url,
                size: repoData.size,
                favorite: true,
                description: repoData.description,
                repo_url: repoData.repo_url,
            });
            // save to db
            await newFavorite.save();
            return newFavorite;
        } catch (error) {
            throw error;
        }
    };
    static GetFavoriteRepos = async (): Promise<Favorite[]> => {
        try {
            const repos = await Favorite.find();
            return repos;
        } catch (error) {
            throw error;
        }
    };
}

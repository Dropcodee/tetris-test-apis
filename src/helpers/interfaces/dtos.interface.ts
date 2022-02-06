// this defines the shape of data responses

export interface FavoriteInterface {
    id: number;
    repo_id: number;
    name: string;
    login: string;
    description: string;
    repo_url: string | null;
    avatar_url: string | null;
    favorite: boolean;
    size: number;
    created_at: Date,
    updated_at: Date
}
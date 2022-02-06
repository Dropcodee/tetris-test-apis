import { z } from 'zod';
/* 
    this file is to design the shape the request should have and validate the request against this CreateFavoriteSchema
    while at the bottom you will also see a defined type for this design as well
    the CreateFavoriteSchema will be used within the router and used as a params for the validateResource middleware.
*/
const createPayload = {
    body: z.object({
        name: z.string({ required_error: 'repo name not provided' }),
        login: z.string({
            required_error: 'repo user login name not provided',
        }),
        description: z.string({
            required_error: 'repo description not provided',
        }),
        repo_id: z.number({ required_error: 'repo id is not provided' }),
        avatar_url: z
            .string({
                invalid_type_error: 'repo avatar_url should be a string',
            })
            .url({ message: 'repo avatar should be a url' })
            .nullable(),
        repo_url: z
            .string({ invalid_type_error: 'repo repo_url should be a string' })
            .url({ message: 'repo link should be a url' })
            .nullable(),
        favorite: z.boolean({
            required_error: 'favorite should be either true/false',
        }),
        size: z.number({ required_error: 'repo size is not provided' }),
    }),
};
export const CreateFavoriteSchema = z.object({ ...createPayload });

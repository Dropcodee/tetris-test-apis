"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFavoriteSchema = void 0;
const zod_1 = require("zod");
/*
    this file is to design the shape the request should have and validate the request against this CreateFavoriteSchema
    while at the bottom you will also see a defined type for this design as well
    the CreateFavoriteSchema will be used within the router and used as a params for the validateResource middleware.
*/
const createPayload = {
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: 'repo name not provided' }),
        login: zod_1.z.string({
            required_error: 'repo user login name not provided',
        }),
        description: zod_1.z.string({
            required_error: 'repo description not provided',
        }),
        repo_id: zod_1.z.number({ required_error: 'repo id is not provided' }),
        avatar_url: zod_1.z
            .string({
            invalid_type_error: 'repo avatar_url should be a string',
        })
            .url({ message: 'repo avatar should be a url' })
            .nullable(),
        repo_url: zod_1.z
            .string({ invalid_type_error: 'repo repo_url should be a string' })
            .url({ message: 'repo link should be a url' })
            .nullable(),
        favorite: zod_1.z.boolean({
            required_error: 'favorite should be either true/false',
        }),
        size: zod_1.z.number({ required_error: 'repo size is not provided' }),
    }),
};
exports.CreateFavoriteSchema = zod_1.z.object({ ...createPayload });

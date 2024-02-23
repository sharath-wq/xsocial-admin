import * as z from 'zod';

export const LoginValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: 'Password must be at least 8 characters.' }),
});

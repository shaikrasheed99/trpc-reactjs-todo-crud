import z from 'zod';

export const createTodoValidationSchema = z.object({
    description: z.string({
        required_error: 'Description is required',
    }),
    priority: z.string({
        required_error: 'Priority is required',
    }),
    isCompleted: z.boolean({
        required_error: 'isCompleted is required',
    }),
});

export type CreateTodoInput = z.TypeOf<typeof createTodoValidationSchema>;

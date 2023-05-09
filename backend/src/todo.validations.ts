import z from 'zod';

export const createTodoValidationSchema = z.object({
    id: z.number({
        required_error: 'Todo id is required',
    }),
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

export const deleteTodoValidationSchema = z.object({
    id: z.number({
        required_error: 'Todo id is required',
    }),
});

export type CreateTodoInput = z.TypeOf<typeof createTodoValidationSchema>;
export type DeleteTodoInput = z.TypeOf<typeof deleteTodoValidationSchema>;

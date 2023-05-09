import { InferSchemaType, Schema, model } from 'mongoose';

const todoSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    priority: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        required: true,
    },
});

type Todo = InferSchemaType<typeof todoSchema>;

export const Todo = model('Todo', todoSchema);

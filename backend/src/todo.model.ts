import { InferSchemaType, Schema, model } from 'mongoose';

const schema = new Schema({
    description: {
        type: String,
        require: true,
    },
    priority: {
        type: String,
        require: true,
    },
    isCompleted: {
        type: Boolean,
        require: true,
    },
});

type Todo = InferSchemaType<typeof schema>;

const Todo = model('Todo', schema);

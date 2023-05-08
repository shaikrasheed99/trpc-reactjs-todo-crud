import { Todo } from './todo.model';
import { CreateTodoInput } from './todo.validations';

interface Todo {
    description: string;
    priority: string;
    isCompleted: boolean;
}

export const createTodoController = async ({ input }: { input: CreateTodoInput }) => {
    const todo: Todo = {
        description: input.description,
        priority: input.priority,
        isCompleted: input.isCompleted,
    };

    await Todo.create(todo);

    return todo;
};

export const getTodosController = async () => {
    const todos = await Todo.find();

    return todos;
};

export const testController = () => {
    return 'Trpc test controller!!';
};

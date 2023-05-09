import { Todo } from './todo.model';
import { CreateTodoInput, DeleteTodoInput } from './todo.validations';

interface Todo {
    id: number;
    description: string;
    priority: string;
    isCompleted: boolean;
}

export const createTodoController = async ({ input }: { input: CreateTodoInput }) => {
    const todo: Todo = {
        id: input.id,
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

export const deleteTodoController = async ({ input }: { input: DeleteTodoInput }) => {
    await Todo.deleteOne({ id: input.id });

    return 'Deleted successfully';
};

export const testController = () => {
    return 'Trpc test controller!!';
};

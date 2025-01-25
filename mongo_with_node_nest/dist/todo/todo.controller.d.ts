import { TodoService } from './todo.service';
export declare class TodoController {
    private todoService;
    constructor(todoService: TodoService);
    getAllTodos(): Promise<(import("mongoose").Document<unknown, {}, import("../schema/todo_schema").Todo> & import("../schema/todo_schema").Todo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getTodoById(id: string): string;
    createTodo(title: string): Promise<import("../schema/todo_schema").Todo>;
}

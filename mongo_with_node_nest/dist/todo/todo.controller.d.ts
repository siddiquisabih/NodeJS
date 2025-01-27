import { TodoService } from './todo.service';
import { UpdateTodoDto } from './dto/todoDto';
export declare class TodoController {
    private todoService;
    constructor(todoService: TodoService);
    getAllTodos(): Promise<(import("mongoose").Document<unknown, {}, import("../schema/todo_schema").Todo> & import("../schema/todo_schema").Todo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getTodoById(id: string): Promise<(import("mongoose").Document<unknown, {}, import("../schema/todo_schema").Todo> & import("../schema/todo_schema").Todo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    createTodo(title: string): Promise<import("../schema/todo_schema").Todo>;
    updatedTodo(UpdateTodoDto: UpdateTodoDto): Promise<(import("mongoose").Document<unknown, {}, import("../schema/todo_schema").Todo> & import("../schema/todo_schema").Todo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
}

import { Todo } from 'src/schema/todo_schema';
import { Model } from 'mongoose';
import { UpdateTodoDto } from './dto/todoDto';
export declare class TodoService {
    private readonly todoModel;
    constructor(todoModel: Model<Todo>);
    createNewTodo(title: string): Promise<Todo>;
    allTodosList(): Promise<(import("mongoose").Document<unknown, {}, Todo> & Todo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getTodoById(id: string): Promise<(import("mongoose").Document<unknown, {}, Todo> & Todo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    updateTodo(updateData: UpdateTodoDto): Promise<(import("mongoose").Document<unknown, {}, Todo> & Todo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
}

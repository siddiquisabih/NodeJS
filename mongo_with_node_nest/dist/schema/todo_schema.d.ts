import { HydratedDocument } from 'mongoose';
export type CatDocument = HydratedDocument<Todo>;
export declare class Todo {
    title: string;
}
export declare const TodoSchema: import("mongoose").Schema<Todo, import("mongoose").Model<Todo, any, any, any, import("mongoose").Document<unknown, any, Todo> & Todo & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Todo, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Todo>> & import("mongoose").FlatRecord<Todo> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;

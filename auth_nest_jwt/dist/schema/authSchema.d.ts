export declare class Auth {
    name: string;
    username: string;
    password: string;
}
export declare const AuthSchema: import("mongoose").Schema<Auth, import("mongoose").Model<Auth, any, any, any, import("mongoose").Document<unknown, any, Auth> & Auth & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Auth, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Auth>> & import("mongoose").FlatRecord<Auth> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;

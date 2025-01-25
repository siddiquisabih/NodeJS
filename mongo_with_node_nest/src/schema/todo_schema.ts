import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Todo>;

@Schema()
export class Todo {
    @Prop({ required: true, })
    title: string;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
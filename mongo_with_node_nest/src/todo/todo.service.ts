import { Injectable, Module } from '@nestjs/common';
import { Todo, } from 'src/schema/todo_schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class TodoService {
    constructor(@InjectModel(Todo.name) private readonly todoModel: Model<Todo>) { }


    async createNewTodo(title: string): Promise<Todo> {
        const newUser = new this.todoModel({ title });
        return newUser.save();
    }

    allTodosList() {
        return this.todoModel.find().exec()
    }

}
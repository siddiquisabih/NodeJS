import { Injectable, Module } from '@nestjs/common';
import { Todo, } from 'src/schema/todo_schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateTodoDto } from './dto/todoDto';


@Injectable()
export class TodoService {
    constructor(@InjectModel(Todo.name) private readonly todoModel: Model<Todo>) { }


    async createNewTodo(title: string): Promise<Todo> {
        const newUser = new this.todoModel({ title });
        return await newUser.save();
    }

    allTodosList() {
        return this.todoModel.find().exec()
    }

    async getTodoById(id: string) {
        const newUser = await this.todoModel.findById(id);
        return newUser;
    }

    async updateTodo(updateData: UpdateTodoDto) {
        const updatedRecord = await this.todoModel.findByIdAndUpdate(updateData?.id, { title: updateData?.title }, { new: true });
        return updatedRecord;
    }

}
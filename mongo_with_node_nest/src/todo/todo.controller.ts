import { BadRequestException, Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
    constructor(private todoService: TodoService) { }

    @Get()
    getAllTodos() {
        return this.todoService.allTodosList();
    }

    @Get(':id')
    getTodoById(@Param("id") id: string) {
        return '1 todo'
    }

    @Post()
    createTodo(@Body('title') title: string) {
        if (!title) {
            throw new BadRequestException('Invalid Title Value');
        }
        return this.todoService.createNewTodo(title)
    }

}
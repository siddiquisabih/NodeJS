import { BadRequestException, Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { UpdateTodoDto } from './dto/todoDto';

@Controller('todo')
export class TodoController {
    constructor(private todoService: TodoService) { }

    @Get()
    getAllTodos() {
        return this.todoService.allTodosList();
    }

    @Get(':id')
    async getTodoById(@Param("id") id: string) {
        return await this.todoService.getTodoById(id)
    }

    @Post()
    async createTodo(@Body('title') title: string) {
        if (!title) {
            throw new BadRequestException('Invalid Title Value');
        }
        return await this.todoService.createNewTodo(title)
    }

    @Post('edit')
    async updatedTodo(@Body() UpdateTodoDto: UpdateTodoDto) {
        return await this.todoService.updateTodo(UpdateTodoDto)
    }

}
import { ApiProperty } from '@nestjs/swagger';


export class UpdateTodoDto {
    @ApiProperty({ description: 'The ID of the todo item', example: '12345' })
    id: string;

    @ApiProperty({ description: 'The new title of the todo item', example: 'Updated Title' })
    title: string;
}
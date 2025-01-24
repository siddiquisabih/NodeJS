import { BadRequestException, Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemDto } from './dto/createItemDto';

@Controller('items')
export class ItemsController {

    constructor(private readonly itemService: ItemsService) { }

    @Get()
    getAllItems() {
        return this.itemService.getItemList();
    }

    @Get(':id')
    getItemById(@Param('id') id: string) {
        const numericId = Number(id)
        if (isNaN(numericId)) {
            throw new BadRequestException('Invalid ID');
        }
        return this.itemService.getById(numericId);
    }


    @Post()
    findDataByPost(@Body() data: ItemDto): any {


        if (!data || !data.id) {
            throw new BadRequestException('Invalid ID');
        }

        return this.itemService.findDataByPost(data)
    }

}
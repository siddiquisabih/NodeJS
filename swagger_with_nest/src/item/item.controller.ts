import { BadRequestException, Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { ItemService } from './item.service';

@Controller('item')
export class ItemController {

    constructor(private readonly itemService: ItemService) { }

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


    

}

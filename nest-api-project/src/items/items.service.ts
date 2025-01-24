import { Injectable } from '@nestjs/common';
import { ItemDto } from './dto/createItemDto';

@Injectable()
export class ItemsService {

    private items = [
        { id: 1, name: 'Item 1', description: 'This is item 1' },
        { id: 2, name: 'Item 2', description: 'This is item 2' },
    ];

    getItemList() {
        return this.items;
    }

    getById(id: number) {
        let filterData = this.items.filter(x => x.id === id);
        return filterData;
    }

    findDataByPost(postData: ItemDto) {
        const numericId = Number(postData.id)
        let filterData = this.items.filter(x => x.id === numericId);
        return filterData;
    }

}
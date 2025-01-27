import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemService {



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
 
}

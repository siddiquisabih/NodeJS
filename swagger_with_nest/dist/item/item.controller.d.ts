import { ItemService } from './item.service';
export declare class ItemController {
    private readonly itemService;
    constructor(itemService: ItemService);
    getAllItems(): {
        id: number;
        name: string;
        description: string;
    }[];
    getItemById(id: string): {
        id: number;
        name: string;
        description: string;
    }[];
}

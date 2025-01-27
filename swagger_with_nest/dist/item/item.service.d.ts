export declare class ItemService {
    private items;
    getItemList(): {
        id: number;
        name: string;
        description: string;
    }[];
    getById(id: number): {
        id: number;
        name: string;
        description: string;
    }[];
}

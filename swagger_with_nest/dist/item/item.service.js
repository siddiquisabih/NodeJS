"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemService = void 0;
const common_1 = require("@nestjs/common");
let ItemService = class ItemService {
    constructor() {
        this.items = [
            { id: 1, name: 'Item 1', description: 'This is item 1' },
            { id: 2, name: 'Item 2', description: 'This is item 2' },
        ];
    }
    getItemList() {
        return this.items;
    }
    getById(id) {
        let filterData = this.items.filter(x => x.id === id);
        return filterData;
    }
};
exports.ItemService = ItemService;
exports.ItemService = ItemService = __decorate([
    (0, common_1.Injectable)()
], ItemService);
//# sourceMappingURL=item.service.js.map
import { Item } from "./items/items";

export class GildedRose {
    items: Item[];

    constructor(items: Item[] = []) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            this.items[i].updateQuality();
        }
        return this.items;
    }
}
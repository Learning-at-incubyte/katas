import { Item } from "./items/items";

export class GildedRose {
    items: Item[];

    constructor(items: Item[] = []) {
        this.items = items;
    }

    updateQuality() {
        for (const item of this.items) {
            item.updateQuality();
        }
        return this.items;
    }
}
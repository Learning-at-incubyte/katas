import {Item} from "./items";

export class Sulfuras extends Item {
    constructor() {
        super('Sulfuras, Hand of Ragnaros', 0, 80);
    }
    updateQuality() {
        // Sulfuras never has to be sold or decreases in Quality
    }

}
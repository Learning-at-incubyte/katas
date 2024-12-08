import {Item} from "./items";

export class Sulfuras extends Item {
    constructor() {
        super('Sulfuras', 0, 80);
    }
    updateQuality() {
        // Sulfuras never has to be sold or decreases in Quality
    }

}
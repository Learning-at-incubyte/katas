import {Item} from "./items";

export class Sulfuras extends Item {
    constructor() {
        super(0, 80);
    }
    updateQuality() {
        // Sulfuras never has to be sold or decreases in Quality
    }

}
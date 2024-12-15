import {Item} from "./items";
import {FIX_QUALITY_OF_SULFURAS} from "./constant";

export class Sulfuras extends Item {
    constructor() {
        super(0, FIX_QUALITY_OF_SULFURAS);
    }
    updateQuality() {
        // Sulfuras never has to be sold or decreases in Quality
    }

}
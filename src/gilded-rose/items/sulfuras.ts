import {Item} from "./items";
import {FIX_QUALITY_OF_SULFURAS, MIN_SELL_IN} from "./constant";

export class Sulfuras extends Item {
    constructor() {
        super(MIN_SELL_IN, FIX_QUALITY_OF_SULFURAS);
    }

    updateQuality() {
        // Sulfuras never has to be sold or decreases in Quality
    }
}
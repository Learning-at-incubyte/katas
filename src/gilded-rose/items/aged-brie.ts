import {Item} from "./items";

export class AgedBrie extends Item {
    updateQuality() {
        this.decreaseSellIn()
        this.increaseQualityBy()
    }
}
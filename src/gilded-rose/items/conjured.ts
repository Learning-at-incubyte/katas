import {Item} from "./items";
import {MIN_QUALITY, MIN_SELL_IN, QUALITY_CHANGE_DOUBLE} from "./constant";

export class Conjured extends Item {
    updateQuality() {
        this.decreaseSellIn()
        if (this.quality > MIN_QUALITY) {
            this.decreaseQualityBy(QUALITY_CHANGE_DOUBLE)
        }
        if (this.sellIn < MIN_SELL_IN && this.quality > MIN_QUALITY) {
            this.decreaseQualityBy(QUALITY_CHANGE_DOUBLE)
        }
        if(this.quality < MIN_SELL_IN) {
            this.quality = MIN_QUALITY
        }
    }
}
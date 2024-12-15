import {Item} from "./items";
import {MIN_QUALITY, MIN_SELL_IN} from "./constant";

export class Conjured extends Item {
    updateQuality() {
        this.decreaseSellIn()
        if (this.quality > MIN_QUALITY) {
            this.decreaseQualityBy(2)
        }
        if (this.sellIn < MIN_SELL_IN && this.quality > MIN_QUALITY) {
            this.decreaseQualityBy(2)
        }
        if(this.quality < MIN_SELL_IN) {
            this.quality = MIN_QUALITY
        }
    }
}
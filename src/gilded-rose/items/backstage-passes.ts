import {Item} from "./items";
import {MAX_QUALITY, MIN_QUALITY, MIN_SELL_IN, QUALITY_CHANGE_DOUBLE, QUALITY_CHANGE_TRIPLE} from "./constant";

export class BackstagePasses extends Item {

    updateQuality() {
        this.decreaseSellIn()
        if (this.quality < MAX_QUALITY) {
            if (this.sellIn <= 10 && this.sellIn > 5) {
                this.increaseQualityBy(QUALITY_CHANGE_DOUBLE)
            } else if (this.sellIn <= 5 && this.sellIn >= MIN_SELL_IN) {
                this.increaseQualityBy(QUALITY_CHANGE_TRIPLE)
            }
        }
        if (this.sellIn < MIN_SELL_IN) {
            this.quality = MIN_QUALITY
        }
    }
}
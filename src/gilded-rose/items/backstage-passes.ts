import {Item} from "./items";
import {
    MAX_QUALITY,
    MIN_SELL_IN,
    QUALITY_CHANGE_DOUBLE,
    QUALITY_CHANGE_TRIPLE,
    SELL_IN_THRESHOLD_DOUBLE_QUALITY,
    SELL_IN_THRESHOLD_TRIPLE_QUALITY
} from "./constant";

export class BackstagePasses extends Item {
    updateQuality() {
        this.decreaseSellIn()
        if (this.quality < MAX_QUALITY) {
            if (this.sellIn <= SELL_IN_THRESHOLD_DOUBLE_QUALITY && this.sellIn > SELL_IN_THRESHOLD_TRIPLE_QUALITY) {
                this.increaseQualityBy(QUALITY_CHANGE_DOUBLE)
            } else if (this.sellIn <= SELL_IN_THRESHOLD_TRIPLE_QUALITY && this.sellIn >= MIN_SELL_IN) {
                this.increaseQualityBy(QUALITY_CHANGE_TRIPLE)
            }
        }
        this.setQualityToMinimum()
    }
}
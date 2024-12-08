import {Item} from "./items";

export class BackstagePasses extends Item {

    updateQuality() {
        this.decreaseSellIn()
        if (this.quality < 50) {
            if (this.sellIn <= 10 && this.sellIn > 5) {
                this.increaseQualityBy(2)
            } else if (this.sellIn <= 5 && this.sellIn >= 0) {
                this.increaseQualityBy(3)
            }
        }
        if (this.sellIn < 0) {
            this.quality = 0
        }
    }
}
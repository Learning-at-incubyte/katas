import {Item} from "./items";

export class BackstagePasses extends Item {

    updateQuality() {
        this.sellIn--
        if (this.quality < 50) {
            if (this.sellIn <= 10 && this.sellIn > 5) {
                this.quality += 2
            } else if (this.sellIn <= 5 && this.sellIn >= 0) {
                this.quality += 3
            }
        }
        if (this.sellIn < 0) {
            this.quality = 0
        }
    }
}
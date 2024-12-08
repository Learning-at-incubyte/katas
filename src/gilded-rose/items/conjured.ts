import {Item} from "./items";

export class Conjured extends Item {
    updateQuality() {
        this.sellIn--
        if (this.quality > 0) {
            this.quality -= 2
        }
        if (this.sellIn < 0 && this.quality > 0) {
            this.quality -= 2
        }
        if(this.quality < 0) {
            this.quality = 0
        }
    }
}
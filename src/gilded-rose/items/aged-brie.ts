import {Item} from "./items";

export class AgedBrie extends Item {

    updateQuality() {
        this.sellIn--
        if (this.quality < 50) {
            this.quality++
        }
    }
}
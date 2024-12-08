import {Item} from "./items";

export class NormalItem extends Item {
    updateQuality() {
        this.sellIn--;
        if (this.quality > 0) {
            this.quality--;
        }
        if (this.sellIn < 0 && this.quality > 0) {
            this.quality--;
        }
    }
}
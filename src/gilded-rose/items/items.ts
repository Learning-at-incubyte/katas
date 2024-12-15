import {MAX_QUALITY, MIN_QUALITY, MIN_SELL_IN} from "./constant";

export class Item {
    sellIn: number;
    quality: number;

    constructor(sellIn: number, quality: number) {
        this.sellIn = sellIn;
        this.quality = quality;
    }

    updateQuality() {
        this.decreaseSellIn()
        this.decreaseQualityBy()
        if (this.sellIn < MIN_SELL_IN) {
            this.decreaseQualityBy()
        }
    }

    decreaseSellIn() {
        this.sellIn--
    }

    decreaseQualityBy(quantity: number = 1) {
        if (this.quality > MIN_QUALITY) {
            this.quality-= quantity
        }
    }

    increaseQualityBy(quality: number = 1) {
        if (this.quality < MAX_QUALITY) {
            this.quality += quality
        }
    }

}

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
        if (this.sellIn < 0) {
            this.decreaseQualityBy()
        }
    }

    decreaseSellIn() {
        this.sellIn--
    }

    decreaseQualityBy(quantity: number = 1) {
        if (this.quality > 0) {
            this.quality-= quantity
        }
    }

    increaseQualityBy(quality: number = 1) {
        if (this.quality < 50) {
            this.quality += quality
        }
    }

}

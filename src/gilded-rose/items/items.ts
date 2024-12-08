export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name: string, sellIn: number, quality: number) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    updateQuality() {
        this.decreaseSellIn()
        this.decreaseQuality()
        if (this.sellIn < 0) {
            this.decreaseQuality()
        }
    }

    decreaseSellIn() {
        this.sellIn--
    }

    decreaseQuality() {
        if (this.quality > 0) {
            this.quality--
        }
    }

}

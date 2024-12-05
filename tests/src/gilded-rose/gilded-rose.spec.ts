import { GildedRose, Item } from "../../../src/gilded-rose/gilded-rose";
import { expect, describe, it } from "vitest";

describe('Gilded Rose should', () => {
    it('decrease sellIn and quality for normal items', () => {
        const gildedRose = new GildedRose([new Item('normal', 10, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toBe(9);
        expect(items[0].quality).toBe(19);
    });

    it('increase quality for Aged Brie', () => {
        const gildedRose = new GildedRose([new Item('Aged Brie', 10, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toBe(9);
        expect(items[0].quality).toBe(21);
    });

    it('not change quality or sellIn for Sulfuras', () => {
        const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 10, 80)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toBe(10);
        expect(items[0].quality).toBe(80);
    });

    it('increase quality by 2 when there are 10 days or less for Backstage passes', () => {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toBe(9);
        expect(items[0].quality).toBe(22);
    });

    it('increase quality by 3 when there are 5 days or less for Backstage passes', () => {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toBe(4);
        expect(items[0].quality).toBe(23);
    });

    it('drop quality to 0 after the concert for Backstage passes', () => {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toBe(-1);
        expect(items[0].quality).toBe(0);
    });

    it('not decrease quality below 0', () => {
        const gildedRose = new GildedRose([new Item('normal', 10, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toBe(9);
        expect(items[0].quality).toBe(0);
    });

    it('not increase quality above 50', () => {
        const gildedRose = new GildedRose([new Item('Aged Brie', 10, 50)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toBe(9);
        expect(items[0].quality).toBe(50);
    });
});
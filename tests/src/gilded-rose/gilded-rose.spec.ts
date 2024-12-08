import {GildedRose} from "../../../src/gilded-rose/gilded-rose";
import {expect, describe, it} from "vitest";
import {AgedBrie} from "../../../src/gilded-rose/items/aged-brie";
import {Sulfuras} from "../../../src/gilded-rose/items/sulfuras";
import {BackstagePasses} from "../../../src/gilded-rose/items/backstage-passes";
import {Conjured} from "../../../src/gilded-rose/items/conjured";
import {Item} from "../../../src/gilded-rose/items/items";

describe('Gilded Rose should', () => {
    it('decrease sellIn and quality for normal items', () => {
        const gildedRose = new GildedRose([new Item(10, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toBe(9);
        expect(items[0].quality).toBe(19);
    });

    it('increase quality for Aged Brie', () => {
        const gildedRose = new GildedRose([new AgedBrie(10, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toBe(9);
        expect(items[0].quality).toBe(21);
    });

    it('not change quality or sellIn for Sulfuras', () => {
        const gildedRose = new GildedRose([new Sulfuras()]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toBe(0);
        expect(items[0].quality).toBe(80);
    });

    it('increase quality by 2 when there are 10 days or less for Backstage passes', () => {
        const gildedRose = new GildedRose([new BackstagePasses(10, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toBe(9);
        expect(items[0].quality).toBe(22);
    });

    it('increase quality by 3 when there are 5 days or less for Backstage passes', () => {
        const gildedRose = new GildedRose([new BackstagePasses(5, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toBe(4);
        expect(items[0].quality).toBe(23);
    });

    it('drop quality to 0 after the concert for Backstage passes', () => {
        const gildedRose = new GildedRose([new BackstagePasses(0, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toBe(-1);
        expect(items[0].quality).toBe(0);
    });

    it('not decrease quality below 0', () => {
        const gildedRose = new GildedRose([new Item(10, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toBe(9);
        expect(items[0].quality).toBe(0);
    });

    it('not increase quality above 50', () => {
        const gildedRose = new GildedRose([new AgedBrie(10, 50)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toBe(9);
        expect(items[0].quality).toBe(50);
    });

    it('decrease quality double of normal items for Conjured items', () => {
        const gildedRose = new GildedRose([new Conjured(10, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toBe(9);
        expect(items[0].quality).toBe(18);
    })
});
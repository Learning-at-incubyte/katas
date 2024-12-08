import {describe, it, expect} from "vitest";
import {Item} from "../../../../src/gilded-rose/items/items";

describe('items should', () => {

    it('be defined', () => {
        const item = new Item('normal-item', 2, 5);
        expect(item).toBeDefined();
        expect(item.name).toBe('normal-item');
        expect(item.sellIn).toBe(2);
        expect(item.quality).toBe(5);
    })

    it('decrease sellIn day by 1 before sell date', () => {
        const item = new Item('normal', 10, 20);
        item.updateQuality();
        expect(item.sellIn).toBe(9);
    });

    it('decrease quality day by 1 before sell date', () => {
        const item = new Item('normal', 10, 20);
        item.updateQuality();
        expect(item.quality).toBe(19);
    });


    it('decrease quality by 2 after sell date', () => {
        const item = new Item('normal', 0, 20);
        item.updateQuality();
        expect(item.quality).toBe(18);
    });

    it('not decrease quality below 0', () => {
        const item = new Item('normal', 10, 0);
        item.updateQuality();
        expect(item.quality).toBe(0);
    });

});
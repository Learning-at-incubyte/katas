import {describe, it, expect} from "vitest";
import {Item} from "../../../../src/gilded-rose/items/items";

describe('items should', () => {
    it('be defined', () => {
        const item = new Item(2, 5);
        expect(item).toBeDefined();
        expect(item.sellIn).toBe(2);
        expect(item.quality).toBe(5);
    })

    it('decrease sellIn day by 1', () => {
        const item = new Item( 10, 20);
        item.updateQuality();
        expect(item.sellIn).toBe(9);
    });

    it('decrease quality day by 1 before sell date', () => {
        const item = new Item(10, 20);
        item.updateQuality();
        expect(item.quality).toBe(19);
    });


    it('decrease quality by 2 after sell date', () => {
        const item = new Item(0, 20);
        item.updateQuality();
        expect(item.quality).toBe(18);
    });

    it('not decrease quality below 0', () => {
        const item = new Item(10, 0);
        item.updateQuality();
        expect(item.quality).toBe(0);
    });

    it('not increase quality above 50', ()=>{
        const item = new Item(10, 50);
        item.increaseQualityBy();
        expect(item.quality).toBe(50);
    })

    it('not set quality to minimum if sellIn date is not passed', ()=>{
        const item = new Item(10, 1);
        item.setQualityToMinimum();
        expect(item.quality).toBe(1);
    })

    it('set quality to minimum if sellIn date is passed', ()=>{
        const item = new Item(-1, 1);
        item.setQualityToMinimum();
        expect(item.quality).toBe(0);
    })
});
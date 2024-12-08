import {describe, it, expect} from "vitest";
import {Sulfuras} from "../../../../src/gilded-rose/items/sulfuras";

describe('sulfuras item should', () => {
    it('not be changed in quality and sellIn', () => {
        const item = new Sulfuras('sulfuras', 10, 20);
        item.updateQuality();
        expect(item.sellIn).toBe(10);
        expect(item.quality).toBe(20);
    });
});
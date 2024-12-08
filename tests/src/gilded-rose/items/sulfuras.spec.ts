import {describe, it, expect} from "vitest";
import {Sulfuras} from "../../../../src/gilded-rose/items/sulfuras";

describe('sulfuras item should', () => {
    it('not be changed in quality and sellIn', () => {
        const item = new Sulfuras();
        item.updateQuality();
        expect(item.sellIn).toBe(0);
        expect(item.quality).toBe(80);
    });
});
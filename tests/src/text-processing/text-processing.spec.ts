import {beforeEach, describe, expect, it} from "vitest";
import {TextProcessing} from "../../../src/text-processing/text-processing";


describe('text processing should', () => {
    let textProcessing :TextProcessing

    beforeEach(()=>{
        textProcessing = new TextProcessing();
    })

    it('return 10 most common words from text correctly', () => {
        const text = "Hello, this is an example for you to practice. You should grab this text and make it as your test case."
        const expectedWords = [
            'you',
            'this',
            'your',
            'to',
            'text',
            'test',
            'should',
            'practice',
            'make',
            'it'
        ]

        const result = textProcessing.getMostCommonWords(text, 10);

        expect(result).toEqual(expectedWords);
    })
})
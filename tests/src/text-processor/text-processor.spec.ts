import {beforeEach, describe, expect, it} from "vitest";
import {TextProcessor} from "../../../src/text-processor/text-processor";


describe('text processor', ()=>{
    let textProcessor: TextProcessor;

    beforeEach(()=>{
        textProcessor = new TextProcessor();
    })

    it('count total number of words in text', ()=>{
        const text = "hello good morning"

        const result = textProcessor.processText(text)

        expect(result).toBe(3)
    })

    it('ignore punctuation from the text while counting total words', ()=>{
        const text = "hello, good morning !"

        const result = textProcessor.processText(text)

        expect(result).toBe(3)
    })
})
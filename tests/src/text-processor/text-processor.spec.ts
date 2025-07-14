import {beforeEach, describe, expect, it} from "vitest";
import {TextProcessor} from "../../../src/text-processor/text-processor";


describe('text processor', ()=> {
    let textProcessor: TextProcessor;

    beforeEach(() => {
        textProcessor = new TextProcessor();
    })

    it('count total number of words in text', () => {
        const text = "hello good morning"

        const result = textProcessor.processText(text)

        expect(result.totalWords).toBe(3)
    })

    it('ignore case sensitivity while counting frequency of a word', () => {
        const text = 'Hello, hello, heLLO'

        const result = textProcessor.processText(text)

        expect(result.wordsCountMap.get('hello')).toBe(3)
    })

    it('ignore punctuation from the text while counting total words', () => {
        const text = "hello, good morning !"

        const result = textProcessor.processText(text)

        expect(result.totalWords).toBe(3)
    })

    it('count frequency of word from the text', () => {
        const text = "hello, good morning vijay, good morning ajay"

        const result = textProcessor.processText(text)

        expect(result.wordsCountMap.get('hello')).toBe(1)
        expect(result.wordsCountMap.get('good')).toBe(2)
        expect(result.wordsCountMap.get('morning')).toBe(2)
        expect(result.wordsCountMap.get('vijay')).toBe(1)
        expect(result.wordsCountMap.get('ajay')).toBe(1)
    })

    it('return top 10 most used words from text', () => {
        const text = "Hello, this is an example for you to practice. You should grab this text and make it as your test case."
        const expectedTopWords = [
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

        const result = textProcessor.processText(text)

        expect(result.topWords).toHaveLength(10)
        expect(expectedTopWords).toContain(result.topWords[0])
        expect(expectedTopWords).toContain(result.topWords[1])
    })
})
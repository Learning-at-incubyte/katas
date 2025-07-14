export  class TextProcessor {

    public processText(text: string) {
        const clearWords = this.getClearWords(text)
        const wordsCountMap= this.getWordsCountsMap(clearWords);
        const topWords = this.getTopWords(wordsCountMap)
        return  {
            totalWords: clearWords.length,
            wordsCountMap,
            topWords
        }
    }

    private getWordsCountsMap(words: string[]):Map<string, number> {
        const wordsCountMap:Map<string, number> = new Map()
        for (let word of words) {
            wordsCountMap.set(word, (wordsCountMap.get(word) || 0) + 1)
        }
        return wordsCountMap
    }

    private getClearWords(text: string):string[] {
        return  text.toLowerCase().match(/[a-z]+/g)
    }

    private getTopWords(wordsCountMap: Map<string, number>):string[] {
        return Array.from(wordsCountMap.entries())
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10)
            .map(([word]) => word);
    }
}
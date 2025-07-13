export  class TextProcessor{


    processText(text: string) {
        return text.match(/[a-z]+/g).length
    }
}
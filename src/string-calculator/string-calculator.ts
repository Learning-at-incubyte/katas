const DEFAULT_DELIMITER = ',';
const CUSTOM_DELIMITER_PREFIX = '//';
const MULTIPLE_DELIMITER_IDENTIFIER = ']['
const CUSTOM_DELIMITER_PREFIX_END_INDEX = 1
const NEW_LINE = '\n';
const MAX_NUMBER = 1000;

export class StringCalculator {

    public add(input: string): number {
        if (input.length === 0) return 0
        let {numbersString, delimitersString} = this.extractDelimiters(input)
        let validInput = this.replaceNewLinesWithDelimiter(numbersString, delimitersString)
        if (delimitersString.includes(MULTIPLE_DELIMITER_IDENTIFIER)) {
            validInput = this.handleMultipleDelimiters(validInput, delimitersString)
            delimitersString = DEFAULT_DELIMITER
        }
        const validNumbersList = this.getValidNumbers(validInput, delimitersString);
        this.handleNegativeInput(validNumbersList)
        // console.log(validNumbersList)
        return this.sumNumbers(validNumbersList);
    }

    private getValidNumbers(validInput: string, delimiter: string): number[] {
        return validInput.split(delimiter).map(Number).filter(number => number < MAX_NUMBER);
    }

    private extractDelimiters(input: string): { numbersString: string, delimitersString: string } {
        if (input.startsWith(CUSTOM_DELIMITER_PREFIX)) {
            const delimiterEndIndex = input.indexOf(NEW_LINE);
            const delimiterPart = input.substring(CUSTOM_DELIMITER_PREFIX_END_INDEX + 1, delimiterEndIndex);
            const delimiter = this.parseDelimiter(delimiterPart);
            const numbersString = input.substring(delimiterEndIndex + 1);
            return {numbersString, delimitersString: delimiter};
        }
        return {numbersString: input, delimitersString: DEFAULT_DELIMITER};
    }

    private parseDelimiter(delimiterPart: string): string {
        if (delimiterPart.startsWith('[') && delimiterPart.endsWith(']')) {
            return delimiterPart.slice(1, -1);
        }
        return delimiterPart;
    }

    private replaceNewLinesWithDelimiter(input: string, delimiter: string): string {
        return input.replace(/\n/g, delimiter);
    }

    private handleNegativeInput(validNumbers: number[]) {
        const negativeNumbers = validNumbers.filter(validNumber => validNumber < 0)
        if (negativeNumbers.length) {
            throw new Error('negative not allowed ' + negativeNumbers.join(','))
        }
    }

    private sumNumbers(numbers: number[]): number {
        return numbers.reduce((acc, number) => acc + number, 0);
    }

    private handleMultipleDelimiters(validInput: string, multipleDelimiter: string): string {
        let result = validInput
        for (const input of validInput) {
            if (multipleDelimiter.includes(input)) {
                result = result.replace(input, DEFAULT_DELIMITER)
            }
        }
        return result
    }
}
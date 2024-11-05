const DEFAULT_DELIMITER = ',';
const CUSTOM_DELIMITER_PREFIX = '//';
const NEW_LINE = '\n';
const MAX_NUMBER = 1000;

export class StringCalculator {

    public add(input: string): number {
        if (input.length === 0) return 0
        const {numbersString, delimiter} = this.extractDelimiters(input)
        const validInput = this.replaceNewLinesWithDelimiter(numbersString, delimiter)
        const validNumbers = this.getValidNumbers(validInput, delimiter);
        this.handleNegativeInput(validNumbers)
        // console.log(validNumbers)
        return this.sumNumbers(validNumbers);
    }

    private getValidNumbers(validInput: string, delimiter: string): number[] {
        return validInput.split(delimiter).map(Number).filter(number => number < MAX_NUMBER);
    }

    private extractDelimiters(input: string): { numbersString: string, delimiter: string } {
        if (input.startsWith(CUSTOM_DELIMITER_PREFIX)) {
            const delimiterEndIndex = input.indexOf(NEW_LINE);
            const delimiterPart = input.substring(2, delimiterEndIndex);
            const delimiter = this.parseDelimiter(delimiterPart);
            const numbersString = input.substring(delimiterEndIndex + 1);
            return {numbersString, delimiter};
        }
        return {numbersString: input, delimiter: DEFAULT_DELIMITER};
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
}
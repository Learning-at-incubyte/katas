export class StringCalculator {

    public add(input: string) {
        if (input.length === 0) return 0
        const {numbersString, delimiter} = this.extractDelimiters(input)
        const validInput = this.getValidInput(numbersString, delimiter)
        const validNumbers = validInput.split(delimiter).map(Number).filter(number => number < 1000);
        this.handleNegativeInput(validNumbers)
        console.log(validNumbers)
        return validNumbers.reduce((acc, number) => acc + number, 0);
    }

    private extractDelimiters(input: string) {
        let delimiter = ','
        let numbersString = input
        if (input.startsWith('//')) {
            const delimiterEndIndex = input.indexOf('\n')
            const delimiterPart = input.substring(2, delimiterEndIndex)
            if (delimiterPart.startsWith('[') && delimiterPart.endsWith(']')) {
                delimiter = delimiterPart.slice(1, -1)
            } else {
                delimiter = delimiterPart;
            }
            numbersString = input.substring(delimiterEndIndex + 1)
        }
        return {numbersString, delimiter}
    }

    private getValidInput(input: string, delimiter: string) {
        return input.replace(/\n/g, delimiter);
    }

    private handleNegativeInput(validNumbers: number[]) {
        const negativeNumbers = validNumbers.filter(validNumber => validNumber < 0)
        if (negativeNumbers.length) {
            throw new Error('negative not allowed ' + negativeNumbers.join(','))
        }
    }
}
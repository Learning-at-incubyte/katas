export class StringCalculator {

    add(input: string) {
        if (input.length === 0) return 0
        const validInput = input.replace('\n',',')
        const numbers = validInput.split(',').map(Number);
        console.log(numbers)
        return numbers.reduce((acc, number) => acc + number, 0);
    }
}
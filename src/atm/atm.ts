type Currency = {
    value: number,
    type: string
}

export class Atm {
    private currencies: Currency[] = [
        {value: 500, type: 'bill'},
        {value: 200, type: 'bill'},
        {value: 100, type: 'bill'},
        {value: 50, type: 'bill'},
        {value: 20, type: 'bill'},
        {value: 10, type: 'bill'},
        {value: 5, type: 'bill'},
        {value: 2, type: 'coin'},
        {value: 1, type: 'coin'}
    ];

    withdraw(amount: number) {
        const output: string[] = []

        for (const currency of this.currencies) {
            if (amount <= 0) break
            const count = Math.floor(amount / currency.value)
            if (count) {
                output.push(`${count} ${count > 1 ? currency.type + 's' : currency.type} of ${currency.value}.`)
                amount = amount - count * currency.value
            }
        }
        console.log(output.join('\n'));
    }

}
type Currency = {
    value: number,
    type: string,
    quantity: number
}

export class Atm {
    private currencies: Currency[] = [
        {value: 500, type: 'bill', quantity: 2},
        {value: 200, type: 'bill', quantity: 3},
        {value: 100, type: 'bill', quantity: 5},
        {value: 50, type: 'bill', quantity: 12},
        {value: 20, type: 'bill', quantity: 20},
        {value: 10, type: 'bill', quantity: 50},
        {value: 5, type: 'bill', quantity: 100},
        {value: 2, type: 'coin', quantity: 250},
        {value: 1, type: 'coin', quantity: 500}
    ];

    withdraw(amount: number) {
        const output: string[] = []

        for (const currency of this.currencies) {
            if (amount <= 0) break
            const count = this.getCount(amount, currency)
            if (count) {
                output.push(this.generateOutput(count, currency));
                amount = this.updatedAmount(amount, count, currency)
            }
        }

        if (amount > 0) {
            throw new Error('The ATM machine has not enough money, please go to the nearest atm machine.');
        }
        console.log(output.join('\n'));
    }


    private generateOutput(count: number, currency: Currency): string {
        return `${count} ${count > 1 ? currency.type + 's' : currency.type} of ${currency.value}.`
    }

    private updatedAmount(amount: number, count: number, currency: Currency): number {
        currency.quantity -= count;
        return amount - count * currency.value;
    }

    private getCount(amount: number, currency: Currency): number {
        return Math.min(currency.quantity, Math.floor(amount / currency.value));
    }
}
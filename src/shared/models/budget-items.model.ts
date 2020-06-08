export class BudgetItem {
    description: string;
    amount: number;

    constructor( description, amount )
    {
        this.description = description;
        this.amount = amount;
    }
}
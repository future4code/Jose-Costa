export class Transaction {
    private description: string;
    private value: number;
    private date: string;

    constructor(description: string, value: number, date: string) {
        this.description = description;
        this.value = value;
        this.date = date;
    }

    public getDescription(): string {
        return this.description;
    }

    public getValue(): number {
        return this.value;
    }

    public getDate(): string {
        return this.date;
    }

    public setDescription(description: string): void {
        this.description = description;
    }

    setValue(value: number): void {
        this.value = value;
    }

    setDate(date: string): void {
        this.date = date;
    }
}
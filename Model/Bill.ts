export class Bill{
    private _id:string;
    private _nameEmployee:string;
    private _date:string;
    private _nameCustomer:string;
    private _Total:number;

    constructor(id: string, nameEmployee: string, date: string, idCustomer: string, Total: number) {
        this._id = id;
        this._nameEmployee = nameEmployee;
        this._date = date;
        this._nameCustomer = idCustomer;
        this._Total = Total;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get nameEmployee(): string {
        return this._nameEmployee;
    }

    set nameEmployee(value: string) {
        this._nameEmployee = value;
    }

    get date(): string {
        return this._date;
    }

    set date(value: string) {
        this._date = value;
    }

    get idCustomer(): string {
        return this._nameCustomer;
    }

    set idCustomer(value: string) {
        this._nameCustomer = value;
    }

    get Total(): number {
        return this._Total;
    }

    set Total(value: number) {
        this._Total = value;
    }

}
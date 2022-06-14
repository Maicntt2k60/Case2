export class DetailBill{
    private _id:string;
    private _nameProduct:string;
    private _quantity:number;
    private _total:number;

    constructor(id: string, nameProduct: string, quantity: number, total: number) {
        this._id = id;
        this._nameProduct = nameProduct;
        this._quantity = quantity;
        this._total = total;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get nameProduct(): string {
        return this._nameProduct;
    }

    set nameProduct(value: string) {
        this._nameProduct = value;
    }

    get quantity(): number {
        return this._quantity;
    }

    set quantity(value: number) {
        this._quantity = value;
    }

    get total(): number {
        return this._total;
    }

    set total(value: number) {
        this._total = value;
    }
}
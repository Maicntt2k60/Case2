export class Product{
    private _id : string;
    private _name: string;
    private _material : string;
    private _quantity : number;
    private _priceIn:number;
    private _priceOut:number;

    constructor(id: string, name: string, material: string, quantity: number, priceIn: number, priceOut: number) {
        this._id = id;
        this._name = name;
        this._material = material;
        this._quantity = quantity;
        this._priceIn = priceIn;
        this._priceOut = priceOut;
    }

    getId(): string {
        return this._id;
    }

    setId(value: string) {
        this._id = value;
    }

    getName(): string {
        return this._name;
    }

    setName(value: string) {
        this._name = value;
    }

    getMaterial(): string {
        return this._material;
    }

    setMaterial(value: string) {
        this._material = value;
    }

    getQuantity(): number {
        return this._quantity;
    }

    setQuantity(value: number) {
        this._quantity = value;
    }

    getPriceIn(): number {
        return this._priceIn;
    }

    setPriceIn(value: number) {
        this._priceIn = value;
    }

    getPriceOut(): number {
        return this._priceOut;
    }

    setPriceOut(value: number) {
        this._priceOut = value;
    }
}
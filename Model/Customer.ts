export class Customer{
    private _id:string;
    private _name:string;
    private _address:string;
    private _phone:string;

    constructor(id: string, name: string, address: string, phone: string) {
        this._id = id;
        this._name = name;
        this._address = address;
        this._phone = phone;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get phone(): string {
        return this._phone;
    }

    set phone(value: string) {
        this._phone = value;
    }
}
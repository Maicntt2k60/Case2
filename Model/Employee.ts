export class Employee {
    private _id:string;
    private _name : string;
    private _bird : string;
    private _address:string;
    private _gender: string;
    private _phone:string;
    
    constructor(id: string, name: string, bird: string, address: string, gender: string, phone: string) {
        this._id = id;
        this._name = name;
        this._bird = bird;
        this._address = address;
        this._gender = gender;
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

    get bird(): string {
        return this._bird;
    }

    set bird(value: string) {
        this._bird = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get gender(): string {
        return this._gender;
    }

    set gender(value: string) {
        this._gender = value;
    }

    get phone(): string {
        return this._phone;
    }

    set phone(value: string) {
        this._phone = value;
    }
}
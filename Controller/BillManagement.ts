import {Bill} from "../Model/Bill";
import {DetailBill} from "../Model/DetailBill";

export class BillManagement{
    public Bills:any=[];

    constructor() {}
    getAllBills(){
        return this.Bills;
    }

}
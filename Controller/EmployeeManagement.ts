import {Employee} from "../Model/Employee";
export class EmployeeManagement{
    public Employees:any=[];
    constructor() {}
    GetAllEmployee(){
        return this.Employees;
    }
    addEmployee (employee:Employee){
        let check = false;
        this.Employees.forEach(function (item : Employee) {
            if (item.id == employee.id) {
                check = true;
            }
        });
        if(check){
            throw new Error("Sản phẩm vừa nhập bị trùng ID");
        }
        else {
            this.Employees.push(employee);
        }
    }

    findEmployee(id : string){
        let i = -1;
        this.Employees.forEach((item:any,index:number) => {
            if (item.id == id){
                i = index;
            }
        });
        return i;
    }

    updateEmployee(employee:Employee){
        let ID = this.Employees.findProduct(employee.id);
        if(ID !== -1){
            this.Employees[ID].name(employee.name);
            this.Employees[ID].bird(employee.bird);
            this.Employees[ID].address(employee.address);
            this.Employees[ID].gender(employee.gender);
            this.Employees[ID].phone(employee.phone);
        }
    }

    deleteEmployee(id:string){
        let vt = this.Employees.findEmployee(id);
        if(vt == -1){
            throw new Error("Can not Delete Product");
        }
        else{
            this.Employees.splice(vt,1);
        }
    }
}
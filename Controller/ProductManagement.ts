import {Product} from "../Model/Product";

export class ProductManagement{
    public products:any = [];

    constructor() {}

    GetAllProduct(){
        return this.products;
    }

    addProduct (product:Product){
        let check = false;
        this.products.forEach(function (item : Product) {
            if (item.getId() == product.getId()) {
                check = true;
            }
        });
        if(check){
            throw new Error("Sản phẩm vừa nhập bị trùng ID");
        }
        else {
            this.products.push(product);
        }
    }

    findProduct(id : string){
        let i = -1;
        this.products.forEach((product:any,index:number) => {
            if (product.getId() == id){
                i = index;
            }
        });
        return i;
    }

    updateProduct(product:Product){
        let ID = this.products.findProduct(product.getId());
        if(ID !== -1){
            this.products[ID].name(product.getName());
            this.products[ID].quantity(product.getQuantity());
            this.products[ID].material(product.getMaterial());
            this.products[ID].priceIn(product.getPriceIn());
            this.products[ID].priceOut(product.getPriceOut());
        }
    }

    deleteProduct(id:string){
        let vt = this.products.findProduct(id);
        if(vt == -1){
            throw new Error("Can not Delete Product");
        }
        else{
            this.products.splice(vt,1);
        }
    }
}
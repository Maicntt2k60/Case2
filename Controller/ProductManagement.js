"use strict";
exports.__esModule = true;
exports.ProductManagement = void 0;
var ProductManagement = /** @class */ (function () {
    function ProductManagement() {
        this.products = [];
    }
    ProductManagement.prototype.GetAllProduct = function () {
        return this.products;
    };
    ProductManagement.prototype.addProduct = function (product) {
        var check = false;
        this.products.forEach(function (item) {
            if (item.getId() == product.getId()) {
                check = true;
            }
        });
        if (check) {
            throw new Error("Sản phẩm vừa nhập bị trùng ID");
        }
        else {
            this.products.push(product);
        }
    };
    ProductManagement.prototype.findProduct = function (id) {
        var i = -1;
        this.products.forEach(function (product, index) {
            if (product.getId() == id) {
                i = index;
            }
        });
        return i;
    };
    ProductManagement.prototype.updateProduct = function (product) {
        var ID = this.products.findProduct(product.getId());
        if (ID !== -1) {
            this.products[ID].name(product.getName());
            this.products[ID].quantity(product.getQuantity());
            this.products[ID].material(product.getMaterial());
            this.products[ID].priceIn(product.getPriceIn());
            this.products[ID].priceOut(product.getPriceOut());
        }
    };
    ProductManagement.prototype.deleteProduct = function (id) {
        var vt = this.products.findProduct(id);
        if (vt == -1) {
            throw new Error("Can not Delete Product");
        }
        else {
            this.products.splice(vt, 1);
        }
    };
    return ProductManagement;
}());
exports.ProductManagement = ProductManagement;

"use strict";
exports.__esModule = true;
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(id, name, material, quantity, priceIn, priceOut) {
        this._id = id;
        this._name = name;
        this._material = material;
        this._quantity = quantity;
        this._priceIn = priceIn;
        this._priceOut = priceOut;
    }
    Product.prototype.getId = function () {
        return this._id;
    };
    Product.prototype.setId = function (value) {
        this._id = value;
    };
    Product.prototype.getName = function () {
        return this._name;
    };
    Product.prototype.setName = function (value) {
        this._name = value;
    };
    Product.prototype.getMaterial = function () {
        return this._material;
    };
    Product.prototype.setMaterial = function (value) {
        this._material = value;
    };
    Product.prototype.getQuantity = function () {
        return this._quantity;
    };
    Product.prototype.setQuantity = function (value) {
        this._quantity = value;
    };
    Product.prototype.getPriceIn = function () {
        return this._priceIn;
    };
    Product.prototype.setPriceIn = function (value) {
        this._priceIn = value;
    };
    Product.prototype.getPriceOut = function () {
        return this._priceOut;
    };
    Product.prototype.setPriceOut = function (value) {
        this._priceOut = value;
    };
    return Product;
}());
exports.Product = Product;

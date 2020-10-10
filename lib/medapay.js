"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var service_1 = require("./service");
var constants_1 = require("./constants");
var MedaPay = /** @class */ (function (_super) {
    __extends(MedaPay, _super);
    function MedaPay(creds, isSandbox) {
        var _this = _super.call(this, creds) || this;
        _this.endpoint = isSandbox ? constants_1.endpoints.sandbox : constants_1.endpoints.production;
        return _this;
    }
    MedaPay.prototype.create = function (bill) {
        var _this = this;
        return this.post("bills", bill)
            .then(function (response) {
            var data = response.data;
            return data;
        })
            .catch(function (error) {
            throw _this.processErrorResponse(error);
        });
    };
    MedaPay.prototype.bill = function (referenceNumber) {
        var _this = this;
        return this.get("bills/" + referenceNumber)
            .then(function (response) {
            var data = response.data;
            return data;
        })
            .catch(function (error) {
            throw _this.processErrorResponse(error);
        });
    };
    return MedaPay;
}(service_1.default));
exports.default = MedaPay;

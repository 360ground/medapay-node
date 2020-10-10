"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var Service = /** @class */ (function () {
    function Service(creds, isSandbox) {
        this.creds = creds;
        this.endpoint = "";
    }
    Service.prototype.post = function (path, data) {
        return axios_1.default({
            method: "post",
            url: this.endpoint + "/" + path,
            data: data,
            headers: {
                authorization: "Bearer " + this.creds.bearerToken,
            },
        });
    };
    Service.prototype.get = function (path) {
        return axios_1.default({
            method: "get",
            url: this.endpoint + "/" + path,
            headers: {
                authorization: "Bearer " + this.creds.bearerToken,
            },
        });
    };
    Service.prototype.processErrorResponse = function (error) {
        var _a, _b, _c;
        return {
            status: (_a = error.response) === null || _a === void 0 ? void 0 : _a.status,
            statusText: (_b = error.response) === null || _b === void 0 ? void 0 : _b.statusText,
            message: error.message,
            error: (_c = error.response) === null || _c === void 0 ? void 0 : _c.data
        };
    };
    return Service;
}());
exports.default = Service;

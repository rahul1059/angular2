"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*Services in Angular 2
Injected Items in application
Apply provider in module
create instance and access the module*/
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
// Include only required library
require('rxjs/add/operator/map');
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getUserData = function () {
        return this.http.get("app/user-data.json")
            .map(function (response) { return response.json().data; });
    };
    UserService.prototype.getDateTime = function () {
        return this.http.get(" http://date.jsontest.com").map(function (response) { return response.json(); });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
/*Observable
Promise cut connections , observable keeps watch on data.
Promise are not cancellable.
we need additional library for observable
rxjs


*/ 
//# sourceMappingURL=user.service.js.map
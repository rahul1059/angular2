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
var core_1 = require('@angular/core');
var user_service_1 = require('./user.service');
var UserComponent = (function () {
    function UserComponent(userService) {
        this.userService = userService;
        this.users = [];
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUserData().subscribe(function (people) { return _this.users = people; }, function (error) { return console.log("Error"); }, function () { return console.log("FINISHED!!"); });
        this.userService.getDateTime().subscribe(function (data) { return _this.timeNow = data.time; }, function (error) { return console.log("Error"); }, function () { return console.log("FINISHED!!"); });
    };
    UserComponent.prototype.totIncome = function () {
        var total = 0;
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            total = total + user.income;
        }
        return total;
    };
    UserComponent.prototype.addVote = function (user) {
        user.vote++;
    };
    UserComponent.prototype.decalreWinner = function () {
        var winner;
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            if (winner) {
                if (winner.vote < user.vote) {
                    winner = user;
                }
            }
            else {
                winner = user;
            }
        }
        return "And the winner is " + winner.firstName + " " + winner.lastName;
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'user-comp',
            templateUrl: "app/user.component.html",
            styleUrls: ["app/app.component.css", "app/user.component.css"]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map
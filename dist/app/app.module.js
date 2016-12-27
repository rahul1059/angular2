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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
// Components
var app_component_1 = require('./app.component');
var parent_component_1 = require('./parent.component');
var child_component_1 = require('./child.component');
var form_component_1 = require('./form.component');
var user_component_1 = require('./user.component');
var about_component_1 = require('./about.component');
var contact_component_1 = require('./contact.component');
var pageNotFoundComponent_component_1 = require('./pageNotFoundComponent.component');
// Routing
var app_routing_1 = require('./app.routing');
// Services
var user_service_1 = require('./user.service');
// Pipes and directives
var double_pipe_1 = require('./double.pipe');
var style_directive_1 = require('./style.directive');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(app_routing_1.APP_ROUTES)],
            declarations: [app_component_1.AppComponent, about_component_1.AboutComponent, contact_component_1.ContactComponent, pageNotFoundComponent_component_1.PageNotFoundComponent, user_component_1.UserComponent, double_pipe_1.DoubleMePipe, parent_component_1.ParentComponent, child_component_1.ChildComponent, style_directive_1.StyleDirective, form_component_1.FormComponent],
            providers: [user_service_1.UserService],
            bootstrap: [app_component_1.AppComponent] // Only bootstraped components needed.
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
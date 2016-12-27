"use strict";
var parent_component_1 = require('./parent.component');
var form_component_1 = require('./form.component');
var user_component_1 = require('./user.component');
var about_component_1 = require('./about.component');
var contact_component_1 = require('./contact.component');
var pageNotFoundComponent_component_1 = require('./pageNotFoundComponent.component');
exports.APP_ROUTES = [
    { path: "", component: user_component_1.UserComponent },
    { path: "about", component: about_component_1.AboutComponent },
    { path: "contact", component: contact_component_1.ContactComponent },
    { path: "parent", component: parent_component_1.ParentComponent },
    { path: "form", component: form_component_1.FormComponent },
    { path: "**", component: pageNotFoundComponent_component_1.PageNotFoundComponent }
];
//# sourceMappingURL=app.routing.js.map
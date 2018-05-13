webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\r\n\tfxLayout=\"column\"\r\n\tfxLayoutAlign=\"center center\">\r\n\r\n\t<div class=\"container top\"\r\n\t  fxLayout=\"row\">\r\n\r\n\t\t<img src=\"../assets/images/Executive.png\" fxFlex=\"40\" height=\"600px\">\r\n\r\n\t\t<div fxFlex=\"20\"></div>\r\n\r\n\t  \t<p fxFlex=\"40\">\r\n\t\t\tJabooda Homes Inc is based in Mercer Island, WA and holds JABOOHI853D7 (Construction Contractor, General) licenses according to the Washington license board. \r\n\t\t\tWe have over 10 years of experience with construction and development, and make construction processes simple by maintaining friendly client relationships. \r\n\t\t\tOur homes are built in modern, contemporary, traditional and custom styles; many with Green Four Star certifications included. We are members of the Master \r\n\t\t\tBuilders Association, with one objective in mind: to fulfill and satisfy everyone's needs inside their home. Our projects include both custom and spec \r\n\t\t\tresidential homes; both multi-family and single-family homes. We take proud responsibility for all of our work.\r\n\t\t</p>\r\n\t</div>\r\n\r\n\t<div class=\"container\"\r\n\t  fxLayout=\"row\">\r\n\r\n\t  <img fxFlex=\"50\">\r\n\r\n\t  <div fxFlex=\"10\"></div>\r\n\r\n\t\t<p fxFlex=\"40\">\r\n\t\t  Jabooda Homes Inc is based in Mercer Island, WA and holds JABOOHI853D7 (Construction Contractor, General) licenses according to the Washington license board. \r\n\t\t  We have over 10 years of experience with construction and development, and make construction processes simple by maintaining friendly client relationships. \r\n\t\t  Our homes are built in modern, contemporary, traditional and custom styles; many with Green Four Star certifications included. We are members of the Master \r\n\t\t  Builders Association, with one objective in mind: to fulfill and satisfy everyone's needs inside their home. Our projects include both custom and spec \r\n\t\t  residential homes; both multi-family and single-family homes. We take proud responsibility for all of our work.\r\n\t  \t</p>\r\n  \t  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  color: #272727; }\n  .container .top {\n    padding-top: 55px; }\n    .container .top img {\n      position: relative;\n      left: 50px; }\n  .container h1 {\n    font-size: 86px; }\n  .container p {\n    font-size: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__("../../../../../src/app/app-routing/routes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__routes__["a" /* routes */])
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]],
        declarations: []
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__projectdetail_projectdetail_component__ = __webpack_require__("../../../../../src/app/projectdetail/projectdetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__project_dialog_project_dialog_component__ = __webpack_require__("../../../../../src/app/project-dialog/project-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__subcontracting_subcontracting_component__ = __webpack_require__("../../../../../src/app/subcontracting/subcontracting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__careers_careers_component__ = __webpack_require__("../../../../../src/app/careers/careers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contactus_contactus_component__ = __webpack_require__("../../../../../src/app/contactus/contactus.component.ts");








var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_1__about_about_component__["a" /* AboutComponent */] },
    { path: 'projects', component: __WEBPACK_IMPORTED_MODULE_2__projects_projects_component__["a" /* ProjectsComponent */] },
    { path: 'projectdetail/:id', component: __WEBPACK_IMPORTED_MODULE_3__projectdetail_projectdetail_component__["a" /* ProjectdetailComponent */] },
    { path: 'project/:id', component: __WEBPACK_IMPORTED_MODULE_4__project_dialog_project_dialog_component__["a" /* ProjectDialogComponent */] },
    { path: 'subcontracting', component: __WEBPACK_IMPORTED_MODULE_5__subcontracting_subcontracting_component__["a" /* SubcontractingComponent */] },
    { path: 'careers', component: __WEBPACK_IMPORTED_MODULE_6__careers_careers_component__["a" /* CareersComponent */] },
    { path: 'contactus', component: __WEBPACK_IMPORTED_MODULE_7__contactus_contactus_component__["a" /* ContactusComponent */] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header> \n<router-outlet></router-outlet>\n<app-footer></app-footer>\n\n<!-- The page that gets rendered; the router-outlet is the page that gets rendered depending on what page the user is on -->"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__projectdetail_projectdetail_component__ = __webpack_require__("../../../../../src/app/projectdetail/projectdetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__project_dialog_project_dialog_component__ = __webpack_require__("../../../../../src/app/project-dialog/project-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__subcontracting_subcontracting_component__ = __webpack_require__("../../../../../src/app/subcontracting/subcontracting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__careers_careers_component__ = __webpack_require__("../../../../../src/app/careers/careers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__contactus_contactus_component__ = __webpack_require__("../../../../../src/app/contactus/contactus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_career_service__ = __webpack_require__("../../../../../src/app/services/career.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__app_routing_routes__ = __webpack_require__("../../../../../src/app/app-routing/routes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_13__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_14__projects_projects_component__["a" /* ProjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_17__subcontracting_subcontracting_component__["a" /* SubcontractingComponent */],
            __WEBPACK_IMPORTED_MODULE_18__careers_careers_component__["a" /* CareersComponent */],
            __WEBPACK_IMPORTED_MODULE_19__contactus_contactus_component__["a" /* ContactusComponent */],
            __WEBPACK_IMPORTED_MODULE_20__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_15__projectdetail_projectdetail_component__["a" /* ProjectdetailComponent */],
            __WEBPACK_IMPORTED_MODULE_16__project_dialog_project_dialog_component__["a" /* ProjectDialogComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["h" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["g" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material_dialog__["c" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["g" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_9__app_routing_app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_25__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_25__angular_forms__["h" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_26__app_routing_routes__["a" /* routes */], { useHash: true })
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_23__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_24__services_career_service__["a" /* CareerService */],
            { provide: __WEBPACK_IMPORTED_MODULE_22__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_22__angular_common__["d" /* HashLocationStrategy */] }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_16__project_dialog_project_dialog_component__["a" /* ProjectDialogComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/careers/careers.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\r\n\t\t\t<h1>JOIN OUR TEAM!</h1>\r\n\r\n\t\t\t<p>At Jabooda, we are always seeking out highly talented individuals with the motivation to push our team forward. Check out our openings below.</p>\r\n\r\n\t\t\t<p>Please note that all positions require that the candidate have 3 to 4 years of experience minimum within the respective field. Candidates must be able to work independently and have prior knowledge.</p>\r\n\r\n\t\t\t<br>\r\n\r\n\t\t\t<h2> Positions </h2>\r\n\r\n\t\t\t<a href=\"careers#Superintendent\"> Superintendent </a>\r\n\t\t\t<br>\r\n\t\t\t<a href=\"careers#PROJECT_MANAGER\"> Project Manager </a>\r\n\t\t\t<br>\r\n\t\t\t<a href=\"careers#EXCAVATOR_OPERATOR\"> Excavator Operator </a>\r\n\t\t\t<br>\r\n\t\t\t<a href=\"careers#FOREMAN\"> Foreman </a>\r\n\t\t\t<br>\r\n\t\t\t<a href=\"careers#FRAMER\"> Framer </a>\r\n\r\n\r\n\r\n\t\t\t<hr>\r\n\r\n\r\n\t\t\t<section class=\"section-position\">\r\n\r\n\t\t\t\r\n\t\t\t\t<h2 id=\"Superintendent\">SUPERINTENDENT</h2> \r\n\r\n\t\t\t\t<p>Primary responsibilities include:</p>\r\n\r\n\t\t\t\t<br>\r\n\r\n\t\t\t\t<li>Supervising construction activities</li>\r\n\t\t\t\t<li>Must be able to develop positive relationships betwen customers and suppliers; both orally and written</li>\r\n\t\t\t\t<li>Must be able to direct all field personnel to be able to complete projects on schedule, within budget and is compliant to original plans and specifications</li>\r\n\t\t\t\t<li>An active problem solver who is able to oversee all work done within the field</li>\r\n\t\t\t\t<li>Analyzes problems and can make quick decisions considering risks, objectives, costs and other implications</li>\r\n\t\t\t\t<li>Strong organizational skills is a must</li>\r\n\t\t\t\t<li>Ensures job safety among all workers</li>\r\n\t\t\t\t<li>Maintains an organized and clean job site</li>\r\n\r\n\r\n\t\t\t</section>\r\n\r\n\t\t\t<hr>\r\n\r\n\t\t\t<section class=\"section-position\">\r\n\r\n\t\t\t\t<h2 id=\"PROJECT_MANAGER\">PROJECT MANAGER</h2>\r\n\r\n\t\t\t\t<p>Primary responsibilities include:</p>\r\n\r\n\t\t\t\t<br>\r\n\r\n\t\t\t\t<li>Strong listening skills; being able to address clients' needs with understanding</li>\r\n\t\t\t\t<li>Build rapport with clients, sales representatives and other peers</li>\r\n\t\t\t\t<li>Prioritize workload without supervision</li>\r\n\t\t\t\t<li>Ability to develop cost estimates for projects</li>\r\n\t\t\t\t<li>Strong attention to detail</li>\r\n\t\t\t\t<li>Analyze construction details thoroughly</li>\r\n\t\t\t\t<li>Manage order and quoting processes</li>\r\n\t\t\t\t<li>Supply thorough interpretations of design drawings and other conceptual documents</li>\r\n\r\n\t\t\t</section>\r\n\r\n\t\t\t<hr>\r\n\r\n\t\t\t<section class=\"section-position\">\r\n\r\n\t\t\t\t<h2 id=\"EXCAVATOR_OPERATOR\">EXCAVATOR OPERATOR</h2>\r\n\r\n\t\t\t\t<p>Primary responsibilities include:</p>\r\n\r\n\t\t\t\t<br>\r\n\r\n\t\t\t\t<li>Conduct operation of excavators and additional associated equipment</li>\r\n\t\t\t\t<li>Working in accordance to plans and specifications</li>\r\n\t\t\t\t<li>Transport load and unload materials</li>\r\n\t\t\t\t<li>Respectful of traffic control</li>\r\n\t\t\t\t<li>Report any dangers and hazards in the field</li>\r\n\t\t\t\t<li>Act with the customer in mind</li>\r\n\t\t\t\t<li>Strong attention to detail is a must</li>\r\n\t\t\t\t<li>Include excellent quality of workmanship at all times</li>\r\n\t\t\t\t<li>Ask questions if ever unsure</li>\r\n\t\t\t\t<li>Maintain excellent relationships with clients and provide a positive force in the field</li>\r\n\t\t\t\t<li>Continually improve service, productivity and efficiency</li>\r\n\r\n\t\t\t</section>\r\n\r\n\t\t\t<hr>\r\n\r\n\t\t\t<section class=\"section-position\">\r\n\r\n\t\t\t\t<h2 id=\"FOREMAN\">FOREMAN</h2>\r\n\r\n\t\t\t\t<p>Primary responsibilities include:</p>\r\n\r\n\t\t\t\t<br>\r\n\r\n\t\t\t\t<li>Train, direct, supervise and discipline crews on a given project</li>\r\n\t\t\t\t<li>Present strong leadership roles while maintaining a positive attitude</li>\r\n\t\t\t\t<li>Evaluate progress and provide assistance to peers to strengthen their abilities in their respective role</li>\r\n\t\t\t\t<li>Be able to listen to any concerns of workers on the field and solve problems</li>\r\n\t\t\t\t<li>Folllow blueprints, sketches and suggest changes when necessary</li>\r\n\t\t\t\t<li>Track employee attendance and manage work schedules for each individual</li>\r\n\t\t\t\t<li>Aiding subordinates to get jobs completed</li>\r\n\r\n\t\t\t</section>\r\n\r\n\t\t\t<hr>\r\n\r\n\t\t\t<section class=\"section-position\">\r\n\r\n\t\t\t\t<h2 id=\"FRAMER\">FRAMER</h2>\r\n\r\n\t\t\t\t<p>Primary responsibilities include:</p>\r\n\t\t\t\t\r\n\t\t\t\t<br>\r\n\r\n\t\t\t\t<li>Build and repair wooden structures</li>\r\n\t\t\t\t<li>Measure, cut and assemble lumber with precision</li>\r\n\t\t\t\t<li>Be able to analyze blueprints with a strong attention to detail</li>\r\n\t\t\t\t<li>Be able to lift and carry heavy framing lumber, sheets of plywood and other materials</li>\r\n\t\t\t\t<li>Strong analytical and mathematical skills</li>\r\n\r\n\t\t\t</section>\r\n\r\n\t\t\t<hr>\r\n\r\n\t\t\t<p>Got our skills? Send over a résumé and cover letter to our e-mail at jaboodahomes@yahoo.com</p>\r\n\t\t</section>"

/***/ }),

/***/ "../../../../../src/app/careers/careers.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content {\n  padding: 55px;\n  color: #272727; }\n  .content h1 {\n    font-size: 86px; }\n  .content p {\n    font-size: 20px; }\n  .content a {\n    color: #004378; }\n  .content a:hover {\n    transition: .2s ease;\n    color: #ffffff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/careers/careers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CareersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_career_service__ = __webpack_require__("../../../../../src/app/services/career.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CareersComponent = (function () {
    function CareersComponent(careerService) {
        this.careerService = careerService;
    }
    CareersComponent.prototype.ngOnInit = function () {
        this.careers = this.careerService.getCareers();
    };
    return CareersComponent;
}());
CareersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-careers',
        template: __webpack_require__("../../../../../src/app/careers/careers.component.html"),
        styles: [__webpack_require__("../../../../../src/app/careers/careers.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_career_service__["a" /* CareerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_career_service__["a" /* CareerService */]) === "function" && _a || Object])
], CareersComponent);

var _a;
//# sourceMappingURL=careers.component.js.map

/***/ }),

/***/ "../../../../../src/app/contactus/contactus.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\r\n<h1>GET IN TOUCH</h1>\r\n\r\n\t\t\t<p>We are always eager to hear what you have to say.</p>\r\n\r\n\t\t\t<p>Anything you want to let us know about? Click the button below.</p>\r\n\r\n\t\t\t<br>\r\n\r\n\t\t\t<script type=\"text/javascript\"> id=204403; t=2; </script>\r\n\t\t\t<script type=\"text/javascript\" src=\"http://kontactr.com/kpu/kontactr.js\"></script><br>\r\n\r\n\t\t\t<br>\r\n\r\n\t\t\t<li>Jabooda Homes, Inc.</li>\r\n\t\t\t<li>1 Eden Lane</li>\r\n\t\t\t<li>Mercer Island, WA 98040</li>\r\n\t\t\t<li>Email: jaboodahomes@yahoo.com</li>\r\n\t\t\t<li>Phone: (206) 288 9527</li>\r\n\t\t\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/contactus/contactus.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content {\n  padding: 55px;\n  color: #272727; }\n  .content h1 {\n    font-size: 86px; }\n  .content p {\n    font-size: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contactus/contactus.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactusComponent = (function () {
    function ContactusComponent() {
    }
    ContactusComponent.prototype.ngOnInit = function () {
    };
    return ContactusComponent;
}());
ContactusComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-contactus',
        template: __webpack_require__("../../../../../src/app/contactus/contactus.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contactus/contactus.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ContactusComponent);

//# sourceMappingURL=contactus.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!-- OUTER ROW -->\r\n<div class=\"outercontainer\"\r\n\tfxLayout=\"row\"\r\n\tfxLayoutAlign=\"space-evenly center\">\r\n\r\n\r\n\t<div fxFlex=\"5\"></div>\r\n\r\n\r\n\t<!-- PAGES -->\r\n\t<div class=\"container\"\r\n\tfxLayout=\"column\"\r\n\t  fxFlex=\"7\">\r\n\r\n\t\t<!-- LEFT PAGES -->\r\n\r\n\t\t<ul>\r\n\t\t\t<li> <a routerLink=\"/home\" routerLinkActive=\"active\"> Home  </a> </li>\r\n\r\n\t\t\t\r\n\t\t\t<li> <a routerLink=\"/projects\" routerLinkActive=\"active\"> Projects\r\n\t\t\t </a> </li>\r\n\r\n\t\t\t<li> <a routerLink=\"/careers\" routerLinkActive=\"active\"> Careers\r\n\t\t\t</a> </li>\r\n\t\t</ul>\r\n\r\n\t</div>\r\n\r\n\t<div class=\"container\"\r\n\tfxLayout=\"column\"\r\n\t  fxFlex=\"20\">\r\n\t\t<!-- RIGHT PAGES -->\r\n\r\n\t\t<ul>\r\n\t\t\t<li> <a routerLink=\"/about\" routerLinkActive=\"active\"> About\r\n\t\t\t</a> </li>\r\n\r\n\t\t\t<li> <a routerLink=\"/subcontracting\" routerLinkActive=\"active\"> Subcontracting </a></li>\r\n\r\n\t\t\t<li> <a routerLink=\"/contactus\" routerLinkActive=\"active\"> Contact Us </a>\r\n\t\t\t</li>\t\r\n\r\n\t\t</ul>\r\n\t\r\n\t</div>\r\n\r\n\r\n\t<!-- LOGOS -->\r\n\t<div class=\"container\"\r\n\t  fxFlex=\"33\"\r\n\t  fxLayoutAlign=\"center center\">\r\n\r\n\t <img src=\"../assets/images/combinedlogos.png\">\r\n\r\n\t </div>\r\n\r\n\t <!-- CONTACT US -->\r\n\t <div class=\"container\"\r\n\t  fxFlex=\"33\"\r\n\t  fxLayout=\"column\" \r\n\t  fxLayoutAlign=\"center center\">\r\n\r\n\r\n\t <div>  Contact Us </div> \r\n\r\n\t <div fxLayout=\"column\">\r\n\t \r\n\t <div> \r\n\t <i class=\"fa fa-map-marker fa-2x\"> </i> \r\n\t 1 Eden Lane, Mercer Island, WA 98040\r\n\t </div>\r\n\r\n\t <div>\r\n\t <i class=\"fa fa-envelope fa-2x\"> </i>\r\n\t jaboodahomes@yahoo.com\r\n\t </div>\r\n\r\n\t <div>\r\n\t <i class=\"fa fa-phone fa-2x\"> </i>\r\n\t (206) 288 9527\r\n\t </div>\r\n\r\n\t </div>\r\n\r\n\t </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n<!--\r\n\r\n\t<div class=\"rowText\"\r\n\t\tfxLayout=\"row\"> \r\n\r\n\t<a routerLink=\"/home\" routerLinkActive=\"active\"> Home </a>\r\n\t<div >  </div>\r\n\t<a  routerLink=\"/about\" routerLinkActive=\"active\"> About </a>\r\n\r\n\t</div>\r\n\r\n\t<div class=\"rowText\"\r\n\t\tfxLayout=\"row\"\r\n\t\tfxFlex=\"30\"> \r\n\r\n\t<a routerLink=\"/projects\" routerLinkActive=\"active\"> Projects </a>\r\n\t<div >  </div>\r\n\t<a routerLink=\"/subcontracting\" routerLinkActive=\"active\"> Subcontracting </a>\r\n\r\n\t</div>\r\n\r\n\t<div class=\"rowText\"\r\n\t\tfxLayout=\"row\"\r\n\t\tfxFlex=\"30\"> \r\n\r\n\t<a  routerLink=\"/careers\" routerLinkActive=\"active\"> Careers </a>\r\n\t<div>  </div>\r\n\t<a  routerLink=\"/contactus\" routerLinkActive=\"active\"> Contact Us </a>\r\n\r\n\t</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!--\r\n\r\n<mat-toolbar>\r\n  <a mat-button routerLink=\"/home\" routerLinkActive=\"active\"> Home</a>\r\n  <a mat-button routerLink=\"/about\" routerLinkActive=\"active\"> About</a>\r\n  <a mat-button routerLink=\"/projects\" routerLinkActive=\"active\"> Projects</a>\r\n  <a mat-button routerLink=\"/subcontracting\" routerLinkActive=\"active\"> Subcontracting</a>\r\n  <a mat-button routerLink=\"/careers\" routerLinkActive=\"active\"> Careers</a>\r\n  <a mat-button routerLink=\"/contactus\" routerLinkActive=\"active\"> Contact Us</a>\r\n\r\n  \t\t<br> <br>\r\n  \t\t<p>Jabooda Homes, Inc.</p>\r\n\t\t<p>Mercer Island, WA</p>\r\n\t\t<p>2016</p>\r\n</mat-toolbar>\r\n--> \r\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-toolbar {\n  background-color: #01427C;\n  color: white; }\n\n.outercontainer {\n  padding: 10px;\n  background-color: #01427C;\n  color: white; }\n\n.container {\n  padding: 10px;\n  color: white; }\n\n.rowText {\n  padding: 5px; }\n  .rowText h1 {\n    font-size: 86px; }\n  .rowText div {\n    font-size: 15px; }\n\nul {\n  list-style-type: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <a mat-button routerLink=\"/home\" routerLinkActive=\"active\"><span class=\"fa fa-home fa-lg\"></span> Home</a>\n  <a mat-button routerLink=\"/about\" routerLinkActive=\"active\"><span class=\"fa fa-info fa-lg\"></span> About</a>\n  <a mat-button routerLink=\"/projects\" routerLinkActive=\"active\"><span class=\"fa fa-map-o fa-lg\"></span> Projects</a>\n  <a mat-button routerLink=\"/subcontracting\" routerLinkActive=\"active\"><span class=\"fa fa-user fa-lg\"></span> Subcontracting</a>\n  <a mat-button routerLink=\"/careers\" routerLinkActive=\"active\"><span class=\"fa fa-briefcase fa-lg\"></span> Careers</a>\n  <a mat-button routerLink=\"/contactus\" routerLinkActive=\"active\"><span class=\"fa fa-address-card fa-lg\"></span> Contact Us</a>\n</mat-toolbar>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-toolbar {\n  background-color: #01427C;\n  color: white; }\n\na, a:hover, a:visited {\n  margin: 5px; }\n\n.active {\n  background: #013967;\n  border-radius: 2px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container jumbotron\"\n  fxLayout=\"row\"\n  fxLayoutAlign.xs=\"start center\"\n  fxLayoutAlign.sm=\"start center\" \n  fxLayoutAlign.gt-sm=\"center center\" \n  fxLayoutGap=\"10px\">\n\n  <div class=\"jumbotronImage\" style=\"background: url(../assets/images/homebanner.jpg);\"\n    fxFlex=\"100\"\n    fxLayoutAlign=\"center center\">\n\n    <div id=\"jumbotronContent\">\n      <div id=\"imageContainer\"\n        fxLayout=\"row\"\n        fxLayoutAlign=\"center center\">\n        <img fxFlex=\"85\" src=\"../assets/images/homelogo.png\">\n      </div>\n      <p>At Jabooda, we believe in a home for every family. Come take a look at all of our listings in the Seattle area!</p>\n    </div>\n  </div>\n</div>\n\n<div class=\"container content\"\n  fxLayout=\"column\"\n  fxLayoutAlign=\"center center\">\n  <h1 fxLayout=\"row\">WHO ARE WE?</h1>\n  <p fxLayout=\"row\">Jabooda Homes, Inc. specializes in modern, contemporary, traditional and custom style residential homes. \n    We are based out of Mercer Island, WA and hold JABOOHI853D7 (Construction Contractor, General) licenses according\n    to the Washington license board. With over 10 years of experience with construction and development, we make\n    construction processes simple and strive to maintain friendly client relationships.\n  </p>\n  <p fxLayout=\"row\">\n    Many of our homes include Green Four Star certifications. As members of the Master Builders Association, we have one objective\n    in mind: to fulfill and satisfy everyone's needs inside their home. Our projects include both custom and spec residential homes, and\n    both multi-family and single family homes. We take proud responsibility for all of our work.\n  </p>\n</div>\n\n<div class=\"container imgContainer\"\n  fxLayout=\"column\"\n  fxLayoutAlign=\"center center\">\n  <div class=\"container\"\n    fxLayout.md=\"row\"\n    fxLayout.xs=\"column\">\n    <img fxFlex=\"33.333333333\" src=\"../assets/images/house4.jpg\">\n    <img fxFlex=\"33.333333333\" src=\"../assets/images/house4.jpg\">\n    <img fxFlex=\"33.333333333\" src=\"../assets/images/house4.jpg\">\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jumbotronImage {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 175px 0px;\n  position: relative;\n  top: 0px;\n  z-index: -99999999;\n  text-align: center; }\n  .jumbotronImage #jumbotronContent {\n    position: relative;\n    color: white; }\n    .jumbotronImage #jumbotronContent #imageContainer img {\n      height: 100%;\n      width: 100%; }\n    .jumbotronImage #jumbotronContent p {\n      font-size: 24px;\n      position: relative;\n      top: 20px; }\n\n.content {\n  padding: 55px;\n  color: #272727; }\n  .content h1 {\n    font-size: 86px; }\n  .content p {\n    font-size: 20px; }\n\n.imgContainer {\n  padding: 0;\n  width: 100%;\n  height: 100%; }\n  .imgContainer img {\n    height: 100%;\n    width: 100%;\n    position: relative; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/project-dialog/project-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\n  fxLayout=\"row\"\n  fxLayoutGap=\"10px\">\n\n  <div fxFlex=100>\n    <mat-card>\n      <mat-card-content>\n        <img src=\"{{ data.images }}\"/>\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/project-dialog/project-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n  height: 800px;\n  width: 533px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project-dialog/project-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ProjectDialogComponent = (function () {
    function ProjectDialogComponent(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
    }
    ProjectDialogComponent.prototype.ngOnInit = function () {
        this.values = this.data;
    };
    ProjectDialogComponent.prototype.close = function () {
        this.dialogRef.close(this.project);
    };
    return ProjectDialogComponent;
}());
ProjectDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-project-dialog',
        template: __webpack_require__("../../../../../src/app/project-dialog/project-dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/project-dialog/project-dialog.component.scss")]
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogRef */]) === "function" && _a || Object])
], ProjectDialogComponent);

var _a;
//# sourceMappingURL=project-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/projectdetail/projectdetail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\n  fxLayout=\"row\"\n  fxLayoutGap=\"10px\">\n\n  <div fxFlex=100>\n    <mat-card *ngIf=\"project\">\n      <img src=\"{{ mainImage }}\" (click)=\"openDialog(project)\">\n      <mat-card-header>\n        <mat-card-title><h1>{{ project.address | uppercase }}</h1></mat-card-title>\n      </mat-card-header>\n      <mat-card-content id=\"preWrapper\">\n        <mat-card-content id=\"imageWrapper\">\n          <mat-card-content id=\"imageContainer\" *ngFor=\"let image of project.images\">\n            <img src=\"{{ image }}\" (click)=\"changeImage(image)\" />\n          </mat-card-content>\n        </mat-card-content>\n      </mat-card-content>\n      <mat-card-content>\n        <p>{{ project.description }}</p>\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/projectdetail/projectdetail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n  height: 600px;\n  width: 500px; }\n\n.container {\n  margin: auto;\n  text-align: center; }\n  .container mat-card {\n    text-align: center; }\n    .container mat-card mat-card-header {\n      text-align: center;\n      margin: 0 auto 0 auto; }\n\n#preWrapper {\n  width: 100%;\n  overflow-x: scroll; }\n\n#imageWrapper {\n  height: 155px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  overflow-y: hidden; }\n\n#imageContainer {\n  display: inline; }\n  #imageContainer img {\n    height: 150px;\n    width: 200px;\n    margin: 0px 2px;\n    border-radius: 5px; }\n\n::-webkit-scrollbar {\n  height: 6px; }\n\n::-webkit-scrollbar-track {\n  background: #d9d9d9;\n  border-radius: 500px; }\n\n::-webkit-scrollbar-thumb {\n  background: #4d4d4d;\n  border-radius: 500px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/projectdetail/projectdetail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectdetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project_dialog_project_dialog_component__ = __webpack_require__("../../../../../src/app/project-dialog/project-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_project__ = __webpack_require__("../../../../../src/app/shared/project.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProjectdetailComponent = (function () {
    function ProjectdetailComponent(projectService, dialog) {
        this.projectService = projectService;
        this.dialog = dialog;
    }
    ProjectdetailComponent.prototype.ngOnInit = function () {
        this.mainImage = this.projectService.getProject(0).images[0];
    };
    // Opens up Photo Gallery
    ProjectdetailComponent.prototype.openDialog = function (project) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__project_dialog_project_dialog_component__["a" /* ProjectDialogComponent */], {
            data: {
                address: this.project.address,
                images: this.mainImage
            }
        });
    };
    // Changes the Main Image when any GALLERY PHOTO is selected
    ProjectdetailComponent.prototype.changeImage = function (image) {
        this.mainImage = image;
    };
    // Changes the Main Image when another PROJECT is selected
    ProjectdetailComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        for (var propName in changes) {
            if (propName === 'project') {
                Promise.resolve(null).then(function () { _this.mainImage = _this.project.images[0]; });
            }
        }
    };
    return ProjectdetailComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_project__["a" /* Project */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_project__["a" /* Project */]) === "function" && _a || Object)
], ProjectdetailComponent.prototype, "project", void 0);
ProjectdetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-projectdetail',
        template: __webpack_require__("../../../../../src/app/projectdetail/projectdetail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/projectdetail/projectdetail.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_project_service__["a" /* ProjectService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialog */]) === "function" && _c || Object])
], ProjectdetailComponent);

var _a, _b, _c;
//# sourceMappingURL=projectdetail.component.js.map

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\n  fxLayout.sm=\"row\"\n  fxLayout.xs=\"column\">  \n\n  <div fxFlex=40>\n    <app-projectdetail [project]=\"selectedProject\"></app-projectdetail> \n  </div> \n\n  <div fxFlex=40></div>\n\n  <div fxFlex=20 *ngIf=\"projects\">\n    <mat-grid-list cols=\"1\" rowHeight=\"300px\">\n      <mat-grid-tile *ngFor=\"let project of projects\" (click)=\"onSelect(project)\"\n        flex-offset-sm>\n        <img src=\"{{ project.images[0] }}\">\n        <mat-grid-tile-footer>\n          <h1 mat-line ngDefaultControl>{{ project.address | uppercase }}</h1>\n        </mat-grid-tile-footer>\n      </mat-grid-tile>\n    </mat-grid-list>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n  height: 400px;\n  width: 300px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsComponent = (function () {
    function ProjectsComponent(projectService) {
        this.projectService = projectService;
    }
    // By default, all projects are retrieved and the one that shows up in projectdetail is the first one.
    ProjectsComponent.prototype.ngOnInit = function () {
        this.projects = this.projectService.getProjects();
        this.selectedProject = this.projectService.getProject(0);
    };
    // Allows user to change project to whatever
    ProjectsComponent.prototype.onSelect = function (project) {
        this.selectedProject = project;
    };
    return ProjectsComponent;
}());
ProjectsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-projects',
        template: __webpack_require__("../../../../../src/app/projects/projects.component.html"),
        styles: [__webpack_require__("../../../../../src/app/projects/projects.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */]) === "function" && _a || Object])
], ProjectsComponent);

var _a;
//# sourceMappingURL=projects.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/career.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CareerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_careers__ = __webpack_require__("../../../../../src/app/shared/careers.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CareerService = (function () {
    function CareerService() {
    }
    CareerService.prototype.getCareers = function () {
        return __WEBPACK_IMPORTED_MODULE_1__shared_careers__["a" /* CAREERS */];
    };
    return CareerService;
}());
CareerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CareerService);

//# sourceMappingURL=career.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/project.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_projects__ = __webpack_require__("../../../../../src/app/shared/projects.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectService = (function () {
    function ProjectService() {
    }
    ProjectService.prototype.getProjects = function () {
        return __WEBPACK_IMPORTED_MODULE_1__shared_projects__["a" /* PROJECTS */];
    };
    ProjectService.prototype.getProject = function (id) {
        return __WEBPACK_IMPORTED_MODULE_1__shared_projects__["a" /* PROJECTS */].filter(function (project) { return (project.id === id); })[0];
    };
    return ProjectService;
}());
ProjectService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ProjectService);

//# sourceMappingURL=project.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/careers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CAREERS; });
var CAREERS = [
    {
        id: 0,
        jobtitle: "SUPERINTENDENT",
        headline: "Primary responsibilities include",
        requirements: [
            'Supervising construction activities',
            'Must be able to develop positive relationships betwen customers and suppliers; both orally and written',
            'Must be able to direct all field personnel to be able to complete projects on schedule, within budget and is compliant to original plans and specifications',
            'An active problem solver who is able to oversee all work done within the field',
            'Analyzes problems and can make quick decisions considering risks, objectives, costs and other implications',
            'Strong organizational skills is a must',
            'Ensures job safety among all workers',
            'Maintains an organized and clean job site'
        ]
    },
    {
        id: 1,
        jobtitle: "PROJECT MANAGER",
        headline: "Primary responsibilities include",
        requirements: [
            'Strong listening skills; being able to address clients needs with understanding',
            'Build rapport with clients, sales representatives and other peers',
            'Prioritize workload without supervision',
            'Ability to develop cost estimates for projects',
            'Strong attention to detail',
            'Analyze construction details thoroughly',
            'Manage order and quoting processes',
            'Supply thorough interpretations of design drawings and other conceptual documents'
        ]
    },
    {
        id: 2,
        jobtitle: "EXCAVATOR OPERATOR",
        headline: "Primary responsibilities include",
        requirements: [
            'Conduct operation of excavators and additional associated equipment',
            'Working in accordance to plans and specifications',
            'Transport load and unload materials',
            'Respectful of traffic control',
            'Report any dangers and hazards in the field',
            'Act with the customer in mind',
            'Strong attention to detail is a must',
            'Include excellent quality of workmanship at all times',
            'Ask questions if ever unsure',
            'Maintain excellent relationships with clients and provide a positive force in the field',
            'Continually improve service, productivity and efficiency'
        ]
    },
    {
        id: 3,
        jobtitle: "FOREMAN",
        headline: "Primary responsibilities include",
        requirements: [
            'Train, direct, supervise and discipline crews on a given project',
            'Present strong leadership roles while maintaining a positive attitude',
            'Evaluate progress and provide assistance to peers to strengthen their abilities in their respective role',
            'Be able to listen to any concerns of workers on the field and solve problems',
            'Follow blueprints, sketches and suggest changes when necessary',
            'Track employee attendance and manage work schedules for each individual',
            'Aiding subordinates to get jobs completed'
        ]
    },
    {
        id: 4,
        jobtitle: "FRAMER",
        headline: "Primary responsibilities include",
        requirements: [
            'Build and repair wooden structures',
            'Measure, cut and assemble lumber with precision',
            'Be able to analyze blueprints with a strong attention to detail',
            'Be able to lift and carry heavy framing lumber, sheets of plywood and other materials',
            'Strong analytical and mathematical skills'
        ]
    }
];
//# sourceMappingURL=careers.js.map

/***/ }),

/***/ "../../../../../src/app/shared/project.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Project; });
var Project = (function () {
    function Project() {
    }
    return Project;
}());

//# sourceMappingURL=project.js.map

/***/ }),

/***/ "../../../../../src/app/shared/projects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PROJECTS; });
var PROJECTS = [
    {
        id: 0,
        address: "13979 SE 1st ST, Bellevue WA 98005",
        images: [
            '/assets/images/13979se1st/Entry.jpg',
            '/assets/images/13979se1st/Photo-9.jpg',
            '/assets/images/13979se1st/Photo-16.jpg',
            '/assets/images/13979se1st/Photo-19.jpg',
            '/assets/images/13979se1st/Photo-28.jpg',
            '/assets/images/13979se1st/Photo-30.jpg',
            '/assets/images/13979se1st/Photo-50.jpg'
        ],
        price: "$2,500,000",
        featured: true,
        description: "The best house on the block!"
    },
    {
        id: 1,
        address: "13600 NE 85th ST, Bellevue WA 98008",
        images: [
            '/assets/images/house1.jpg'
        ],
        price: "$2,500,000",
        featured: true,
        description: "The best house on the block!"
    }
];
//# sourceMappingURL=projects.js.map

/***/ }),

/***/ "../../../../../src/app/subcontracting/subcontracting.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\r\n<h1>BID ON OUR PROJECTS</h1>\r\n\r\n\t\t\t<p>We are building 30-40 units per year, and we are interested in looking for more subcontractors to establish great relationships with. If you are interested, please get in contact and take a look at what we have in our projects tab.</p>\r\n\r\n\t\t\t<br><br>\r\n\r\n\t\t\t<p>Email: jaboodahomes@yahoo.com</p>\r\n\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/subcontracting/subcontracting.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content {\n  padding: 55px;\n  color: #272727; }\n  .content h1 {\n    font-size: 86px; }\n  .content p {\n    font-size: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/subcontracting/subcontracting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubcontractingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SubcontractingComponent = (function () {
    function SubcontractingComponent() {
    }
    SubcontractingComponent.prototype.ngOnInit = function () {
    };
    return SubcontractingComponent;
}());
SubcontractingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-subcontracting',
        template: __webpack_require__("../../../../../src/app/subcontracting/subcontracting.component.html"),
        styles: [__webpack_require__("../../../../../src/app/subcontracting/subcontracting.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SubcontractingComponent);

//# sourceMappingURL=subcontracting.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
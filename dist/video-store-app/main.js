(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Admin/add/add.component.css":
/*!*********************************************!*\
  !*** ./src/app/Admin/add/add.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\n  width: 150px;\n  height: 100px;\n  border:2px solid black;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWRtaW4vYWRkL2FkZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCx1QkFBdUI7Q0FDeEIiLCJmaWxlIjoic3JjL2FwcC9BZG1pbi9hZGQvYWRkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyOjJweCBzb2xpZCBibGFjaztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/Admin/add/add.component.html":
/*!**********************************************!*\
  !*** ./src/app/Admin/add/add.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-lg-5 mt-5 mb-5 p-5 bg-light\">\n<div class=\"text-center\">\n<h2 class=\"text-dark mb-5\">Add a new Video</h2>\n\n</div>\n   <form (ngSubmit)=\"onSubmit(title,rTime,genre,ratings,director,status)\"  #addForm=\"ngForm\" class=\"form-signin\">\n   <table class=\"table\">\n      <tr>\n         <td>Title:</td>\n         <td>\n            <input type=\"text\" class=\"form-control\" id=\"title\" required ngModel #title=\"ngModel\" name=\"title\">\n            <div [hidden]=\"title.valid || title.pristine\" class=\"alert alert-danger\">\n               Title is required\n            </div>\n         </td>\n      </tr>\n      <tr>\n         <td>Runnig Time</td>\n         <td><input type=\"text\" class=\"form-control\" id=\"name\" ngModel #rTime name=\"runningTime\"></td>\n      </tr>\n      <tr>\n         <td>Genre</td>\n         <td>\n            <div class=\"form-group\">\n               <select class=\"form-control\" id=\"genre\" required ngModel name=\"genre\" #genre=\"ngModel\">\n                  <option value=\"\" selected disabled hidden>Select a Genre</option>\n                  <option *ngFor=\"let genre of videos.genre\" [value]=\"genre\">{{genre}}</option>\n               </select>\n            </div>\n         <td>\n      </tr>\n      <tr>\n         <td>Ratings</td>\n         <td>\n            <!-- Dropdown list -->\n            <div class=\"form-group\">\n               <select class=\"form-control\" id=\"rating\" required ngModel name=\"rating\" #ratings=\"ngModel\">\n                  <option value=\"\" selected disabled hidden>Select a rating</option>\n                  <option *ngFor=\"let rating of videos.rating\" [value]=\"rating\">{{rating}}</option>\n               </select>\n            </div>\n         <td>\n      </tr>\n      <tr>\n         <td>Director</td>\n         <td> <input type=\"text\" class=\"form-control\" id=\"name\" required ngModel #director name=\"director\"> </td>\n      </tr>\n      <tr>\n         <td>Status</td>\n         <td>\n            <div class=\"form-group\">\n               <select class=\"form-control\" id=\"status\" required ngModel name=\"status\" #status=\"ngModel\">\n               <option value=\"\" selected disabled hidden>Select a Status</option>\n               <option *ngFor=\"let status of videos.status\" [value]=\"status\">{{status}}</option>\n               </select>\n            </div>\n         <td>\n      </tr>\n      <tr>\n         <td>Upload Image</td>\n         <td>\n           <input type=\"file\"  (change)=\"onFileSelected($event)\" value=\"Basic file Upload\">\n  <td>\n          <td *ngIf=\"!img2;else other_content\"><img src=\"{{path}}default.jpg\" class=\"img-fluid\" alt=\"Responsive image\"></td>\n      </tr>\n\n      <tr>\n         <td><button [routerLink]=\"['/mainAdmin']\" class=\"btn btn-lg btn-danger btn-block\" type=\"submit\">Back</button></td>\n         <td><button  class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" [disabled]=\"!addForm.form.valid\">Add</button></td>\n      </tr>\n   </table>\n   </form>\n</div>\n"

/***/ }),

/***/ "./src/app/Admin/add/add.component.ts":
/*!********************************************!*\
  !*** ./src/app/Admin/add/add.component.ts ***!
  \********************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _videos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../videos */ "./src/app/videos.ts");
/* harmony import */ var _get_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../get.service */ "./src/app/get.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_web_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-web-storage */ "./node_modules/angular-web-storage/fesm5/angular-web-storage.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddComponent = /** @class */ (function () {
    function AddComponent(getService, router, session, http) {
        this.getService = getService;
        this.router = router;
        this.session = session;
        this.http = http;
        this.videos = new _videos__WEBPACK_IMPORTED_MODULE_1__["Video"]();
        this.path = "../../../assets/";
    }
    AddComponent.prototype.onSubmit = function (title, rTime, genre, ratings, director, status) {
        var _this = this;
        if (this.img == null) {
            this.img2 = "default.jpg";
            //assigned values to be updated
            this.videosData = { title: title.value, rTime: rTime.value, genre: genre.value, ratings: ratings.value, director: director.value, status: status.value, image: this.img2 };
            // update video
            this.getService.addVideo(this.videosData).subscribe(function (data) {
                data = _this.videosData;
                window.alert("Video Added!");
                _this.router.navigate(['mainAdmin']);
            });
        }
        else {
            var fd = new FormData();
            fd.append('image', this.img, this.img.name);
            this.img2 = this.img.name;
            //assigned values to be updated
            this.videosData = { title: title.value, rTime: rTime.value, genre: genre.value, ratings: ratings.value, director: director.value, status: status.value, image: this.img2 };
            // update video
            this.getService.addVideo(this.videosData).subscribe(function (data) {
                data = _this.videosData;
                window.alert("Video Updated!");
                _this.router.navigate(['mainAdmin']);
            });
            this.getService.addImage(fd).subscribe(function (data) { return false; });
        }
    };
    AddComponent.prototype.onFileSelected = function (event) {
        this.img = event.target.files[0];
        if (this.img == null) {
            this.img2 = "default.jpg";
        }
        else {
            this.img2 = this.img.name;
        }
        var fd = new FormData();
        fd.append('image', this.img, this.img.name);
        console.log(this.img2);
    };
    AddComponent.prototype.ngOnInit = function () {
        //session handle
        if (this.img == null) {
            this.img2 = "default.jpg";
        }
        else {
            this.img2 = this.img.name;
        }
        if (!this.session.get('logged'))
            this.router.navigate(['/login'], { queryParams: { 'authentication': 'Faliure' } });
    };
    AddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/Admin/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.css */ "./src/app/Admin/add/add.component.css")]
        }),
        __metadata("design:paramtypes", [_get_service__WEBPACK_IMPORTED_MODULE_2__["GetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], angular_web_storage__WEBPACK_IMPORTED_MODULE_4__["SessionStorageService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/Admin/customers/customers.component.css":
/*!*********************************************************!*\
  !*** ./src/app/Admin/customers/customers.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0FkbWluL2N1c3RvbWVycy9jdXN0b21lcnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Admin/customers/customers.component.html":
/*!**********************************************************!*\
  !*** ./src/app/Admin/customers/customers.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm\">\n   <div class=\"container\">\n      <br />\n      <div class=\"row justify-content-center\">\n         <div class=\"col-12 col-md-10 col-lg-8\">\n            <form class=\"card card-sm\">\n               <div class=\"card-body row no-gutters align-items-center\">\n                  <div class=\"col-auto\">\n                     <i class=\"fas fa-search h4 text-body\"></i>\n                  </div>\n                  <div class=\"col\">\n                     <form id=\"filter\">\n                            <input [(ngModel)]=\"filterargs\" name=\"filter\" class=\"form-control form-control-lg form-control-borderless\" type=\"search\"\n                                placeholder=\"Search Customers\">\n                        </form>\n                  </div>\n\n               </div>\n            </form>\n         </div>\n         <div class=\"container mt-5\">\n            <div class=\"row\">\n               <div class=\"col\">\n                  <ul class=\"nav nav-pills nav-fill\">\n                     <li class=\"nav-item\">\n                        <a [routerLink]=\"['/mainAdmin']\" class=\"nav-link border border-primary\" href=\"#\">Videos</a>\n                     </li>\n                  </ul>\n               </div>\n               <div class=\"col\">\n                  <ul class=\"nav nav-pills nav-fill\">\n                     <li class=\"nav-item\">\n                        <a  [routerLink]=\"['/customers']\" class=\"nav-link  active\" >Customers</a>\n                     </li>\n                  </ul>\n               </div>\n            </div>\n         </div>\n      </div>\n   </div>\n</div>\n<div class=\"col-lg p-5\">\n   <table class=\"table\">\n      <thead class=\"thead-dark\">\n         <tr>\n            <th scope=\"col\">First Name</th>\n            <th scope=\"col\">Last Name</th>\n            <th scope=\"col\">Address</th>\n            <th scope=\"col\">City</th>\n            <th scope=\"col\">Phone Number</th>\n            <th scope=\"col\">Status</th>\n         </tr>\n      </thead>\n      <tbody>\n         <tr *ngFor=\"let data of customers | filter : filterargs\">\n            <td>{{data.firstName}}</td>\n            <td>{{data.lastName}}</td>\n            <td>{{data.address}}</td>\n            <td>{{data.city}}</td>\n            <td>{{data.phoneNumber}}</td>\n            <td>{{data.status}}</td>\n         </tr>\n      </tbody>\n   </table>\n</div>\n"

/***/ }),

/***/ "./src/app/Admin/customers/customers.component.ts":
/*!********************************************************!*\
  !*** ./src/app/Admin/customers/customers.component.ts ***!
  \********************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _get_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../get.service */ "./src/app/get.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_web_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-web-storage */ "./node_modules/angular-web-storage/fesm5/angular-web-storage.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomersComponent = /** @class */ (function () {
    function CustomersComponent(getService, session, router) {
        this.getService = getService;
        this.session = session;
        this.router = router;
        this.customers = [];
    }
    CustomersComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.session.get('logged')) {
            //get all customers
            this.getService.getAllCustomers().subscribe(function (gets) { _this.customers = gets; });
        }
        else {
            //bad session handle
            this.router.navigate(['/login'], { queryParams: { 'authentication': 'Faliure' } });
        }
    };
    CustomersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customers',
            template: __webpack_require__(/*! ./customers.component.html */ "./src/app/Admin/customers/customers.component.html"),
            styles: [__webpack_require__(/*! ./customers.component.css */ "./src/app/Admin/customers/customers.component.css")]
        }),
        __metadata("design:paramtypes", [_get_service__WEBPACK_IMPORTED_MODULE_1__["GetService"], angular_web_storage__WEBPACK_IMPORTED_MODULE_3__["SessionStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CustomersComponent);
    return CustomersComponent;
}());



/***/ }),

/***/ "./src/app/Admin/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/Admin/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0FkbWluL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Admin/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/Admin/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-sm-4 mt-5 p-5 \">\n   <div [hidden]=\"!submitted\" class=\"col text-center\">\n      <h4 class=\"text-danger m-3\"> Username/Password was incorrect. Please try again!</h4>\n   </div>\n     <div [hidden]=\"this.message !='Faliure'\" class=\"col text-center\">\n      <h4 class=\"text-danger m-3\"> Access denied!. Please Login</h4>\n   </div>\n   <form (ngSubmit)=\"onSubmit(userName,password)\" #loginForm=\"ngForm\" class=\"form-signin\">\n   <h2 class=\"form-signin-heading\">Please sign in</h2>\n   <label >Email address</label>\n   <input type=\"text\" class=\"form-control\" id=\"userName\" required [ngModel]=\"username\" #userName=\"ngModel\" name=\"name\" placeholder=\"Enter your user name\">\n   <div [hidden]=\"userName.valid || userName.pristine\" class=\"alert alert-danger\">\n      User name is required\n   </div>\n   <label>Password</label>\n   <input type=\"text\" class=\"form-control\" id=\"password\" required [ngModel]=\"passwd\" #password=\"ngModel\" name=\"password\" placeholder=\"Enter your password\" type=\"password\">\n   <div [hidden]=\"password.valid || password.pristine\" class=\"alert alert-danger\">\n      Password is required\n   </div>\n   <div class=\"checkbox\">\n      <label>\n      <input type=\"checkbox\" value=\"remember-me\"> Remember me\n      </label>\n   </div>\n   <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" >Sign in</button>\n   </form>\n</div>\n"

/***/ }),

/***/ "./src/app/Admin/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/Admin/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_web_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-web-storage */ "./node_modules/angular-web-storage/fesm5/angular-web-storage.js");
/* harmony import */ var _get_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../get.service */ "./src/app/get.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, session, getService, _route) {
        this.router = router;
        this.session = session;
        this.getService = getService;
        this._route = _route;
        this.submitted = false;
        this.redirect = 0;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getService.getAdmin().subscribe(function (data) {
            _this.adminData = data;
        });
        //get url parameters
        this._route.queryParams.subscribe(function (params) { _this.message = params['authentication']; });
    };
    LoginComponent.prototype.onSubmit = function (username, password) {
        for (var i = 0; i < this.adminData.length; i++) {
            if (username.value == this.adminData[i].email && password.value == this.adminData[i].password) {
                this.session.set('logged', true, 0);
                this.router.navigate(['/mainAdmin'], { queryParams: { 'authentication': 'Sucessful' } });
            }
            else {
                this.submitted = true;
            }
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/Admin/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/Admin/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], angular_web_storage__WEBPACK_IMPORTED_MODULE_2__["SessionStorageService"], _get_service__WEBPACK_IMPORTED_MODULE_3__["GetService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/Admin/main-admin/main-admin.component.css":
/*!***********************************************************!*\
  !*** ./src/app/Admin/main-admin/main-admin.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\n  width: 150px;\n  height: 100px;\n  border:2px solid black;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWRtaW4vbWFpbi1hZG1pbi9tYWluLWFkbWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLHVCQUF1QjtDQUN4QiIsImZpbGUiOiJzcmMvYXBwL0FkbWluL21haW4tYWRtaW4vbWFpbi1hZG1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlcjoycHggc29saWQgYmxhY2s7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/Admin/main-admin/main-admin.component.html":
/*!************************************************************!*\
  !*** ./src/app/Admin/main-admin/main-admin.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm\">\n   <div class=\"container\">\n      <br />\n      <div class=\"row justify-content-center\">\n         <div class=\"col-12 col-md-10 col-lg-8\">\n            <form class=\"card card-sm\">\n               <div class=\"card-body row no-gutters align-items-center\">\n                  <div class=\"col-auto\">\n                     <i class=\"fas fa-search h4 text-body\"></i>\n                  </div>\n\n                  <div class=\"col\">\n                      <form id=\"filter\">\n                            <input [(ngModel)]=\"filterargs\" name=\"filter\" class=\"form-control form-control-lg form-control-borderless\" type=\"search\"\n                                placeholder=\"Search movies\">\n                        </form>\n                  </div>\n\n               </div>\n            </form>\n         </div>\n\n      </div>\n   </div>\n</div>\n<div class=\"container mt-5\">\n   <div class=\"row\">\n      <div class=\"col\">\n         <ul class=\"nav nav-pills nav-fill\">\n            <li class=\"nav-item\">\n               <a [routerLink]=\"['/mainAdmin']\" class=\"nav-link active\" href=\"#\">Videos</a>\n            </li>\n         </ul>\n      </div>\n      <div class=\"col\">\n         <ul class=\"nav nav-pills nav-fill\">\n            <li class=\"nav-item\">\n               <a  [routerLink]=\"['/customers']\" class=\"nav-link border border-primary\" >Customers</a>\n            </li>\n         </ul>\n      </div>\n   </div>\n</div>\n<div class=\"container \">\n   <div class=\"row\">\n      <div class=\"col text-center\">\n         <button [routerLink]=\"['/add']\" class=\"btn btn-md btn-danger m-3\" type=\"submit\">Add new Video</button>\n      </div>\n   </div>\n</div>\n\n\n<div class= \"row\">\n<div class=\"col-lg p-5\">\n   <table class=\"table\">\n      <thead class=\"thead-dark\">\n         <tr>\n            <th scope=\"col\">Title</th>\n            <th scope=\"col\">Running Time</th>\n            <th scope=\"col\">Genre</th>\n            <th scope=\"col\">Ratings</th>\n            <th scope=\"col\">Director</th>\n            <th scope=\"col\">Image</th>\n            <th scope=\"col\">Status</th>\n            <th scope=\"col\"></th>\n         </tr>\n      </thead>\n      <tbody>\n         <tr *ngFor=\"let data of videos | filter : filterargs\">\n            <td>{{data.title}}</td>\n            <td>{{data.rTime}}</td>\n            <td>{{data.genre}}</td>\n            <td>{{data.ratings}}</td>\n            <td>{{data.director}}</td>\n                <td>\n                    <img src=\"{{path}}{{data.image}}\" class=\"img-fluid\" alt=\"Responsive image\">\n                </td>\n            <td>{{data.status}}</td>\n\n               <td >\n                  <button (click)=\"btnUpdate(data._id)\" class=\"btn btn-md btn-primary mr-1\" type=\"submit\">Update</button>\n                  <button  (click)=\"btnDelete(data._id)\" class=\"btn btn-md btn-primary\" type=\"submit\">Delete</button>\n               </td>\n\n         </tr>\n      </tbody>\n   </table>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/Admin/main-admin/main-admin.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/Admin/main-admin/main-admin.component.ts ***!
  \**********************************************************/
/*! exports provided: MainAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainAdminComponent", function() { return MainAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _get_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../get.service */ "./src/app/get.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_web_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-web-storage */ "./node_modules/angular-web-storage/fesm5/angular-web-storage.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MainAdminComponent = /** @class */ (function () {
    function MainAdminComponent(getService, router, _route, session) {
        this.getService = getService;
        this.router = router;
        this._route = _route;
        this.session = session;
        this.videos = [];
        this.path = "../../../assets/";
    }
    MainAdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.session.get('logged')) {
            //get url parameters
            this._route.queryParams.subscribe(function (params) { _this.message = params['authentication']; if (_this.message == "Sucessful")
                window.location.reload(); _this.router.navigate(['/mainAdmin']); });
            //get all videos from DB
            this.getService.getAllVideos().subscribe(function (videosList) {
                _this.videos = videosList;
            });
            //bad session handle
        }
        else {
            this.router.navigate(['/login'], { queryParams: { 'authentication': 'Faliure' } });
        }
    };
    //btn Update function
    MainAdminComponent.prototype.btnUpdate = function (id) {
        this.router.navigate(['/update'], { queryParams: { 'id': id } });
    };
    //btn delete function
    MainAdminComponent.prototype.btnDelete = function (id) {
        var _this = this;
        this.getService.delete(id).subscribe(function (video) {
            _this.videos.splice(id, 1);
            _this.router.navigate(['mainAdmin']);
        });
    };
    MainAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-admin',
            template: __webpack_require__(/*! ./main-admin.component.html */ "./src/app/Admin/main-admin/main-admin.component.html"),
            styles: [__webpack_require__(/*! ./main-admin.component.css */ "./src/app/Admin/main-admin/main-admin.component.css")],
        }),
        __metadata("design:paramtypes", [_get_service__WEBPACK_IMPORTED_MODULE_1__["GetService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], angular_web_storage__WEBPACK_IMPORTED_MODULE_3__["SessionStorageService"]])
    ], MainAdminComponent);
    return MainAdminComponent;
}());



/***/ }),

/***/ "./src/app/Admin/update/update.component.css":
/*!***************************************************!*\
  !*** ./src/app/Admin/update/update.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0FkbWluL3VwZGF0ZS91cGRhdGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Admin/update/update.component.html":
/*!****************************************************!*\
  !*** ./src/app/Admin/update/update.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-lg-5 mt-5 mb-5 p-5 bg-light\">\n<div class=\"text-center\">\n<h2 class=\"text-dark mb-5\">Update a Video</h2>\n\n</div>\n   <form (ngSubmit)=\"onSubmit(title,rTime,genre,ratings,director,status)\"  #updateForm=\"ngForm\" class=\"form-signin\">\n   <table class=\"table\">\n      <tr>\n         <td>Title:</td>\n         <td>  <input type=\"text\" class=\"form-control\" id=\"title\" required ngModel=\"{{videosData.title}}\" name=\"title\" #title=\"ngModel\"> </td>\n      </tr>\n      <tr>\n         <td>Runnig Time</td>\n         <td><input type=\"text\" class=\"form-control\" id=\"rTime\" required ngModel=\"{{videosData.rTime}}\" name=\"rTime\" #rTime=\"ngModel\"></td>\n      </tr>\n      <tr>\n         <td>Genre</td>\n         <td>\n            <div class=\"form-group\">\n               <select class=\"form-control\" id=\"genre\" required ngModel name=\"genre\" #genre=\"ngModel\">\n                  <option value=\"\" selected disabled hidden>Select a Genre</option>\n                  <option *ngFor=\"let genre of videos.genre\" [value]=\"genre\">{{genre}}</option>\n               </select>\n            </div>\n         <td>\n      </tr>\n      <tr>\n         <td>Ratings</td>\n         <td>\n            <div class=\"form-group\">\n               <select class=\"form-control\" id=\"rating\" required ngModel name=\"rating\" #ratings=\"ngModel\">\n                  <option value=\"\" selected disabled hidden>Select a Rating</option>\n                  <option *ngFor=\"let rating of videos.rating\" [value]=\"rating\">{{rating}}</option>\n               </select>\n            </div>\n         <td>\n      </tr>\n      <tr>\n         <td>Director</td>\n         <td><input type=\"text\" class=\"form-control\" id=\"director\" required ngModel=\"{{videosData.director}}\" name=\"director\" #director=\"ngModel\"> </td>\n      </tr>\n      <tr>\n         <td>Status</td>\n         <td>\n            <div class=\"form-group\">\n               <select class=\"form-control\" id=\"status\" required ngModel name=\"status\" #status=\"ngModel\">\n                  <option value=\"\" selected disabled hidden>Select a Status</option>\n                  <option *ngFor=\"let status of videos.status\" [value]=\"status\">{{status}}</option>\n               </select>\n            </div>\n         <td>\n      </tr>\n    <tr>\n       <td>Upload Image</td>\n         <td>\n           <input type=\"file\"  (change)=\"onFileSelected($event)\" value=\"Basic file Upload\">\n        <td>\n          <td *ngIf=\"!img2;else other_content\"><img src=\"{{path}}default.jpg\" class=\"img-fluid\" alt=\"Responsive image\"></td>\n\n          <ng-template #other_content><td><img src=\"{{path}}{{img2}}\" class=\"img-fluid\" alt=\"Responsive image\"></td></ng-template>\n      </tr>\n      <tr>\n         <td><button [routerLink]=\"['/mainAdmin']\" class=\"btn btn-lg btn-danger btn-block\" type=\"submit\">Back</button></td>\n         <td><button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Update</button></td>\n      </tr>\n   </table>\n   </form>\n</div>\n"

/***/ }),

/***/ "./src/app/Admin/update/update.component.ts":
/*!**************************************************!*\
  !*** ./src/app/Admin/update/update.component.ts ***!
  \**************************************************/
/*! exports provided: UpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponent", function() { return UpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _videos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../videos */ "./src/app/videos.ts");
/* harmony import */ var _get_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../get.service */ "./src/app/get.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_web_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-web-storage */ "./node_modules/angular-web-storage/fesm5/angular-web-storage.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UpdateComponent = /** @class */ (function () {
    function UpdateComponent(getService, router, _route, session) {
        this.getService = getService;
        this.router = router;
        this._route = _route;
        this.session = session;
        this.videos = new _videos__WEBPACK_IMPORTED_MODULE_1__["Video"]();
        this.videosData = { title: "", rTime: "", genre: "", ratings: "", director: "", status: "", image: "" };
        this.path = "../../../assets/";
    }
    UpdateComponent.prototype.onSubmit = function (title, rTime, genre, ratings, director, status) {
        var _this = this;
        if (this.img == null) {
            this.img2 = "default.jpg";
            //assigned values to be updated
            this.videosData = { title: title.value, rTime: rTime.value, genre: genre.value, ratings: ratings.value, director: director.value, status: status.value, image: this.img2 };
            // update video
            this.getService.updateVideo(this.videosData, this.id).subscribe(function (data) {
                data = _this.videosData;
                window.alert("Video Updated!");
                _this.router.navigate(['mainAdmin']);
            });
        }
        else {
            var fd = new FormData();
            fd.append('image', this.img, this.img.name);
            this.img2 = this.img.name;
            //assigned values to be updated
            this.videosData = { title: title.value, rTime: rTime.value, genre: genre.value, ratings: ratings.value, director: director.value, status: status.value, image: this.img2 };
            // update video
            this.getService.updateVideo(this.videosData, this.id).subscribe(function (data) {
                data = _this.videosData;
                window.alert("Video Updated!");
                _this.router.navigate(['mainAdmin']);
            });
            this.getService.addImage(fd).subscribe(function (data) { return false; });
        }
    };
    UpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.session.get('logged')) {
            //get video id parameter
            this._route.queryParams.subscribe(function (params) { _this.id = params.id; });
            // get video on db by id
            if (this.id != null) {
                this.getService.getOne(this.id).subscribe(function (video) {
                    _this.videosData = video;
                    _this.imageSrc = video.image.originalname;
                });
            }
            else {
                this.router.navigate(['mainAdmin']);
            }
        }
        else {
            //bad session handle
            this.router.navigate(['/login'], { queryParams: { 'authentication': 'Faliure' } });
        }
    };
    UpdateComponent.prototype.onFileSelected = function (event) {
        this.img = event.target.files[0];
        if (this.img == null) {
            this.img2 = "default.jpg";
        }
        else {
            this.img2 = this.img.name;
        }
        var fd = new FormData();
        fd.append('image', this.img, this.img.name);
        console.log(this.img);
    };
    UpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update',
            template: __webpack_require__(/*! ./update.component.html */ "./src/app/Admin/update/update.component.html"),
            styles: [__webpack_require__(/*! ./update.component.css */ "./src/app/Admin/update/update.component.css")]
        }),
        __metadata("design:paramtypes", [_get_service__WEBPACK_IMPORTED_MODULE_2__["GetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], angular_web_storage__WEBPACK_IMPORTED_MODULE_4__["SessionStorageService"]])
    ], UpdateComponent);
    return UpdateComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'VideoStore-app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _Admin_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Admin/login/login.component */ "./src/app/Admin/login/login.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _customer_videoslist_videoslist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customer/videoslist/videoslist.component */ "./src/app/customer/videoslist/videoslist.component.ts");
/* harmony import */ var _customer_reserve_reserve_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./customer/reserve/reserve.component */ "./src/app/customer/reserve/reserve.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Admin_main_admin_main_admin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Admin/main-admin/main-admin.component */ "./src/app/Admin/main-admin/main-admin.component.ts");
/* harmony import */ var _Admin_update_update_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Admin/update/update.component */ "./src/app/Admin/update/update.component.ts");
/* harmony import */ var _Admin_add_add_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Admin/add/add.component */ "./src/app/Admin/add/add.component.ts");
/* harmony import */ var _Admin_customers_customers_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Admin/customers/customers.component */ "./src/app/Admin/customers/customers.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _get_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./get.service */ "./src/app/get.service.ts");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./filter.pipe */ "./src/app/filter.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var appRoutes = [
    {
        path: 'login',
        component: _Admin_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    },
    {
        path: '',
        component: _customer_videoslist_videoslist_component__WEBPACK_IMPORTED_MODULE_8__["VideoslistComponent"]
    },
    {
        path: 'reserve',
        component: _customer_reserve_reserve_component__WEBPACK_IMPORTED_MODULE_9__["ReserveComponent"]
    },
    {
        path: 'mainAdmin',
        component: _Admin_main_admin_main_admin_component__WEBPACK_IMPORTED_MODULE_11__["MainAdminComponent"]
    },
    {
        path: 'add',
        component: _Admin_add_add_component__WEBPACK_IMPORTED_MODULE_13__["AddComponent"]
    },
    {
        path: 'update',
        component: _Admin_update_update_component__WEBPACK_IMPORTED_MODULE_12__["UpdateComponent"]
    },
    {
        path: 'customers',
        component: _Admin_customers_customers_component__WEBPACK_IMPORTED_MODULE_14__["CustomersComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _Admin_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _customer_videoslist_videoslist_component__WEBPACK_IMPORTED_MODULE_8__["VideoslistComponent"],
                _customer_reserve_reserve_component__WEBPACK_IMPORTED_MODULE_9__["ReserveComponent"],
                _Admin_main_admin_main_admin_component__WEBPACK_IMPORTED_MODULE_11__["MainAdminComponent"],
                _Admin_update_update_component__WEBPACK_IMPORTED_MODULE_12__["UpdateComponent"],
                _Admin_add_add_component__WEBPACK_IMPORTED_MODULE_13__["AddComponent"],
                _Admin_customers_customers_component__WEBPACK_IMPORTED_MODULE_14__["CustomersComponent"],
                _filter_pipe__WEBPACK_IMPORTED_MODULE_18__["FilterPipe"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_15__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"]
            ],
            providers: [_get_service__WEBPACK_IMPORTED_MODULE_17__["GetService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/customer/reserve/reserve.component.css":
/*!********************************************************!*\
  !*** ./src/app/customer/reserve/reserve.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\n  width: 650px;\n  height: 300px;\n  border:2px solid black;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXIvcmVzZXJ2ZS9yZXNlcnZlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLHVCQUF1QjtDQUN4QiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL3Jlc2VydmUvcmVzZXJ2ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xuICB3aWR0aDogNjUwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIGJvcmRlcjoycHggc29saWQgYmxhY2s7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/customer/reserve/reserve.component.html":
/*!*********************************************************!*\
  !*** ./src/app/customer/reserve/reserve.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngFor=\"let data of videosData\" class=\"container col-lg-6 mt-5 p-5\">\n\n<img src=\"{{path}}{{data.image}}\" class=\"img-fluid\" alt=\"Responsive image\">\n\n        <table class=\"table\">\n            <tr>\n                <td>Title:</td>\n                <td>{{data.title}}</td>\n            </tr>\n            <tr>\n                <td>Runnig Time</td>\n                <td>{{data.rTime}}</td>\n            </tr>\n            <tr>\n                <td>Genre</td>\n                <td>{{data.genre}}</td>\n            </tr>\n            <tr>\n                <td>Rating</td>\n                <td>{{data.ratings}}</td>\n            </tr>\n            <tr>\n                <td>Director</td>\n                <td>{{data.director}}</td>\n            </tr>\n            <tr>\n                <td>Customer</td>\n                <td>\n                 <div class=\"form-group\">\n               <select class=\"form-control\" id=\"genre\" required ngModel name=\"genre\" #genre=\"ngModel\">\n                  <option value=\"\" selected disabled hidden>Select a Customer</option>\n                  <option required *ngFor=\"let data of customers\" [value]=\"data\">{{data.firstName}}</option>\n               </select>\n               </div>\n                </td>\n            </tr>\n            <tr>\n                    <td><button [routerLink]=\"['']\" class=\"btn btn-lg btn-danger btn-block\" type=\"submit\">Back</button></td>\n                    <td><button (click)=\"updateVideo(data._id)\" class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Reserve</button></td>\n                </tr>\n        </table>\n\n</div> <!-- /container -->\n"

/***/ }),

/***/ "./src/app/customer/reserve/reserve.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/customer/reserve/reserve.component.ts ***!
  \*******************************************************/
/*! exports provided: ReserveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReserveComponent", function() { return ReserveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _get_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../get.service */ "./src/app/get.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReserveComponent = /** @class */ (function () {
    function ReserveComponent(getService, router, _route) {
        this.getService = getService;
        this.router = router;
        this._route = _route;
        this.customers = [];
        this.status = { status: "unavaliable" };
        this.path = "../../../assets/";
    }
    ReserveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.queryParams.subscribe(function (params) { _this.id = params.id; });
        // get video on db by id
        if (this.id != null) {
            this.getService.getOne(this.id).subscribe(function (videosList) { _this.videosData = [videosList]; });
        }
        else {
            this.router.navigate(['mainAdmin']);
        }
        //get all customers
        this.getService.getAllCustomers().subscribe(function (gets) { _this.customers = gets; });
    };
    ReserveComponent.prototype.updateVideo = function (id) {
        var _this = this;
        //update video status field on db
        this.getService.updateFieldVideo(this.status, this.id).subscribe(function (data) {
            data = _this.videosData;
            _this.router.navigate(['']);
        });
    };
    ReserveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reserve',
            template: __webpack_require__(/*! ./reserve.component.html */ "./src/app/customer/reserve/reserve.component.html"),
            styles: [__webpack_require__(/*! ./reserve.component.css */ "./src/app/customer/reserve/reserve.component.css")]
        }),
        __metadata("design:paramtypes", [_get_service__WEBPACK_IMPORTED_MODULE_2__["GetService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ReserveComponent);
    return ReserveComponent;
}());



/***/ }),

/***/ "./src/app/customer/videoslist/videoslist.component.css":
/*!**************************************************************!*\
  !*** ./src/app/customer/videoslist/videoslist.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\n  width: 150px;\n  height: 100px;\n  border:2px solid black;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXIvdmlkZW9zbGlzdC92aWRlb3NsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLHVCQUF1QjtDQUN4QiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL3ZpZGVvc2xpc3QvdmlkZW9zbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlcjoycHggc29saWQgYmxhY2s7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/customer/videoslist/videoslist.component.html":
/*!***************************************************************!*\
  !*** ./src/app/customer/videoslist/videoslist.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm\">\n    <div class=\"container\">\n        <br />\n        <div class=\"row justify-content-center\">\n            <div class=\"col-12 col-md-10 col-lg-8\">\n                <form class=\"card card-sm\">\n                    <div class=\"card-body row no-gutters align-items-center\">\n                        <div class=\"col-auto\">\n                            <i class=\"fas fa-search h4 text-body\"></i>\n                        </div>\n                        <!--end of col-->\n                        <div class=\"col\">\n                        <form id=\"filter\">\n                            <input [(ngModel)]=\"filterargs\" name=\"filter\" class=\"form-control form-control-lg form-control-borderless\" type=\"search\"\n                                placeholder=\"Search movies\">\n                        </form>\n                        </div>\n                        <!--end of col-->\n                    </div>\n                </form>\n            </div>\n\n        </div>\n    </div>\n</div>\n\n\n<div class=\"col-lg p-5\">\n    <table class=\"table\">\n        <thead class=\"thead-dark\">\n            <tr>\n                <th scope=\"col\">Title</th>\n                <th scope=\"col\">Running Time</th>\n                <th scope=\"col\">Genre</th>\n                <th scope=\"col\">Ratings</th>\n                <th scope=\"col\">Director</th>\n                <th scope=\"col\">Image</th>\n                <th scope=\"col\">Status</th>\n                <th scope=\"col\"></th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n               <tr *ngFor=\"let data of videos | filter : filterargs\">\n                <td>{{data.title}}</td>\n                <td>{{data.rTime}}</td>\n                <td>{{data.genre}}</td>\n                <td>{{data.ratings}}</td>\n                <td>{{data.director}}</td>\n                 <td>\n                    <img src=\"{{path}}{{data.image}}\" class=\"img-fluid\" alt=\"Responsive image\">\n                </td>\n                <td>{{data.status}}</td>\n\n                 <td *ngIf=\"data.status =='avaliable'\"> <button (click)=\"btnReserve(data._id)\" class=\"btn btn-md btn-primary\" type=\"submit\">Reserve</button></td>\n            </tr>\n\n\n        </tbody>\n    </table>\n</div>\n"

/***/ }),

/***/ "./src/app/customer/videoslist/videoslist.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/customer/videoslist/videoslist.component.ts ***!
  \*************************************************************/
/*! exports provided: VideoslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoslistComponent", function() { return VideoslistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _get_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../get.service */ "./src/app/get.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VideoslistComponent = /** @class */ (function () {
    function VideoslistComponent(getService, router, _route) {
        this.getService = getService;
        this.router = router;
        this._route = _route;
        this.videos = [];
        this.path = "../../../assets/";
    }
    VideoslistComponent.prototype.ngOnInit = function () {
        var _this = this;
        //get all videos
        this.getService.getAllVideos().subscribe(function (videosList) { _this.videos = videosList; });
    };
    //btn reserve function
    VideoslistComponent.prototype.btnReserve = function (id) {
        this.router.navigate(['/reserve'], { queryParams: { 'id': id } });
    };
    VideoslistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-videoslist',
            template: __webpack_require__(/*! ./videoslist.component.html */ "./src/app/customer/videoslist/videoslist.component.html"),
            styles: [__webpack_require__(/*! ./videoslist.component.css */ "./src/app/customer/videoslist/videoslist.component.css")],
        }),
        __metadata("design:paramtypes", [_get_service__WEBPACK_IMPORTED_MODULE_1__["GetService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], VideoslistComponent);
    return VideoslistComponent;
}());



/***/ }),

/***/ "./src/app/filter.pipe.ts":
/*!********************************!*\
  !*** ./src/app/filter.pipe.ts ***!
  \********************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, args) {
        if (!value)
            return null;
        if (!args)
            return value;
        args = args.toLowerCase();
        return value.filter(function (item) {
            return JSON.stringify(item).toLowerCase().includes(args);
        });
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter',
            pure: false
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li { cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEtBQUssZ0JBQWdCLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsaSB7IGN1cnNvcjogcG9pbnRlcjsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<footer class=\"page-footer font-small bg-light \">\n\n    <div class=\"footer-copyright text-center py-3\">© 2018 Copyright:\n      <a href=\"http://localhost:4200\"> Video Store</a>\n    </div>\n\n  </footer>\n\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/get.service.ts":
/*!********************************!*\
  !*** ./src/app/get.service.ts ***!
  \********************************/
/*! exports provided: GetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetService", function() { return GetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GetService = /** @class */ (function () {
    function GetService(http) {
        this.http = http;
    }
    GetService.prototype.getAllVideos = function () {
        return this.http.get('http://localhost:3000/getVideos').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (gets) {
            return gets;
        }));
    };
    GetService.prototype.getAllCustomers = function () {
        return this.http.get('http://localhost:3000/getCustomers').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (gets) {
            return gets;
        }));
    };
    GetService.prototype.addVideo = function (videos) {
        return this.http.post('http://localhost:3000/add', videos);
    };
    GetService.prototype.addImage = function (video) {
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        header.append('Content-Type', 'multipart/form-data');
        return this.http.put("http://localhost:3000/image", video);
    };
    GetService.prototype.updateVideo = function (video, videoId) {
        return this.http.post("http://localhost:3000/" + videoId, video);
    };
    GetService.prototype.updateFieldVideo = function (video, videoId) {
        return this.http.put("http://localhost:3000/" + videoId, video);
    };
    GetService.prototype.getOne = function (videoId) {
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        header.append('Content-Type', 'application/json');
        return this.http.get("http://localhost:3000/get/" + videoId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (get) {
            (function (get) { return get.json(); });
            return get;
        }));
    };
    GetService.prototype.delete = function (videoId) {
        return this.http.delete("http://localhost:3000/" + videoId, videoId);
    };
    GetService.prototype.getAdmin = function () {
        return this.http.get('http://localhost:3000/getAdmin').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (gets) {
            return gets;
        }));
    };
    GetService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GetService);
    return GetService;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li { cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEtBQUssZ0JBQWdCLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsaSB7IGN1cnNvcjogcG9pbnRlcjsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n   <li [routerLink]=\"['']\" class=\"navbar-brand\" >Video Store</li>\n   <li [routerLink]=\"['/mainAdmin']\" class=\"navbar-brand\" >Admin Space</li>\n   <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n   <span class=\"navbar-toggler-icon\"></span>\n   </button>\n   <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n      </ul>\n      <button *ngIf=\"logged == false \" [routerLink]=\"['/login']\" class=\"btn btn-lg btn-primary\" type=\"submit\">Admin Login</button>\n      <button *ngIf=\"logged == true \" (click)=\"onSubmit()\"  class=\"btn btn-lg btn-primary\" type=\"submit\">Logout</button>\n   </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_web_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-web-storage */ "./node_modules/angular-web-storage/fesm5/angular-web-storage.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, session) {
        this.router = router;
        this.session = session;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        // logout btn handle
        if (this.session.get('logged') == true) {
            this.logged = true;
        }
        else {
            this.logged = false;
        }
    };
    HeaderComponent.prototype.onSubmit = function () {
        this.session.clear();
        this.logged = false;
        this.router.navigate(['']);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], angular_web_storage__WEBPACK_IMPORTED_MODULE_2__["SessionStorageService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/videos.ts":
/*!***************************!*\
  !*** ./src/app/videos.ts ***!
  \***************************/
/*! exports provided: Video */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return Video; });
var Video = /** @class */ (function () {
    function Video() {
        this._genre = ["Comedy", "SCI_FI", "Horor", "Romance", "Action", "Thriller", "Drama", "Mystery", "Crime", "Animation", "Adventure", "Fantasy"];
        this._rating = ["1 star", "2 stars", "3 stars", "4 stars", "5 stars"];
        this._status = ["avaliable", "unavaliable"];
    }
    Object.defineProperty(Video.prototype, "genre", {
        get: function () {
            return this._genre;
        },
        set: function (value) {
            this._genre = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Video.prototype, "rating", {
        get: function () {
            return this._rating;
        },
        set: function (value) {
            this._rating = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Video.prototype, "status", {
        get: function () {
            return this._status;
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: true,
        configurable: true
    });
    return Video;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\School Work\NodeJS\VideoStoreApp-master\VideoStoreApp-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
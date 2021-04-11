(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/kamen/Programming/GitHub-repos/Team-Kaleidoscope/DevHive-Angular/src/main.ts */"zUnb");


/***/ }),

/***/ "7sqW":
/*!********************************************!*\
  !*** ./src/app/services/rating.service.ts ***!
  \********************************************/
/*! exports provided: RatingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingService", function() { return RatingService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_constants_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-constants.module */ "MA1G");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token.service */ "rj1t");






class RatingService {
    constructor(_http, _tokenService) {
        this._http = _http;
        this._tokenService = _tokenService;
    }
    createRatingWithSessionStorageRequest(postId, isLike) {
        const userId = this._tokenService.getUserIdFromSessionStorageToken();
        const token = this._tokenService.getTokenFromSessionStorage();
        return this.createRatingRequest(userId, token, postId, isLike);
    }
    putRatingWithSessionStorageRequest(postId, isLike) {
        const userId = this._tokenService.getUserIdFromSessionStorageToken();
        const token = this._tokenService.getTokenFromSessionStorage();
        return this.putRatingRequest(userId, token, postId, isLike);
    }
    getRatingByUserAndPostWithSessionStorageRequest(postId) {
        const userId = this._tokenService.getUserIdFromSessionStorageToken();
        const token = this._tokenService.getTokenFromSessionStorage();
        return this.getRatingByUserAndPostRequest(userId, token, postId);
    }
    deleteRatingFromSessionStorageRequest(ratingId) {
        const userId = this._tokenService.getUserIdFromSessionStorageToken();
        const token = this._tokenService.getTokenFromSessionStorage();
        return this.deleteRatingRequest(userId, token, ratingId);
    }
    createRatingRequest(userId, authToken, postId, isLike) {
        const options = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('UserId', userId.toString()),
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'Bearer ' + authToken)
        };
        const body = {
            postId: postId.toString(),
            isLike: isLike
        };
        return this._http.post(_app_constants_module__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].API_RATING_URL, body, options);
    }
    putRatingRequest(userId, authToken, postId, isLike) {
        const options = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('UserId', userId.toString()).set('PostId', postId.toString()),
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'Bearer ' + authToken)
        };
        const body = {
            isLike: isLike
        };
        return this._http.put(_app_constants_module__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].API_RATING_URL, body, options);
    }
    getRatingByUserAndPostRequest(userId, authToken, postId) {
        const options = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('UserId', userId.toString()).set('PostId', postId.toString()),
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'Bearer ' + authToken)
        };
        return this._http.get(_app_constants_module__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].API_RATING_URL + '/GetByUserAndPost', options);
    }
    deleteRatingRequest(userId, authToken, ratingId) {
        const options = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('UserId', userId.toString()).set('RatingId', ratingId.toString()),
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'Bearer ' + authToken)
        };
        return this._http.delete(_app_constants_module__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].API_RATING_URL, options);
    }
}
RatingService.ɵfac = function RatingService_Factory(t) { return new (t || RatingService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"])); };
RatingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RatingService, factory: RatingService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RatingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "DZ0t":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_app_constants_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app-constants.module */ "MA1G");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_friend_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/friend.service */ "wqaA");
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/language.service */ "kyOO");
/* harmony import */ var src_app_services_technology_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/technology.service */ "zFKK");
/* harmony import */ var src_app_services_feed_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/feed.service */ "Plw+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_services_token_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/token.service */ "rj1t");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../navbar/navbar.component */ "hrlM");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../loading/loading.component */ "qQYQ");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../post/post.component */ "YzH7");















function ProfileComponent_app_loading_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
function ProfileComponent_main_2_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_main_2_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.modifyFriend(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.friendOfUser ? "Unfriend" : "Add friend", " ");
} }
function ProfileComponent_main_2_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " None ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_main_2_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lang_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", lang_r11.name, " ");
} }
function ProfileComponent_main_2_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " None ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_main_2_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tech_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tech_r12.name, " ");
} }
function ProfileComponent_main_2_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r7.user.firstName, " ", ctx_r7.user.lastName, " hasn't posted anything yet! ");
} }
function ProfileComponent_main_2_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-post", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const userPost_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("paramId", userPost_r13.postId.toString());
} }
function ProfileComponent_main_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ProfileComponent_main_2_Template_main_scroll_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.onScroll($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProfileComponent_main_2_button_9_Template, 2, 1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Languages ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProfileComponent_main_2_div_13_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProfileComponent_main_2_div_15_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "section", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Technologies ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ProfileComponent_main_2_div_19_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProfileComponent_main_2_div_21_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ProfileComponent_main_2_div_24_Template, 2, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ProfileComponent_main_2_div_25_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.user.profilePictureURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r1.user.firstName, " ", ctx_r1.user.lastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" @", ctx_r1.user.userName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isTheLoggedInUser && ctx_r1.isUserLoggedIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.user.languages.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.user.languages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.user.technologies.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.user.technologies);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.userPosts.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.userPosts);
} }
class ProfileComponent {
    constructor(_titleService, _router, _userService, _friendService, _languageService, _technologyService, _feedService, _location, _tokenService) {
        this._titleService = _titleService;
        this._router = _router;
        this._userService = _userService;
        this._friendService = _friendService;
        this._languageService = _languageService;
        this._technologyService = _technologyService;
        this._feedService = _feedService;
        this._location = _location;
        this._tokenService = _tokenService;
        this._title = 'Profile';
        this.isTheLoggedInUser = false;
        this.isUserLoggedIn = false;
        this.isAdminUser = false;
        this.dataArrived = false;
        this.friendOfUser = false;
        this._titleService.setTitle(this._title);
    }
    ngOnInit() {
        this._urlUsername = this._router.url.substring(9);
        const now = new Date();
        now.setHours(now.getHours() + 3); // accounting for eastern europe timezone
        this._timeLoaded = now.toISOString();
        this._currentPage = 1;
        this.user = this._userService.getDefaultUser();
        this.userPosts = [];
        this._userService.getUserByUsernameRequest(this._urlUsername).subscribe({
            next: (res) => {
                Object.assign(this.user, res);
                this.isAdminUser = this.user.roles.map(x => x.name).includes(src_app_app_constants_module__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].ADMIN_ROLE_NAME);
                this.loadLanguages();
            },
            error: () => {
                this._router.navigate(['/not-found']);
            }
        });
    }
    loadLanguages() {
        if (this.user.languages.length > 0) {
            // When user has languages, get their names and load technologies
            this._languageService.getFullLanguagesFromIncomplete(this.user.languages).then(value => {
                this.user.languages = value;
                this.loadTechnologies();
            });
        }
        else {
            this.loadTechnologies();
        }
    }
    loadTechnologies() {
        if (this.user.technologies.length > 0) {
            // When user has technologies, get their names and then load posts
            this._technologyService.getFullTechnologiesFromIncomplete(this.user.technologies).then(value => {
                this.user.technologies = value;
                this.loadPosts();
            });
        }
        else {
            this.loadPosts();
        }
    }
    loadPosts() {
        this._feedService.getUserPostsRequest(this.user.userName, this._currentPage++, this._timeLoaded, src_app_app_constants_module__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].PAGE_SIZE).subscribe({
            next: (result) => {
                const resultArr = Object.values(result)[0];
                this.userPosts.push(...resultArr);
                this.finishUserLoading();
            },
            error: () => {
                this._currentPage = -1;
                this.finishUserLoading();
            }
        });
    }
    finishUserLoading() {
        if (sessionStorage.getItem('UserCred')) {
            this.isUserLoggedIn = true;
            const userFromToken = this._userService.getDefaultUser();
            this._userService.getUserFromSessionStorageRequest().subscribe({
                next: (tokenRes) => {
                    Object.assign(userFromToken, tokenRes);
                    if (userFromToken.friends.map(x => x.userName).includes(this._urlUsername)) {
                        this.friendOfUser = true;
                    }
                    if (userFromToken.userName === this._urlUsername) {
                        this.isTheLoggedInUser = true;
                    }
                    this.dataArrived = true;
                },
                error: () => {
                    this.logout();
                }
            });
        }
        else {
            this.dataArrived = true;
        }
    }
    logout() {
        this._tokenService.logoutUserFromSessionStorage();
        // Reload the page
        this._router.routeReuseStrategy.shouldReuseRoute = () => false;
        this._router.onSameUrlNavigation = 'reload';
        this._router.navigate([this._router.url]);
    }
    modifyFriend() {
        this.dataArrived = false;
        if (this.friendOfUser) {
            this.removeFriendFromLoggedInUser();
        }
        else {
            this.addFriendToLoggedInUser();
        }
    }
    addFriendToLoggedInUser() {
        this._friendService.postFriendWithSessionStorageRequest(this.user.userName).subscribe({
            next: () => {
                this.reloadPage();
            },
            error: () => {
                this._router.navigate(['/']);
            }
        });
    }
    removeFriendFromLoggedInUser() {
        this._friendService.deleteFriendWithSessionStorageRequest(this.user.userName).subscribe({
            next: () => {
                this.reloadPage();
            },
            error: () => {
                this._router.navigate(['/']);
            }
        });
    }
    onScroll(event) {
        // Detects when the element has reached the bottom, thx https://stackoverflow.com/a/50038429/12036073
        if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight && this._currentPage > 0) {
            this.loadPosts();
        }
    }
    reloadPage() {
        this._router.routeReuseStrategy.shouldReuseRoute = () => false;
        this._router.onSameUrlNavigation = 'reload';
        this._router.navigate([this._router.url]);
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_friend_service__WEBPACK_IMPORTED_MODULE_5__["FriendService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_language_service__WEBPACK_IMPORTED_MODULE_6__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_technology_service__WEBPACK_IMPORTED_MODULE_7__["TechnologyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_feed_service__WEBPACK_IMPORTED_MODULE_8__["FeedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_token_service__WEBPACK_IMPORTED_MODULE_10__["TokenService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 3, vars: 2, consts: [[4, "ngIf"], ["class", "scroll-standalone under-navbar flex-col centered-content", 3, "scroll", 4, "ngIf"], [1, "scroll-standalone", "under-navbar", "flex-col", "centered-content", 3, "scroll"], ["id", "user-info", 1, "card", "flex-row", "width-full", "flex-justify-center"], ["id", "profile-picture", 1, "round-image", 3, "src"], [1, "flexible", "flex-col", "flex-center-align-items", "flex-justify-center", "side-padding-dot3"], [1, "text-centered"], ["id", "add-friend", "class", "border-faded-slim padding-dot3 lighter-hover click-effect border-radius-dot3 font-size-dot8 margin-top-dot4", 3, "click", 4, "ngIf"], [1, "card", "sec-info-card", "flex-col", "width-full"], [1, "sec-info-title", "border-faded-slim", "border-bottom-only"], ["class", "none-message", 4, "ngIf"], [1, "flex-row"], ["class", "sec-info border-radius-dot5r padding-dot2", 4, "ngFor", "ngForOf"], [1, "card-hr"], ["class", "text-centered", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["id", "add-friend", 1, "border-faded-slim", "padding-dot3", "lighter-hover", "click-effect", "border-radius-dot3", "font-size-dot8", "margin-top-dot4", 3, "click"], [1, "none-message"], [1, "sec-info", "border-radius-dot5r", "padding-dot2"], [3, "paramId"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_app_loading_1_Template, 1, 0, "app-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileComponent_main_2_Template, 26, 11, "main", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.dataArrived);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataArrived);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_12__["LoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _post_post_component__WEBPACK_IMPORTED_MODULE_13__["PostComponent"]], styles: ["#user-info[_ngcontent-%COMP%] {\n  font-size: 1.3em;\n}\n\n#profile-picture[_ngcontent-%COMP%] {\n  height: 5rem;\n  width: 5rem;\n}\n\n.sec-info-card[_ngcontent-%COMP%] {\n  padding-bottom: calc(var(--card-padding) - 0.3em);\n}\n\n.sec-info-title[_ngcontent-%COMP%] {\n  padding-bottom: 0.2em;\n  margin-bottom: 0.3em;\n}\n\n.none-message[_ngcontent-%COMP%] {\n  margin-bottom: 0.3em;\n}\n\n.sec-info[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  background-color: #424242;\n  margin: 0 0.3em 0.3em 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdXNlci1pbmZvIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbn1cblxuI3Byb2ZpbGUtcGljdHVyZSB7XG4gIGhlaWdodDogNXJlbTtcbiAgd2lkdGg6IDVyZW07XG59XG5cbi5zZWMtaW5mby1jYXJkIHtcbiAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tY2FyZC1wYWRkaW5nKSAtIDAuM2VtKTtcbn1cblxuLnNlYy1pbmZvLXRpdGxlIHtcbiAgcGFkZGluZy1ib3R0b206IDAuMmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjNlbTtcbn1cblxuLm5vbmUtbWVzc2FnZSB7XG4gIG1hcmdpbi1ib3R0b206IDAuM2VtO1xufVxuXG4uc2VjLWluZm8ge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjQyNDI7XG4gIG1hcmdpbjogMCAwLjNlbSAwLjNlbSAwO1xufVxuIl19 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.css']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: src_app_services_friend_service__WEBPACK_IMPORTED_MODULE_5__["FriendService"] }, { type: src_app_services_language_service__WEBPACK_IMPORTED_MODULE_6__["LanguageService"] }, { type: src_app_services_technology_service__WEBPACK_IMPORTED_MODULE_7__["TechnologyService"] }, { type: src_app_services_feed_service__WEBPACK_IMPORTED_MODULE_8__["FeedService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"] }, { type: src_app_services_token_service__WEBPACK_IMPORTED_MODULE_10__["TokenService"] }]; }, null); })();


/***/ }),

/***/ "ENZJ":
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! form-data */ "WjD0");
/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(form_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! guid-typescript */ "kLqA");
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(guid_typescript__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_models_post_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/models/post.model */ "pR1J");
/* harmony import */ var _app_constants_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-constants.module */ "MA1G");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./token.service */ "rj1t");









class PostService {
    constructor(_http, _tokenService) {
        this._http = _http;
        this._tokenService = _tokenService;
    }
    getDefaultPost() {
        return new src_models_post_model__WEBPACK_IMPORTED_MODULE_4__["Post"](guid_typescript__WEBPACK_IMPORTED_MODULE_3__["Guid"].createEmpty(), '', '', '', '', new Date(), [], [], 0);
    }
    /* Requests from session storage */
    createPostWithSessionStorageRequest(postMessage, files) {
        const userId = this._tokenService.getUserIdFromSessionStorageToken();
        const token = this._tokenService.getTokenFromSessionStorage();
        return this.createPostRequest(userId, token, postMessage, files);
    }
    putPostWithSessionStorageRequest(postId, newMessage, posts) {
        const userId = this._tokenService.getUserIdFromSessionStorageToken();
        const token = this._tokenService.getTokenFromSessionStorage();
        return this.putPostRequest(userId, token, postId, newMessage, posts);
    }
    deletePostWithSessionStorage(postId) {
        const token = this._tokenService.getTokenFromSessionStorage();
        return this.deletePostRequest(postId, token);
    }
    /* Post requests */
    createPostRequest(userId, authToken, postMessage, files) {
        const form = new form_data__WEBPACK_IMPORTED_MODULE_2__();
        form.append('message', postMessage);
        for (const file of files) {
            form.append('files', file, file.name);
        }
        const options = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('UserId', userId.toString()),
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'Bearer ' + authToken)
        };
        return this._http.post(_app_constants_module__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API_POST_URL, form, options);
    }
    getPostRequest(id) {
        const options = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('Id', id.toString())
        };
        return this._http.get(_app_constants_module__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API_POST_URL, options);
    }
    putPostRequest(userId, authToken, postId, newMessage, files) {
        const form = new form_data__WEBPACK_IMPORTED_MODULE_2__();
        form.append('postId', postId);
        form.append('newMessage', newMessage);
        for (const file of files) {
            form.append('files', file, file.name);
        }
        const options = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('UserId', userId.toString()),
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'Bearer ' + authToken)
        };
        return this._http.put(_app_constants_module__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API_POST_URL, form, options);
    }
    deletePostRequest(postId, authToken) {
        const options = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('PostId', postId.toString()),
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'Bearer ' + authToken)
        };
        return this._http.delete(_app_constants_module__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API_POST_URL, options);
    }
}
PostService.ɵfac = function PostService_Factory(t) { return new (t || PostService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"])); };
PostService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PostService, factory: PostService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PostService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"] }]; }, null); })();


/***/ }),

/***/ "F33o":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class NotFoundComponent {
    constructor(_titleService, _router) {
        this._titleService = _titleService;
        this._router = _router;
        this._title = 'Not Found!';
        this._titleService.setTitle(this._title);
    }
    ngOnInit() {
    }
    backToFeed() {
        this._router.navigate(['/']);
    }
    backToLogin() {
        this._router.navigate(['/login']);
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 12, vars: 0, consts: [[1, "centered-content", "flex-col", "flex-center-align-items", "flex-justify-center", "height-full"], [1, "card", "width-full", "padding-dot6"], [1, "title"], [1, "card-hr"], [1, "flex-row", "flexible-children", "padding-dot2"], [1, "flex-row", "flex-justify-center", "flex-center-align-items", "border-faded-slim", "padding-dot3", "lighter-hover", "click-effect", "border-radius-dot3", "margin-right-dot2", 3, "click"], ["src", "/assets/icons/tabler-icon-home.svg"], [1, "flex-row", "flex-justify-center", "flex-center-align-items", "border-faded-slim", "padding-dot3", "lighter-hover", "click-effect", "border-radius-dot3", 3, "click"], ["src", "/assets/icons/tabler-icon-login.svg"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "summary", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Page not found! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotFoundComponent_Template_button_click_6_listener() { return ctx.backToFeed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u00A0Back to feed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotFoundComponent_Template_button_click_9_listener() { return ctx.backToLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u00A0Back to login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#content[_ngcontent-%COMP%] {\n  font-size: 1.3em;\n}\n\n#content[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n\twidth: 100%;\n\tborder: 1px solid black;\n\tbox-sizing: border-box;\n}\n\n#back-btns[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n\n#back-btns[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-right: .2em;\n}\n\n#back-btns[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-last-child(1) {\n  margin-right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0NBQ0MsV0FBVztDQUNYLHVCQUF1QjtDQUN2QixzQkFBc0I7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsT0FBTztFQUNQLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoibm90LWZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG59XG5cbiNjb250ZW50IGhyIHtcblx0d2lkdGg6IDEwMCU7XG5cdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4jYmFjay1idG5zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbiNiYWNrLWJ0bnMgPiAqIHtcbiAgZmxleDogMTtcbiAgbWFyZ2luLXJpZ2h0OiAuMmVtO1xufVxuXG4jYmFjay1idG5zID4gKjpudGgtbGFzdC1jaGlsZCgxKSB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbiJdfQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.css']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "F8Cl":
/*!*************************************************************!*\
  !*** ./src/app/components/error-bar/error-bar.component.ts ***!
  \*************************************************************/
/*! exports provided: ErrorBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorBarComponent", function() { return ErrorBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ErrorBarComponent {
    constructor() {
        this.errorMsg = '';
    }
    ngOnInit() {
        this.hideError();
    }
    showError(error) {
        this.errorMsg = '';
        const errors = Object.values(Object.values(error.error)[0]);
        for (const errorArr of errors) {
            for (const errorMsg of errorArr) {
                this.errorMsg += errorMsg + '\n';
            }
        }
    }
    hideError() {
        this.errorMsg = '';
    }
}
ErrorBarComponent.ɵfac = function ErrorBarComponent_Factory(t) { return new (t || ErrorBarComponent)(); };
ErrorBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorBarComponent, selectors: [["app-error-bar"]], decls: 2, vars: 1, consts: [["id", "error-bar"]], template: function ErrorBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.errorMsg);
    } }, styles: ["#error-bar[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 100%;\n  background-color: var(--failure);\n  color: white;\n  padding: .2em;\n  text-align: center;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n}\n\n#error-bar[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJlcnJvci1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNlcnJvci1iYXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmFpbHVyZSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogLjJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cblxuI2Vycm9yLWJhcjplbXB0eSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4iXX0= */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error-bar',
                templateUrl: './error-bar.component.html',
                styleUrls: ['./error-bar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "JnnQ":
/*!*******************************************************************!*\
  !*** ./src/app/components/comment-page/comment-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: CommentPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentPageComponent", function() { return CommentPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! guid-typescript */ "kLqA");
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(guid_typescript__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/comment.service */ "mxDV");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../loading/loading.component */ "qQYQ");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../post/post.component */ "YzH7");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../comment/comment.component */ "fGHt");











function CommentPageComponent_app_loading_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
function CommentPageComponent_main_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-post", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentPageComponent_main_2_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.goToPostPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Show all comments ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " ... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-comment", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("paramId", ctx_r1.postId.toString());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("paramId", ctx_r1.commentId.toString());
} }
class CommentPageComponent {
    constructor(_titleService, _router, _commentService) {
        this._titleService = _titleService;
        this._router = _router;
        this._commentService = _commentService;
        this._title = 'Comment';
        this.dataArrived = false;
        this._titleService.setTitle(this._title);
    }
    ngOnInit() {
        this.commentId = guid_typescript__WEBPACK_IMPORTED_MODULE_1__["Guid"].parse(this._router.url.substring(9));
        this.postId = guid_typescript__WEBPACK_IMPORTED_MODULE_1__["Guid"].createEmpty();
        this._commentService.getCommentRequest(this.commentId).subscribe({
            next: (result) => {
                this.postId = Object.values(result)[1];
                this.dataArrived = true;
            },
            error: () => {
                this._router.navigate(['/not-found']);
            }
        });
    }
    goToPostPage() {
        this._router.navigate(['/post/' + this.postId]);
    }
}
CommentPageComponent.ɵfac = function CommentPageComponent_Factory(t) { return new (t || CommentPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_4__["CommentService"])); };
CommentPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommentPageComponent, selectors: [["app-comment-page"]], decls: 3, vars: 2, consts: [[4, "ngIf"], ["class", "centered-content scroll-standalone under-navbar flex-col", 4, "ngIf"], [1, "centered-content", "scroll-standalone", "under-navbar", "flex-col"], [3, "paramId"], [1, "card-hr"], [1, "card", "flex-col", "width-full", "margin-0-top"], [1, "fg-focus", "border-faded-slim", "padding-dot2", "lighter-hover", "click-effect", "border-radius-dot3", 3, "click"], [1, "text-centered"]], template: function CommentPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CommentPageComponent_app_loading_1_Template, 1, 0, "app-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CommentPageComponent_main_2_Template, 9, 2, "main", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.dataArrived);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataArrived);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], _post_post_component__WEBPACK_IMPORTED_MODULE_8__["PostComponent"], _comment_comment_component__WEBPACK_IMPORTED_MODULE_9__["CommentComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21tZW50LXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-comment-page',
                templateUrl: './comment-page.component.html',
                styleUrls: ['./comment-page.component.css']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_4__["CommentService"] }]; }, null); })();


/***/ }),

/***/ "MA1G":
/*!*****************************************!*\
  !*** ./src/app/app-constants.module.ts ***!
  \*****************************************/
/*! exports provided: AppConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConstants", function() { return AppConstants; });
class AppConstants {
}
AppConstants.BASE_API_URL = 'http://localhost:5000/api';
AppConstants.API_USER_URL = AppConstants.BASE_API_URL + '/User';
AppConstants.API_PROFILE_PICTURE_URL = AppConstants.BASE_API_URL + '/ProfilePicture';
AppConstants.API_FRIENDS_URL = AppConstants.BASE_API_URL + '/Friends';
AppConstants.API_USER_LOGIN_URL = AppConstants.API_USER_URL + '/login';
AppConstants.API_USER_REGISTER_URL = AppConstants.API_USER_URL + '/register';
AppConstants.API_LANGUAGE_URL = AppConstants.BASE_API_URL + '/Language';
AppConstants.API_TECHNOLOGY_URL = AppConstants.BASE_API_URL + '/Technology';
AppConstants.API_POST_URL = AppConstants.BASE_API_URL + '/Post';
AppConstants.API_RATING_URL = AppConstants.BASE_API_URL + '/Rating';
AppConstants.API_FEED_URL = AppConstants.BASE_API_URL + '/Feed';
AppConstants.API_COMMENT_URL = AppConstants.BASE_API_URL + '/Comment';
AppConstants.PAGE_SIZE = 10;
AppConstants.FALLBACK_PROFILE_ICON = 'assets/icons/tabler-icon-user.svg';
AppConstants.SESSION_TOKEN_KEY = 'UserCred';
AppConstants.ADMIN_ROLE_NAME = 'Admin';


/***/ }),

/***/ "Plw+":
/*!******************************************!*\
  !*** ./src/app/services/feed.service.ts ***!
  \******************************************/
/*! exports provided: FeedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedService", function() { return FeedService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_constants_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-constants.module */ "MA1G");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token.service */ "rj1t");






class FeedService {
    constructor(_http, _tokenService) {
        this._http = _http;
        this._tokenService = _tokenService;
    }
    /* Requests from session storage */
    getUserFeedFromSessionStorageRequest(pageNumber, firstTimeIssued, pageSize) {
        const token = this._tokenService.getTokenFromSessionStorage();
        const userId = this._tokenService.getUserIdFromSessionStorageToken();
        return this.getUserFeedRequest(userId, token, pageNumber, firstTimeIssued, pageSize);
    }
    /* Feed requests */
    getUserFeedRequest(userId, authToken, pageNumber, firstTimeIssued, pageSize) {
        const body = {
            pageNumber: pageNumber,
            firstPageTimeIssued: firstTimeIssued,
            pageSize: pageSize
        };
        const options = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('UserId', userId.toString()),
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'Bearer ' + authToken)
        };
        return this._http.post(_app_constants_module__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].API_FEED_URL + '/GetPosts', body, options);
    }
    getUserPostsRequest(userName, pageNumber, firstTimeIssued, pageSize) {
        const body = {
            pageNumber: pageNumber,
            firstPageTimeIssued: firstTimeIssued,
            pageSize: pageSize
        };
        const options = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('UserName', userName)
        };
        return this._http.post(_app_constants_module__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].API_FEED_URL + '/GetUserPosts', body, options);
    }
}
FeedService.ɵfac = function FeedService_Factory(t) { return new (t || FeedService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"])); };
FeedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FeedService, factory: FeedService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FeedService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'Angular';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "main"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".main[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZCIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbiJdfQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "TqOj":
/*!***************************************************************************!*\
  !*** ./src/app/components/profile-settings/profile-settings.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProfileSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileSettingsComponent", function() { return ProfileSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _error_bar_error_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../error-bar/error-bar.component */ "F8Cl");
/* harmony import */ var _success_bar_success_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../success-bar/success-bar.component */ "Uu83");
/* harmony import */ var src_app_app_constants_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app-constants.module */ "MA1G");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_profile_picture_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/profile-picture.service */ "YgeO");
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/language.service */ "kyOO");
/* harmony import */ var src_app_services_technology_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/technology.service */ "zFKK");
/* harmony import */ var src_app_services_token_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/token.service */ "rj1t");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../navbar/navbar.component */ "hrlM");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../loading/loading.component */ "qQYQ");



















function ProfileSettingsComponent_app_loading_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
function ProfileSettingsComponent_section_3_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileSettingsComponent_section_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.goToAdminPanel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Go to admin panel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileSettingsComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Update profile picture ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileSettingsComponent_label_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileSettingsComponent_label_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Minimum 3 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileSettingsComponent_label_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileSettingsComponent_label_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Minimum 3 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileSettingsComponent_label_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileSettingsComponent_label_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Minimum 3 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileSettingsComponent_label_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileSettingsComponent_label_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Invalid email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileSettingsComponent_section_40_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You haven't chosen any languages! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileSettingsComponent_section_40_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Chosen languages: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileSettingsComponent_section_40_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileSettingsComponent_section_40_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const lang_r25 = ctx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.langClick(lang_r25.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lang_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", lang_r25.name, " ");
} }
function ProfileSettingsComponent_section_40_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No other languages available! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileSettingsComponent_section_40_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Available languages: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileSettingsComponent_section_40_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileSettingsComponent_section_40_div_10_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const lang_r28 = ctx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r29.langClick(lang_r28.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lang_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", lang_r28.name, " ");
} }
function ProfileSettingsComponent_section_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileSettingsComponent_section_40_div_2_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileSettingsComponent_section_40_div_3_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProfileSettingsComponent_section_40_div_5_Template, 2, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProfileSettingsComponent_section_40_div_7_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProfileSettingsComponent_section_40_div_8_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProfileSettingsComponent_section_40_div_10_Template, 2, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.chosenLanguages.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.chosenLanguages.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.chosenLanguages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.availableLanguages.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.availableLanguages.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.availableLanguages);
} }
function ProfileSettingsComponent_section_43_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You haven't chosen any technologies! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileSettingsComponent_section_43_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Chosen technologies: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileSettingsComponent_section_43_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileSettingsComponent_section_43_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const tech_r37 = ctx.$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r38.techClick(tech_r37.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tech_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tech_r37.name, " ");
} }
function ProfileSettingsComponent_section_43_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No other technologies available! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileSettingsComponent_section_43_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Available technologies: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileSettingsComponent_section_43_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileSettingsComponent_section_43_div_10_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const tech_r40 = ctx.$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r41.techClick(tech_r40.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tech_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tech_r40.name, " ");
} }
function ProfileSettingsComponent_section_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileSettingsComponent_section_43_div_2_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileSettingsComponent_section_43_div_3_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProfileSettingsComponent_section_43_div_5_Template, 2, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProfileSettingsComponent_section_43_div_7_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProfileSettingsComponent_section_43_div_8_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProfileSettingsComponent_section_43_div_10_Template, 2, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.chosenTechnologies.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.chosenTechnologies.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.chosenTechnologies);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.availableTechnologies.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.availableTechnologies.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.availableTechnologies);
} }
function ProfileSettingsComponent_label_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileSettingsComponent_label_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Minimum 3 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileSettingsComponent_label_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*At least 1 number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileSettingsComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Are you sure you want to delete your account?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "This is permanent! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProfileSettingsComponent {
    constructor(_titleService, _router, _userService, _profilePictureService, _languageService, _technologyService, _tokenService, _fb, _location) {
        this._titleService = _titleService;
        this._router = _router;
        this._userService = _userService;
        this._profilePictureService = _profilePictureService;
        this._languageService = _languageService;
        this._technologyService = _technologyService;
        this._tokenService = _tokenService;
        this._fb = _fb;
        this._location = _location;
        this._title = 'Profile Settings';
        this.isAdminUser = false;
        this.dataArrived = false;
        this.deleteAccountConfirm = false;
        this.showLanguages = false;
        this.showTechnologies = false;
        this.showCurrentPassword = false;
        this._titleService.setTitle(this._title);
    }
    ngOnInit() {
        this._urlUsername = this._router.url.substring(9);
        this._urlUsername = this._urlUsername.substring(0, this._urlUsername.length - 9);
        this.user = this._userService.getDefaultUser();
        this.availableLanguages = [];
        this.availableTechnologies = [];
        this.newProfilePicture = new File([], '');
        // Initializing forms with blank (default) values
        this.updateUserFormGroup = this._fb.group({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
        this.updateProfilePictureFormGroup = this._fb.group({
            fileUpload: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this._userService.getUserByUsernameRequest(this._urlUsername).subscribe({
            next: (res) => {
                Object.assign(this.user, res);
                this.isAdminUser = this.user.roles.map(x => x.name).includes(src_app_app_constants_module__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].ADMIN_ROLE_NAME);
                this.finishUserLoading();
            },
            error: () => {
                this._router.navigate(['/not-found']);
            }
        });
    }
    finishUserLoading() {
        if (sessionStorage.getItem('UserCred')) {
            const userFromToken = this._userService.getDefaultUser();
            this._userService.getUserFromSessionStorageRequest().subscribe({
                next: (tokenRes) => {
                    Object.assign(userFromToken, tokenRes);
                    if (userFromToken.userName === this._urlUsername) {
                        this.loadUserSecondaryInfo();
                        this.initForms();
                        this.dataArrived = true;
                    }
                    else {
                        this.goToProfile();
                    }
                },
                error: () => {
                    this.logout();
                }
            });
        }
        else {
            this.goToProfile();
        }
    }
    loadUserSecondaryInfo() {
        // Load languages and tehnologies of user
        this._languageService.getFullLanguagesFromIncomplete(this.user.languages).then((result) => {
            this.chosenLanguages = result;
            this.loadAvailableLanguages();
        });
        this._technologyService.getFullTechnologiesFromIncomplete(this.user.technologies).then((result) => {
            this.chosenTechnologies = result;
            this.loadAvailableTechnologies();
        });
    }
    loadAvailableLanguages() {
        this._languageService.getAllLanguagesWithSessionStorageRequest().subscribe({
            next: (result) => {
                const allAvailable = result;
                // Remove the chosen languages from all of the avaiable ones
                this.availableLanguages = allAvailable.filter(a => !this.user.languages.some(l => l.name === a.name));
            }
        });
    }
    loadAvailableTechnologies() {
        this._technologyService.getAllTechnologiesWithSessionStorageRequest().subscribe({
            next: (result) => {
                const allAvailable = result;
                // Remove the chosen technologies from all of the avaiable ones
                this.availableTechnologies = allAvailable.filter(a => !this.user.technologies.some(t => t.name === a.name));
            }
        });
    }
    initForms() {
        this.updateUserFormGroup = this._fb.group({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.user.firstName, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)
            ]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.user.lastName, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)
            ]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.user.userName, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.user.email, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('.*[0-9].*') // Check if password contains atleast one number
            ]),
        });
        this.updateProfilePictureFormGroup = this._fb.group({
            fileUpload: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.updateUserFormGroup.valueChanges.subscribe({
            next: () => {
                var _a, _b;
                (_a = this._successBar) === null || _a === void 0 ? void 0 : _a.hideMsg();
                (_b = this._errorBar) === null || _b === void 0 ? void 0 : _b.hideError();
            }
        });
    }
    onFileUpload(event) {
        this.newProfilePicture = event.target.files[0];
    }
    updateProfilePicture() {
        if (this.newProfilePicture.size === 0) {
            return;
        }
        this._profilePictureService.putPictureWithSessionStorageRequest(this.newProfilePicture).subscribe({
            next: () => {
                this.reloadPage();
            }
        });
        this.dataArrived = false;
    }
    onSubmit() {
        this._successBar.hideMsg();
        this._errorBar.hideError();
        this.patchLanguagesControl();
        this.patchTechnologiesControl();
        this._userService.putUserFromSessionStorageRequest(this.updateUserFormGroup, this.chosenLanguages, this.chosenTechnologies, this.user.roles, this.user.friends).subscribe({
            next: () => {
                var _a;
                this._successBar.showMsg('Profile updated successfully!');
                // "Reload" page when changing username
                const newUsername = (_a = this.updateUserFormGroup.get('username')) === null || _a === void 0 ? void 0 : _a.value;
                if (newUsername !== this._urlUsername) {
                    this._router.navigate(['/profile/' + newUsername + '/settings']);
                }
            },
            error: (err) => {
                this._errorBar.showError(err);
            }
        });
    }
    patchLanguagesControl() {
        var _a, _b;
        // Get user input
        const langControl = (_b = (_a = this.updateUserFormGroup.get('languageInput')) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : '';
        if (langControl === '') {
            // Add the data to the form (to the value that is going to be sent)
            this.updateUserFormGroup.patchValue({
                languages: []
            });
        }
        else {
            const names = langControl.split(' ');
            // Transfer user input to objects of type { "name": "value" }
            const actualLanguages = [];
            for (const lName of names) {
                if (lName !== '') {
                    actualLanguages.push({ name: lName });
                }
            }
            // Add the data to the form (to the value that is going to be sent)
            this.updateUserFormGroup.patchValue({
                languages: actualLanguages
            });
        }
    }
    patchTechnologiesControl() {
        var _a, _b;
        // Get user input
        const techControl = (_b = (_a = this.updateUserFormGroup.get('technologyInput')) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : '';
        if (techControl === '') {
            // Add the data to the form (to the value that is going to be sent)
            this.updateUserFormGroup.patchValue({
                technologies: []
            });
        }
        else {
            const names = techControl.split(' ');
            // Transfer user input to objects of type { "name": "value" }
            const actualTechnologies = [];
            for (const tName of names) {
                if (tName !== '') {
                    actualTechnologies.push({ name: tName });
                }
            }
            // Add the data to the form (to the value that is going to be sent)
            this.updateUserFormGroup.patchValue({
                technologies: actualTechnologies
            });
        }
    }
    langClick(name) {
        if (this.chosenLanguages.some(c => c.name === name)) {
            const index = this.chosenLanguages.findIndex(t => t.name === name);
            this.availableLanguages.push(this.chosenLanguages[index]);
            this.chosenLanguages.splice(index, 1);
        }
        else {
            const index = this.availableLanguages.findIndex(t => t.name === name);
            this.chosenLanguages.push(this.availableLanguages[index]);
            this.availableLanguages.splice(index, 1);
        }
    }
    techClick(name) {
        if (this.chosenTechnologies.some(c => c.name === name)) {
            const index = this.chosenTechnologies.findIndex(t => t.name === name);
            this.availableTechnologies.push(this.chosenTechnologies[index]);
            this.chosenTechnologies.splice(index, 1);
        }
        else {
            const index = this.availableTechnologies.findIndex(t => t.name === name);
            this.chosenTechnologies.push(this.availableTechnologies[index]);
            this.availableTechnologies.splice(index, 1);
        }
    }
    goToProfile() {
        this._router.navigate([this._router.url.substring(0, this._router.url.length - 9)]);
    }
    goToAdminPanel() {
        this._router.navigate(['/admin-panel']);
    }
    logout() {
        this._tokenService.logoutUserFromSessionStorage();
        this._router.navigate(['/login']);
    }
    toggleLanguages() {
        this.showLanguages = !this.showLanguages;
    }
    toggleTechnologies() {
        this.showTechnologies = !this.showTechnologies;
    }
    deleteAccount() {
        if (this.deleteAccountConfirm) {
            this._userService.deleteUserFromSessionStorageRequest().subscribe({
                next: () => {
                    this.logout();
                },
                error: (err) => {
                    this._errorBar.showError(err);
                }
            });
            this.dataArrived = false;
        }
        else {
            this.deleteAccountConfirm = true;
        }
    }
    reloadPage() {
        this._router.routeReuseStrategy.shouldReuseRoute = () => false;
        this._router.onSameUrlNavigation = 'reload';
        this._router.navigate([this._router.url]);
    }
    toggleShowPassword(index) {
        switch (index) {
            case 0: this.showCurrentPassword = !this.showCurrentPassword;
        }
    }
}
ProfileSettingsComponent.ɵfac = function ProfileSettingsComponent_Factory(t) { return new (t || ProfileSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_profile_picture_service__WEBPACK_IMPORTED_MODULE_8__["ProfilePictureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_language_service__WEBPACK_IMPORTED_MODULE_9__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_technology_service__WEBPACK_IMPORTED_MODULE_10__["TechnologyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_token_service__WEBPACK_IMPORTED_MODULE_11__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__["Location"])); };
ProfileSettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileSettingsComponent, selectors: [["app-profile-settings"]], viewQuery: function ProfileSettingsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_error_bar_error_bar_component__WEBPACK_IMPORTED_MODULE_2__["ErrorBarComponent"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_success_bar_success_bar_component__WEBPACK_IMPORTED_MODULE_3__["SuccessBarComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._errorBar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._successBar = _t.first);
    } }, decls: 63, vars: 22, consts: [[4, "ngIf"], [1, "scroll-standalone", "under-navbar", "centered-content", "flex-col"], ["class", "card width-full", 4, "ngIf"], [1, "flex-row", "card", "width-full", "font-size-dot9", "margin-top-bot-dot7", 3, "formGroup", "ngSubmit"], ["id", "profile-picture", 1, "round-image", 3, "src"], [1, "flexible", "flex-col", "flex-center-align-items", "flex-justify-center", "padding-side-font"], ["type", "file", "accept", "image/*", "formControlName", "fileUpload", 1, "width-full", "border-faded-slim", "padding-dot3", "lighter-hover", "click-effect", "border-radius-dot3", 3, "change"], ["class", "width-full border-faded-slim padding-dot3 lighter-hover click-effect border-radius-dot3 margin-top-dot4", "type", "submit", 4, "ngIf"], [1, "flex-col", "card", "width-full", "padding-dot6", 3, "formGroup", "ngSubmit"], [1, "flex-col"], [1, "flex-row"], [1, "flexible", "fg-focus"], ["class", "error", 4, "ngIf"], ["type", "text", "formControlName", "firstName", "required", "", 1, "fancy-input", "border-faded-slim", "border-bottom-only"], ["type", "text", "formControlName", "lastName", "required", "", 1, "fancy-input", "border-faded-slim", "border-bottom-only"], ["type", "text", "formControlName", "username", "required", "", 1, "fancy-input", "border-faded-slim", "border-bottom-only"], ["type", "text", "formControlName", "email", "required", "", 1, "fancy-input", "border-faded-slim", "border-bottom-only"], ["type", "button", 1, "fg-focus", "width-full", "border-faded-slim", "padding-dot3", "lighter-hover", "click-effect", "margin-top-dot4", 3, "click"], ["class", "flex-row flexible-children border-faded-slim padding-dot3 margin-top-dot5", 4, "ngIf"], [1, "flex-col", "input-selection"], ["formControlName", "password", "required", "", 1, "fancy-input", "border-faded-slim", "border-bottom-only", "padding-right-1dot5", 3, "type"], ["type", "button", 1, "show-password-button", "hover-half-opacity", "click-effect", 3, "click"], [3, "src"], [1, "margin-top-bot-dot3"], ["type", "submit", 1, "width-full", "border-faded-slim", "padding-dot3", "lighter-hover", "click-effect", "border-radius-dot3"], [1, "card", "width-full"], ["class", "margin-bot-dot5 text-centered fg-error", 4, "ngIf"], [1, "width-full", "border-faded-slim", "padding-dot3", "lighter-hover", "click-effect", "border-radius-dot3", "fg-error", 3, "click"], [1, "width-full", "border-faded-slim", "padding-dot3", "lighter-hover", "click-effect", "border-radius-dot3", 3, "click"], ["type", "submit", 1, "width-full", "border-faded-slim", "padding-dot3", "lighter-hover", "click-effect", "border-radius-dot3", "margin-top-dot4"], [1, "error"], [1, "flex-row", "flexible-children", "border-faded-slim", "padding-dot3", "margin-top-dot5"], [1, "padding-right-1"], ["class", "none-message", 4, "ngIf"], ["class", "border-faded-slim border-bottom-only", 4, "ngIf"], [1, "flex-row", "margin-top-dot4"], ["class", "sec-info border-radius-dot5r padding-dot2 hover-half-opacity click-effect", 3, "click", 4, "ngFor", "ngForOf"], [1, "none-message"], [1, "border-faded-slim", "border-bottom-only"], [1, "sec-info", "border-radius-dot5r", "padding-dot2", "hover-half-opacity", "click-effect", 3, "click"], [1, "margin-bot-dot5", "text-centered", "fg-error"]], template: function ProfileSettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileSettingsComponent_app_loading_1_Template, 1, 0, "app-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileSettingsComponent_section_3_Template, 3, 0, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProfileSettingsComponent_Template_form_ngSubmit_4_listener() { return ctx.updateProfilePicture(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProfileSettingsComponent_Template_input_change_7_listener($event) { return ctx.onFileUpload($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProfileSettingsComponent_button_8_Template, 2, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProfileSettingsComponent_Template_form_ngSubmit_9_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProfileSettingsComponent_label_14_Template, 2, 0, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProfileSettingsComponent_label_15_Template, 2, 0, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProfileSettingsComponent_label_21_Template, 2, 0, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProfileSettingsComponent_label_22_Template, 2, 0, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ProfileSettingsComponent_label_28_Template, 2, 0, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ProfileSettingsComponent_label_29_Template, 2, 0, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ProfileSettingsComponent_label_35_Template, 2, 0, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ProfileSettingsComponent_label_36_Template, 2, 0, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileSettingsComponent_Template_button_click_38_listener() { return ctx.toggleLanguages(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " \u25BC Edit Languages \u25BC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ProfileSettingsComponent_section_40_Template, 11, 6, "section", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileSettingsComponent_Template_button_click_41_listener() { return ctx.toggleTechnologies(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " \u25BC Edit Technologies \u25BC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ProfileSettingsComponent_section_43_Template, 11, 6, "section", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "section", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Current Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, ProfileSettingsComponent_label_48_Template, 2, 0, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, ProfileSettingsComponent_label_49_Template, 2, 0, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, ProfileSettingsComponent_label_50_Template, 2, 0, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileSettingsComponent_Template_button_click_52_listener() { return ctx.toggleShowPassword(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "section", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "app-success-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "app-error-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Update profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "section", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, ProfileSettingsComponent_div_60_Template, 4, 0, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileSettingsComponent_Template_button_click_61_listener() { return ctx.deleteAccount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Delete account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_6_0 = null;
        let tmp_7_0 = null;
        let tmp_8_0 = null;
        let tmp_9_0 = null;
        let tmp_10_0 = null;
        let tmp_11_0 = null;
        let tmp_12_0 = null;
        let tmp_13_0 = null;
        let tmp_16_0 = null;
        let tmp_17_0 = null;
        let tmp_18_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.dataArrived);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdminUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.updateProfilePictureFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.user.profilePictureURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newProfilePicture.size > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.updateUserFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_6_0 = ctx.updateUserFormGroup.get("firstName")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx.updateUserFormGroup.get("firstName")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_8_0 = ctx.updateUserFormGroup.get("lastName")) == null ? null : tmp_8_0.errors == null ? null : tmp_8_0.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_9_0 = ctx.updateUserFormGroup.get("lastName")) == null ? null : tmp_9_0.errors == null ? null : tmp_9_0.errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_10_0 = ctx.updateUserFormGroup.get("username")) == null ? null : tmp_10_0.errors == null ? null : tmp_10_0.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_11_0 = ctx.updateUserFormGroup.get("username")) == null ? null : tmp_11_0.errors == null ? null : tmp_11_0.errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_12_0 = ctx.updateUserFormGroup.get("email")) == null ? null : tmp_12_0.errors == null ? null : tmp_12_0.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_13_0 = ctx.updateUserFormGroup.get("email")) == null ? null : tmp_13_0.errors == null ? null : tmp_13_0.errors.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLanguages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showTechnologies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_16_0 = ctx.updateUserFormGroup.get("password")) == null ? null : tmp_16_0.errors == null ? null : tmp_16_0.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_17_0 = ctx.updateUserFormGroup.get("password")) == null ? null : tmp_17_0.errors == null ? null : tmp_17_0.errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_18_0 = ctx.updateUserFormGroup.get("password")) == null ? null : tmp_18_0.errors == null ? null : tmp_18_0.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.showCurrentPassword ? "text" : "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.showCurrentPassword ? "/assets/icons/tabler-icon-eye-off.svg" : "/assets/icons/tabler-icon-eye.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deleteAccountConfirm);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _success_bar_success_bar_component__WEBPACK_IMPORTED_MODULE_3__["SuccessBarComponent"], _error_bar_error_bar_component__WEBPACK_IMPORTED_MODULE_2__["ErrorBarComponent"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_14__["LoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"]], styles: ["#profile-picture[_ngcontent-%COMP%] {\n  width: 5em;\n  height: 5em;\n}\n\n.sec-info[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  background-color: #424242;\n  margin: 0 0.3em 0.3em 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtc2V0dGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InByb2ZpbGUtc2V0dGluZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwcm9maWxlLXBpY3R1cmUge1xuICB3aWR0aDogNWVtO1xuICBoZWlnaHQ6IDVlbTtcbn1cblxuLnNlYy1pbmZvIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xuICBtYXJnaW46IDAgMC4zZW0gMC4zZW0gMDtcbn1cbiJdfQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileSettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-settings',
                templateUrl: './profile-settings.component.html',
                styleUrls: ['./profile-settings.component.css']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }, { type: src_app_services_profile_picture_service__WEBPACK_IMPORTED_MODULE_8__["ProfilePictureService"] }, { type: src_app_services_language_service__WEBPACK_IMPORTED_MODULE_9__["LanguageService"] }, { type: src_app_services_technology_service__WEBPACK_IMPORTED_MODULE_10__["TechnologyService"] }, { type: src_app_services_token_service__WEBPACK_IMPORTED_MODULE_11__["TokenService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_12__["Location"] }]; }, { _errorBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_error_bar_error_bar_component__WEBPACK_IMPORTED_MODULE_2__["ErrorBarComponent"]]
        }], _successBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_success_bar_success_bar_component__WEBPACK_IMPORTED_MODULE_3__["SuccessBarComponent"]]
        }] }); })();


/***/ }),

/***/ "Uu83":
/*!*****************************************************************!*\
  !*** ./src/app/components/success-bar/success-bar.component.ts ***!
  \*****************************************************************/
/*! exports provided: SuccessBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessBarComponent", function() { return SuccessBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SuccessBarComponent {
    constructor() {
        this.successMsg = '';
    }
    ngOnInit() {
        this.hideMsg();
    }
    showMsg(msg) {
        if (msg === undefined) {
            this.successMsg = 'Success!';
        }
        else if (msg.trim() === '') {
            this.successMsg = 'Success!';
        }
        else {
            this.successMsg = msg;
        }
    }
    hideMsg() {
        this.successMsg = '';
    }
}
SuccessBarComponent.ɵfac = function SuccessBarComponent_Factory(t) { return new (t || SuccessBarComponent)(); };
SuccessBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SuccessBarComponent, selectors: [["app-success-bar"]], decls: 2, vars: 1, consts: [["id", "success-bar"]], template: function SuccessBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.successMsg);
    } }, styles: ["#success-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: var(--success);\n  color: white;\n  padding: .2em;\n  text-align: center;\n  box-sizing: border-box;\n}\n\n#success-bar[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Y2Nlc3MtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzdWNjZXNzLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3N1Y2Nlc3MtYmFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Y2Nlc3MpO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IC4yZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuI3N1Y2Nlc3MtYmFyOmVtcHR5IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiJdfQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SuccessBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-success-bar',
                templateUrl: './success-bar.component.html',
                styleUrls: ['./success-bar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "UzPd":
/*!*************************************************************************!*\
  !*** ./src/app/components/post-attachment/post-attachment.component.ts ***!
  \*************************************************************************/
/*! exports provided: PostAttachmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostAttachmentComponent", function() { return PostAttachmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function PostAttachmentComponent_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 6);
} }
function PostAttachmentComponent_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 7);
} }
function PostAttachmentComponent_div_6_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r3.paramURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PostAttachmentComponent_div_6_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Download attachment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r4.paramURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PostAttachmentComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostAttachmentComponent_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.toggleShowFull(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostAttachmentComponent_div_6_img_1_Template, 1, 1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostAttachmentComponent_div_6_a_2_Template, 2, 1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.isImage);
} }
class PostAttachmentComponent {
    constructor() {
        this.isImage = false;
        this.showFull = false;
    }
    ngOnInit() {
        var _a, _b, _c, _d;
        this.isImage = this.paramURL.includes('image') && !this.paramURL.endsWith('pdf');
        this.fileType = this.isImage ? 'img' : 'raw';
        if (this.fileType === 'img') {
            this.fileName = (_b = (_a = this.paramURL.match(/(?!\/)+?[^\/]+?(?=\.)/g)) === null || _a === void 0 ? void 0 : _a.pop()) !== null && _b !== void 0 ? _b : 'Attachment';
        }
        else {
            this.fileName = (_d = (_c = this.paramURL.match(/[^\/]+?$/g)) === null || _c === void 0 ? void 0 : _c.pop()) !== null && _d !== void 0 ? _d : 'Attachment';
        }
    }
    toggleShowFull() {
        this.showFull = !this.showFull;
    }
}
PostAttachmentComponent.ɵfac = function PostAttachmentComponent_Factory(t) { return new (t || PostAttachmentComponent)(); };
PostAttachmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostAttachmentComponent, selectors: [["app-post-attachment"]], inputs: { paramURL: "paramURL" }, decls: 7, vars: 4, consts: [[1, "form-attachment", "border-faded-slim", "flexible", "flex-row", "flex-no-wrap", "padding-dot2", "hover-half-opacity", "margin-top-bot-dot2", 3, "click"], [1, "flex-col", "flex-justify-center", "margin-right-dot2", 3, "ngSwitch"], ["src", "/assets/icons/tabler-icon-photo.svg", 4, "ngSwitchCase"], ["src", "/assets/icons/tabler-icon-file.svg", 4, "ngSwitchDefault"], [1, "flex-col", "flex-justify-center"], ["class", "show-full-attachment flex-row flex-justify-center flex-center-align-items", 3, "click", 4, "ngIf"], ["src", "/assets/icons/tabler-icon-photo.svg"], ["src", "/assets/icons/tabler-icon-file.svg"], [1, "show-full-attachment", "flex-row", "flex-justify-center", "flex-center-align-items", 3, "click"], ["class", "attachment-img", 3, "src", 4, "ngIf"], ["class", "attachment-download border-faded-slim padding-dot4 hover-half-opacity click-effect border-radius-dot3", 3, "href", 4, "ngIf"], [1, "attachment-img", 3, "src"], [1, "attachment-download", "border-faded-slim", "padding-dot4", "hover-half-opacity", "click-effect", "border-radius-dot3", 3, "href"]], template: function PostAttachmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "figure", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostAttachmentComponent_Template_figure_click_0_listener() { return ctx.toggleShowFull(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostAttachmentComponent_img_2_Template, 1, 0, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PostAttachmentComponent_img_3_Template, 1, 0, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "summary", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PostAttachmentComponent_div_6_Template, 3, 2, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.fileType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "img");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.fileName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showFull);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".show-full-attachment[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: #000000AF;\n  z-index: 2;\n}\n\n.show-full-attachment[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  max-height: 100vh;\n  max-width: 100vw;\n}\n\n.attachment-download[_ngcontent-%COMP%] {\n  max-width: 420px !important;\n  background-color: var(--card-bg);\n  text-decoration: none;\n  color: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QtYXR0YWNobWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjs7QUFFcEI7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGdDQUFnQztFQUNoQyxxQkFBcUI7RUFDckIsY0FBYztBQUNoQiIsImZpbGUiOiJwb3N0LWF0dGFjaG1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEZ1bGwgYXR0YWNobWVudCAqL1xuXG4uc2hvdy1mdWxsLWF0dGFjaG1lbnQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwQUY7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5zaG93LWZ1bGwtYXR0YWNobWVudCA+ICoge1xuICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgbWF4LXdpZHRoOiAxMDB2dztcbn1cblxuLmF0dGFjaG1lbnQtZG93bmxvYWQge1xuICBtYXgtd2lkdGg6IDQyMHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYmcpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuIl19 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostAttachmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post-attachment',
                templateUrl: './post-attachment.component.html',
                styleUrls: ['./post-attachment.component.css']
            }]
    }], function () { return []; }, { paramURL: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _error_bar_error_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../error-bar/error-bar.component */ "F8Cl");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_token_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/token.service */ "rj1t");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");











function LoginComponent_label_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_label_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(_titleService, _fb, _router, _userService, _tokenService) {
        this._titleService = _titleService;
        this._fb = _fb;
        this._router = _router;
        this._userService = _userService;
        this._tokenService = _tokenService;
        this._title = 'Login';
        this.showingPassword = false;
        this._titleService.setTitle(this._title);
    }
    ngOnInit() {
        this.loginUserFormGroup = this._fb.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])
        });
    }
    toggleShowPassword() {
        this.showingPassword = !this.showingPassword;
    }
    onSubmit() {
        this._errorBar.hideError();
        this._userService.loginUserRequest(this.loginUserFormGroup).subscribe({
            next: (res) => {
                this._tokenService.setUserTokenToSessionStorage(res);
                this._router.navigate(['/']);
            },
            error: (err) => {
                this._errorBar.showError(err);
            }
        });
    }
    onRedirectRegister() {
        this._router.navigate(['/register']);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], viewQuery: function LoginComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_error_bar_error_bar_component__WEBPACK_IMPORTED_MODULE_2__["ErrorBarComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._errorBar = _t.first);
    } }, decls: 23, vars: 5, consts: [[1, "centered-content", "scroll-standalone", "flex-col", "flex-center-align-items", "flex-justify-center", "height-full"], [1, "title", "card", "width-full", "margin-0", "padding-dot2"], [1, "width-full", "margin-top-dot4"], [1, "width-full", "card", "padding-dot6", 3, "formGroup", "ngSubmit"], [1, "input-selection", "width-full"], ["type", "text", "placeholder", "Username", "formControlName", "username", "required", "", 1, "fancy-input", "width-full", "border-faded-slim", "border-bottom-only"], [1, "fancy-input-label", "width-full"], [1, "input-errors"], ["class", "error", 4, "ngIf"], [1, "input-selection"], ["placeholder", "Password", "formControlName", "password", "required", "", 1, "fancy-input", "width-full", "border-faded-slim", "border-bottom-only", "padding-right-1dot5", 3, "type"], ["type", "button", 1, "show-password-button", "hover-half-opacity", "click-effect", 3, "click"], [3, "src"], ["type", "submit", 1, "border-faded-slim", "padding-dot3", "lighter-hover", "click-effect", "border-radius-dot3", "width-full"], [1, "fg-focus", "border-faded-slim", "padding-dot3", "lighter-hover", "click-effect", "border-radius-dot3", "width-full", "margin-top-dot4", 3, "click"], [1, "error"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "summary", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-error-bar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginComponent_label_10_Template, 2, 0, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_15_listener() { return ctx.toggleShowPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LoginComponent_label_18_Template, 2, 0, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_21_listener() { return ctx.onRedirectRegister(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "New to DevHive? Register instead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_1_0 = null;
        let tmp_4_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginUserFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx.loginUserFormGroup.get("username")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.showingPassword ? "text" : "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.showingPassword ? "/assets/icons/tabler-icon-eye-off.svg" : "/assets/icons/tabler-icon-eye.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx.loginUserFormGroup.get("password")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors.required);
    } }, directives: [_error_bar_error_bar_component__WEBPACK_IMPORTED_MODULE_2__["ErrorBarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }, { type: src_app_services_token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"] }]; }, { _errorBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_error_bar_error_bar_component__WEBPACK_IMPORTED_MODULE_2__["ErrorBarComponent"]]
        }] }); })();


/***/ }),

/***/ "WOwQ":
/*!***************************************************************************!*\
  !*** ./src/app/components/admin-panel-page/admin-panel-page.component.ts ***!
  \***************************************************************************/
/*! exports provided: AdminPanelPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPanelPageComponent", function() { return AdminPanelPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! guid-typescript */ "kLqA");
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(guid_typescript__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_app_constants_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app-constants.module */ "MA1G");
/* harmony import */ var _error_bar_error_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../error-bar/error-bar.component */ "F8Cl");
/* harmony import */ var _success_bar_success_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../success-bar/success-bar.component */ "Uu83");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/language.service */ "kyOO");
/* harmony import */ var src_app_services_technology_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/technology.service */ "zFKK");
/* harmony import */ var src_app_services_token_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/token.service */ "rj1t");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/post.service */ "ENZJ");
/* harmony import */ var src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/comment.service */ "mxDV");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../loading/loading.component */ "qQYQ");





















function AdminPanelPageComponent_app_loading_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
function AdminPanelPageComponent_main_2_form_7_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No languages in database! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminPanelPageComponent_main_2_form_7_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Available languages: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminPanelPageComponent_main_2_form_7_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lang_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", lang_r8.name, " ");
} }
function AdminPanelPageComponent_main_2_form_7_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AdminPanelPageComponent_main_2_form_7_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.submitLanguages(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Create language: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Update language: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Delete language: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Modify languages ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AdminPanelPageComponent_main_2_form_7_div_15_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AdminPanelPageComponent_main_2_form_7_div_16_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AdminPanelPageComponent_main_2_form_7_div_18_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.languageForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.availableLanguages.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.availableLanguages.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.availableLanguages);
} }
function AdminPanelPageComponent_main_2_form_11_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No technologies in database! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminPanelPageComponent_main_2_form_11_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Available technologies: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminPanelPageComponent_main_2_form_11_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tech_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tech_r14.name, " ");
} }
function AdminPanelPageComponent_main_2_form_11_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AdminPanelPageComponent_main_2_form_11_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.submitTechnologies(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Create technology: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Update technology: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Delete technology: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Modify technology ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AdminPanelPageComponent_main_2_form_11_div_15_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AdminPanelPageComponent_main_2_form_11_div_16_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AdminPanelPageComponent_main_2_form_11_div_18_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.technologyForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.availableTechnologies.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.availableTechnologies.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.availableTechnologies);
} }
function AdminPanelPageComponent_main_2_form_15_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AdminPanelPageComponent_main_2_form_15_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.submitDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Delete user by Id: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Delete post by Id: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Delete comment by Id: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r4.deleteForm);
} }
function AdminPanelPageComponent_main_2_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-success-bar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-error-bar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminPanelPageComponent_main_2_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.toggleLanguages(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u25BC Edit Languages \u25BC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AdminPanelPageComponent_main_2_form_7_Template, 19, 4, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminPanelPageComponent_main_2_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.toggleTechnologies(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u25BC Edit Technologies \u25BC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AdminPanelPageComponent_main_2_form_11_Template, 19, 4, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminPanelPageComponent_main_2_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.toggleDeletions(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u25BC Deletions \u25BC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AdminPanelPageComponent_main_2_form_15_Template, 12, 1, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showLanguages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showTechnologies);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showDeletions);
} }
class AdminPanelPageComponent {
    constructor(_titleService, _router, _fb, _userService, _languageService, _technologyService, _tokenService, _postService, _commentService) {
        this._titleService = _titleService;
        this._router = _router;
        this._fb = _fb;
        this._userService = _userService;
        this._languageService = _languageService;
        this._technologyService = _technologyService;
        this._tokenService = _tokenService;
        this._postService = _postService;
        this._commentService = _commentService;
        this._title = 'Admin Panel';
        this.dataArrived = false;
        this.showLanguages = false;
        this.showTechnologies = false;
        this.showDeletions = false;
        this._titleService.setTitle(this._title);
    }
    ngOnInit() {
        if (!this._tokenService.getTokenFromSessionStorage()) {
            this._router.navigate(['/login']);
            return;
        }
        this._userService.getUserFromSessionStorageRequest().subscribe({
            next: (result) => {
                const user = result;
                if (!user.roles.map(x => x.name).includes(src_app_app_constants_module__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].ADMIN_ROLE_NAME)) {
                    this._router.navigate(['/login']);
                }
            },
            error: () => {
                this._router.navigate(['/login']);
            }
        });
        this.languageForm = this._fb.group({
            languageCreate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            updateLanguageOldName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            updateLanguageNewName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            deleteLanguageName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.languageForm.valueChanges.subscribe({
            next: () => {
                var _a, _b;
                (_a = this._successBar) === null || _a === void 0 ? void 0 : _a.hideMsg();
                (_b = this._errorBar) === null || _b === void 0 ? void 0 : _b.hideError();
            }
        });
        this.technologyForm = this._fb.group({
            technologyCreate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            updateTechnologyOldName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            updateTechnologyNewName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            deleteTechnologyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.technologyForm.valueChanges.subscribe({
            next: () => {
                var _a, _b;
                (_a = this._successBar) === null || _a === void 0 ? void 0 : _a.hideMsg();
                (_b = this._errorBar) === null || _b === void 0 ? void 0 : _b.hideError();
            }
        });
        this.deleteForm = this._fb.group({
            deleteUser: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            deletePost: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            deleteComment: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.deleteForm.valueChanges.subscribe({
            next: () => {
                var _a, _b;
                (_a = this._successBar) === null || _a === void 0 ? void 0 : _a.hideMsg();
                (_b = this._errorBar) === null || _b === void 0 ? void 0 : _b.hideError();
            }
        });
        this.loadAvailableLanguages();
        this.loadAvailableTechnologies();
    }
    loadAvailableLanguages() {
        this._languageService.getAllLanguagesWithSessionStorageRequest().subscribe({
            next: (result) => {
                this.availableLanguages = result;
                this.dataArrived = true;
            }
        });
    }
    loadAvailableTechnologies() {
        this._technologyService.getAllTechnologiesWithSessionStorageRequest().subscribe({
            next: (result) => {
                this.availableTechnologies = result;
                this.dataArrived = true;
            }
        });
    }
    // Navigation
    backToProfile() {
        this._router.navigate(['/profile/' + this._tokenService.getUsernameFromSessionStorageToken()]);
    }
    backToFeed() {
        this._router.navigate(['/']);
    }
    logout() {
        this._tokenService.logoutUserFromSessionStorage();
        this._router.navigate(['/login']);
    }
    // Language modifying
    toggleLanguages() {
        this.showLanguages = !this.showLanguages;
    }
    submitLanguages() {
        this.tryCreateLanguage();
        this.tryUpdateLanguage();
        this.tryDeleteLanguage();
    }
    tryCreateLanguage() {
        var _a;
        const languageCreate = (_a = this.languageForm.get('languageCreate')) === null || _a === void 0 ? void 0 : _a.value;
        if (languageCreate !== '' && languageCreate !== null) {
            this._languageService.createLanguageWithSessionStorageRequest(languageCreate.trim()).subscribe({
                next: () => {
                    this.languageModifiedSuccess('Successfully updated languages!');
                },
                error: (err) => {
                    this._errorBar.showError(err);
                }
            });
        }
    }
    tryUpdateLanguage() {
        var _a, _b;
        const updateLanguageOldName = (_a = this.languageForm.get('updateLanguageOldName')) === null || _a === void 0 ? void 0 : _a.value;
        const updateLanguageNewName = (_b = this.languageForm.get('updateLanguageNewName')) === null || _b === void 0 ? void 0 : _b.value;
        if (updateLanguageOldName !== '' && updateLanguageOldName !== null && updateLanguageNewName !== '' && updateLanguageNewName !== null) {
            const langId = this.availableLanguages.filter(x => x.name === updateLanguageOldName.trim())[0].id;
            this._languageService.putLanguageWithSessionStorageRequest(langId, updateLanguageNewName.trim()).subscribe({
                next: () => {
                    this.languageModifiedSuccess('Successfully updated languages!');
                },
                error: (err) => {
                    this._errorBar.showError(err);
                }
            });
        }
    }
    tryDeleteLanguage() {
        var _a;
        const deleteLanguageName = (_a = this.languageForm.get('deleteLanguageName')) === null || _a === void 0 ? void 0 : _a.value;
        if (deleteLanguageName !== '' && deleteLanguageName !== null) {
            const langId = this.availableLanguages.filter(x => x.name === deleteLanguageName.trim())[0].id;
            this._languageService.deleteLanguageWithSessionStorageRequest(langId).subscribe({
                next: () => {
                    this.languageModifiedSuccess('Successfully deleted language!');
                },
                error: (err) => {
                    this._errorBar.showError(err);
                }
            });
        }
    }
    languageModifiedSuccess(successMsg) {
        this.languageForm.reset();
        this._successBar.showMsg(successMsg);
        this.loadAvailableLanguages();
    }
    // Technology modifying
    toggleTechnologies() {
        this.showTechnologies = !this.showTechnologies;
    }
    submitTechnologies() {
        this.tryCreateTechnology();
        this.tryUpdateTechnology();
        this.tryDeleteTechnology();
    }
    tryCreateTechnology() {
        var _a;
        const technologyCreate = (_a = this.technologyForm.get('technologyCreate')) === null || _a === void 0 ? void 0 : _a.value;
        if (technologyCreate !== '' && technologyCreate !== null) {
            this._technologyService.createTechnologyWithSessionStorageRequest(technologyCreate.trim()).subscribe({
                next: () => {
                    this.technologyModifiedSuccess('Successfully updated technologies!');
                },
                error: (err) => {
                    this._errorBar.showError(err);
                }
            });
        }
    }
    tryUpdateTechnology() {
        var _a, _b;
        const updateTechnologyOldName = (_a = this.technologyForm.get('updateTechnologyOldName')) === null || _a === void 0 ? void 0 : _a.value;
        const updateTechnologyNewName = (_b = this.technologyForm.get('updateTechnologyNewName')) === null || _b === void 0 ? void 0 : _b.value;
        if (updateTechnologyOldName !== '' && updateTechnologyOldName !== null && updateTechnologyNewName !== '' && updateTechnologyNewName !== null) {
            const techId = this.availableTechnologies.filter(x => x.name === updateTechnologyOldName.trim())[0].id;
            this._technologyService.putTechnologyWithSessionStorageRequest(techId, updateTechnologyNewName.trim()).subscribe({
                next: () => {
                    this.technologyModifiedSuccess('Successfully updated technologies!');
                },
                error: (err) => {
                    this._errorBar.showError(err);
                }
            });
        }
    }
    tryDeleteTechnology() {
        var _a;
        const deleteTechnologyName = (_a = this.technologyForm.get('deleteTechnologyName')) === null || _a === void 0 ? void 0 : _a.value;
        if (deleteTechnologyName !== '' && deleteTechnologyName !== null) {
            const techId = this.availableTechnologies.filter(x => x.name === deleteTechnologyName.trim())[0].id;
            this._technologyService.deleteTechnologyWithSessionStorageRequest(techId).subscribe({
                next: () => {
                    this.technologyModifiedSuccess('Successfully deleted technology!');
                },
                error: (err) => {
                    this._errorBar.showError(err);
                }
            });
        }
    }
    technologyModifiedSuccess(successMsg) {
        this.technologyForm.reset();
        this._successBar.showMsg(successMsg);
        this.loadAvailableTechnologies();
    }
    // Deletions
    toggleDeletions() {
        this.showDeletions = !this.showDeletions;
    }
    submitDelete() {
        this.tryDeleteUser();
        this.tryDeletePost();
        this.tryDeleteComment();
    }
    tryDeleteUser() {
        var _a;
        const deleteUser = (_a = this.deleteForm.get('deleteUser')) === null || _a === void 0 ? void 0 : _a.value;
        if (deleteUser !== '' && deleteUser !== null) {
            const userId = guid_typescript__WEBPACK_IMPORTED_MODULE_2__["Guid"].parse(deleteUser);
            this._userService.deleteUserRequest(userId, this._tokenService.getTokenFromSessionStorage()).subscribe({
                next: () => {
                    this.deletionSuccess('Successfully deleted user!');
                },
                error: (err) => {
                    this._errorBar.showError(err);
                }
            });
        }
    }
    tryDeletePost() {
        var _a;
        const deletePost = (_a = this.deleteForm.get('deletePost')) === null || _a === void 0 ? void 0 : _a.value;
        if (deletePost !== '' && deletePost !== null) {
            const postId = guid_typescript__WEBPACK_IMPORTED_MODULE_2__["Guid"].parse(deletePost);
            this._postService.deletePostRequest(postId, this._tokenService.getTokenFromSessionStorage()).subscribe({
                next: () => {
                    this.deletionSuccess('Successfully deleted user!');
                },
                error: (err) => {
                    this._errorBar.showError(err);
                }
            });
        }
    }
    tryDeleteComment() {
        var _a;
        const deleteComment = (_a = this.deleteForm.get('deleteComment')) === null || _a === void 0 ? void 0 : _a.value;
        if (deleteComment !== '' && deleteComment !== null) {
            const commentId = guid_typescript__WEBPACK_IMPORTED_MODULE_2__["Guid"].parse(deleteComment);
            this._commentService.deleteCommentWithSessionStorage(commentId).subscribe({
                next: () => {
                    this.deletionSuccess('Successfully deleted comment!');
                },
                error: (err) => {
                    this._errorBar.showError(err);
                }
            });
        }
    }
    deletionSuccess(successMsg) {
        this.deleteForm.reset();
        this._successBar.showMsg(successMsg);
    }
}
AdminPanelPageComponent.ɵfac = function AdminPanelPageComponent_Factory(t) { return new (t || AdminPanelPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_language_service__WEBPACK_IMPORTED_MODULE_9__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_technology_service__WEBPACK_IMPORTED_MODULE_10__["TechnologyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_token_service__WEBPACK_IMPORTED_MODULE_11__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_post_service__WEBPACK_IMPORTED_MODULE_12__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_13__["CommentService"])); };
AdminPanelPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminPanelPageComponent, selectors: [["app-admin-panel-page"]], viewQuery: function AdminPanelPageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_error_bar_error_bar_component__WEBPACK_IMPORTED_MODULE_4__["ErrorBarComponent"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_success_bar_success_bar_component__WEBPACK_IMPORTED_MODULE_5__["SuccessBarComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._errorBar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._successBar = _t.first);
    } }, decls: 3, vars: 2, consts: [[4, "ngIf"], ["class", "scroll-standalone under-navbar centered-content flex-col", 4, "ngIf"], [1, "scroll-standalone", "under-navbar", "centered-content", "flex-col"], [1, "card", "width-full"], ["type", "button", 1, "fg-focus", "width-full", "border-faded-slim", "padding-dot3", "lighter-hover", "click-effect", 3, "click"], ["class", "flex-col margin-top-bot-dot3", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["type", "button", 1, "fg-focus", "width-full", "border-faded-slim", "padding-dot3", "lighter-hover", "click-effect", "margin-top-dot4", 3, "click"], [1, "flex-col", "margin-top-bot-dot3", 3, "formGroup", "ngSubmit"], [1, "fg-focus"], ["type", "text", "formControlName", "languageCreate", "placeholder", "New language name", 1, "fancy-input", "width-full", "border-faded-slim", "border-bottom-only"], [1, "flex-row", "flexible-children"], ["type", "text", "formControlName", "updateLanguageOldName", "placeholder", "Old language name", 1, "fancy-input", "border-faded-slim", "border-bottom-only", "margin-right-dot2"], ["type", "text", "formControlName", "updateLanguageNewName", "placeholder", "New language name", 1, "fancy-input", "border-faded-slim", "border-bottom-only"], ["type", "text", "formControlName", "deleteLanguageName", "placeholder", "Language name", 1, "fancy-input", "width-full", "border-faded-slim", "border-bottom-only"], ["type", "submit", 1, "width-full", "border-faded-slim", "padding-dot3", "lighter-hover", "click-effect", "border-radius-dot3"], [1, "border-faded-slim", "padding-dot4", "margin-top-dot4"], ["class", "none-message", 4, "ngIf"], [1, "flex-row", "margin-top-dot4"], ["class", "sec-info border-radius-dot5r padding-dot2", 4, "ngFor", "ngForOf"], [1, "none-message"], [1, "sec-info", "border-radius-dot5r", "padding-dot2"], ["type", "text", "formControlName", "technologyCreate", "placeholder", "New technology name", 1, "fancy-input", "width-full", "border-faded-slim", "border-bottom-only"], ["type", "text", "formControlName", "updateTechnologyOldName", "placeholder", "Old technology name", 1, "fancy-input", "border-faded-slim", "border-bottom-only", "margin-right-dot2"], ["type", "text", "formControlName", "updateTechnologyNewName", "placeholder", "New technology name", 1, "fancy-input", "border-faded-slim", "border-bottom-only"], ["type", "text", "formControlName", "deleteTechnologyName", "placeholder", "Technology name", 1, "fancy-input", "width-full", "border-faded-slim", "border-bottom-only"], ["type", "text", "formControlName", "deleteUser", "placeholder", "User Id", 1, "fancy-input", "width-full", "border-faded-slim", "border-bottom-only"], ["type", "text", "formControlName", "deletePost", "placeholder", "Post Id", 1, "fancy-input", "width-full", "border-faded-slim", "border-bottom-only"], ["type", "text", "formControlName", "deleteComment", "placeholder", "Comment Id", 1, "fancy-input", "width-full", "border-faded-slim", "border-bottom-only"]], template: function AdminPanelPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminPanelPageComponent_app_loading_1_Template, 1, 0, "app-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdminPanelPageComponent_main_2_Template, 16, 3, "main", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.dataArrived);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataArrived);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_16__["LoadingComponent"], _success_bar_success_bar_component__WEBPACK_IMPORTED_MODULE_5__["SuccessBarComponent"], _error_bar_error_bar_component__WEBPACK_IMPORTED_MODULE_4__["ErrorBarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"]], styles: [".sec-info[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  background-color: #424242;\n  margin: 0 0.3em 0.3em 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLXBhbmVsLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6Qix1QkFBdUI7QUFDekIiLCJmaWxlIjoiYWRtaW4tcGFuZWwtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYy1pbmZvIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xuICBtYXJnaW46IDAgMC4zZW0gMC4zZW0gMDtcbn1cbiJdfQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminPanelPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-panel-page',
                templateUrl: './admin-panel-page.component.html',
                styleUrls: ['./admin-panel-page.component.css']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] }, { type: src_app_services_language_service__WEBPACK_IMPORTED_MODULE_9__["LanguageService"] }, { type: src_app_services_technology_service__WEBPACK_IMPORTED_MODULE_10__["TechnologyService"] }, { type: src_app_services_token_service__WEBPACK_IMPORTED_MODULE_11__["TokenService"] }, { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_12__["PostService"] }, { type: src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_13__["CommentService"] }]; }, { _errorBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_error_bar_error_bar_component__WEBPACK_IMPORTED_MODULE_4__["ErrorBarComponent"]]
        }], _successBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_success_bar_success_bar_component__WEBPACK_IMPORTED_MODULE_5__["SuccessBarComponent"]]
        }] }); })();


/***/ }),

/***/ "XC3f":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _error_bar_error_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../error-bar/error-bar.component */ "F8Cl");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_token_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/token.service */ "rj1t");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");











function RegisterComponent_label_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_label_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Minimum 3 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_label_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_label_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Minimum 3 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_label_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_label_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Minimum 3 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_label_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_label_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Invalid email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_label_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_label_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Minimum 3 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_label_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*At least 1 number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class RegisterComponent {
    constructor(_titleService, _fb, _router, _userService, _tokenService) {
        this._titleService = _titleService;
        this._fb = _fb;
        this._router = _router;
        this._userService = _userService;
        this._tokenService = _tokenService;
        this._title = 'Register';
        this.showingPassword = false;
        this._titleService.setTitle(this._title);
    }
    ngOnInit() {
        this.registerUserFormGroup = this._fb.group({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)
            ]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)
            ]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('.*[0-9].*') // Check if password contains atleast one number
            ]),
        });
        // this.registerUserFormGroup.valueChanges.subscribe(console.log);
    }
    toggleShowPassword() {
        this.showingPassword = !this.showingPassword;
    }
    onSubmit() {
        this._userService.registerUserRequest(this.registerUserFormGroup).subscribe({
            next: (res) => {
                this._tokenService.setUserTokenToSessionStorage(res);
                this._router.navigate(['/']);
            },
            error: (err) => {
                this._errorBar.showError(err);
            }
        });
    }
    onRedirectLogin() {
        this._router.navigate(['/login']);
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], viewQuery: function RegisterComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_error_bar_error_bar_component__WEBPACK_IMPORTED_MODULE_2__["ErrorBarComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._errorBar = _t.first);
    } }, decls: 47, vars: 14, consts: [[1, "centered-content", "scroll-standalone", "height-full", "flex-col", "flex-center-align-items", "flex-justify-center"], [1, "title", "card", "width-full", "margin-0", "padding-dot2"], [1, "width-full", "margin-top-dot4"], [1, "width-full", "card", "padding-dot6", 3, "formGroup", "ngSubmit"], [1, "input-selection", "width-full"], ["type", "text", "placeholder", "First Name", "formControlName", "firstName", "required", "", 1, "fancy-input", "width-full", "border-faded-slim", "border-bottom-only"], [1, "fancy-input-label", "width-full"], [1, "input-errors"], ["class", "error", 4, "ngIf"], [1, "input-selection"], ["type", "text", "placeholder", "Last Name", "formControlName", "lastName", "required", "", 1, "fancy-input", "width-full", "border-faded-slim", "border-bottom-only"], ["type", "text", "placeholder", "Username", "formControlName", "username", "required", "", 1, "fancy-input", "width-full", "border-faded-slim", "border-bottom-only"], ["type", "text", "placeholder", "Email", "formControlName", "email", "required", "", 1, "fancy-input", "width-full", "border-faded-slim", "border-bottom-only"], ["placeholder", "Password", "formControlName", "password", "required", "", 1, "fancy-input", "width-full", "border-faded-slim", "border-bottom-only", "padding-right-1dot5", 3, "type"], ["type", "button", 1, "show-password-button", "hover-half-opacity", "click-effect", 3, "click"], [3, "src"], ["type", "submit", 1, "border-faded-slim", "padding-dot3", "lighter-hover", "click-effect", "border-radius-dot3", "width-full"], [1, "fg-focus", "border-faded-slim", "padding-dot3", "lighter-hover", "click-effect", "border-radius-dot3", "width-full", "margin-top-dot4", 3, "click"], [1, "error"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "summary", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-error-bar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RegisterComponent_label_10_Template, 2, 0, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RegisterComponent_label_11_Template, 2, 0, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RegisterComponent_label_17_Template, 2, 0, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RegisterComponent_label_18_Template, 2, 0, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, RegisterComponent_label_24_Template, 2, 0, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RegisterComponent_label_25_Template, 2, 0, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, RegisterComponent_label_31_Template, 2, 0, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, RegisterComponent_label_32_Template, 2, 0, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_37_listener() { return ctx.toggleShowPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, RegisterComponent_label_40_Template, 2, 0, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, RegisterComponent_label_41_Template, 2, 0, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, RegisterComponent_label_42_Template, 2, 0, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_45_listener() { return ctx.onRedirectLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Already have an account? Login here ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_1_0 = null;
        let tmp_2_0 = null;
        let tmp_3_0 = null;
        let tmp_4_0 = null;
        let tmp_5_0 = null;
        let tmp_6_0 = null;
        let tmp_7_0 = null;
        let tmp_8_0 = null;
        let tmp_11_0 = null;
        let tmp_12_0 = null;
        let tmp_13_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerUserFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx.registerUserFormGroup.get("firstName")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx.registerUserFormGroup.get("firstName")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx.registerUserFormGroup.get("lastName")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx.registerUserFormGroup.get("lastName")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx.registerUserFormGroup.get("username")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_6_0 = ctx.registerUserFormGroup.get("username")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx.registerUserFormGroup.get("email")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_8_0 = ctx.registerUserFormGroup.get("email")) == null ? null : tmp_8_0.errors == null ? null : tmp_8_0.errors.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.showingPassword ? "text" : "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.showingPassword ? "/assets/icons/tabler-icon-eye-off.svg" : "/assets/icons/tabler-icon-eye.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_11_0 = ctx.registerUserFormGroup.get("password")) == null ? null : tmp_11_0.errors == null ? null : tmp_11_0.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_12_0 = ctx.registerUserFormGroup.get("password")) == null ? null : tmp_12_0.errors == null ? null : tmp_12_0.errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_13_0 = ctx.registerUserFormGroup.get("password")) == null ? null : tmp_13_0.errors == null ? null : tmp_13_0.errors.pattern);
    } }, directives: [_error_bar_error_bar_component__WEBPACK_IMPORTED_MODULE_2__["ErrorBarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }, { type: src_app_services_token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"] }]; }, { _errorBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_error_bar_error_bar_component__WEBPACK_IMPORTED_MODULE_2__["ErrorBarComponent"]]
        }] }); })();


/***/ }),

/***/ "YgeO":
/*!*****************************************************!*\
  !*** ./src/app/services/profile-picture.service.ts ***!
  \*****************************************************/
/*! exports provided: ProfilePictureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePictureService", function() { return ProfilePictureService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_constants_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-constants.module */ "MA1G");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token.service */ "rj1t");






class ProfilePictureService {
    constructor(_http, _tokenService) {
        this._http = _http;
        this._tokenService = _tokenService;
    }
    putPictureWithSessionStorageRequest(newPicture) {
        const userId = this._tokenService.getUserIdFromSessionStorageToken();
        const token = this._tokenService.getTokenFromSessionStorage();
        return this.putRatingRequest(userId, token, newPicture);
    }
    putRatingRequest(userId, authToken, newPicture) {
        const options = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('UserId', userId.toString()),
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'Bearer ' + authToken)
        };
        const form = new FormData();
        form.append('picture', newPicture);
        return this._http.put(_app_constants_module__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].API_PROFILE_PICTURE_URL, form, options);
    }
}
ProfilePictureService.ɵfac = function ProfilePictureService_Factory(t) { return new (t || ProfilePictureService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"])); };
ProfilePictureService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProfilePictureService, factory: ProfilePictureService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProfilePictureService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] }]; }, null); })();


/***/ }),

/***/ "YzH7":
/*!***************************************************!*\
  !*** ./src/app/components/post/post.component.ts ***!
  \***************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! guid-typescript */ "kLqA");
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(guid_typescript__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/post.service */ "ENZJ");
/* harmony import */ var src_app_services_rating_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/rating.service */ "7sqW");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/token.service */ "rj1t");
/* harmony import */ var src_app_services_cloudinary_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/cloudinary.service */ "dUpr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-clipboard */ "Dvla");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../loading/loading.component */ "qQYQ");
/* harmony import */ var _post_attachment_post_attachment_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../post-attachment/post-attachment.component */ "UzPd");















const _c0 = ["upvote"];
const _c1 = ["downvote"];
const _c2 = ["share"];
function PostComponent_app_loading_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
function PostComponent_article_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.post.message, " ");
} }
function PostComponent_section_11_figure_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "figure");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-post-attachment", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fileURL_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("paramURL", fileURL_r12);
} }
function PostComponent_section_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostComponent_section_11_figure_1_Template, 2, 1, "figure", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.post.fileURLs);
} }
function PostComponent_form_12_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "textarea", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PostComponent_form_12_Template_input_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.onFileUpload($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.editPostFormGroup);
} }
function PostComponent_section_13_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_section_13_div_1_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const file_r16 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.removeAttachment(file_r16.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", file_r16.name ? file_r16.name : "Attachment", " ");
} }
function PostComponent_section_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostComponent_section_13_div_1_Template, 5, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.files);
} }
function PostComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.editPost(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Update Post ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostComponent_button_27_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_button_27_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.toggleEditing(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostComponent_button_35_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_button_35_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.deletePost(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PostComponent {
    constructor(_postService, _ratingServe, _userService, _router, _tokenService, _cloudinaryService, _fb, _elem, _renderer) {
        this._postService = _postService;
        this._ratingServe = _ratingServe;
        this._userService = _userService;
        this._router = _router;
        this._tokenService = _tokenService;
        this._cloudinaryService = _cloudinaryService;
        this._fb = _fb;
        this._elem = _elem;
        this._renderer = _renderer;
        this.loaded = false;
        this._linkShared = false; // For optimisation purposes
        this.loggedIn = false;
        this.loggedInAuthor = false;
        this.editingPost = false;
    }
    ngOnInit() {
        this.loggedIn = this._tokenService.getTokenFromSessionStorage() !== '';
        this.post = this._postService.getDefaultPost();
        this.user = this._userService.getDefaultUser();
        this.files = [];
        this._postService.getPostRequest(guid_typescript__WEBPACK_IMPORTED_MODULE_2__["Guid"].parse(this.paramId)).subscribe({
            next: (result) => {
                Object.assign(this.post, result);
                this.post.fileURLs = Object.values(result)[7];
                this.votesNumber = this.post.currentRating;
                this.timeCreated = new Date(this.post.timeCreated).toLocaleString('en-GB');
                this.loadUser();
            }
        });
        this.editPostFormGroup = this._fb.group({
            newPostMessage: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            fileUpload: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    loadUser() {
        this._userService.getUserByUsernameRequest(this.post.creatorUsername).subscribe({
            next: (result) => {
                var _a;
                Object.assign(this.user, result);
                if (this.loggedIn) {
                    this.loggedInAuthor = this._tokenService.getUsernameFromSessionStorageToken() === this.post.creatorUsername;
                    (_a = this.editPostFormGroup.get('newPostMessage')) === null || _a === void 0 ? void 0 : _a.setValue(this.post.message);
                    if (this.post.fileURLs.length > 0) {
                        this.loadFiles();
                        return;
                    }
                }
                this.loaded = true;
            }
        });
    }
    loadFiles() {
        for (const fileURL of this.post.fileURLs) {
            this._cloudinaryService.getFileRequest(fileURL).subscribe({
                next: (result) => {
                    var _a, _b;
                    const file = result;
                    const tmp = {
                        name: (_b = (_a = fileURL.match('(?<=\/)(?:.(?!\/))+$')) === null || _a === void 0 ? void 0 : _a.pop()) !== null && _b !== void 0 ? _b : 'Attachment'
                    };
                    Object.assign(file, tmp);
                    this.files.push(file);
                    if (this.files.length === this.post.fileURLs.length) {
                        this.loaded = true;
                    }
                }
            });
        }
    }
    ngAfterViewInit() {
        if (this.loggedIn) {
            this._ratingServe.getRatingByUserAndPostWithSessionStorageRequest(guid_typescript__WEBPACK_IMPORTED_MODULE_2__["Guid"].parse(this.paramId)).subscribe({
                next: (x) => {
                    if (!x) {
                        return;
                    }
                    const isLike = Object.values(x)[3];
                    this.changeColorOfVoteButton(isLike, !isLike);
                }
            });
        }
        this._defaultShareBtnInnerHTML = this.shareBtn.nativeElement.innerHTML;
    }
    goToAuthorProfile() {
        this._router.navigate(['/profile/' + this.user.userName]);
    }
    goToPostPage() {
        this._router.navigate(['/post/' + this.post.postId]);
    }
    toggleEditing() {
        this.editingPost = !this.editingPost;
    }
    onFileUpload(event) {
        var _a;
        this.files.push(...event.target.files);
        (_a = this.editPostFormGroup.get('fileUpload')) === null || _a === void 0 ? void 0 : _a.reset();
    }
    removeAttachment(fileName) {
        this.files = this.files.filter(x => x.name !== fileName);
    }
    editPost() {
        var _a;
        const newMessage = (_a = this.editPostFormGroup.get('newPostMessage')) === null || _a === void 0 ? void 0 : _a.value;
        if (newMessage !== '') {
            this._postService.putPostWithSessionStorageRequest(guid_typescript__WEBPACK_IMPORTED_MODULE_2__["Guid"].parse(this.paramId), newMessage, this.files).subscribe({
                next: () => {
                    this.reloadPage();
                }
            });
            this.loaded = false;
        }
    }
    deletePost() {
        this._postService.deletePostWithSessionStorage(guid_typescript__WEBPACK_IMPORTED_MODULE_2__["Guid"].parse(this.paramId)).subscribe({
            next: () => {
                this._router.navigate(['/profile/' + this._tokenService.getUsernameFromSessionStorageToken()]);
            }
        });
    }
    reloadPage() {
        this._router.routeReuseStrategy.shouldReuseRoute = () => false;
        this._router.onSameUrlNavigation = 'reload';
        this._router.navigate([this._router.url]);
    }
    votePost(isLike) {
        if (!this.loggedIn) {
            this._router.navigate(['/login']);
            return;
        }
        this._ratingServe.getRatingByUserAndPostWithSessionStorageRequest(guid_typescript__WEBPACK_IMPORTED_MODULE_2__["Guid"].parse(this.paramId)).subscribe({
            next: (x) => {
                if (x == null) { // checks if result is null or undefined
                    this.createRating(isLike);
                    this.changeColorOfVoteButton(isLike, !isLike);
                }
                else if (Object.values(x)[3] === isLike) {
                    this.deleteRating(Object.values(x)[0], isLike);
                    this.changeColorOfVoteButton(false, false);
                }
                else {
                    this.putRating(isLike);
                    this.changeColorOfVoteButton(isLike, !isLike);
                }
            }
        });
    }
    createRating(isLike) {
        this._ratingServe.createRatingWithSessionStorageRequest(guid_typescript__WEBPACK_IMPORTED_MODULE_2__["Guid"].parse(this.paramId), isLike).subscribe({
            next: () => {
                this.votesNumber += -1 + Number(isLike) * 2;
            }
        });
    }
    putRating(isLike) {
        this._ratingServe.putRatingWithSessionStorageRequest(guid_typescript__WEBPACK_IMPORTED_MODULE_2__["Guid"].parse(this.paramId), isLike).subscribe({
            next: () => {
                // when false -2 + 0 wjen true -2 + 4
                this.votesNumber += -2 + Number(isLike) * 4;
            }
        });
    }
    deleteRating(ratingId, isLike) {
        this._ratingServe.deleteRatingFromSessionStorageRequest(guid_typescript__WEBPACK_IMPORTED_MODULE_2__["Guid"].parse(ratingId)).subscribe({
            next: () => {
                this.votesNumber += 1 - Number(isLike) * 2;
            }
        });
    }
    changeColorOfVoteButton(isUpvoted, isDownvoted) {
        this._renderer.setStyle(this.upvoteBtn.nativeElement, 'backgroundColor', (isUpvoted) ? 'var(--upvote-highlight)' : 'inherit');
        this._renderer.setStyle(this.downvoteBtn.nativeElement, 'backgroundColor', (isDownvoted) ? 'var(--downvote-highlight)' : 'inherit');
    }
    resetShareBtn() {
        if (this._linkShared) {
            this._renderer.setProperty(this.shareBtn.nativeElement, 'innerHTML', this._defaultShareBtnInnerHTML);
            this._linkShared = false;
        }
    }
    showCopiedMessage() {
        this._renderer.setProperty(this.shareBtn.nativeElement, 'innerHTML', 'Link copied to clipboard!');
        this._linkShared = true;
    }
    getPostLink() {
        return location.origin + '/post/' + this.paramId;
    }
}
PostComponent.ɵfac = function PostComponent_Factory(t) { return new (t || PostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_rating_service__WEBPACK_IMPORTED_MODULE_4__["RatingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_token_service__WEBPACK_IMPORTED_MODULE_7__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cloudinary_service__WEBPACK_IMPORTED_MODULE_8__["CloudinaryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
PostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostComponent, selectors: [["app-post"]], viewQuery: function PostComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.upvoteBtn = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.downvoteBtn = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.shareBtn = _t.first);
    } }, inputs: { paramId: "paramId" }, decls: 45, vars: 17, consts: [[4, "ngIf"], [1, "card", "flex-row", 3, "hidden", "mouseleave"], [1, "left-pane"], [1, "author-picture", "round-image", "hover-half-opacity", 3, "src", "click"], [1, "content", "flexible"], [1, "font-size-dot8", "text-vertical-middle", "hover-half-opacity", 3, "click"], [1, "fg-faded"], ["class", "message margin-top-bot-dot2", 4, "ngIf"], ["class", "flex-row flexible-children", 4, "ngIf"], [3, "formGroup", 4, "ngIf"], ["class", "flex-row bot-padding-dot6ger", 4, "ngIf"], ["class", "border-faded-slim width-full padding-dot2 lighter-hover click-effect border-radius-dot3 margin-bot-dot5", 3, "click", 4, "ngIf"], [1, "post-details", "flex-row", "flex-justify-end", "font-size-dot7", "border-faded-slim", "border-bottom-only"], [1, "flex-row", "flex-center-align-items"], ["src", "/assets/icons/tabler-icon-calendar-time.svg", 1, "height-font"], ["src", "/assets/icons/tabler-icon-message-2.svg", 1, "height-font"], [1, "flex-row", "justify-children-center", "align-children-center"], ["class", "padding-dot2 lighter-hover click-effect border-radius-dot3", 3, "click", 4, "ngIf"], [1, "flexible", "padding-dot2", "lighter-hover", "click-effect", "border-radius-dot3", 3, "click"], ["src", "/assets/icons/tabler-icon-message-2.svg"], ["ngxClipboard", "", 1, "flexible", "padding-dot2", "lighter-hover", "click-effect", "border-radius-dot3", 3, "cbContent", "click"], ["share", ""], ["src", "/assets/icons/tabler-icon-link.svg"], [1, "rating", "flex-col", "flex-center-align-items"], [1, "flex-col", "lighter-hover", "border-radius-dot2", "click-effect", 3, "click"], ["upvote", ""], ["src", "/assets/icons/tabler-icon-chevron-up.svg"], [1, "top-bot-padding-dot2"], ["downvote", ""], ["src", "/assets/icons/tabler-icon-chevron-down.svg"], [1, "message", "margin-top-bot-dot2"], [1, "flex-row", "flexible-children"], [4, "ngFor", "ngForOf"], [3, "paramURL"], [3, "formGroup"], ["rows", "1", "formControlName", "newPostMessage", "placeholder", "What's on your mind?", 1, "textarea-new-msg", "width-full", "border-faded-slim", "border-bottom-only", "padding-dot2"], [1, "flex-row", "flex-justify-start", "align-children-center", "top-bot-padding-dot6ger"], [1, "file-button", "hover-half-opacity", "click-effect"], ["src", "/assets/icons/tabler-icon-paperclip.svg"], ["type", "file", "formControlName", "fileUpload", "multiple", "", 3, "change"], [1, "flex-row", "bot-padding-dot6ger"], ["class", "form-attachment border-faded-slim flexible flex-row flex-no-wrap flex-center-align-items padding-dot2 margin-top-bot-dot2", 4, "ngFor", "ngForOf"], [1, "form-attachment", "border-faded-slim", "flexible", "flex-row", "flex-no-wrap", "flex-center-align-items", "padding-dot2", "margin-top-bot-dot2"], [1, "flexible"], [1, "flex-col", "hover-half-opacity", "border-radius-dot2", "click-effect", 3, "click"], ["src", "/assets/icons/tabler-icon-x.svg"], [1, "border-faded-slim", "width-full", "padding-dot2", "lighter-hover", "click-effect", "border-radius-dot3", "margin-bot-dot5", 3, "click"], [1, "padding-dot2", "lighter-hover", "click-effect", "border-radius-dot3", 3, "click"], ["src", "/assets/icons/tabler-icon-edit.svg"], ["src", "/assets/icons/tabler-icon-trash.svg"]], template: function PostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PostComponent_app_loading_0_Template, 1, 0, "app-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function PostComponent_Template_section_mouseleave_1_listener() { return ctx.resetShareBtn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "aside", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_Template_img_click_3_listener() { return ctx.goToAuthorProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "main", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "summary", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_Template_summary_click_5_listener() { return ctx.goToAuthorProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PostComponent_article_10_Template, 2, 1, "article", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PostComponent_section_11_Template, 2, 1, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PostComponent_form_12_Template, 6, 1, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PostComponent_section_13_Template, 2, 1, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PostComponent_button_14_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "time", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "summary", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "section", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, PostComponent_button_27_Template, 2, 0, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_Template_button_click_28_listener() { return ctx.goToPostPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " \u00A0Comment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_Template_button_click_31_listener() { return ctx.showCopiedMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " \u00A0Share ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, PostComponent_button_35_Template, 2, 0, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "aside", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_Template_button_click_37_listener() { return ctx.votePost(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "summary", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 24, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_Template_button_click_42_listener() { return ctx.votePost(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.user.profilePictureURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.user.firstName, " ", ctx.user.lastName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" @", ctx.user.userName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.editingPost);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.editingPost);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editingPost);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editingPost);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editingPost);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.timeCreated, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.post.comments.length, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedInAuthor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cbContent", ctx.getPostLink());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedInAuthor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.votesNumber, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], ngx_clipboard__WEBPACK_IMPORTED_MODULE_10__["ClipboardDirective"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_11__["LoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _post_attachment_post_attachment_component__WEBPACK_IMPORTED_MODULE_12__["PostAttachmentComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".left-pane[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n\n\n.author-picture[_ngcontent-%COMP%] {\n  width: 2.2em;\n  height: 2.2em;\n}\n\n\n\n.content[_ngcontent-%COMP%] {\n  padding: 0 var(--card-padding);\n}\n\n.message[_ngcontent-%COMP%] {\n  word-break: break-word;\n}\n\n.post-details[_ngcontent-%COMP%] {\n  margin-bottom: calc(var(--card-padding) / 1.5);\n  padding: 0.2em 0;\n}\n\n.post-details[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-left: 1.1em;\n}\n\n.rating[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 1.2em;\n  width: 1.2em;\n}\n\n\n\n#attachments-btns[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .file-button[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  height: 1.4em;\n  width: 1.4em;\n}\n\n.file-button[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.file-button[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  position: absolute;\n  pointer-events: none;\n}\n\n.file-button[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  font-size: inherit;\n  color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQSxXQUFXOztBQUVYO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQSxZQUFZOztBQUVaO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsOENBQThDO0VBQzlDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUEsU0FBUzs7QUFFVDtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJwb3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGVmdC1wYW5lIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogQXV0aG9yICovXG5cbi5hdXRob3ItcGljdHVyZSB7XG4gIHdpZHRoOiAyLjJlbTtcbiAgaGVpZ2h0OiAyLjJlbTtcbn1cblxuLyogQ29udGVudCAqL1xuXG4uY29udGVudCB7XG4gIHBhZGRpbmc6IDAgdmFyKC0tY2FyZC1wYWRkaW5nKTtcbn1cblxuLm1lc3NhZ2Uge1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xufVxuXG4ucG9zdC1kZXRhaWxzIHtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1jYXJkLXBhZGRpbmcpIC8gMS41KTtcbiAgcGFkZGluZzogMC4yZW0gMDtcbn1cblxuLnBvc3QtZGV0YWlscyA+ICoge1xuICBtYXJnaW4tbGVmdDogMS4xZW07XG59XG5cbi5yYXRpbmcgaW1nIHtcbiAgaGVpZ2h0OiAxLjJlbTtcbiAgd2lkdGg6IDEuMmVtO1xufVxuXG4vKiBFZGl0ICovXG5cbiNhdHRhY2htZW50cy1idG5zIGltZywgLmZpbGUtYnV0dG9uID4gaW5wdXQge1xuICBoZWlnaHQ6IDEuNGVtO1xuICB3aWR0aDogMS40ZW07XG59XG5cbi5maWxlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmZpbGUtYnV0dG9uID4gaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmZpbGUtYnV0dG9uID4gaW5wdXQge1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbiJdfQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post',
                templateUrl: './post.component.html',
                styleUrls: ['./post.component.css'],
            }]
    }], function () { return [{ type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"] }, { type: src_app_services_rating_service__WEBPACK_IMPORTED_MODULE_4__["RatingService"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _services_token_service__WEBPACK_IMPORTED_MODULE_7__["TokenService"] }, { type: src_app_services_cloudinary_service__WEBPACK_IMPORTED_MODULE_8__["CloudinaryService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { paramId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], upvoteBtn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['upvote']
        }], downvoteBtn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['downvote']
        }], shareBtn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['share']
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-clipboard */ "Dvla");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/register/register.component */ "XC3f");
/* harmony import */ var _components_feed_feed_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/feed/feed.component */ "iaVG");
/* harmony import */ var _components_post_post_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/post/post.component */ "YzH7");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/profile/profile.component */ "DZ0t");
/* harmony import */ var _components_profile_settings_profile_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/profile-settings/profile-settings.component */ "TqOj");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "F33o");
/* harmony import */ var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/loading/loading.component */ "qQYQ");
/* harmony import */ var _components_error_bar_error_bar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/error-bar/error-bar.component */ "F8Cl");
/* harmony import */ var _components_success_bar_success_bar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/success-bar/success-bar.component */ "Uu83");
/* harmony import */ var _components_post_page_post_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/post-page/post-page.component */ "tnQw");
/* harmony import */ var _components_admin_panel_page_admin_panel_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/admin-panel-page/admin-panel-page.component */ "WOwQ");
/* harmony import */ var _components_comment_comment_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/comment/comment.component */ "fGHt");
/* harmony import */ var _components_post_attachment_post_attachment_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/post-attachment/post-attachment.component */ "UzPd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _components_comment_page_comment_page_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/comment-page/comment-page.component */ "JnnQ");



























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterModule"],
            ngx_clipboard__WEBPACK_IMPORTED_MODULE_5__["ClipboardModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
        _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
        _components_feed_feed_component__WEBPACK_IMPORTED_MODULE_10__["FeedComponent"],
        _components_post_post_component__WEBPACK_IMPORTED_MODULE_11__["PostComponent"],
        _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
        _components_profile_settings_profile_settings_component__WEBPACK_IMPORTED_MODULE_13__["ProfileSettingsComponent"],
        _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__["NotFoundComponent"],
        _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_15__["LoadingComponent"],
        _components_error_bar_error_bar_component__WEBPACK_IMPORTED_MODULE_16__["ErrorBarComponent"],
        _components_success_bar_success_bar_component__WEBPACK_IMPORTED_MODULE_17__["SuccessBarComponent"],
        _components_post_page_post_page_component__WEBPACK_IMPORTED_MODULE_18__["PostPageComponent"],
        _components_admin_panel_page_admin_panel_page_component__WEBPACK_IMPORTED_MODULE_19__["AdminPanelPageComponent"],
        _components_comment_comment_component__WEBPACK_IMPORTED_MODULE_20__["CommentComponent"],
        _components_post_attachment_post_attachment_component__WEBPACK_IMPORTED_MODULE_21__["PostAttachmentComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_23__["NavbarComponent"],
        _components_comment_page_comment_page_component__WEBPACK_IMPORTED_MODULE_24__["CommentPageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterModule"],
        ngx_clipboard__WEBPACK_IMPORTED_MODULE_5__["ClipboardModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                    _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                    _components_feed_feed_component__WEBPACK_IMPORTED_MODULE_10__["FeedComponent"],
                    _components_post_post_component__WEBPACK_IMPORTED_MODULE_11__["PostComponent"],
                    _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
                    _components_profile_settings_profile_settings_component__WEBPACK_IMPORTED_MODULE_13__["ProfileSettingsComponent"],
                    _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__["NotFoundComponent"],
                    _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_15__["LoadingComponent"],
                    _components_error_bar_error_bar_component__WEBPACK_IMPORTED_MODULE_16__["ErrorBarComponent"],
                    _components_success_bar_success_bar_component__WEBPACK_IMPORTED_MODULE_17__["SuccessBarComponent"],
                    _components_post_page_post_page_component__WEBPACK_IMPORTED_MODULE_18__["PostPageComponent"],
                    _components_admin_panel_page_admin_panel_page_component__WEBPACK_IMPORTED_MODULE_19__["AdminPanelPageComponent"],
                    _components_comment_comment_component__WEBPACK_IMPORTED_MODULE_20__["CommentComponent"],
                    _components_post_attachment_post_attachment_component__WEBPACK_IMPORTED_MODULE_21__["PostAttachmentComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_23__["NavbarComponent"],
                    _components_comment_page_comment_page_component__WEBPACK_IMPORTED_MODULE_24__["CommentPageComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterModule"],
                    ngx_clipboard__WEBPACK_IMPORTED_MODULE_5__["ClipboardModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "chyP":
/*!*************************************!*\
  !*** ./src/models/comment.model.ts ***!
  \*************************************/
/*! exports provided: Comment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
class Comment {
    constructor(commentId, postId, issuerFirstName, issuerLastName, issuerUsername, message, timeCreated) {
        this.commentId = commentId;
        this.postId = postId;
        this.issuerFirstName = issuerFirstName;
        this.issuerLastName = issuerLastName;
        this.issuerUsername = issuerUsername;
        this.message = message;
        this.timeCreated = timeCreated;
    }
    get commentId() {
        return this._commentId;
    }
    set commentId(v) {
        this._commentId = v;
    }
    get postId() {
        return this._postId;
    }
    set postId(v) {
        this._postId = v;
    }
    get issuerFirstName() {
        return this._issuerFirstName;
    }
    set issuerFirstName(v) {
        this._issuerFirstName = v;
    }
    get issuerLastName() {
        return this._issuerLastName;
    }
    set issuerLastName(v) {
        this._issuerLastName = v;
    }
    get issuerUsername() {
        return this._issuerUsername;
    }
    set issuerUsername(v) {
        this._issuerUsername = v;
    }
    get message() {
        return this._message;
    }
    set message(v) {
        this._message = v;
    }
    get timeCreated() {
        return this._timeCreated;
    }
    set timeCreated(v) {
        this._timeCreated = v;
    }
}


/***/ }),

/***/ "dUpr":
/*!************************************************!*\
  !*** ./src/app/services/cloudinary.service.ts ***!
  \************************************************/
/*! exports provided: CloudinaryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudinaryService", function() { return CloudinaryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class CloudinaryService {
    constructor(_http) {
        this._http = _http;
    }
    getFileRequest(fileLink) {
        return this._http.get(fileLink, {
            responseType: 'blob'
        });
    }
}
CloudinaryService.ɵfac = function CloudinaryService_Factory(t) { return new (t || CloudinaryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CloudinaryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CloudinaryService, factory: CloudinaryService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CloudinaryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "fGHt":
/*!*********************************************************!*\
  !*** ./src/app/components/comment/comment.component.ts ***!
  \*********************************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! guid-typescript */ "kLqA");
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(guid_typescript__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/comment.service */ "mxDV");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_token_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/token.service */ "rj1t");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-clipboard */ "Dvla");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../loading/loading.component */ "qQYQ");












const _c0 = ["share"];
function CommentComponent_app_loading_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
function CommentComponent_form_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CommentComponent_form_10_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.editComment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "textarea", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Update Comment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.editCommentFormGroup);
} }
function CommentComponent_article_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.comment.message, " ");
} }
function CommentComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentComponent_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.toggleEditing(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CommentComponent_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentComponent_button_24_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.deleteComment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CommentComponent {
    constructor(_router, _commentService, _userService, _tokenService, _fb, _elem, _renderer) {
        this._router = _router;
        this._commentService = _commentService;
        this._userService = _userService;
        this._tokenService = _tokenService;
        this._fb = _fb;
        this._elem = _elem;
        this._renderer = _renderer;
        this.loaded = false;
        this.loggedInAuthor = false;
        this.editingComment = false;
        this._linkShared = false;
    }
    ngOnInit() {
        this.comment = this._commentService.getDefaultComment();
        this.user = this._userService.getDefaultUser();
        this._commentService.getCommentRequest(guid_typescript__WEBPACK_IMPORTED_MODULE_2__["Guid"].parse(this.paramId)).subscribe({
            next: (result) => {
                Object.assign(this.comment, result);
                this.timeCreated = new Date(this.comment.timeCreated).toLocaleString('en-GB');
                this.loadUser();
            }
        });
        this.editCommentFormGroup = this._fb.group({
            newCommentMessage: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    loadUser() {
        this._userService.getUserByUsernameRequest(this.comment.issuerUsername).subscribe({
            next: (result) => {
                var _a;
                Object.assign(this.user, result);
                if (this._tokenService.getTokenFromSessionStorage() !== '') {
                    this.loggedInAuthor = this._tokenService.getUsernameFromSessionStorageToken() === this.comment.issuerUsername;
                    (_a = this.editCommentFormGroup.get('newCommentMessage')) === null || _a === void 0 ? void 0 : _a.setValue(this.comment.message);
                }
                this.loaded = true;
            }
        });
    }
    ngAfterViewInit() {
        this._defaultShareBtnInnerHTML = this.shareBtn.nativeElement.innerHTML;
    }
    goToAuthorProfile() {
        this._router.navigate(['/profile/' + this.comment.issuerUsername]);
    }
    toggleEditing() {
        this.editingComment = !this.editingComment;
    }
    editComment() {
        var _a;
        if (this._tokenService.getTokenFromSessionStorage() === '') {
            this._router.navigate(['/login']);
            return;
        }
        if (this.editingComment) {
            const newMessage = (_a = this.editCommentFormGroup.get('newCommentMessage')) === null || _a === void 0 ? void 0 : _a.value;
            if (newMessage !== '' && newMessage !== this.comment.message) {
                this._commentService.putCommentWithSessionStorageRequest(guid_typescript__WEBPACK_IMPORTED_MODULE_2__["Guid"].parse(this.paramId), this.comment.postId, newMessage).subscribe({
                    next: () => {
                        this.reloadPage();
                    }
                });
            }
        }
        this.editingComment = !this.editingComment;
    }
    deleteComment() {
        this._commentService.deleteCommentWithSessionStorage(guid_typescript__WEBPACK_IMPORTED_MODULE_2__["Guid"].parse(this.paramId)).subscribe({
            next: () => {
                this.reloadPage();
            }
        });
    }
    reloadPage() {
        this._router.routeReuseStrategy.shouldReuseRoute = () => false;
        this._router.onSameUrlNavigation = 'reload';
        this._router.navigate([this._router.url]);
    }
    resetShareBtn() {
        if (this._linkShared) {
            this._renderer.setProperty(this.shareBtn.nativeElement, 'innerHTML', this._defaultShareBtnInnerHTML);
            this._linkShared = false;
        }
    }
    showCopiedMessage() {
        this._renderer.setProperty(this.shareBtn.nativeElement, 'innerHTML', 'Link copied to clipboard!');
        this._linkShared = true;
    }
    getPostLink() {
        return location.origin + '/comment/' + this.paramId;
    }
}
CommentComponent.ɵfac = function CommentComponent_Factory(t) { return new (t || CommentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_4__["CommentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
CommentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommentComponent, selectors: [["app-comment"]], viewQuery: function CommentComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.shareBtn = _t.first);
    } }, inputs: { paramId: "paramId" }, decls: 25, vars: 12, consts: [[4, "ngIf"], [1, "card", "flex-row", 3, "hidden", "mouseleave"], [1, "left-pane"], [1, "author-picture", "round-image", "hover-half-opacity", 3, "src", "click"], [1, "content", "flexible"], [1, "font-size-dot8", "text-vertical-middle", "hover-half-opacity", 3, "click"], [1, "fg-faded"], [3, "formGroup", "ngSubmit", 4, "ngIf"], ["class", "message margin-top-bot-dot2", 4, "ngIf"], [1, "comment-details", "flex-row", "flex-justify-end", "font-size-dot7", "border-faded-slim", "border-bottom-only"], [1, "flex-row", "flex-center-align-items"], ["src", "/assets/icons/tabler-icon-calendar-time.svg", 1, "height-font"], [1, "flex-row", "justify-children-center", "align-children-center"], ["class", "padding-dot2 lighter-hover click-effect border-radius-dot3", 3, "click", 4, "ngIf"], ["ngxClipboard", "", 1, "flexible", "padding-dot2", "lighter-hover", "click-effect", "border-radius-dot3", 3, "cbContent", "click"], ["share", ""], ["src", "/assets/icons/tabler-icon-link.svg"], [3, "formGroup", "ngSubmit"], ["rows", "1", "formControlName", "newCommentMessage", "placeholder", "What's on your mind?", 1, "textarea-new-msg", "width-full", "border-faded-slim", "border-bottom-only", "padding-dot2", "margin-bot-dot5"], ["type", "submit", 1, "border-faded-slim", "width-full", "padding-dot2", "lighter-hover", "click-effect", "border-radius-dot3", "margin-bot-dot5"], [1, "message", "margin-top-bot-dot2"], [1, "padding-dot2", "lighter-hover", "click-effect", "border-radius-dot3", 3, "click"], ["src", "/assets/icons/tabler-icon-edit.svg"], ["src", "/assets/icons/tabler-icon-trash.svg"]], template: function CommentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CommentComponent_app_loading_0_Template, 1, 0, "app-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function CommentComponent_Template_section_mouseleave_1_listener() { return ctx.resetShareBtn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "aside", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentComponent_Template_img_click_3_listener() { return ctx.goToAuthorProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "main", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "summary", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentComponent_Template_summary_click_5_listener() { return ctx.goToAuthorProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CommentComponent_form_10_Template, 4, 1, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CommentComponent_article_11_Template, 2, 1, "article", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "time", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CommentComponent_button_19_Template, 2, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentComponent_Template_button_click_20_listener() { return ctx.showCopiedMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " \u00A0Share ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CommentComponent_button_24_Template, 2, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.user.profilePictureURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.user.firstName, " ", ctx.user.lastName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" @", ctx.user.userName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editingComment);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.editingComment);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.timeCreated, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedInAuthor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cbContent", ctx.getPostLink());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedInAuthor);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ngx_clipboard__WEBPACK_IMPORTED_MODULE_8__["ClipboardDirective"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_9__["LoadingComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".left-pane[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n\n\n.author-picture[_ngcontent-%COMP%] {\n  width: 2.2em;\n  height: 2.2em;\n}\n\n\n\n.content[_ngcontent-%COMP%] {\n  padding: 0 var(--card-padding);\n}\n\n.message[_ngcontent-%COMP%] {\n  word-break: break-word;\n}\n\n.comment-details[_ngcontent-%COMP%] {\n  margin-bottom: calc(var(--card-padding) / 1.5);\n  padding: 0.2em 0;\n}\n\n.comment-details[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-left: 1.1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQSxXQUFXOztBQUVYO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQSxZQUFZOztBQUVaO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsOENBQThDO0VBQzlDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJjb21tZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGVmdC1wYW5lIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogQXV0aG9yICovXG5cbi5hdXRob3ItcGljdHVyZSB7XG4gIHdpZHRoOiAyLjJlbTtcbiAgaGVpZ2h0OiAyLjJlbTtcbn1cblxuLyogQ29udGVudCAqL1xuXG4uY29udGVudCB7XG4gIHBhZGRpbmc6IDAgdmFyKC0tY2FyZC1wYWRkaW5nKTtcbn1cblxuLm1lc3NhZ2Uge1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xufVxuXG4uY29tbWVudC1kZXRhaWxzIHtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1jYXJkLXBhZGRpbmcpIC8gMS41KTtcbiAgcGFkZGluZzogMC4yZW0gMDtcbn1cblxuLmNvbW1lbnQtZGV0YWlscyA+ICoge1xuICBtYXJnaW4tbGVmdDogMS4xZW07XG59XG5cbiJdfQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-comment',
                templateUrl: './comment.component.html',
                styleUrls: ['./comment.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_4__["CommentService"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }, { type: src_app_services_token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { paramId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], shareBtn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['share']
        }] }); })();


/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/token.service */ "rj1t");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function NavbarComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.goToProfile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.user.profilePictureURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" @", ctx_r0.user.userName, " ");
} }
function NavbarComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.goToFeed(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_div_11_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.goToSettings(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_div_12_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_div_13_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.goToLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Login\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 8);
} }
class NavbarComponent {
    constructor(_router, _userService, _tokenService) {
        this._router = _router;
        this._userService = _userService;
        this._tokenService = _tokenService;
    }
    ngOnInit() {
        this.loggedIn = this._tokenService.getTokenFromSessionStorage() !== '';
        this.user = this._userService.getDefaultUser();
        if (this.loggedIn) {
            this._userService.getUserFromSessionStorageRequest().subscribe({
                next: (res) => {
                    Object.assign(this.user, res);
                },
            });
        }
    }
    goToProfile() {
        // Properly reload the page
        // Needed because if you're on someone's profile and go to yours, angular won't refresh the page (with your info)
        this._router.routeReuseStrategy.shouldReuseRoute = () => false;
        this._router.onSameUrlNavigation = 'reload';
        this._router.navigate(['/profile/' + this.user.userName]);
    }
    goToFeed() {
        if (this.loggedIn) {
            this._router.navigate(['/']);
        }
        else {
            this.goToLogin();
        }
    }
    goToSettings() {
        this._router.navigate(['/profile/' + this.user.userName + '/settings']);
    }
    logout() {
        this._tokenService.logoutUserFromSessionStorage();
        this.goToLogin();
    }
    goToLogin() {
        this._router.navigate(['/login']);
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 15, vars: 6, consts: [["id", "navbar"], ["id", "nav-contents", 1, "centered-content", "flex-row", "padding-dot3", "flex-center-align-items"], ["class", "nav-item border-radius-dot2 flex-row flex-center-align-items light-hover hover-half-opacity click-effect", 3, "click", 4, "ngIf"], ["class", "nav-item flex-col border-radius-dot2 light-hover hover-half-opacity click-effect", 3, "click", 4, "ngIf"], [1, "nav-item", "flex-col", "border-radius-dot2", "light-hover", "hover-half-opacity", "click-effect", 2, "display", "none"], ["src", "/assets/icons/tabler-icon-trending-up.svg"], ["src", "/assets/icons/tabler-icon-message-circle.svg"], ["src", "/assets/icons/tabler-icon-search.svg"], [1, "flexible"], ["class", "nav-item flex-row flex-center-align-items border-radius-dot2 light-hover hover-half-opacity click-effect side-padding-dot3", 3, "click", 4, "ngIf"], ["class", "flexible", 4, "ngIf"], [1, "nav-item", "border-radius-dot2", "flex-row", "flex-center-align-items", "light-hover", "hover-half-opacity", "click-effect", 3, "click"], ["id", "nav-profile-picture", 1, "flex-col"], [1, "round-image", 3, "src"], ["id", "nav-username", 1, "font-size-dot9", "flex-col"], [1, "padding-dot2"], [1, "nav-item", "flex-col", "border-radius-dot2", "light-hover", "hover-half-opacity", "click-effect", 3, "click"], ["src", "/assets/icons/tabler-icon-home.svg"], ["src", "/assets/icons/tabler-icon-settings.svg"], ["src", "/assets/icons/tabler-icon-logout.svg"], [1, "nav-item", "flex-row", "flex-center-align-items", "border-radius-dot2", "light-hover", "hover-half-opacity", "click-effect", "side-padding-dot3", 3, "click"], ["src", "/assets/icons/tabler-icon-login.svg"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavbarComponent_div_2_Template, 6, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavbarComponent_div_3_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NavbarComponent_div_11_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NavbarComponent_div_12_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NavbarComponent_div_13_Template, 3, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NavbarComponent_div_14_Template, 1, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loggedIn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["#navbar[_ngcontent-%COMP%] {\n  height: var(--navbar-height);\n  width: 100%;\n  background-color: var(--card-bg);\n}\n\n#nav-contents[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 1.9em;\n  width: 1.9em;\n}\n\n@media screen and (max-width: 30rem) {\n  #nav-username[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  #navbar[_ngcontent-%COMP%] {\n    font-size: 0.8em;\n  }\n}\n\n#nav-profile-picture[_ngcontent-%COMP%] {\n  padding: 0.1em;\n}\n\n#nav-profile-picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 1.8em;\n  width: 1.8em;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  margin-left: 0.2em;\n  padding: 0 0.1em;\n}\n\n.nav-item[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbmF2YmFyIHtcbiAgaGVpZ2h0OiB2YXIoLS1uYXZiYXItaGVpZ2h0KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYmcpO1xufVxuXG4jbmF2LWNvbnRlbnRzIGltZyB7XG4gIGhlaWdodDogMS45ZW07XG4gIHdpZHRoOiAxLjllbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzByZW0pIHtcbiAgI25hdi11c2VybmFtZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gICNuYXZiYXIge1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gIH1cbn1cblxuI25hdi1wcm9maWxlLXBpY3R1cmUge1xuICBwYWRkaW5nOiAwLjFlbTtcbn1cblxuI25hdi1wcm9maWxlLXBpY3R1cmUgaW1nIHtcbiAgaGVpZ2h0OiAxLjhlbTtcbiAgd2lkdGg6IDEuOGVtO1xufVxuXG4ubmF2LWl0ZW0ge1xuICBtYXJnaW4tbGVmdDogMC4yZW07XG4gIHBhZGRpbmc6IDAgMC4xZW07XG59XG5cbi5uYXYtaXRlbTpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuIl19 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: src_app_services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] }]; }, null); })();


/***/ }),

/***/ "iaVG":
/*!***************************************************!*\
  !*** ./src/app/components/feed/feed.component.ts ***!
  \***************************************************/
/*! exports provided: FeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedComponent", function() { return FeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_app_constants_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app-constants.module */ "MA1G");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var src_app_services_feed_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/feed.service */ "Plw+");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/post.service */ "ENZJ");
/* harmony import */ var src_app_services_token_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/token.service */ "rj1t");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../loading/loading.component */ "qQYQ");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../post/post.component */ "YzH7");















function FeedComponent_app_loading_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
function FeedComponent_main_2_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedComponent_main_2_div_8_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const file_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.removeAttachment(file_r5.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", file_r5.name ? file_r5.name : "Attachment", " ");
} }
function FeedComponent_main_2_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " None of your friends have posted anything yet!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Try refreshing your page! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FeedComponent_main_2_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-post", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const friendPost_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("paramId", friendPost_r8.postId.toString());
} }
function FeedComponent_main_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FeedComponent_main_2_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.createPost(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "textarea", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FeedComponent_main_2_Template_input_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.onFileUpload($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FeedComponent_main_2_div_8_Template, 5, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Post ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function FeedComponent_main_2_Template_section_scroll_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.onScroll($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FeedComponent_main_2_div_13_Template, 4, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FeedComponent_main_2_div_14_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.createPostFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.files);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.posts.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.posts);
} }
class FeedComponent {
    constructor(_titleService, _fb, _router, _userService, _feedService, _postService, _tokenService) {
        this._titleService = _titleService;
        this._fb = _fb;
        this._router = _router;
        this._userService = _userService;
        this._feedService = _feedService;
        this._postService = _postService;
        this._tokenService = _tokenService;
        this._title = 'Feed';
        this.dataArrived = false;
        this._titleService.setTitle(this._title);
    }
    ngOnInit() {
        if (!this._tokenService.getTokenFromSessionStorage()) {
            this._router.navigate(['/login']);
            return;
        }
        this._currentPage = 1;
        this.posts = [];
        this.user = this._userService.getDefaultUser();
        this.files = [];
        const now = new Date();
        now.setHours(now.getHours() + 3); // accounting for eastern european timezone
        this._timeLoaded = now.toISOString();
        this.createPostFormGroup = this._fb.group({
            newPostMessage: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            fileUpload: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this._userService.getUserFromSessionStorageRequest().subscribe({
            next: (res) => {
                Object.assign(this.user, res);
                this.loadFeed();
            },
            error: () => {
                this.logout();
            }
        });
    }
    loadFeed() {
        this._feedService.getUserFeedFromSessionStorageRequest(this._currentPage++, this._timeLoaded, src_app_app_constants_module__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].PAGE_SIZE).subscribe({
            next: (result) => {
                this.posts.push(...Object.values(result)[0]);
                this.finishUserLoading();
            },
            error: () => {
                this.finishUserLoading();
            }
        });
    }
    finishUserLoading() {
        this.dataArrived = true;
    }
    goToProfile() {
        this._router.navigate(['/profile/' + this.user.userName]);
    }
    goToSettings() {
        this._router.navigate(['/profile/' + this.user.userName + '/settings']);
    }
    logout() {
        this._tokenService.logoutUserFromSessionStorage();
        this._router.navigate(['/login']);
    }
    onFileUpload(event) {
        var _a;
        this.files.push(...event.target.files);
        (_a = this.createPostFormGroup.get('fileUpload')) === null || _a === void 0 ? void 0 : _a.reset();
    }
    removeAttachment(fileName) {
        this.files = this.files.filter(x => x.name !== fileName);
    }
    createPost() {
        var _a;
        const postMessage = (_a = this.createPostFormGroup.get('newPostMessage')) === null || _a === void 0 ? void 0 : _a.value;
        this.dataArrived = false;
        this._postService.createPostWithSessionStorageRequest(postMessage, this.files).subscribe({
            next: () => {
                this.goToProfile();
            },
            error: () => {
                this.dataArrived = true;
            }
        });
    }
    onScroll(event) {
        // Detects when the element has reached the bottom, thx https://stackoverflow.com/a/50038429/12036073
        if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight && this._currentPage > 0) {
            this.loadFeed();
        }
    }
}
FeedComponent.ɵfac = function FeedComponent_Factory(t) { return new (t || FeedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_feed_service__WEBPACK_IMPORTED_MODULE_6__["FeedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_post_service__WEBPACK_IMPORTED_MODULE_7__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_token_service__WEBPACK_IMPORTED_MODULE_8__["TokenService"])); };
FeedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeedComponent, selectors: [["app-feed"]], decls: 3, vars: 2, consts: [[4, "ngIf"], ["class", "centered-content scroll-standalone under-navbar flex-col flex-justify-start", 4, "ngIf"], [1, "centered-content", "scroll-standalone", "under-navbar", "flex-col", "flex-justify-start"], ["id", "create-post", 1, "card", "flex-col", 3, "formGroup", "ngSubmit"], ["rows", "1", "formControlName", "newPostMessage", "placeholder", "What's on your mind?", 1, "textarea-new-msg", "border-faded-slim", "border-bottom-only", "padding-dot2"], [1, "flex-row", "flex-justify-start", "align-children-center", "padding-top-bot-dot5"], [1, "file-button", "hover-half-opacity", "click-effect"], ["src", "/assets/icons/tabler-icon-paperclip.svg"], ["type", "file", "formControlName", "fileUpload", "multiple", "", 3, "change"], [1, "flex-row", "bot-padding-dot6ger"], ["class", "form-attachment border-faded-slim flexible flex-row flex-no-wrap flex-center-align-items padding-dot2 margin-top-bot-dot2", 4, "ngFor", "ngForOf"], [1, "border-faded-slim", "padding-dot2", "lighter-hover", "click-effect", "border-radius-dot3"], [1, "card-hr"], ["id", "posts", 3, "scroll"], ["class", "text-centered", 4, "ngIf"], ["class", "post", 4, "ngFor", "ngForOf"], [1, "form-attachment", "border-faded-slim", "flexible", "flex-row", "flex-no-wrap", "flex-center-align-items", "padding-dot2", "margin-top-bot-dot2"], [1, "flexible"], [1, "flex-col", "hover-half-opacity", "border-radius-dot2", "click-effect", 3, "click"], ["src", "/assets/icons/tabler-icon-x.svg"], [1, "text-centered"], [1, "post"], [3, "paramId"]], template: function FeedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FeedComponent_app_loading_1_Template, 1, 0, "app-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FeedComponent_main_2_Template, 15, 4, "main", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.dataArrived);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataArrived);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_11__["LoadingComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _post_post_component__WEBPACK_IMPORTED_MODULE_12__["PostComponent"]], styles: ["section[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n\n#create-post[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 1em;\n}\n\n#attachments-btns[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .file-button[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  height: 1.4em;\n  width: 1.4em;\n}\n\n.file-button[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.file-button[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  position: absolute;\n  pointer-events: none;\n}\n\n.file-button[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  font-size: inherit;\n  color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlZWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6ImZlZWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb246ZW1wdHkge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jY3JlYXRlLXBvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuXG4jYXR0YWNobWVudHMtYnRucyBpbWcsIC5maWxlLWJ1dHRvbiA+IGlucHV0IHtcbiAgaGVpZ2h0OiAxLjRlbTtcbiAgd2lkdGg6IDEuNGVtO1xufVxuXG4uZmlsZS1idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5maWxlLWJ1dHRvbiA+IGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5maWxlLWJ1dHRvbiA+IGlucHV0IHtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4iXX0= */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-feed',
                templateUrl: './feed.component.html',
                styleUrls: ['./feed.component.css']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }, { type: src_app_services_feed_service__WEBPACK_IMPORTED_MODULE_6__["FeedService"] }, { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_7__["PostService"] }, { type: src_app_services_token_service__WEBPACK_IMPORTED_MODULE_8__["TokenService"] }]; }, null); })();


/***/ }),

/***/ "j2SH":
/*!*******************************************!*\
  !*** ./src/models/identity/user.model.ts ***!
  \*******************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(id, userName, firstName, lastName, email, profilePictureURL, languages, technologies, roles, friends) {
        this.id = id;
        this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this._profilePictureURL = profilePictureURL;
        this.languages = languages;
        this.technologies = technologies;
        this.roles = roles;
    }
    get id() {
        return this._id;
    }
    set id(v) {
        this._id = v;
    }
    get userName() {
        return this._userName;
    }
    set userName(v) {
        this._userName = v;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(v) {
        this._firstName = v;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(v) {
        this._lastName = v;
    }
    get email() {
        return this._email;
    }
    set email(v) {
        this._email = v;
    }
    get profilePictureURL() {
        return this._profilePictureURL;
    }
    set profilePictureURL(v) {
        this._profilePictureURL = v;
    }
    get languages() {
        return this._languages;
    }
    set languages(v) {
        this._languages = v;
    }
    get technologies() {
        return this._technologies;
    }
    set technologies(v) {
        this._technologies = v;
    }
    get roles() {
        return this._roles;
    }
    set roles(v) {
        this._roles = v;
    }
    get friends() {
        return this._friends;
    }
    set friends(v) {
        this._friends = v;
    }
}


/***/ }),

/***/ "kyOO":
/*!**********************************************!*\
  !*** ./src/app/services/language.service.ts ***!
  \**********************************************/
/*! exports provided: LanguageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageService", function() { return LanguageService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_constants_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-constants.module */ "MA1G");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token.service */ "rj1t");






class LanguageService {
    constructor(_http, _tokenService) {
        this._http = _http;
        this._tokenService = _tokenService;
    }
    /* Requests from session storage */
    createLanguageWithSessionStorageRequest(name) {
        const token = this._tokenService.getTokenFromSessionStorage();
        return this.createLanguageRequest(name, token);
    }
    getAllLanguagesWithSessionStorageRequest() {
        const token = this._tokenService.getTokenFromSessionStorage();
        return this.getAllLanguagesRequest(token);
    }
    putLanguageWithSessionStorageRequest(langId, newName) {
        const token = this._tokenService.getTokenFromSessionStorage();
        return this.putLanguageRequest(token, langId, newName);
    }
    deleteLanguageWithSessionStorageRequest(langId) {
        const token = this._tokenService.getTokenFromSessionStorage();
        return this.deleteLanguageRequest(token, langId);
    }
    /* Language requests */
    createLanguageRequest(name, authToken) {
        const body = {
            name: name
        };
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'Bearer ' + authToken)
        };
        return this._http.post(_app_constants_module__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].API_LANGUAGE_URL, body, options);
    }
    getLanguageRequest(langId) {
        const options = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('Id', langId.toString()),
        };
        return this._http.get(_app_constants_module__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].API_LANGUAGE_URL, options);
    }
    getAllLanguagesRequest(authToken) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'Bearer ' + authToken)
        };
        return this._http.get(_app_constants_module__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].API_LANGUAGE_URL + '/GetLanguages', options);
    }
    getFullLanguagesFromIncomplete(givenLanguages) {
        if (givenLanguages.length === 0) {
            return new Promise(resolve => resolve(givenLanguages));
        }
        // This accepts language array with incomplete languages, meaning
        // languages that only have an id, but no name
        return new Promise(resolve => {
            const lastGuid = givenLanguages[givenLanguages.length - 1].id;
            // For each language, request his name and assign it
            for (const lang of givenLanguages) {
                this.getLanguageRequest(lang.id).subscribe((result) => {
                    // this only assigns the "name" property to the language,
                    // because only the name is returned from the request
                    Object.assign(lang, result);
                    if (lastGuid === lang.id) {
                        resolve(givenLanguages);
                    }
                });
            }
        });
    }
    putLanguageRequest(authToken, langId, newName) {
        const body = {
            name: newName
        };
        const options = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('Id', langId.toString()),
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'Bearer ' + authToken)
        };
        return this._http.put(_app_constants_module__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].API_LANGUAGE_URL, body, options);
    }
    deleteLanguageRequest(authToken, langId) {
        const options = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('LanguageId', langId.toString()),
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'Bearer ' + authToken)
        };
        return this._http.delete(_app_constants_module__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].API_LANGUAGE_URL, options);
    }
}
LanguageService.ɵfac = function LanguageService_Factory(t) { return new (t || LanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"])); };
LanguageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LanguageService, factory: LanguageService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LanguageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] }]; }, null); })();


/***/ }),

/***/ "mxDV":
/*!*********************************************!*\
  !*** ./src/app/services/comment.service.ts ***!
  \*********************************************/
/*! exports provided: CommentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentService", function() { return CommentService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! guid-typescript */ "kLqA");
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(guid_typescript__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_models_comment_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/models/comment.model */ "chyP");
/* harmony import */ var _app_constants_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-constants.module */ "MA1G");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./token.service */ "rj1t");








class CommentService {
    constructor(_http, _tokenService) {
        this._http = _http;
        this._tokenService = _tokenService;
    }
    getDefaultComment() {
        return new src_models_comment_model__WEBPACK_IMPORTED_MODULE_3__["Comment"](guid_typescript__WEBPACK_IMPORTED_MODULE_2__["Guid"].createEmpty(), guid_typescript__WEBPACK_IMPORTED_MODULE_2__["Guid"].createEmpty(), '', '', '', '', new Date());
    }
    /* Requests from session storage */
    createCommentWithSessionStorageRequest(postId, commentMessage) {
        const userId = this._tokenService.getUserIdFromSessionStorageToken();
        const token = this._tokenService.getTokenFromSessionStorage();
        return this.createCommentRequest(userId, token, postId, commentMessage);
    }
    putCommentWithSessionStorageRequest(commentId, postId, newMessage) {
        const userId = this._tokenService.getUserIdFromSessionStorageToken();
        const token = this._tokenService.getTokenFromSessionStorage();
        return this.putCommentRequest(userId, token, commentId, postId, newMessage);
    }
    deleteCommentWithSessionStorage(commentId) {
        const token = this._tokenService.getTokenFromSessionStorage();
        return this.deleteCommentRequest(commentId, token);
    }
    /* Comment requests */
    createCommentRequest(userId, authToken, postId, commentMessage) {
        const body = {
            postId: postId.toString(),
            message: commentMessage
        };
        const options = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('UserId', userId.toString()),
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'Bearer ' + authToken)
        };
        return this._http.post(_app_constants_module__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].API_COMMENT_URL, body, options);
    }
    getCommentRequest(id) {
        const options = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('CommentId', id.toString())
        };
        return this._http.get(_app_constants_module__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].API_COMMENT_URL, options);
    }
    putCommentRequest(userId, authToken, commentId, postId, newMessage) {
        const body = {
            commentId: commentId.toString(),
            postId: postId.toString(),
            newMessage: newMessage
        };
        const options = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('UserId', userId.toString()),
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'Bearer ' + authToken)
        };
        return this._http.put(_app_constants_module__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].API_COMMENT_URL, body, options);
    }
    deleteCommentRequest(commentId, authToken) {
        const options = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('CommentId', commentId.toString()),
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'Bearer ' + authToken)
        };
        return this._http.delete(_app_constants_module__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].API_COMMENT_URL, options);
    }
}
CommentService.ɵfac = function CommentService_Factory(t) { return new (t || CommentService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"])); };
CommentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CommentService, factory: CommentService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CommentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"] }]; }, null); })();


/***/ }),

/***/ "pR1J":
/*!**********************************!*\
  !*** ./src/models/post.model.ts ***!
  \**********************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
class Post {
    constructor(postId, creatorFirstName, creatorLastName, creatorUsername, message, timeCreated, comments, fileURLs, currentRating) {
        this.postId = postId;
        this.creatorFirstName = creatorFirstName;
        this.creatorLastName = creatorLastName;
        this.creatorUsername = creatorUsername;
        this.message = message;
        this.timeCreated = timeCreated;
        this.comments = comments;
        this.fileURLs = fileURLs;
        this.currentRating = currentRating;
    }
    get postId() {
        return this._postId;
    }
    set postId(v) {
        this._postId = v;
    }
    get creatorFirstName() {
        return this._creatorFirstName;
    }
    set creatorFirstName(v) {
        this._creatorFirstName = v;
    }
    get creatorLastName() {
        return this._creatorLastName;
    }
    set creatorLastName(v) {
        this._creatorLastName = v;
    }
    get creatorUsername() {
        return this._creatorUsername;
    }
    set creatorUsername(v) {
        this._creatorUsername = v;
    }
    get message() {
        return this._message;
    }
    set message(v) {
        this._message = v;
    }
    get timeCreated() {
        return this._timeCreated;
    }
    set timeCreated(v) {
        this._timeCreated = v;
    }
    get comments() {
        return this._comments;
    }
    set comments(v) {
        this._comments = v;
    }
    get fileURLs() {
        return this._fileURLs;
    }
    set fileURLs(v) {
        this._fileURLs = v;
    }
    get currentRating() {
        return this._currentRating;
    }
    set currentRating(v) {
        this._currentRating = v;
    }
}


/***/ }),

/***/ "qQYQ":
/*!*********************************************************!*\
  !*** ./src/app/components/loading/loading.component.ts ***!
  \*********************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LoadingComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(); };
LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["app-loading"]], decls: 2, vars: 0, consts: [["id", "content"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Loading...\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FkaW5nLmNvbXBvbmVudC5jc3MifQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading',
                templateUrl: './loading.component.html',
                styleUrls: ['./loading.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! guid-typescript */ "kLqA");
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(guid_typescript__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_identity_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/identity/user.model */ "j2SH");
/* harmony import */ var src_app_app_constants_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app-constants.module */ "MA1G");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./token.service */ "rj1t");








class UserService {
    constructor(_http, _tokenService) {
        this._http = _http;
        this._tokenService = _tokenService;
    }
    getDefaultUser() {
        return new _models_identity_user_model__WEBPACK_IMPORTED_MODULE_2__["User"](guid_typescript__WEBPACK_IMPORTED_MODULE_1__["Guid"].createEmpty(), '', '', '', '', src_app_app_constants_module__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].FALLBACK_PROFILE_ICON, [], [], [], []);
    }
    /* Requests from session storage */
    getUserFromSessionStorageRequest() {
        const userId = this._tokenService.getUserIdFromSessionStorageToken();
        const token = this._tokenService.getTokenFromSessionStorage();
        return this.getUserRequest(userId, token);
    }
    addFriendToUserFromSessionStorageRequest(newFriendUserName) {
        const userUserName = this._tokenService.getUsernameFromSessionStorageToken();
        const token = this._tokenService.getTokenFromSessionStorage();
        return this.addFriendToUserRequest(userUserName, token, newFriendUserName);
    }
    putUserFromSessionStorageRequest(updateUserFormGroup, languages, technologies, userRoles, userFriends) {
        const userId = this._tokenService.getUserIdFromSessionStorageToken();
        const token = this._tokenService.getTokenFromSessionStorage();
        return this.putUserRequest(userId, token, updateUserFormGroup, languages, technologies, userRoles, userFriends);
    }
    deleteUserFromSessionStorageRequest() {
        const userId = this._tokenService.getUserIdFromSessionStorageToken();
        const token = this._tokenService.getTokenFromSessionStorage();
        return this.deleteUserRequest(userId, token);
    }
    removeFriendFromUserFromSessionStorageRequest(friendToRemoveUserName) {
        const userUserName = this._tokenService.getUsernameFromSessionStorageToken();
        const token = this._tokenService.getTokenFromSessionStorage();
        return this.removeFriendFromUserRequest(userUserName, token, friendToRemoveUserName);
    }
    /* User requests */
    loginUserRequest(loginUserFormGroup) {
        var _a, _b;
        const body = {
            UserName: (_a = loginUserFormGroup.get('username')) === null || _a === void 0 ? void 0 : _a.value,
            Password: (_b = loginUserFormGroup.get('password')) === null || _b === void 0 ? void 0 : _b.value
        };
        return this._http.post(src_app_app_constants_module__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].API_USER_LOGIN_URL, body);
    }
    registerUserRequest(registerUserFormGroup) {
        var _a, _b, _c, _d, _e;
        const body = {
            UserName: (_a = registerUserFormGroup.get('username')) === null || _a === void 0 ? void 0 : _a.value,
            Email: (_b = registerUserFormGroup.get('email')) === null || _b === void 0 ? void 0 : _b.value,
            FirstName: (_c = registerUserFormGroup.get('firstName')) === null || _c === void 0 ? void 0 : _c.value,
            LastName: (_d = registerUserFormGroup.get('lastName')) === null || _d === void 0 ? void 0 : _d.value,
            Password: (_e = registerUserFormGroup.get('password')) === null || _e === void 0 ? void 0 : _e.value
        };
        return this._http.post(src_app_app_constants_module__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].API_USER_REGISTER_URL, body);
    }
    addFriendToUserRequest(userUserName, authToken, newFriendUserName) {
        const body = {
            newFriendUserName: newFriendUserName
        };
        const options = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set('UserName', userUserName),
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set('Authorization', 'Bearer ' + authToken)
        };
        return this._http.put(src_app_app_constants_module__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].API_USER_URL + '/AddFriend', body, options);
    }
    getUserRequest(userId, authToken) {
        const options = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set('Id', userId.toString()),
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set('Authorization', 'Bearer ' + authToken)
        };
        return this._http.get(src_app_app_constants_module__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].API_USER_URL, options);
    }
    getUserByUsernameRequest(username) {
        const options = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set('UserName', username),
        };
        return this._http.get(src_app_app_constants_module__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].API_USER_URL + '/GetUser', options);
    }
    putUserRequest(userId, authToken, updateUserFormGroup, languages, technologies, userRoles, userFriends) {
        var _a, _b, _c, _d, _e;
        const body = {
            UserName: (_a = updateUserFormGroup.get('username')) === null || _a === void 0 ? void 0 : _a.value,
            Email: (_b = updateUserFormGroup.get('email')) === null || _b === void 0 ? void 0 : _b.value,
            FirstName: (_c = updateUserFormGroup.get('firstName')) === null || _c === void 0 ? void 0 : _c.value,
            LastName: (_d = updateUserFormGroup.get('lastName')) === null || _d === void 0 ? void 0 : _d.value,
            Password: (_e = updateUserFormGroup.get('password')) === null || _e === void 0 ? void 0 : _e.value,
            Roles: userRoles,
            Friends: userFriends,
            Languages: languages,
            Technologies: technologies
        };
        const options = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set('Id', userId.toString()),
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set('Authorization', 'Bearer ' + authToken)
        };
        return this._http.put(src_app_app_constants_module__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].API_USER_URL, body, options);
    }
    deleteUserRequest(userId, authToken) {
        const options = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set('Id', userId.toString()),
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set('Authorization', 'Bearer ' + authToken)
        };
        return this._http.delete(src_app_app_constants_module__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].API_USER_URL, options);
    }
    removeFriendFromUserRequest(userUserName, authToken, friendToRemoveUserName) {
        const body = {
            friendUserNameToRemove: friendToRemoveUserName
        };
        const options = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set('UserName', userUserName),
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set('Authorization', 'Bearer ' + authToken)
        };
        return this._http.post(src_app_app_constants_module__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].API_USER_URL + '/RemoveFriend', body, options);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"] }]; }, null); })();


/***/ }),

/***/ "rj1t":
/*!*******************************************!*\
  !*** ./src/app/services/token.service.ts ***!
  \*******************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwt-decode */ "EjJx");
/* harmony import */ var _app_constants_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-constants.module */ "MA1G");




class TokenService {
    constructor() { }
    /* Session storage */
    setUserTokenToSessionStorage(response) {
        const token = JSON.stringify(response);
        sessionStorage.setItem(_app_constants_module__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].SESSION_TOKEN_KEY, token.substr(10, token.length - 12));
    }
    getTokenFromSessionStorage() {
        var _a;
        return (_a = sessionStorage.getItem(_app_constants_module__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].SESSION_TOKEN_KEY)) !== null && _a !== void 0 ? _a : '';
    }
    getUserIdFromSessionStorageToken() {
        const jwt = {
            token: this.getTokenFromSessionStorage()
        };
        const userCred = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_1__["default"])(jwt.token);
        return userCred.ID;
    }
    getUsernameFromSessionStorageToken() {
        const jwt = {
            token: this.getTokenFromSessionStorage()
        };
        const userCred = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_1__["default"])(jwt.token);
        return userCred.Username;
    }
    logoutUserFromSessionStorage() {
        sessionStorage.removeItem(_app_constants_module__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].SESSION_TOKEN_KEY);
    }
}
TokenService.ɵfac = function TokenService_Factory(t) { return new (t || TokenService)(); };
TokenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenService, factory: TokenService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "tnQw":
/*!*************************************************************!*\
  !*** ./src/app/components/post-page/post-page.component.ts ***!
  \*************************************************************/
/*! exports provided: PostPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPageComponent", function() { return PostPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! guid-typescript */ "kLqA");
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(guid_typescript__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/token.service */ "rj1t");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/post.service */ "ENZJ");
/* harmony import */ var src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/comment.service */ "mxDV");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../loading/loading.component */ "qQYQ");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../post/post.component */ "YzH7");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../comment/comment.component */ "fGHt");















function PostPageComponent_app_loading_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
function PostPageComponent_main_2_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nobody has comented on this post yet!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Try refreshing the page! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostPageComponent_main_2_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-comment", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comm_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("paramId", comm_r4.id.toString());
} }
function PostPageComponent_main_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-post", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PostPageComponent_main_2_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.addComment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "textarea", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Add Comment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PostPageComponent_main_2_div_8_Template, 4, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PostPageComponent_main_2_div_9_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("paramId", ctx_r1.postId.toString());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.addCommentFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.post == null ? null : ctx_r1.post.comments == null ? null : ctx_r1.post.comments.length) === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.post == null ? null : ctx_r1.post.comments);
} }
class PostPageComponent {
    constructor(_titleService, _router, _fb, _tokenService, _postService, _commentService) {
        this._titleService = _titleService;
        this._router = _router;
        this._fb = _fb;
        this._tokenService = _tokenService;
        this._postService = _postService;
        this._commentService = _commentService;
        this._title = 'Post';
        this.dataArrived = false;
        this.loggedIn = false;
        this._titleService.setTitle(this._title);
    }
    ngOnInit() {
        this.loggedIn = this._tokenService.getTokenFromSessionStorage() !== '';
        this.postId = guid_typescript__WEBPACK_IMPORTED_MODULE_2__["Guid"].parse(this._router.url.substring(6));
        // Gets the post and the logged in user and compares them,
        // to determine if the current post is made by the user
        this._postService.getPostRequest(this.postId).subscribe({
            next: (result) => {
                this.post = result;
                this.post.fileURLs = Object.values(result)[7];
                this.dataArrived = true;
            },
            error: () => {
                this._router.navigate(['/not-found']);
            }
        });
        this.addCommentFormGroup = this._fb.group({
            newComment: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    addComment() {
        var _a;
        if (!this.loggedIn) {
            this._router.navigate(['/login']);
            return;
        }
        const newComment = (_a = this.addCommentFormGroup.get('newComment')) === null || _a === void 0 ? void 0 : _a.value;
        if (newComment !== '' && newComment !== null) {
            this._commentService.createCommentWithSessionStorageRequest(this.postId, newComment).subscribe({
                next: () => {
                    this.reloadPage();
                }
            });
        }
    }
    reloadPage() {
        this._router.routeReuseStrategy.shouldReuseRoute = () => false;
        this._router.onSameUrlNavigation = 'reload';
        this._router.navigate([this._router.url]);
    }
}
PostPageComponent.ɵfac = function PostPageComponent_Factory(t) { return new (t || PostPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_post_service__WEBPACK_IMPORTED_MODULE_6__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_7__["CommentService"])); };
PostPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostPageComponent, selectors: [["app-post-page"]], decls: 3, vars: 2, consts: [[4, "ngIf"], ["class", "centered-content scroll-standalone under-navbar flex-col", 4, "ngIf"], [1, "centered-content", "scroll-standalone", "under-navbar", "flex-col"], [3, "paramId"], [1, "card", "flex-col", "width-full", "margin-0-top", 3, "formGroup", "ngSubmit"], ["rows", "1", "placeholder", "Add a new comment", "formControlName", "newComment", 1, "textarea-new-msg", "border-faded-slim", "border-bottom-only", "padding-dot2", "margin-bot-dot5"], ["type", "submit", 1, "border-faded-slim", "padding-dot2", "lighter-hover", "click-effect", "border-radius-dot3"], [1, "card-hr"], ["class", "text-centered", 4, "ngIf"], ["class", "comment", 4, "ngFor", "ngForOf"], [1, "text-centered"], [1, "comment"]], template: function PostPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostPageComponent_app_loading_1_Template, 1, 0, "app-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostPageComponent_main_2_Template, 10, 4, "main", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.dataArrived);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataArrived);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_10__["LoadingComponent"], _post_post_component__WEBPACK_IMPORTED_MODULE_11__["PostComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _comment_comment_component__WEBPACK_IMPORTED_MODULE_12__["CommentComponent"]], styles: ["main[_ngcontent-%COMP%] {\n  padding-top: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InBvc3QtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFpbiB7XG4gIHBhZGRpbmctdG9wOiAwLjVlbTtcbn1cbiJdfQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post-page',
                templateUrl: './post-page.component.html',
                styleUrls: ['./post-page.component.css']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"] }, { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_6__["PostService"] }, { type: src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_7__["CommentService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_feed_feed_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/feed/feed.component */ "iaVG");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/register/register.component */ "XC3f");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/profile/profile.component */ "DZ0t");
/* harmony import */ var _components_profile_settings_profile_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/profile-settings/profile-settings.component */ "TqOj");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "F33o");
/* harmony import */ var _components_post_page_post_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/post-page/post-page.component */ "tnQw");
/* harmony import */ var _components_admin_panel_page_admin_panel_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/admin-panel-page/admin-panel-page.component */ "WOwQ");
/* harmony import */ var _components_comment_page_comment_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/comment-page/comment-page.component */ "JnnQ");













const routes = [
    { path: '', component: _components_feed_feed_component__WEBPACK_IMPORTED_MODULE_2__["FeedComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'profile/:username', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
    { path: 'profile/:username/settings', component: _components_profile_settings_profile_settings_component__WEBPACK_IMPORTED_MODULE_6__["ProfileSettingsComponent"] },
    { path: 'post/:id', component: _components_post_page_post_page_component__WEBPACK_IMPORTED_MODULE_8__["PostPageComponent"] },
    { path: 'comment/:id', component: _components_comment_page_comment_page_component__WEBPACK_IMPORTED_MODULE_10__["CommentPageComponent"] },
    { path: 'admin-panel', component: _components_admin_panel_page_admin_panel_page_component__WEBPACK_IMPORTED_MODULE_9__["AdminPanelPageComponent"] },
    { path: 'not-found', component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"] },
    { path: '**', component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wqaA":
/*!********************************************!*\
  !*** ./src/app/services/friend.service.ts ***!
  \********************************************/
/*! exports provided: FriendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendService", function() { return FriendService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_constants_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-constants.module */ "MA1G");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token.service */ "rj1t");






class FriendService {
    constructor(_http, _tokenService) {
        this._http = _http;
        this._tokenService = _tokenService;
    }
    postFriendWithSessionStorageRequest(friendUsername) {
        const userId = this._tokenService.getUserIdFromSessionStorageToken();
        const token = this._tokenService.getTokenFromSessionStorage();
        return this.postFriendRequest(userId, token, friendUsername);
    }
    deleteFriendWithSessionStorageRequest(friendUsername) {
        const userId = this._tokenService.getUserIdFromSessionStorageToken();
        const token = this._tokenService.getTokenFromSessionStorage();
        return this.deleteFriendRequest(userId, token, friendUsername);
    }
    postFriendRequest(userId, authToken, friendUsername) {
        const options = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('UserId', userId.toString()).set('FriendUsername', friendUsername),
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'Bearer ' + authToken)
        };
        return this._http.post(_app_constants_module__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].API_FRIENDS_URL, {}, options);
    }
    deleteFriendRequest(userId, authToken, friendUsername) {
        const options = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('UserId', userId.toString()).set('FriendUsername', friendUsername),
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'Bearer ' + authToken)
        };
        return this._http.delete(_app_constants_module__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].API_FRIENDS_URL, options);
    }
}
FriendService.ɵfac = function FriendService_Factory(t) { return new (t || FriendService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"])); };
FriendService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FriendService, factory: FriendService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FriendService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] }]; }, null); })();


/***/ }),

/***/ "zFKK":
/*!************************************************!*\
  !*** ./src/app/services/technology.service.ts ***!
  \************************************************/
/*! exports provided: TechnologyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnologyService", function() { return TechnologyService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_constants_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-constants.module */ "MA1G");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token.service */ "rj1t");






class TechnologyService {
    constructor(_http, _tokenService) {
        this._http = _http;
        this._tokenService = _tokenService;
    }
    /* Requests from session storage */
    createTechnologyWithSessionStorageRequest(name) {
        const token = this._tokenService.getTokenFromSessionStorage();
        return this.createtTechnologyRequest(name, token);
    }
    getAllTechnologiesWithSessionStorageRequest() {
        const token = this._tokenService.getTokenFromSessionStorage();
        return this.getAllTechnologiesRequest(token);
    }
    putTechnologyWithSessionStorageRequest(langId, newName) {
        const token = this._tokenService.getTokenFromSessionStorage();
        return this.putTechnologyRequest(token, langId, newName);
    }
    deleteTechnologyWithSessionStorageRequest(langId) {
        const token = this._tokenService.getTokenFromSessionStorage();
        return this.deleteTechnologyRequest(token, langId);
    }
    /* Technology requests */
    createtTechnologyRequest(name, authToken) {
        const body = {
            name: name
        };
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'Bearer ' + authToken)
        };
        return this._http.post(_app_constants_module__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].API_TECHNOLOGY_URL, body, options);
    }
    getTechnologyRequest(techId) {
        const options = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('Id', techId.toString())
        };
        return this._http.get(_app_constants_module__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].API_TECHNOLOGY_URL, options);
    }
    getAllTechnologiesRequest(authToken) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'Bearer ' + authToken)
        };
        return this._http.get(_app_constants_module__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].API_TECHNOLOGY_URL + '/GetTechnologies', options);
    }
    getFullTechnologiesFromIncomplete(givenTechnologies) {
        if (givenTechnologies.length === 0) {
            return new Promise(resolve => resolve(givenTechnologies));
        }
        // This accepts language array with incomplete languages, meaning
        // languages that only have an id, but no name
        return new Promise(resolve => {
            const lastGuid = givenTechnologies[givenTechnologies.length - 1].id;
            // For each language, request his name and assign it
            for (const tech of givenTechnologies) {
                this.getTechnologyRequest(tech.id).subscribe((result) => {
                    // this only assigns the "name" property to the language,
                    // because only the name is returned from the request
                    Object.assign(tech, result);
                    if (lastGuid === tech.id) {
                        resolve(givenTechnologies);
                    }
                });
            }
        });
    }
    putTechnologyRequest(authToken, langId, newName) {
        const body = {
            name: newName
        };
        const options = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('Id', langId.toString()),
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'Bearer ' + authToken)
        };
        return this._http.put(_app_constants_module__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].API_TECHNOLOGY_URL, body, options);
    }
    deleteTechnologyRequest(authToken, langId) {
        const options = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('Id', langId.toString()),
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'Bearer ' + authToken)
        };
        return this._http.delete(_app_constants_module__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].API_TECHNOLOGY_URL, options);
    }
}
TechnologyService.ɵfac = function TechnologyService_Factory(t) { return new (t || TechnologyService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"])); };
TechnologyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TechnologyService, factory: TechnologyService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TechnologyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(err => console.error(err));
});


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
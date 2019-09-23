(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/layout/dashboard/components/chat/chat.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/layout/dashboard/components/chat/chat.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-panel card card-default\">\n    <div class=\"card-header\">\n        <i class=\"fa fa-comments fa-fw\"></i>\n        Chat\n        <div class=\" pull-right\" ngbDropdown>\n            <button class=\"btn btn-secondary btn-sm\" ngbDropdownToggle>\n                <span class=\"caret\"></span>\n            </button>\n            <ul class=\"dropdown-menu dropdown-menu-right\">\n                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">\n                    <i class=\"fa fa-refresh fa-fw\"></i> Refresh</a>\n                </li>\n                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">\n                    <i class=\"fa fa-check-circle fa-fw\"></i> Available</a>\n                </li>\n                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">\n                    <i class=\"fa fa-times fa-fw\"></i> Busy</a>\n                </li>\n                <li class=\"divider dropdown-divider\"></li>\n                <li role=\"menuitem\">\n                    <a href=\"#\" class=\"dropdown-item\">\n                        <i class=\"fa fa-times fa-fw\"></i> Busy\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\" class=\"dropdown-item\">\n                        <i class=\"fa fa-clock-o fa-fw\"></i> Away\n                    </a>\n                </li>\n                <li class=\"divider\"></li>\n                <li>\n                  <a href=\"#\" class=\"dropdown-item\">\n                    <i class=\"fa fa-sign-out fa-fw\"></i> Sign Out\n                  </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <!-- /.panel-heading -->\n    <div class=\"card-body\">\n        <ul class=\"chat\">\n            <li class=\"left clearfix\">\n                <span class=\"chat-img pull-left\">\n                    <img src=\"http://placehold.it/50/55C1E7/fff\" alt=\"User Avatar\" class=\"img-circle\">\n                </span>\n                <div class=\"chat-body clearfix\">\n                    <div class=\"header\">\n                        <strong class=\"primary-font\">Jack Sparrow</strong>\n                        <small class=\"pull-right text-muted\">\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 12 mins ago\n                        </small>\n                    </div>\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\n                    </p>\n                </div>\n            </li>\n            <li class=\"right clearfix\">\n                <span class=\"chat-img pull-right\">\n                    <img src=\"http://placehold.it/50/FA6F57/fff\" alt=\"User Avatar\" class=\"img-circle\">\n                </span>\n                <div class=\"chat-body clearfix\">\n                    <div class=\"header\">\n                        <small class=\" text-muted\">\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 13 mins ago\n                        </small>\n                        <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\n                    </div>\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\n                    </p>\n                </div>\n            </li>\n            <li class=\"left clearfix\">\n                <span class=\"chat-img pull-left\">\n                    <img src=\"http://placehold.it/50/55C1E7/fff\" alt=\"User Avatar\" class=\"img-circle\">\n                </span>\n                <div class=\"chat-body clearfix\">\n                    <div class=\"header\">\n                        <strong class=\"primary-font\">Jack Sparrow</strong>\n                        <small class=\"pull-right text-muted\">\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 14 mins ago\n                        </small>\n                    </div>\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\n                    </p>\n                </div>\n            </li>\n            <li class=\"right clearfix\">\n                <span class=\"chat-img pull-right\">\n                    <img src=\"http://placehold.it/50/FA6F57/fff\" alt=\"User Avatar\" class=\"img-circle\">\n                </span>\n                <div class=\"chat-body clearfix\">\n                    <div class=\"header\">\n                        <small class=\" text-muted\">\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 15 mins ago\n                        </small>\n                        <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\n                    </div>\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\n                    </p>\n                </div>\n            </li>\n        </ul>\n    </div>\n    <!-- /.card-body -->\n    <div class=\"card-footer\">\n        <div class=\"input-group\">\n            <input id=\"btn-input\" type=\"text\" class=\"form-control input-sm\" placeholder=\"Type your message here...\">\n            <span class=\"input-group-btn\">\n                <button class=\"btn btn-warning btn-sm\" id=\"btn-chat\">\n                    Send\n                </button>\n            </span>\n        </div>\n    </div>\n    <!-- /.card-footer -->\n</div>\n"

/***/ }),

/***/ "./src/app/layout/dashboard/components/chat/chat.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/layout/dashboard/components/chat/chat.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chat-panel .chat-dropdown {\n  margin-top: -3px; }\n\n.chat-panel .chat {\n  height: 350px;\n  overflow-y: scroll;\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n.chat-panel .chat .left img {\n    margin-right: 15px; }\n\n.chat-panel .chat .right img {\n    margin-left: 15px; }\n\n.chat-panel .chat li {\n    margin-bottom: 10px;\n    margin-right: 15px;\n    padding-bottom: 5px;\n    border-bottom: 1px dotted #999; }\n\n.chat-panel .card-footer input {\n  padding: 3px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dlc2NvZS9EZXNrdG9wL0Rhc2hib2FyZEFkbWluL3NyYy9hcHAvbGF5b3V0L2Rhc2hib2FyZC9jb21wb25lbnRzL2NoYXQvY2hhdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGlCQUFnQixFQUNuQjs7QUFITDtFQWVRLGNBQWE7RUFDYixtQkFBa0I7RUFDbEIsVUFBUztFQUNULFdBQVU7RUFDVixpQkFBZ0IsRUFPbkI7O0FBMUJMO0lBT2dCLG1CQUFrQixFQUNyQjs7QUFSYjtJQVlnQixrQkFBaUIsRUFDcEI7O0FBYmI7SUFxQlksb0JBQW1CO0lBQ25CLG1CQUFrQjtJQUNsQixvQkFBbUI7SUFDbkIsK0JBQThCLEVBQ2pDOztBQXpCVDtFQTZCWSxhQUFhLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2Rhc2hib2FyZC9jb21wb25lbnRzL2NoYXQvY2hhdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGF0LXBhbmVse1xuICAgIC5jaGF0LWRyb3Bkb3due1xuICAgICAgICBtYXJnaW4tdG9wOiAtM3B4O1xuICAgIH1cbiAgICAuY2hhdHtcbiAgICAgICAgLmxlZnR7XG4gICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5yaWdodHtcbiAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBoZWlnaHQ6IDM1MHB4O1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgbGl7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgIzk5OTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuY2FyZC1mb290ZXJ7XG4gICAgICAgIGlucHV0e1xuICAgICAgICAgICAgcGFkZGluZyA6IDNweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/dashboard/components/chat/chat.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/dashboard/components/chat/chat.component.ts ***!
  \********************************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
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

var ChatComponent = /** @class */ (function () {
    function ChatComponent() {
    }
    ChatComponent.prototype.ngOnInit = function () { };
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/layout/dashboard/components/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.scss */ "./src/app/layout/dashboard/components/chat/chat.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/components/index.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/dashboard/components/index.ts ***!
  \******************************************************/
/*! exports provided: TimelineComponent, NotificationComponent, ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/layout/dashboard/components/timeline/timeline.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_0__["TimelineComponent"]; });

/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/layout/dashboard/components/notification/notification.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return _notification_notification_component__WEBPACK_IMPORTED_MODULE_1__["NotificationComponent"]; });

/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/layout/dashboard/components/chat/chat.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"]; });






/***/ }),

/***/ "./src/app/layout/dashboard/components/notification/notification.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/notification/notification.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-body\">\n    <div class=\"list-group\">\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\n            <i class=\"fa fa-comment fa-fw\"></i> New Comment\n            <span class=\"float-right text-muted small\"><em>4 minutes ago</em></span>\n        </a>\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\n            <i class=\"fa fa-twitter fa-fw\"></i> 3 New Followers\n            <span class=\"float-right text-muted small\"><em>12 minutes ago</em></span>\n        </a>\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\n            <i class=\"fa fa-envelope fa-fw\"></i> Message Sent\n            <span class=\"float-right text-muted small\"><em>27 minutes ago</em></span>\n        </a>\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\n            <i class=\"fa fa-tasks fa-fw\"></i> New Task\n            <span class=\"float-right text-muted small\"><em>43 minutes ago</em></span>\n        </a>\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\n            <i class=\"fa fa-upload fa-fw\"></i> Server Rebooted\n            <span class=\"float-right text-muted small\"><em>11:32 AM</em></span>\n        </a>\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\n            <i class=\"fa fa-bolt fa-fw\"></i> Server Crashed!\n            <span class=\"float-right text-muted small\"><em>11:13 AM</em></span>\n        </a>\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\n            <i class=\"fa fa-warning fa-fw\"></i> Server Not Responding\n            <span class=\"float-right text-muted small\"><em>10:57 AM</em></span>\n        </a>\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\n            <i class=\"fa fa-shopping-cart fa-fw\"></i> New Order Placed\n            <span class=\"float-right text-muted small\"><em>9:49 AM</em></span>\n        </a>\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\n            <i class=\"fa fa-money fa-fw\"></i> Payment Received\n            <span class=\"float-right text-muted small\"><em>Yesterday</em></span>\n        </a>\n    </div>\n    <!-- /.list-group -->\n    <a href=\"#\" class=\"btn btn-default btn-block\">View All Alerts</a>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/dashboard/components/notification/notification.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/notification/notification.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9kYXNoYm9hcmQvY29tcG9uZW50cy9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/dashboard/components/notification/notification.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/notification/notification.component.ts ***!
  \************************************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
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

var NotificationComponent = /** @class */ (function () {
    function NotificationComponent() {
    }
    NotificationComponent.prototype.ngOnInit = function () { };
    NotificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.component.html */ "./src/app/layout/dashboard/components/notification/notification.component.html"),
            styles: [__webpack_require__(/*! ./notification.component.scss */ "./src/app/layout/dashboard/components/notification/notification.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/components/timeline/timeline.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/timeline/timeline.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-body\">\n    <ul class=\"timeline\">\n        <li>\n            <div class=\"timeline-badge\"><i class=\"fa fa-check\"></i>\n            </div>\n            <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                    <p><small class=\"text-muted\"><i class=\"fa fa-clock-o\"></i> 11 hours ago via Twitter</small>\n                    </p>\n                </div>\n                <div class=\"timeline-body\">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero laboriosam dolor perspiciatis omnis exercitationem. Beatae, officia pariatur? Est cum veniam excepturi. Maiores praesentium, porro voluptas suscipit facere rem dicta, debitis.</p>\n                </div>\n            </div>\n        </li>\n        <li class=\"timeline-inverted\">\n            <div class=\"timeline-badge warning\"><i class=\"fa fa-credit-card\"></i>\n            </div>\n            <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                </div>\n                <div class=\"timeline-body\">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolorem quibusdam, tenetur commodi provident cumque magni voluptatem libero, quis rerum. Fugiat esse debitis optio, tempore. Animi officiis alias, officia repellendus.</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium maiores odit qui est tempora eos, nostrum provident explicabo dignissimos debitis vel! Adipisci eius voluptates, ad aut recusandae minus eaque facere.</p>\n                </div>\n            </div>\n        </li>\n        <li>\n            <div class=\"timeline-badge danger\"><i class=\"fa fa-bomb\"></i>\n            </div>\n            <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                </div>\n                <div class=\"timeline-body\">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus numquam facilis enim eaque, tenetur nam id qui vel velit similique nihil iure molestias aliquam, voluptatem totam quaerat, magni commodi quisquam.</p>\n                </div>\n            </div>\n        </li>\n        <li class=\"timeline-inverted\">\n            <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                </div>\n                <div class=\"timeline-body\">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates est quaerat asperiores sapiente, eligendi, nihil. Itaque quos, alias sapiente rerum quas odit! Aperiam officiis quidem delectus libero, omnis ut debitis!</p>\n                </div>\n            </div>\n        </li>\n        <li>\n            <div class=\"timeline-badge info\"><i class=\"fa fa-save\"></i>\n            </div>\n            <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                </div>\n                <div class=\"timeline-body\">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis minus modi quam ipsum alias at est molestiae excepturi delectus nesciunt, quibusdam debitis amet, beatae consequuntur impedit nulla qui! Laborum, atque.</p>\n                    <hr>\n                    <div class=\"btn-group\">\n                        <button type=\"button\" class=\"btn btn-primary btn-sm dropdown-toggle\" data-toggle=\"dropdown\">\n                            <i class=\"fa fa-gear\"></i>  <span class=\"caret\"></span>\n                        </button>\n                        <ul class=\"dropdown-menu\" role=\"menu\">\n                            <li><a href=\"#\">Action</a>\n                            </li>\n                            <li><a href=\"#\">Another action</a>\n                            </li>\n                            <li><a href=\"#\">Something else here</a>\n                            </li>\n                            <li class=\"divider\"></li>\n                            <li><a href=\"#\">Separated link</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </li>\n        <li>\n            <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                </div>\n                <div class=\"timeline-body\">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fuga odio quibusdam. Iure expedita, incidunt unde quis nam! Quod, quisquam. Officia quam qui adipisci quas consequuntur nostrum sequi. Consequuntur, commodi.</p>\n                </div>\n            </div>\n        </li>\n        <li class=\"timeline-inverted\">\n            <div class=\"timeline-badge success\"><i class=\"fa fa-graduation-cap\"></i>\n            </div>\n            <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                </div>\n                <div class=\"timeline-body\">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt obcaecati, quaerat tempore officia voluptas debitis consectetur culpa amet, accusamus dolorum fugiat, animi dicta aperiam, enim incidunt quisquam maxime neque eaque.</p>\n                </div>\n            </div>\n        </li>\n    </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/dashboard/components/timeline/timeline.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/timeline/timeline.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".timeline {\n  position: relative;\n  padding: 20px 0 20px;\n  list-style: none; }\n\n.timeline:before {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  width: 3px;\n  margin-left: -1.5px;\n  background-color: #eeeeee; }\n\n.timeline > li {\n  position: relative;\n  margin-bottom: 20px; }\n\n.timeline > li:before,\n.timeline > li:after {\n  content: \" \";\n  display: table; }\n\n.timeline > li:after {\n  clear: both; }\n\n.timeline > li:before,\n.timeline > li:after {\n  content: \" \";\n  display: table; }\n\n.timeline > li:after {\n  clear: both; }\n\n.timeline > li > .timeline-panel {\n  float: left;\n  position: relative;\n  width: 46%;\n  padding: 20px;\n  border: 1px solid #d4d4d4;\n  border-radius: 2px;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175); }\n\n.timeline > li > .timeline-panel:before {\n  content: \" \";\n  display: inline-block;\n  position: absolute;\n  top: 26px;\n  right: -15px;\n  border-top: 15px solid transparent;\n  border-right: 0 solid #ccc;\n  border-bottom: 15px solid transparent;\n  border-left: 15px solid #ccc; }\n\n.timeline > li > .timeline-panel:after {\n  content: \" \";\n  display: inline-block;\n  position: absolute;\n  top: 27px;\n  right: -14px;\n  border-top: 14px solid transparent;\n  border-right: 0 solid #fff;\n  border-bottom: 14px solid transparent;\n  border-left: 14px solid #fff; }\n\n.timeline > li > .timeline-badge {\n  z-index: 100;\n  position: absolute;\n  top: 16px;\n  left: 50%;\n  width: 50px;\n  height: 50px;\n  margin-left: -25px;\n  border-radius: 50% 50% 50% 50%;\n  text-align: center;\n  font-size: 1.4em;\n  line-height: 50px;\n  color: #fff;\n  background-color: #999999; }\n\n.timeline > li.timeline-inverted > .timeline-panel {\n  float: right; }\n\n.timeline > li.timeline-inverted > .timeline-panel:before {\n  right: auto;\n  left: -15px;\n  border-right-width: 15px;\n  border-left-width: 0; }\n\n.timeline > li.timeline-inverted > .timeline-panel:after {\n  right: auto;\n  left: -14px;\n  border-right-width: 14px;\n  border-left-width: 0; }\n\n.timeline-badge.primary {\n  background-color: #2e6da4 !important; }\n\n.timeline-badge.success {\n  background-color: #3f903f !important; }\n\n.timeline-badge.warning {\n  background-color: #f0ad4e !important; }\n\n.timeline-badge.danger {\n  background-color: #d9534f !important; }\n\n.timeline-badge.info {\n  background-color: #5bc0de !important; }\n\n.timeline-title {\n  margin-top: 0;\n  color: inherit; }\n\n.timeline-body > p,\n.timeline-body > ul {\n  margin-bottom: 0; }\n\n.timeline-body > p + p {\n  margin-top: 5px; }\n\n@media (max-width: 767px) {\n  ul.timeline:before {\n    left: 40px; }\n  ul.timeline > li > .timeline-panel {\n    width: calc(100% - 90px);\n    width: -webkit-calc(100% - 90px); }\n  ul.timeline > li > .timeline-badge {\n    top: 16px;\n    left: 15px;\n    margin-left: 0; }\n  ul.timeline > li > .timeline-panel {\n    float: right; }\n  ul.timeline > li > .timeline-panel:before {\n    right: auto;\n    left: -15px;\n    border-right-width: 15px;\n    border-left-width: 0; }\n  ul.timeline > li > .timeline-panel:after {\n    right: auto;\n    left: -14px;\n    border-right-width: 14px;\n    border-left-width: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dlc2NvZS9EZXNrdG9wL0Rhc2hib2FyZEFkbWluL3NyYy9hcHAvbGF5b3V0L2Rhc2hib2FyZC9jb21wb25lbnRzL3RpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQWtCO0VBQ2xCLHFCQUFvQjtFQUNwQixpQkFBZ0IsRUFDbkI7O0FBRUQ7RUFDSSxhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLE9BQU07RUFDTixVQUFTO0VBQ1QsVUFBUztFQUNULFdBQVU7RUFDVixvQkFBbUI7RUFDbkIsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLG9CQUFtQixFQUN0Qjs7QUFFRDs7RUFFSSxhQUFZO0VBQ1osZUFBYyxFQUNqQjs7QUFFRDtFQUNJLFlBQVcsRUFDZDs7QUFFRDs7RUFFSSxhQUFZO0VBQ1osZUFBYyxFQUNqQjs7QUFFRDtFQUNJLFlBQVcsRUFDZDs7QUFFRDtFQUNJLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsV0FBVTtFQUNWLGNBQWE7RUFDYiwwQkFBeUI7RUFDekIsbUJBQWtCO0VBRWxCLDJDQUF1QyxFQUMxQzs7QUFFRDtFQUNJLGFBQVk7RUFDWixzQkFBcUI7RUFDckIsbUJBQWtCO0VBQ2xCLFVBQVM7RUFDVCxhQUFZO0VBQ1osbUNBQWtDO0VBQ2xDLDJCQUEwQjtFQUMxQixzQ0FBcUM7RUFDckMsNkJBQTRCLEVBQy9COztBQUVEO0VBQ0ksYUFBWTtFQUNaLHNCQUFxQjtFQUNyQixtQkFBa0I7RUFDbEIsVUFBUztFQUNULGFBQVk7RUFDWixtQ0FBa0M7RUFDbEMsMkJBQTBCO0VBQzFCLHNDQUFxQztFQUNyQyw2QkFBNEIsRUFDL0I7O0FBRUQ7RUFDSSxhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLFVBQVM7RUFDVCxVQUFTO0VBQ1QsWUFBVztFQUNYLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsK0JBQThCO0VBQzlCLG1CQUFrQjtFQUNsQixpQkFBZ0I7RUFDaEIsa0JBQWlCO0VBQ2pCLFlBQVc7RUFDWCwwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSxhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxZQUFXO0VBQ1gsWUFBVztFQUNYLHlCQUF3QjtFQUN4QixxQkFBb0IsRUFDdkI7O0FBRUQ7RUFDSSxZQUFXO0VBQ1gsWUFBVztFQUNYLHlCQUF3QjtFQUN4QixxQkFBb0IsRUFDdkI7O0FBRUQ7RUFDSSxxQ0FBb0MsRUFDdkM7O0FBRUQ7RUFDSSxxQ0FBb0MsRUFDdkM7O0FBRUQ7RUFDSSxxQ0FBb0MsRUFDdkM7O0FBRUQ7RUFDSSxxQ0FBb0MsRUFDdkM7O0FBRUQ7RUFDSSxxQ0FBb0MsRUFDdkM7O0FBRUQ7RUFDSSxjQUFhO0VBQ2IsZUFBYyxFQUNqQjs7QUFFRDs7RUFFSSxpQkFBZ0IsRUFDbkI7O0FBRUQ7RUFDSSxnQkFBZSxFQUNsQjs7QUFFRDtFQUNJO0lBQ0ksV0FBVSxFQUNiO0VBRUQ7SUFDSSx5QkFBd0I7SUFFeEIsaUNBQWdDLEVBQ25DO0VBRUQ7SUFDSSxVQUFTO0lBQ1QsV0FBVTtJQUNWLGVBQWMsRUFDakI7RUFFRDtJQUNJLGFBQVksRUFDZjtFQUVEO0lBQ0ksWUFBVztJQUNYLFlBQVc7SUFDWCx5QkFBd0I7SUFDeEIscUJBQW9CLEVBQ3ZCO0VBRUQ7SUFDSSxZQUFXO0lBQ1gsWUFBVztJQUNYLHlCQUF3QjtJQUN4QixxQkFBb0IsRUFDdkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9kYXNoYm9hcmQvY29tcG9uZW50cy90aW1lbGluZS90aW1lbGluZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aW1lbGluZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDIwcHggMCAyMHB4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi50aW1lbGluZTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB3aWR0aDogM3B4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMS41cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcbn1cblxuLnRpbWVsaW5lID4gbGkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4udGltZWxpbmUgPiBsaTpiZWZvcmUsXG4udGltZWxpbmUgPiBsaTphZnRlciB7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgZGlzcGxheTogdGFibGU7XG59XG5cbi50aW1lbGluZSA+IGxpOmFmdGVyIHtcbiAgICBjbGVhcjogYm90aDtcbn1cblxuLnRpbWVsaW5lID4gbGk6YmVmb3JlLFxuLnRpbWVsaW5lID4gbGk6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4udGltZWxpbmUgPiBsaTphZnRlciB7XG4gICAgY2xlYXI6IGJvdGg7XG59XG5cbi50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLXBhbmVsIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDQ2JTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ0ZDQ7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggNnB4IHJnYmEoMCwwLDAsMC4xNzUpO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDZweCByZ2JhKDAsMCwwLDAuMTc1KTtcbn1cblxuLnRpbWVsaW5lID4gbGkgPiAudGltZWxpbmUtcGFuZWw6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjZweDtcbiAgICByaWdodDogLTE1cHg7XG4gICAgYm9yZGVyLXRvcDogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6IDAgc29saWQgI2NjYztcbiAgICBib3JkZXItYm90dG9tOiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICNjY2M7XG59XG5cbi50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLXBhbmVsOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjdweDtcbiAgICByaWdodDogLTE0cHg7XG4gICAgYm9yZGVyLXRvcDogMTRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6IDAgc29saWQgI2ZmZjtcbiAgICBib3JkZXItYm90dG9tOiAxNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1sZWZ0OiAxNHB4IHNvbGlkICNmZmY7XG59XG5cbi50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLWJhZGdlIHtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTZweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgNTAlIDUwJSA1MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS40ZW07XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTk5OTtcbn1cblxuLnRpbWVsaW5lID4gbGkudGltZWxpbmUtaW52ZXJ0ZWQgPiAudGltZWxpbmUtcGFuZWwge1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuLnRpbWVsaW5lID4gbGkudGltZWxpbmUtaW52ZXJ0ZWQgPiAudGltZWxpbmUtcGFuZWw6YmVmb3JlIHtcbiAgICByaWdodDogYXV0bztcbiAgICBsZWZ0OiAtMTVweDtcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDE1cHg7XG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG59XG5cbi50aW1lbGluZSA+IGxpLnRpbWVsaW5lLWludmVydGVkID4gLnRpbWVsaW5lLXBhbmVsOmFmdGVyIHtcbiAgICByaWdodDogYXV0bztcbiAgICBsZWZ0OiAtMTRweDtcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDE0cHg7XG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG59XG5cbi50aW1lbGluZS1iYWRnZS5wcmltYXJ5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmU2ZGE0ICFpbXBvcnRhbnQ7XG59XG5cbi50aW1lbGluZS1iYWRnZS5zdWNjZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y5MDNmICFpbXBvcnRhbnQ7XG59XG5cbi50aW1lbGluZS1iYWRnZS53YXJuaW5nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBhZDRlICFpbXBvcnRhbnQ7XG59XG5cbi50aW1lbGluZS1iYWRnZS5kYW5nZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOTUzNGYgIWltcG9ydGFudDtcbn1cblxuLnRpbWVsaW5lLWJhZGdlLmluZm8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1YmMwZGUgIWltcG9ydGFudDtcbn1cblxuLnRpbWVsaW5lLXRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGNvbG9yOiBpbmhlcml0O1xufVxuXG4udGltZWxpbmUtYm9keSA+IHAsXG4udGltZWxpbmUtYm9keSA+IHVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4udGltZWxpbmUtYm9keSA+IHAgKyBwIHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6NzY3cHgpIHtcbiAgICB1bC50aW1lbGluZTpiZWZvcmUge1xuICAgICAgICBsZWZ0OiA0MHB4O1xuICAgIH1cblxuICAgIHVsLnRpbWVsaW5lID4gbGkgPiAudGltZWxpbmUtcGFuZWwge1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gOTBweCk7XG4gICAgICAgIHdpZHRoOiAtbW96LWNhbGMoMTAwJSAtIDkwcHgpO1xuICAgICAgICB3aWR0aDogLXdlYmtpdC1jYWxjKDEwMCUgLSA5MHB4KTtcbiAgICB9XG5cbiAgICB1bC50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLWJhZGdlIHtcbiAgICAgICAgdG9wOiAxNnB4O1xuICAgICAgICBsZWZ0OiAxNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG5cbiAgICB1bC50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLXBhbmVsIHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cblxuICAgIHVsLnRpbWVsaW5lID4gbGkgPiAudGltZWxpbmUtcGFuZWw6YmVmb3JlIHtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIGxlZnQ6IC0xNXB4O1xuICAgICAgICBib3JkZXItcmlnaHQtd2lkdGg6IDE1cHg7XG4gICAgICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xuICAgIH1cblxuICAgIHVsLnRpbWVsaW5lID4gbGkgPiAudGltZWxpbmUtcGFuZWw6YWZ0ZXIge1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgbGVmdDogLTE0cHg7XG4gICAgICAgIGJvcmRlci1yaWdodC13aWR0aDogMTRweDtcbiAgICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/layout/dashboard/components/timeline/timeline.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/timeline/timeline.component.ts ***!
  \****************************************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
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

var TimelineComponent = /** @class */ (function () {
    function TimelineComponent() {
    }
    TimelineComponent.prototype.ngOnInit = function () {
    };
    TimelineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timeline',
            template: __webpack_require__(/*! ./timeline.component.html */ "./src/app/layout/dashboard/components/timeline/timeline.component.html"),
            styles: [__webpack_require__(/*! ./timeline.component.scss */ "./src/app/layout/dashboard/components/timeline/timeline.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TimelineComponent);
    return TimelineComponent;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/dashboard-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/layout/dashboard/dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.component.html":
/*!***********************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <h2 class=\"text-muted\">Dashboard <small></small></h2>\n\n\n    <!--  <div class=\"form-group\">\n        <label class=\"marpd\">Select user type</label>\n        <select class=\"form-control\" [(ngModel)]=\"userType\" (change)=\"onChange($event.target.value)\">\n            <option value=\"soloApplication\">Solo Application</option>\n            <option  value=\"associate\">Associate</option>\n            <option  value=\"exhibitor,press,sponsor\">Company</option>\n        </select>\n    </div> -->\n    <div class=\"card mb-3 \">\n        <div class=\"card-header \">\n            All Unattended calls\n        </div> \n        <div class=\"row\" style=\"padding: 10px 0px;\">\n            <div class=\"col-sm-3\">\n                <div class=\"card text-white bg-primary mb-3\">\n                    <div class=\"card-header\">Total</div>\n                    <div class=\"card-body\">\n                        <h4 class=\"card-title\"> {{data.length}}</h4>\n                        <!-- <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-3\">\n                <div class=\"card text-white bg-secondary mb-3\">\n                    <div class=\"card-header\">Incoming</div>\n                    <div class=\"card-body\">\n                        <h4 class=\"card-title\">{{incoming.length}}</h4>\n                    </div>\n                </div>\n            </div>\n            <!-- /.col-sm-4 -->\n            <div class=\"col-sm-3\">\n                <div class=\"card text-white bg-success mb-3\">\n                    <div class=\"card-header\">Outgoing</div>\n                    <div class=\"card-body\">\n                        <h4 class=\"card-title\">{{outgoing.length}}</h4>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-3\">\n                <div class=\"card text-white bg-danger mb-3\">\n                    <div class=\"card-header\">Missed</div>\n                    <div class=\"card-body\">\n                        <h4 class=\"card-title\">{{missed.length}}</h4>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-sm-3\">\n        </div>\n            </div>\n        <div class=\"row\">\n            <div class=\"form-group col-xl-2\">\n                <!-- <label>Filter</label> -->\n                <select class=\"form-control \" [(ngModel)]=\"type\" (change)=\"onChange($event.target.value)\"> \n                    <option value=\"Incoming\">Incoming</option>\n                    <option  value=\"Outgoing\">Outgoing</option>\n                    <option  value=\"Missed\">Missed</option>\n                    <option value=\"Today\">All</option>\n                </select>\n            </div>\n\n            <div class=\"form-group col-xl-2\">\n                </div>\n            <div class=\"form-group col-xl-2\">\n            </div>\n           <!-- <div class=\"form-group col-xl-1\">\n            </div> -->\n          \n\n                <div class=\"form-group col-xl-2\">\n                    <!-- <label for=\"startDate\" class=\"control-label\">Start Date</label> -->\n                    <div class=\"input-group\">\n                        <input class=\"form-control\" placeholder=\"Start Date\" (ngModelChange)=\"setMinDate($event)\"\n                             name=\"startDate\" [(ngModel)]=\"dataToBeUsed.startDate\" ngbDatepicker #s=\"ngbDatepicker\" firstDayOfTheWeek=1 [startDate]=\"dataToBeUsed.startDate\">\n                        <div class=\"input-group-addon\" (click)=\"s.toggle()\" >\n                            <i class=\"fa fa-calendar\" aria-hidden=\"true\" style=\"font-size: 20px; padding: 9px; \"></i>\n                        </div>\n                    </div>\n                </div>\n        \n                <div class=\"form-group col-xl-2\">\n                    <!-- <label for=\"startDate\" class=\"control-label\">End Date</label> -->\n                    <div class=\"input-group\">\n                        <input class=\"form-control\" placeholder=\"End Date\"  (ngModelChange)=\"eddate($event)\"\n                             name=\"endDate\"  [(ngModel)]=\"dataToBeUsed.endDate\" ngbDatepicker #e=\"ngbDatepicker\" [minDate]=\"dataToBeUsed.minDate\">\n                        <div class=\"input-group-addon\" (click)=\"e.toggle()\" >\n                            <i class=\"fa fa-calendar\" aria-hidden=\"true\" style=\"font-size: 20px; padding: 9px; \"></i>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group col-xl-2\"   *ngIf=\"filterdata\">\n                        <button  class=\"btn btn-sm btn-default\" (click)=\"reset()\" style=\" margin: 5px; \" >Reset</button>\n                        <p style=\"\n                        font-size: 11px;\n                        padding: 0px 2px;\n                        margin: 0px !important;\n                    \">Reset to get all record</p>\n                </div>\n          \n        </div>\n        \n       \n    \n        <div class=\"card-body table-responsive \" *ngIf=\"data!=null && !filterdata\">\n            <table class=\"table table-bordered \">\n                <thead>\n                    <tr>\n                        <!-- <th>#</th> -->\n                        <th>Type</th>\n                        <th>Party Number</th>\n                        <th>Office Number</th>\n                        <!-- <th>Call Id</th> -->\n                        <th>Device Owned By</th>\n                        <th>Call Date/Time</th>\n                        \n                    </tr>\n                </thead>\n                <tbody *ngFor=\"let a of data,let i=index\">\n                    <tr (click)=\"open(a)\" *ngIf=\"type=='Today' && userData.mobile == a.officenumber\">\n                        <!-- <th scope=\"row \">{{i+1}}</th>   && a.calldatetime.includes(tday)-->\n                        <td >{{a.type}}</td>\n                        <td >{{a.partynumber}}</td>\n                        <td >{{a.officenumber}}</td>\n                        <!-- <td>{{a.callid}}</td> -->  \n                        <td >{{a.firstName}} {{a.lastName}}</td>\n                        <td >{{a.calldatetime}}</td>\n                        <!-- <td [innerHtml]=\"sanitizer.bypassSecurityTrustHtml(a.qrcode)\"></td> -->\n                    </tr>\n                    <tr (click)=\"open(a)\" *ngIf=\"a.type==type && type=='Outgoing'  &&  userData.mobile == a.officenumber\">\n                        <!-- <th scope=\"row \">{{i+1}}</th> -->\n                        <td >{{a.type}}</td>\n                        <td >{{a.partynumber}}</td>\n                        <td >{{a.officenumber}}</td>\n                        <!-- <td>{{a.callid}}</td> -->  \n                        <td >{{a.firstName}} {{a.lastName}}</td>\n                        <td >{{a.calldatetime}}</td>\n                        <!-- <td [innerHtml]=\"sanitizer.bypassSecurityTrustHtml(a.qrcode)\"></td> -->\n                    </tr>\n                    <tr (click)=\"open(a)\" *ngIf=\"a.type==type && type=='Incoming'  &&  userData.mobile == a.officenumber\">\n                        <!-- <th scope=\"row \">{{i+1}}</th> -->\n                        <td >{{a.type}}</td>\n                        <td >{{a.partynumber}}</td>\n                        <td >{{a.officenumber}}</td>\n                        <!-- <td>{{a.callid}}</td> -->  \n                        <td >{{a.firstName}} {{a.lastName}}</td>\n                        <td >{{a.calldatetime}}</td>\n                        <!-- <td [innerHtml]=\"sanitizer.bypassSecurityTrustHtml(a.qrcode)\"></td> -->\n                    </tr>\n                    <tr (click)=\"open(a)\" *ngIf=\"a.type==type && type=='Missed'  && userData.mobile == a.officenumber\">\n                        <!-- <th scope=\"row \">{{i+1}}</th> -->\n                        <td >{{a.type}}</td>\n                        <td >{{a.partynumber}}</td>\n                        <td >{{a.officenumber}}</td>\n                        <!-- <td>{{a.callid}}</td> -->  \n                        <td >{{a.firstName}} {{a.lastName}}</td>\n                        <td >{{a.calldatetime}}</td>\n                        <!-- <td [innerHtml]=\"sanitizer.bypassSecurityTrustHtml(a.qrcode)\"></td> -->\n                    </tr>\n                </tbody>\n                <!-- <tfoot>\n                    <tr>\n                        <td>Total</td>\n                        <td>{{data.length}}</td>\n                    </tr>\n                </tfoot> -->\n            </table>\n        </div>\n        <div class=\"card-body table-responsive \" *ngIf=\"localdata!=null && filterdata\">\n            <table class=\"table table-bordered \">\n                <thead>\n                    <tr>\n                        <!-- <th>#</th> -->\n                        <th>Type</th>\n                        <th>Party Number</th>\n                        <th>Office Number</th>\n                        <!-- <th>Call Id</th> -->\n                        <th>Device Owned By</th>\n                        <th>Call Date/Time</th>\n                        \n                    </tr>\n                </thead>\n                <tbody *ngFor=\"let a of localdata,let i=index\">\n                    <tr (click)=\"open(a)\" *ngIf=\"type=='Today'  &&  userData.mobile == a.officenumber\">\n                        <!-- <th scope=\"row \">{{i+1}}</th>   && a.calldatetime.includes(tday)-->\n                        <td >{{a.type}}</td>\n                        <td >{{a.partynumber}}</td>\n                        <td >{{a.officenumber}}</td>\n                        <!-- <td>{{a.callid}}</td> -->  \n                        <td >{{a.firstName}} {{a.lastName}}</td>\n                        <td >{{a.calldatetime}}</td>\n                        <!-- <td [innerHtml]=\"sanitizer.bypassSecurityTrustHtml(a.qrcode)\"></td> -->\n                    </tr>\n                    <tr (click)=\"open(a)\" *ngIf=\"a.type==type && type=='Outgoing'  && userData.mobile == a.officenumber\">\n                        <!-- <th scope=\"row \">{{i+1}}</th> -->\n                        <td >{{a.type}}</td>\n                        <td >{{a.partynumber}}</td>\n                        <td >{{a.officenumber}}</td>\n                        <!-- <td>{{a.callid}}</td> -->  \n                        <td >{{a.firstName}} {{a.lastName}}</td>\n                        <td >{{a.calldatetime}}</td>\n                        <!-- <td [innerHtml]=\"sanitizer.bypassSecurityTrustHtml(a.qrcode)\"></td> -->\n                    </tr>\n                    <tr (click)=\"open(a)\" *ngIf=\"a.type==type && type=='Incoming'  &&  userData.mobile == a.officenumber\">\n                        <!-- <th scope=\"row \">{{i+1}}</th> -->\n                        <td >{{a.type}}</td>\n                        <td >{{a.partynumber}}</td>\n                        <td >{{a.officenumber}}</td>\n                        <!-- <td>{{a.callid}}</td> -->  \n                        <td >{{a.firstName}} {{a.lastName}}</td>\n                        <td >{{a.calldatetime}}</td>\n                        <!-- <td [innerHtml]=\"sanitizer.bypassSecurityTrustHtml(a.qrcode)\"></td> -->\n                    </tr>\n                    <tr (click)=\"open(a)\" *ngIf=\"a.type==type && type=='Missed'  &&  userData.mobile == a.officenumber\">\n                        <!-- <th scope=\"row \">{{i+1}}</th> -->\n                        <td >{{a.type}}</td>\n                        <td >{{a.partynumber}}</td>\n                        <td >{{a.officenumber}}</td>\n                        <!-- <td>{{a.callid}}</td> -->  \n                        <td >{{a.firstName}} {{a.lastName}}</td>\n                        <td >{{a.calldatetime}}</td>\n                        <!-- <td [innerHtml]=\"sanitizer.bypassSecurityTrustHtml(a.qrcode)\"></td> -->\n                    </tr>\n                </tbody>\n                <!-- <tfoot>\n                    <tr>\n                        <td>Total</td>\n                        <td>{{data.length}}</td>\n                    </tr>\n                </tfoot> -->\n            </table>\n        </div>\n\n        <div *ngIf=\"data==null\" style=\"padding: 20px;\">\n            No Unattended calls\n        </div>\n        <!--  <div class=\"card-footer \">\n            <button class=\"btn btn-info btn-sm \" (click)=\"eventRegisteredUsersUpdate() \">Update</button>\n        </div> -->\n    </div>"

/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".marpd {\n  padding: 4px 10px;\n  margin-bottom: 5px !important; }\n\ntr {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dlc2NvZS9EZXNrdG9wL0Rhc2hib2FyZEFkbWluL3NyYy9hcHAvbGF5b3V0L2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBaUI7RUFDakIsOEJBQTZCLEVBQ2hDOztBQUNEO0VBQ0ksZ0JBQWUsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJwZCB7XHJcbiAgICBwYWRkaW5nOiA0cHggMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xyXG59XHJcbnRye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.component.ts ***!
  \*********************************************************/
/*! exports provided: DashboardComponent, NgbdModalContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContent", function() { return NgbdModalContent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DashboardComponent = /** @class */ (function () {
    // company:any=['exhibitor','press','sponsor']
    function DashboardComponent(calendar, apiservice, modalService, sanitizer) {
        this.calendar = calendar;
        this.apiservice = apiservice;
        this.modalService = modalService;
        this.sanitizer = sanitizer;
        this.alerts = [];
        this.sliders = [];
        this.data = [];
        this.localdata = [];
        this.userData = [];
        this.type = '';
        this.dataToBeUsed = { 'startDate': {},
            'endDate': {},
            'minDate': {} };
        this.filterdata = false;
        this.incoming = [];
        this.outgoing = [];
        this.missed = [];
    }
    DashboardComponent.prototype.setMinDate = function (event) {
        this.startdate = event;
        // this.dataToBeUsed.minDate = event;
        console.log(this.dataToBeUsed);
        console.log(event);
        this.dataToBeUsed = { 'startDate': this.calendar.getToday(),
            'endDate': {},
            'minDate': event };
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        //   this.dataToBeUsed = { 'startDate' : this.calendar.getToday(),
        // 'endDate' :  this.calendar.getToday(),
        // 'minDate' :  this.calendar.getToday()};
        localStorage.removeItem('localdata');
        this.startdate = this.calendar.getToday();
        this.type = 'Today';
        this.getData();
        this.userData = JSON.parse(localStorage.getItem('userData'));
        this.tday = new Date().toISOString().split('T')[0];
        console.log(this.tday);
        this.sub = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["interval"])(10000)
            .subscribe(function (val) { console.log('called'); _this.getData(); });
        // this.localdata=[];
        // this.displayData();
        // console.log("this.localdata: ",this.localdata);
        setTimeout(function () {
            _this.eddate('');
        }, 2000);
    };
    DashboardComponent.prototype.eddate = function (e) {
        this.filterdata = true;
        var start, end;
        start = this.startdate.year + '-' + this.startdate.month + '-' + this.startdate.day;
        if (e != '') {
            end = e.year + '-' + e.month + '-' + e.day;
        }
        else {
            end = start;
        }
        // console.log(this.enddate);
        console.log(this.dataToBeUsed);
        console.log(e);
        // this should be of object Date()
        console.log(start);
        console.log(end);
        // this.getData();
        this.localdata = JSON.parse(localStorage.getItem('localdata'));
        var selectedMembers = this.localdata.filter(function (m) {
            return new Date(m.calldatetime).toLocaleDateString() >= new Date(start).toLocaleDateString() && new Date(m.calldatetime).toLocaleDateString() <= new Date(end).toLocaleDateString();
        });
        console.log(selectedMembers);
        this.localdata = selectedMembers;
        console.log(this.localdata);
    };
    DashboardComponent.prototype.reset = function () {
        this.filterdata = false;
        localStorage.removeItem('localdata');
        this.type = 'Today';
        this.getData();
    };
    DashboardComponent.prototype.onChange = function (v) {
        console.log(v);
    };
    // onChange(deviceValue) {
    //   console.log(deviceValue);
    //   console.log(deviceValue.split(","));
    //   this.userType=deviceValue.split(",");
    //   //this.userType.includes("exhibitor","press","sponsor");
    //   // if(this.userType.length >1)
    //   // this.userType=
    // }
    DashboardComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    DashboardComponent.prototype.displayData = function () {
        console.log(this.data);
        console.log('this.localdata displayData: ', this.localdata);
        this.localdata = this.data;
    };
    DashboardComponent.prototype.getData = function () {
        var _this = this;
        this.apiservice.getAllTasks().subscribe(function (response) {
            console.log('getAllTasks response', response);
            if (response.Responsecode === 200) {
                _this.data = response.CallsData;
                if (!localStorage.getItem('localdata')) {
                    localStorage.setItem('localdata', JSON.stringify(_this.data));
                }
                console.log(_this.data);
                _this.incoming = _this.data.filter(function (m) { if (m.type == "Incoming")
                    return m; });
                //    console.log("incoming", this.incoming);
                _this.outgoing = _this.data.filter(function (m) { if (m.type == "Outgoing")
                    return m; });
                //   console.log("outgoing", this.outgoing);
                _this.missed = _this.data.filter(function (m) { if (m.type == "Missed")
                    return m; });
                //  console.log("missed", this.missed);
            }
            else {
                console.log('', response.message);
            }
        }, function (err) {
            console.log('err', err);
        });
    };
    DashboardComponent.prototype.open = function (a) {
        var _this = this;
        var modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.a = a;
        modalRef.componentInstance.partyNumber = a.partynumber;
        modalRef.componentInstance.emitData.subscribe(function ($e) {
            console.log('$e', $e);
            _this.getData();
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/layout/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/layout/dashboard/dashboard.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCalendar"], src_app_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], DashboardComponent);
    return DashboardComponent;
}());

var NgbdModalContent = /** @class */ (function () {
    function NgbdModalContent(activeModal, formBuilder, apiservice) {
        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
        this.apiservice = apiservice;
        this.emitData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.info = [];
        this.submitted = false;
    }
    NgbdModalContent.prototype.ngOnInit = function () {
        console.log(this.a);
        this.registerForm = this.formBuilder.group({
            purpose: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            orgname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            partyNumber: [this.a.partynumber, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            partyname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            remarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            callid: [this.a.callid, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
    };
    Object.defineProperty(NgbdModalContent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    NgbdModalContent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            // return;
            alert('Enter Complete Details');
        }
        else {
            console.log(this.registerForm.value);
            this.activeModal.dismiss('Close click');
            this.apiservice.updateTask(this.registerForm.value).subscribe(function (response) {
                console.log('updateTask response', response);
                if (response.Responsecode === 200) {
                    alert(response.Message);
                    _this.emitData.next('Hello world');
                    //   window.location.reload();
                }
                else {
                    alert(response.Message);
                }
            }, function (err) {
                console.log('err', err);
            });
        }
        //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
    };
    NgbdModalContent.prototype.submit = function (a, b) {
        var _this = this;
        console.log(a, b);
        if (this.info.purpose !== '' && this.info.orgname !== '' && this.info.partyname !== '' && this.info.remarks !== '') {
            a.callid = b;
            // a.partyname=c;
            console.log('aaaaaaaaaaa', a);
            this.activeModal.dismiss('Close click');
            this.apiservice.updateTask(a).subscribe(function (response) {
                console.log('updateTask response', response);
                if (response.Responsecode === 200) {
                    alert(response.Message);
                    _this.emitData.next('Hello world');
                    //   window.location.reload();
                }
                else {
                    alert(response.Message);
                }
            }, function (err) {
                console.log('err', err);
            });
        }
        else {
            alert('Enter Complete Details!');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgbdModalContent.prototype, "a", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgbdModalContent.prototype, "partyNumber", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NgbdModalContent.prototype, "emitData", void 0);
    NgbdModalContent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-modal-content',
            template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Enter Details</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label>Purpose</label>\n        <input type=\"text\" formControlName=\"purpose\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.purpose.errors }\" />\n        <div *ngIf=\"submitted && f.purpose.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.purpose.errors.required\">Purpose is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label>Organization name</label>\n        <input type=\"text\" formControlName=\"orgname\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.orgname.errors }\" />\n        <div *ngIf=\"submitted && f.orgname.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.orgname.errors.required\">Organization name is required</div>\n        </div>\n    </div>\n\n     <div class=\"form-group\">\n        <label>Party number</label>\n        <input type=\"text\" formControlName=\"partyNumber\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.partyNumber.errors }\" />\n    </div>\n\n     <div class=\"form-group\">\n        <label>Party name</label>\n        <input type=\"text\" formControlName=\"partyname\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.partyname.errors }\" />\n        <div *ngIf=\"submitted && f.partyname.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.partyname.errors.required\">Party name is required</div>\n        </div>\n    </div>\n     <div class=\"form-group\">\n        <label>Remarks</label>\n        <input type=\"text\" formControlName=\"remarks\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.remarks.errors }\" />\n        <div *ngIf=\"submitted && f.remarks.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.remarks.errors.required\">Remarks is required</div>\n        </div>\n    </div>\n\n\n    <div class=\"form-group\">\n        <button  class=\"btn btn-outline-dark\" >Submit</button>\n    </div>\n</form>\n\n    </div>\n\n  "
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], src_app_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], NgbdModalContent);
    return NgbdModalContent;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.module.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.module.ts ***!
  \******************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/layout/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/layout/dashboard/dashboard.component.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components */ "./src/app/layout/dashboard/components/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlertModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_6__["StatModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModalModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
            ],
            declarations: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
                _components__WEBPACK_IMPORTED_MODULE_5__["TimelineComponent"],
                _components__WEBPACK_IMPORTED_MODULE_5__["NotificationComponent"],
                _components__WEBPACK_IMPORTED_MODULE_5__["ChatComponent"],
                _dashboard_component__WEBPACK_IMPORTED_MODULE_4__["NgbdModalContent"]
            ],
            entryComponents: [_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], _dashboard_component__WEBPACK_IMPORTED_MODULE_4__["NgbdModalContent"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map
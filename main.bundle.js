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

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<a href=\"https://github.com/linktothapast/photo-manipulation-ml\"><img style=\"position: absolute; top: 0; right: 0; border: 0;\" src=\"https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67\" alt=\"Fork me on GitHub\" data-canonical-src=\"https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png\"></a>\n\n<div class=\"bg-primary text-white\">\n  <div class=\"container py-5\">\n    <h1>Photo Manipulation with Machine Learning</h1>\n    <p>\n      Choose an <strong>input</strong> photo and an <strong>output</strong> photo, and press <strong>Train</strong>.\n      Once the neural network has finished training, select another <strong>source</strong> photo and watch the app <strong>generate</strong> a new photo based on what it learned!\n    </p>\n    <p class=\"small mb-0\">For best results, apply an effect to the input photo (such as sepia or grayscale) and feed it to the network as the output photo.</p>\n  </div>\n</div>\n\n<div class=\"container py-5\">\n\n  <div class=\"row\">\n    <div class=\"col-12 col-md-4 text-center\">\n      <label class=\"text-muted\">Input</label>\n      <app-canvas #canvasInput\n        [width]=\"canvasWidth\"\n        [height]=\"canvasHeight\"\n        class=\"clickable\"\n        (click)=\"pickerInput.open()\"\n      ></app-canvas>\n      <app-file-picker #pickerInput\n        (onFileSelected)=\"canvasInput.drawImageFromFile($event)\"\n      ></app-file-picker>\n    </div>\n    <div class=\"col-12 col-md-4 text-center align-self-center\">\n      <div *ngIf=\"!isTraining\">\n        <div>\n          <button type=\"button\"\n            class=\"btn btn-outline-primary\"\n            (click)=\"train()\">\n            Train >\n          </button>\n        </div>\n        <div class=\"mt-1\">\n          <div class=\"btn-group\">\n            <button type=\"button\"\n              class=\"btn btn-sm btn-outline-secondary\"\n              (click)=\"pickerNetwork.open()\">\n              Load\n            </button>\n            <button type=\"button\"\n              class=\"btn btn-sm btn-outline-secondary\"\n              (click)=\"save()\">\n              Save\n            </button>\n          </div>\n          <app-file-picker #pickerNetwork\n            [accept]=\"'.json'\"\n            (onFileSelected)=\"loadNetwork($event)\"\n          ></app-file-picker>\n        </div>\n      </div>\n      <div *ngIf=\"isTraining\">\n        <p class=\"mb-1 text-muted\">Training...</p>\n        <button type=\"button\"\n          class=\"btn btn-outline-warning\"\n          (click)=\"stopTraining()\">\n          Stop\n        </button>\n\n        <div class=\"mt-3 text-left w-75\">\n          <code>Error: {{ error }}\n            <br>\n            Iterations: {{ iterations }}\n            <br>\n            Rate: {{ rate }}\n          </code>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 col-md-4 text-center\">\n      <label class=\"text-muted\">Output</label>\n      <app-canvas #canvasOutput\n        [width]=\"canvasWidth\"\n        [height]=\"canvasHeight\"\n        class=\"clickable\"\n        (click)=\"pickerOutput.open()\"\n      ></app-canvas>\n      <app-file-picker #pickerOutput\n        (onFileSelected)=\"canvasOutput.drawImageFromFile($event)\"\n      ></app-file-picker>\n    </div>\n  </div>\n</div>\n\n<div class=\"bg-dark text-white\">\n  <div class=\"container py-5\">\n    <div class=\"row\">\n      <div class=\"col-12 col-md-4 text-center\">\n        <label class=\"text-muted\">Source</label>\n        <app-canvas #canvasSource\n          [width]=\"canvasWidth\"\n          [height]=\"canvasHeight\"\n          class=\"clickable\"\n          (click)=\"pickerSource.open()\"\n        ></app-canvas>\n        <app-file-picker #pickerSource\n          (onFileSelected)=\"canvasSource.drawImageFromFile($event)\"\n        ></app-file-picker>\n      </div>\n      <div class=\"col-12 col-md-4 text-center align-self-center\">\n        <button type=\"button\"\n          class=\"btn btn-primary\"\n          (click)=\"generate()\">\n          Generate >\n        </button>\n      </div>\n      <div class=\"col-12 col-md-4 text-center\">\n        <label class=\"text-muted\">Result</label>\n        <app-canvas #canvasResult\n          [width]=\"canvasWidth\"\n          [height]=\"canvasHeight\"\n        ></app-canvas>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clickable {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__network_network_service__ = __webpack_require__("../../../../../src/app/network/network.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__canvas_canvas_component__ = __webpack_require__("../../../../../src/app/canvas/canvas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_save_as__ = __webpack_require__("../../../../save-as/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_save_as___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_save_as__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(network, http) {
        this.network = network;
        this.http = http;
        this.canvasWidth = 600;
        this.canvasHeight = 350;
        this.isTraining = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        // Load sample data
        this.canvasInput.drawImageFromUrl('assets/car-beetle-red.png');
        this.canvasOutput.drawImageFromUrl('assets/car-beetle-blue.png');
        this.canvasSource.drawImageFromUrl('assets/car-jetta-red.png');
    };
    AppComponent.prototype.loadNetwork = function (file) {
        var _this = this;
        return new Promise(function (resolve) {
            var fileReader = new FileReader();
            fileReader.onload = function (event) {
                var fileUrl = event.target['result'];
                resolve(fileUrl);
            };
            fileReader.readAsDataURL(file);
        }).then(function (url) {
            _this.http.get(url).subscribe(function (data) {
                _this.network.load(data);
            });
        });
    };
    AppComponent.prototype.save = function () {
        var json = this.network.toJSON();
        var blob = new Blob([JSON.stringify(json)], { type: 'application/json;charset=utf-8' });
        __WEBPACK_IMPORTED_MODULE_4_save_as___default()(blob, 'network.json');
    };
    AppComponent.prototype.train = function () {
        var _this = this;
        var data = this.getTrainingData();
        var that = this;
        var iterationCallback = function (data) {
            that.error = data.error;
            that.iterations = data.iterations;
            that.rate = data.rate;
            return !that.isTraining;
        };
        this.isTraining = true;
        this.network
            .train({ data: data, iterationCallback: iterationCallback })
            .then(function () {
            _this.isTraining = false;
            alert('Training done!');
        });
    };
    AppComponent.prototype.stopTraining = function () {
        this.isTraining = false;
    };
    AppComponent.prototype.getTrainingData = function () {
        var pixelsInput = this.canvasInput.getImageData().data;
        var pixelsOutput = this.canvasOutput.getImageData().data;
        var data = [];
        for (var x = 0; x < this.canvasWidth; x++) {
            for (var y = 0; y < this.canvasHeight; y++) {
                var input = [];
                var output = [];
                input.push.apply(input, this.getPixel(pixelsInput, x - 1, y - 1));
                input.push.apply(input, this.getPixel(pixelsInput, x + 0, y - 1));
                input.push.apply(input, this.getPixel(pixelsInput, x + 1, y - 1));
                input.push.apply(input, this.getPixel(pixelsInput, x - 1, y + 0));
                input.push.apply(input, this.getPixel(pixelsInput, x + 0, y + 0));
                input.push.apply(input, this.getPixel(pixelsInput, x + 1, y + 0));
                input.push.apply(input, this.getPixel(pixelsInput, x - 1, y + 1));
                input.push.apply(input, this.getPixel(pixelsInput, x + 0, y + 1));
                input.push.apply(input, this.getPixel(pixelsInput, x + 1, y + 1));
                output.push.apply(output, this.getPixel(pixelsOutput, x, y));
                data.push({ input: input, output: output });
            }
        }
        return data;
    };
    AppComponent.prototype.getPixel = function (pixelArray, x, y) {
        var PIXEL_SIZE = 4;
        var index = (x + (y * this.canvasWidth)) * PIXEL_SIZE;
        var pixels = pixelArray.slice(index, index + PIXEL_SIZE);
        if (pixels.length === PIXEL_SIZE) {
            return [
                pixels[0] / 255,
                pixels[1] / 255,
                pixels[2] / 255
            ];
        }
        return [0, 0, 0];
    };
    AppComponent.prototype.generate = function () {
        if (!this.network.isTrained) {
            alert('Train the neural network first :)');
            return;
        }
        var sourceData = this.canvasSource.getImageData();
        var resultData = this.canvasResult.getImageData();
        var PIXEL_SIZE = 4;
        for (var x = 0; x < this.canvasWidth; x++) {
            for (var y = 0; y < this.canvasHeight; y++) {
                var input = [];
                input.push.apply(input, this.getPixel(sourceData.data, x - 1, y - 1));
                input.push.apply(input, this.getPixel(sourceData.data, x + 0, y - 1));
                input.push.apply(input, this.getPixel(sourceData.data, x + 1, y - 1));
                input.push.apply(input, this.getPixel(sourceData.data, x - 1, y + 0));
                input.push.apply(input, this.getPixel(sourceData.data, x + 0, y + 0));
                input.push.apply(input, this.getPixel(sourceData.data, x + 1, y + 0));
                input.push.apply(input, this.getPixel(sourceData.data, x - 1, y + 1));
                input.push.apply(input, this.getPixel(sourceData.data, x + 0, y + 1));
                input.push.apply(input, this.getPixel(sourceData.data, x + 1, y + 1));
                var output = this.network.activate(input);
                var index = (x + (y * this.canvasWidth)) * PIXEL_SIZE;
                resultData.data[index + 0] = output[0] * 255;
                resultData.data[index + 1] = output[1] * 255;
                resultData.data[index + 2] = output[2] * 255;
                resultData.data[index + 3] = 255;
            }
        }
        this.canvasResult.putImageData(resultData);
    };
    return AppComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('canvasInput'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__canvas_canvas_component__["a" /* CanvasComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__canvas_canvas_component__["a" /* CanvasComponent */]) === "function" && _a || Object)
], AppComponent.prototype, "canvasInput", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('canvasOutput'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__canvas_canvas_component__["a" /* CanvasComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__canvas_canvas_component__["a" /* CanvasComponent */]) === "function" && _b || Object)
], AppComponent.prototype, "canvasOutput", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('canvasSource'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__canvas_canvas_component__["a" /* CanvasComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__canvas_canvas_component__["a" /* CanvasComponent */]) === "function" && _c || Object)
], AppComponent.prototype, "canvasSource", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('canvasResult'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__canvas_canvas_component__["a" /* CanvasComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__canvas_canvas_component__["a" /* CanvasComponent */]) === "function" && _d || Object)
], AppComponent.prototype, "canvasResult", void 0);
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__network_network_service__["a" /* NetworkService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__network_network_service__["a" /* NetworkService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]) === "function" && _f || Object])
], AppComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__network_network_service__ = __webpack_require__("../../../../../src/app/network/network.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__canvas_canvas_component__ = __webpack_require__("../../../../../src/app/canvas/canvas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__file_picker_file_picker_component__ = __webpack_require__("../../../../../src/app/file-picker/file-picker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__canvas_canvas_component__["a" /* CanvasComponent */],
            __WEBPACK_IMPORTED_MODULE_5__file_picker_file_picker_component__["a" /* FilePickerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__network_network_service__["a" /* NetworkService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/canvas/canvas.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sizer\"\n [style.padding-bottom]=\"(height / width * 100) + '%'\">\n  <canvas #canvas\n    [width]=\"width\"\n    [height]=\"height\"\n  ></canvas>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/canvas/canvas.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n\n.sizer {\n  width: 100%;\n  height: 0;\n  position: relative; }\n\ncanvas {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 3px;\n  overflow: hidden;\n  border: 1px solid #CCC;\n  background: #FFF; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/canvas/canvas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanvasComponent; });
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

var CanvasComponent = (function () {
    function CanvasComponent() {
        this.width = 320;
        this.height = 240;
    }
    CanvasComponent.prototype.getContext = function () {
        return this.canvas.nativeElement.getContext('2d');
    };
    CanvasComponent.prototype.drawImageFromFile = function (file) {
        var _this = this;
        var fileReader = new FileReader();
        fileReader.onload = function (event) { return _this.drawImageFromUrl(event.target['result']); };
        fileReader.readAsDataURL(file);
    };
    CanvasComponent.prototype.drawImageFromUrl = function (imageUrl) {
        var _this = this;
        var image = new Image();
        image.onload = function () { return _this.getContext().drawImage(image, 0, 0, _this.width, _this.height); };
        image.src = imageUrl;
    };
    CanvasComponent.prototype.getImageData = function () {
        return this.getContext().getImageData(0, 0, this.width, this.height);
    };
    CanvasComponent.prototype.putImageData = function (data) {
        return this.getContext().putImageData(data, 0, 0);
    };
    return CanvasComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], CanvasComponent.prototype, "width", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], CanvasComponent.prototype, "height", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('canvas'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object)
], CanvasComponent.prototype, "canvas", void 0);
CanvasComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-canvas',
        template: __webpack_require__("../../../../../src/app/canvas/canvas.component.html"),
        styles: [__webpack_require__("../../../../../src/app/canvas/canvas.component.scss")]
    })
], CanvasComponent);

var _a;
//# sourceMappingURL=canvas.component.js.map

/***/ }),

/***/ "../../../../../src/app/file-picker/file-picker.component.html":
/***/ (function(module, exports) {

module.exports = "<input #file type=\"file\"\n  [attr.accept]=\"accept\"\n  tabindex=\"-1\"\n  (change)=\"notifyFileSelected()\">\n"

/***/ }),

/***/ "../../../../../src/app/file-picker/file-picker.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input {\n  position: fixed;\n  top: -9999px;\n  left: -9999px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/file-picker/file-picker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilePickerComponent; });
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

var FilePickerComponent = (function () {
    function FilePickerComponent() {
        this.accept = 'image/*';
        this.onFileSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    FilePickerComponent.prototype.open = function () {
        this.fileInput.nativeElement.click();
    };
    FilePickerComponent.prototype.notifyFileSelected = function () {
        var file = this.fileInput.nativeElement.files[0];
        this.onFileSelected.emit(file);
    };
    return FilePickerComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], FilePickerComponent.prototype, "accept", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], FilePickerComponent.prototype, "onFileSelected", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('file'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object)
], FilePickerComponent.prototype, "fileInput", void 0);
FilePickerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-file-picker',
        template: __webpack_require__("../../../../../src/app/file-picker/file-picker.component.html"),
        styles: [__webpack_require__("../../../../../src/app/file-picker/file-picker.component.scss")]
    })
], FilePickerComponent);

var _a;
//# sourceMappingURL=file-picker.component.js.map

/***/ }),

/***/ "../../../../../src/app/network/network.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_synaptic__ = __webpack_require__("../../../../synaptic/dist/synaptic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_synaptic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_synaptic__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NetworkService = (function () {
    function NetworkService() {
        this._isTrained = false;
        this.network = new __WEBPACK_IMPORTED_MODULE_1_synaptic__["Architect"].Perceptron(27, 8, 3);
    }
    NetworkService.prototype.load = function (data) {
        this.network = __WEBPACK_IMPORTED_MODULE_1_synaptic__["Architect"].Perceptron.fromJSON(data);
        this._isTrained = true;
    };
    NetworkService.prototype.toJSON = function () {
        return this.network.toJSON();
    };
    NetworkService.prototype.train = function (_a) {
        var _this = this;
        var data = _a.data, _b = _a.iterationCallback, iterationCallback = _b === void 0 ? null : _b;
        var trainer = new __WEBPACK_IMPORTED_MODULE_1_synaptic__["Trainer"](this.network);
        return trainer.trainAsync(data, {
            rate: .1,
            iterations: 20000,
            error: .005,
            //shuffle: true,
            //log: 1000,
            cost: __WEBPACK_IMPORTED_MODULE_1_synaptic__["Trainer"].cost.COST_ENTROPY,
            schedule: {
                every: 1,
                do: iterationCallback
            }
        }).then(function () {
            _this._isTrained = true;
        });
    };
    Object.defineProperty(NetworkService.prototype, "isTrained", {
        get: function () {
            return this._isTrained;
        },
        enumerable: true,
        configurable: true
    });
    NetworkService.prototype.activate = function (input) {
        return this.network.activate(input);
    };
    return NetworkService;
}());
NetworkService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], NetworkService);

//# sourceMappingURL=network.service.js.map

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
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
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "_ssr_components_carousel-static_carousel-static_tsx";
exports.ids = ["_ssr_components_carousel-static_carousel-static_tsx"];
exports.modules = {

/***/ "(ssr)/./components/carousel-static/carousel-static.tsx":
/*!********************************************************!*\
  !*** ./components/carousel-static/carousel-static.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CarouselStatic: () => (/* binding */ CarouselStatic),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _bigcommerce_components_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/components/carousel */ \"(ssr)/./components/ui/carousel/index.ts\");\n/* harmony import */ var _ui_product_preview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/product-preview */ \"(ssr)/./components/ui/product-preview/index.ts\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/lib/utils */ \"(ssr)/./lib/utils.ts\");\n\n\n\n\n\nconst CarouselStatic = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function CarouselStatic({ className, title, products }, ref) {\n    const id = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();\n    if (products.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(className, \"w-full bg-gray-100 p-6 text-center\"),\n            children: \"No products have been added\"\n        }, void 0, false, {\n            fileName: \"D:\\\\belami-poc\\\\components\\\\carousel-static\\\\carousel-static.tsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_components_carousel__WEBPACK_IMPORTED_MODULE_2__.Carousel, {\n        \"aria-labelledby\": \"Carousel\",\n        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(className, \"pb-0\"),\n        ref: ref,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-3xl font-black lg:text-4xl\",\n                        id: \"title\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"D:\\\\belami-poc\\\\components\\\\carousel-static\\\\carousel-static.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"no-wrap flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_components_carousel__WEBPACK_IMPORTED_MODULE_2__.CarouselPreviousIndicator, {}, void 0, false, {\n                                fileName: \"D:\\\\belami-poc\\\\components\\\\carousel-static\\\\carousel-static.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_components_carousel__WEBPACK_IMPORTED_MODULE_2__.CarouselNextIndicator, {}, void 0, false, {\n                                fileName: \"D:\\\\belami-poc\\\\components\\\\carousel-static\\\\carousel-static.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\belami-poc\\\\components\\\\carousel-static\\\\carousel-static.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\belami-poc\\\\components\\\\carousel-static\\\\carousel-static.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_components_carousel__WEBPACK_IMPORTED_MODULE_2__.CarouselContent, {\n                children: products.map((product, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_components_carousel__WEBPACK_IMPORTED_MODULE_2__.CarouselSlide, {\n                        \"aria-label\": `${index + 1} of ${products.length}`,\n                        id: `${id}-slide-${index + 1}`,\n                        index: index,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_product_preview__WEBPACK_IMPORTED_MODULE_3__.ProductPreview, {\n                            image: product.image,\n                            imageAlt: product.imageAlt,\n                            link: product.link,\n                            buttonText: product.buttonText\n                        }, index, false, {\n                            fileName: \"D:\\\\belami-poc\\\\components\\\\carousel-static\\\\carousel-static.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, this)\n                    }, index, false, {\n                        fileName: \"D:\\\\belami-poc\\\\components\\\\carousel-static\\\\carousel-static.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"D:\\\\belami-poc\\\\components\\\\carousel-static\\\\carousel-static.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\belami-poc\\\\components\\\\carousel-static\\\\carousel-static.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarouselStatic);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9jb21wb25lbnRzL2Nhcm91c2VsLXN0YXRpYy9jYXJvdXNlbC1zdGF0aWMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBK0M7QUFRTDtBQUVnRDtBQUN6RDtBQVExQixNQUFNUywrQkFBaUJULGlEQUFVQSxDQUFDLFNBQVNTLGVBQ2hELEVBQUVDLFNBQVMsRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQVMsRUFDckNDLEdBQXdCO0lBRXhCLE1BQU1DLEtBQUtiLDRDQUFLQTtJQUVoQixJQUFJVyxTQUFTRyxNQUFNLEtBQUssR0FBRztRQUN6QixxQkFDRSw4REFBQ0M7WUFBSU4sV0FBV0YsOENBQUVBLENBQUNFLFdBQVc7c0JBQXVDOzs7Ozs7SUFJekU7SUFFQSxxQkFDRSw4REFBQ1Isc0VBQVFBO1FBQUNlLG1CQUFnQjtRQUFXUCxXQUFXRiw4Q0FBRUEsQ0FBQ0UsV0FBVztRQUFTRyxLQUFLQTs7MEJBQzFFLDhEQUFDRztnQkFBSU4sV0FBVTs7a0NBQ2IsOERBQUNRO3dCQUFHUixXQUFVO3dCQUFrQ0ksSUFBRztrQ0FDaERIOzs7Ozs7a0NBRUgsOERBQUNRO3dCQUFLVCxXQUFVOzswQ0FDZCw4REFBQ0wsdUZBQXlCQTs7Ozs7MENBQzFCLDhEQUFDRCxtRkFBcUJBOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHMUIsOERBQUNELDZFQUFlQTswQkFDYlMsU0FBU1EsR0FBRyxDQUFDLENBQUNDLFNBQVNDLHNCQUN0Qiw4REFBQ2hCLDJFQUFhQTt3QkFDWmlCLGNBQVksQ0FBQyxFQUFFRCxRQUFRLEVBQUUsSUFBSSxFQUFFVixTQUFTRyxNQUFNLENBQUMsQ0FBQzt3QkFDaERELElBQUksQ0FBQyxFQUFFQSxHQUFHLE9BQU8sRUFBRVEsUUFBUSxFQUFFLENBQUM7d0JBQzlCQSxPQUFPQTtrQ0FHUCw0RUFBQ2YsK0RBQWNBOzRCQUViaUIsT0FBT0gsUUFBUUcsS0FBSzs0QkFDcEJDLFVBQVVKLFFBQVFJLFFBQVE7NEJBQzFCQyxNQUFNTCxRQUFRSyxJQUFJOzRCQUNsQkMsWUFBWU4sUUFBUU0sVUFBVTsyQkFKekJMOzs7Ozt1QkFIRkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjakIsR0FBRztBQUVILGlFQUFlYixjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UvLi9jb21wb25lbnRzL2Nhcm91c2VsLXN0YXRpYy9jYXJvdXNlbC1zdGF0aWMudHN4P2IzNjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVmLCBmb3J3YXJkUmVmLCB1c2VJZCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHtcbiAgQ2Fyb3VzZWwsXG4gIENhcm91c2VsQ29udGVudCxcbiAgQ2Fyb3VzZWxOZXh0SW5kaWNhdG9yLFxuICBDYXJvdXNlbFByZXZpb3VzSW5kaWNhdG9yLFxuICBDYXJvdXNlbFNsaWRlLFxufSBmcm9tICdAYmlnY29tbWVyY2UvY29tcG9uZW50cy9jYXJvdXNlbCc7XG5cbmltcG9ydCB7IFByb2R1Y3RQcmV2aWV3LCB0eXBlIFByb3BzIGFzIFByb2R1Y3RQcmV2aWV3UHJvcHMgfSBmcm9tICcuLi91aS9wcm9kdWN0LXByZXZpZXcnO1xuaW1wb3J0IHsgY24gfSBmcm9tICd+L2xpYi91dGlscyc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogc3RyaW5nO1xuICB0aXRsZT86IHN0cmluZztcbiAgcHJvZHVjdHM6IFByb2R1Y3RQcmV2aWV3UHJvcHNbXTtcbn07XG5cbmV4cG9ydCBjb25zdCBDYXJvdXNlbFN0YXRpYyA9IGZvcndhcmRSZWYoZnVuY3Rpb24gQ2Fyb3VzZWxTdGF0aWMoXG4gIHsgY2xhc3NOYW1lLCB0aXRsZSwgcHJvZHVjdHMgfTogUHJvcHMsXG4gIHJlZjogUmVmPEhUTUxEaXZFbGVtZW50Pixcbikge1xuICBjb25zdCBpZCA9IHVzZUlkKCk7XG5cbiAgaWYgKHByb2R1Y3RzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oY2xhc3NOYW1lLCAndy1mdWxsIGJnLWdyYXktMTAwIHAtNiB0ZXh0LWNlbnRlcicpfT5cbiAgICAgICAgTm8gcHJvZHVjdHMgaGF2ZSBiZWVuIGFkZGVkXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q2Fyb3VzZWwgYXJpYS1sYWJlbGxlZGJ5PVwiQ2Fyb3VzZWxcIiBjbGFzc05hbWU9e2NuKGNsYXNzTmFtZSwgJ3BiLTAnKX0gcmVmPXtyZWZ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYmxhY2sgbGc6dGV4dC00eGxcIiBpZD1cInRpdGxlXCI+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L2gyPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuby13cmFwIGZsZXhcIj5cbiAgICAgICAgICA8Q2Fyb3VzZWxQcmV2aW91c0luZGljYXRvciAvPlxuICAgICAgICAgIDxDYXJvdXNlbE5leHRJbmRpY2F0b3IgLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8Q2Fyb3VzZWxDb250ZW50PlxuICAgICAgICB7cHJvZHVjdHMubWFwKChwcm9kdWN0LCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxDYXJvdXNlbFNsaWRlXG4gICAgICAgICAgICBhcmlhLWxhYmVsPXtgJHtpbmRleCArIDF9IG9mICR7cHJvZHVjdHMubGVuZ3RofWB9XG4gICAgICAgICAgICBpZD17YCR7aWR9LXNsaWRlLSR7aW5kZXggKyAxfWB9XG4gICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxQcm9kdWN0UHJldmlld1xuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBpbWFnZT17cHJvZHVjdC5pbWFnZX1cbiAgICAgICAgICAgICAgaW1hZ2VBbHQ9e3Byb2R1Y3QuaW1hZ2VBbHR9XG4gICAgICAgICAgICAgIGxpbms9e3Byb2R1Y3QubGlua31cbiAgICAgICAgICAgICAgYnV0dG9uVGV4dD17cHJvZHVjdC5idXR0b25UZXh0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0Nhcm91c2VsU2xpZGU+XG4gICAgICAgICkpfVxuICAgICAgPC9DYXJvdXNlbENvbnRlbnQ+XG4gICAgPC9DYXJvdXNlbD5cbiAgKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbFN0YXRpYztcbiJdLCJuYW1lcyI6WyJmb3J3YXJkUmVmIiwidXNlSWQiLCJDYXJvdXNlbCIsIkNhcm91c2VsQ29udGVudCIsIkNhcm91c2VsTmV4dEluZGljYXRvciIsIkNhcm91c2VsUHJldmlvdXNJbmRpY2F0b3IiLCJDYXJvdXNlbFNsaWRlIiwiUHJvZHVjdFByZXZpZXciLCJjbiIsIkNhcm91c2VsU3RhdGljIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJwcm9kdWN0cyIsInJlZiIsImlkIiwibGVuZ3RoIiwiZGl2IiwiYXJpYS1sYWJlbGxlZGJ5IiwiaDIiLCJzcGFuIiwibWFwIiwicHJvZHVjdCIsImluZGV4IiwiYXJpYS1sYWJlbCIsImltYWdlIiwiaW1hZ2VBbHQiLCJsaW5rIiwiYnV0dG9uVGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./components/carousel-static/carousel-static.tsx\n");

/***/ }),

/***/ "(ssr)/./components/ui/product-preview/index.ts":
/*!************************************************!*\
  !*** ./components/ui/product-preview/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProductPreview: () => (/* reexport safe */ _product_preview__WEBPACK_IMPORTED_MODULE_0__.ProductPreview)\n/* harmony export */ });\n/* harmony import */ var _product_preview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-preview */ \"(ssr)/./components/ui/product-preview/product-preview.tsx\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9jb21wb25lbnRzL3VpL3Byb2R1Y3QtcHJldmlldy9pbmRleC50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUFrQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JpZ2NvbW1lcmNlLy4vY29tcG9uZW50cy91aS9wcm9kdWN0LXByZXZpZXcvaW5kZXgudHM/ODIzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL3Byb2R1Y3QtcHJldmlldyc7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./components/ui/product-preview/index.ts\n");

/***/ }),

/***/ "(ssr)/./components/ui/product-preview/product-preview.tsx":
/*!***********************************************************!*\
  !*** ./components/ui/product-preview/product-preview.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProductPreview: () => (/* binding */ ProductPreview),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(ssr)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/lib/utils */ \"(ssr)/./lib/utils.ts\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../button */ \"(ssr)/./components/ui/button/index.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(ssr)/./node_modules/next/dist/api/link.js\");\n\n\n\n\n\n\nconst ProductPreview = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(function ProductPreview({ className, link, image, imageAlt, buttonText }, ref) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        ref: ref,\n        href: link?.href ?? \"#\",\n        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(className, \"group relative block aspect-[3/4] w-full overflow-hidden\"),\n        children: [\n            image ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                src: image.url,\n                alt: imageAlt,\n                fill: true,\n                className: \"scale-100 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110\"\n            }, void 0, false, {\n                fileName: \"D:\\\\belami-poc\\\\components\\\\ui\\\\product-preview\\\\product-preview.tsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"aspect-[3/4] w-full bg-gray-100\"\n            }, void 0, false, {\n                fileName: \"D:\\\\belami-poc\\\\components\\\\ui\\\\product-preview\\\\product-preview.tsx\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute inset-x-0 bottom-0 flex translate-y-0 justify-center p-4 transition-transform duration-300 group-hover:translate-y-0 sm:translate-y-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                    variant: \"primary\",\n                    children: buttonText\n                }, void 0, false, {\n                    fileName: \"D:\\\\belami-poc\\\\components\\\\ui\\\\product-preview\\\\product-preview.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\belami-poc\\\\components\\\\ui\\\\product-preview\\\\product-preview.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\belami-poc\\\\components\\\\ui\\\\product-preview\\\\product-preview.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductPreview);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9jb21wb25lbnRzL3VpL3Byb2R1Y3QtcHJldmlldy9wcm9kdWN0LXByZXZpZXcudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ1M7QUFFUDtBQUVFO0FBQ047QUFhdEIsTUFBTUssK0JBQWlCSixpREFBVUEsQ0FBQyxTQUFTSSxlQUNoRCxFQUFFQyxTQUFTLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFVBQVUsRUFBUyxFQUN2REMsR0FBMkI7SUFFM0IscUJBQ0UsOERBQUNQLGlEQUFJQTtRQUNITyxLQUFLQTtRQUNMQyxNQUFNTCxNQUFNSyxRQUFRO1FBQ3BCTixXQUFXSiw4Q0FBRUEsQ0FBQ0ksV0FBVzs7WUFFeEJFLHNCQUNDLDhEQUFDUixrREFBS0E7Z0JBQ0phLEtBQUtMLE1BQU1NLEdBQUc7Z0JBQ2RDLEtBQUtOO2dCQUNMTyxJQUFJO2dCQUNKVixXQUFVOzs7OztxQ0FHWiw4REFBQ1c7Z0JBQUlYLFdBQVU7Ozs7OzswQkFHakIsOERBQUNXO2dCQUFJWCxXQUFVOzBCQUNiLDRFQUFDSCwyQ0FBTUE7b0JBQUNlLFNBQVE7OEJBQVdSOzs7Ozs7Ozs7Ozs7Ozs7OztBQUluQyxHQUFHO0FBRUgsaUVBQWVMLGNBQWNBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaWdjb21tZXJjZS8uL2NvbXBvbmVudHMvdWkvcHJvZHVjdC1wcmV2aWV3L3Byb2R1Y3QtcHJldmlldy50c3g/OWEzYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgeyBSZWYsIGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IGNuIH0gZnJvbSAnfi9saWIvdXRpbHMnO1xuXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9idXR0b24nO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuZXhwb3J0IHR5cGUgUHJvcHMgPSB7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgbGluaz86IHtcbiAgICBocmVmOiBzdHJpbmc7XG4gICAgdGFyZ2V0PzogJ19zZWxmJyB8ICdfYmxhbmsnO1xuICB9O1xuICBpbWFnZT86IHsgdXJsOiBzdHJpbmc7IGRpbWVuc2lvbnM6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSB9O1xuICBpbWFnZUFsdDogc3RyaW5nO1xuICBidXR0b25UZXh0Pzogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNvbnN0IFByb2R1Y3RQcmV2aWV3ID0gZm9yd2FyZFJlZihmdW5jdGlvbiBQcm9kdWN0UHJldmlldyhcbiAgeyBjbGFzc05hbWUsIGxpbmssIGltYWdlLCBpbWFnZUFsdCwgYnV0dG9uVGV4dCB9OiBQcm9wcyxcbiAgcmVmOiBSZWY8SFRNTEFuY2hvckVsZW1lbnQ+LFxuKSB7XG4gIHJldHVybiAoXG4gICAgPExpbmtcbiAgICAgIHJlZj17cmVmfVxuICAgICAgaHJlZj17bGluaz8uaHJlZiA/PyAnIyd9XG4gICAgICBjbGFzc05hbWU9e2NuKGNsYXNzTmFtZSwgJ2dyb3VwIHJlbGF0aXZlIGJsb2NrIGFzcGVjdC1bMy80XSB3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuJyl9XG4gICAgPlxuICAgICAge2ltYWdlID8gKFxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBzcmM9e2ltYWdlLnVybH1cbiAgICAgICAgICBhbHQ9e2ltYWdlQWx0fVxuICAgICAgICAgIGZpbGxcbiAgICAgICAgICBjbGFzc05hbWU9XCJzY2FsZS0xMDAgb2JqZWN0LWNvdmVyIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBncm91cC1ob3ZlcjpzY2FsZS0xMTBcIlxuICAgICAgICAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc3BlY3QtWzMvNF0gdy1mdWxsIGJnLWdyYXktMTAwXCIgLz5cbiAgICAgICl9XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQteC0wIGJvdHRvbS0wIGZsZXggdHJhbnNsYXRlLXktMCBqdXN0aWZ5LWNlbnRlciBwLTQgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwIGdyb3VwLWhvdmVyOnRyYW5zbGF0ZS15LTAgc206dHJhbnNsYXRlLXktZnVsbFwiPlxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCI+e2J1dHRvblRleHR9PC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xpbms+XG4gICk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdFByZXZpZXdcbiJdLCJuYW1lcyI6WyJJbWFnZSIsImZvcndhcmRSZWYiLCJjbiIsIkJ1dHRvbiIsIkxpbmsiLCJQcm9kdWN0UHJldmlldyIsImNsYXNzTmFtZSIsImxpbmsiLCJpbWFnZSIsImltYWdlQWx0IiwiYnV0dG9uVGV4dCIsInJlZiIsImhyZWYiLCJzcmMiLCJ1cmwiLCJhbHQiLCJmaWxsIiwiZGl2IiwidmFyaWFudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./components/ui/product-preview/product-preview.tsx\n");

/***/ })

};
;
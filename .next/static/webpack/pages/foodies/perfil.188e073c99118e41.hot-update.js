"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/foodies/perfil",{

/***/ "./src/pages/foodies/perfil.js":
/*!*************************************!*\
  !*** ./src/pages/foodies/perfil.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PerfilPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_hooks_protectPagesHook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/hooks/protectPagesHook */ \"./src/utils/hooks/protectPagesHook.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_profile_ProfileImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/profile/ProfileImage */ \"./src/components/profile/ProfileImage.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction PerfilPage() {\n    _s();\n    const { loading, userData } = (0,_utils_hooks_protectPagesHook__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{}, [\n        userData\n    ]);\n    console.log(\"userdata:\", userData);\n    const handleLogout = ()=>{\n        localStorage.removeItem(\"token\");\n        router.push(\"/foodies/login\");\n    };\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col justify-center items-center h-screen pb-40\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"https://images-ext-1.discordapp.net/external/O9fOp7KHXEPsHYJZfIAl_6WlcubBa-W3qkn9QKDVCA0/https/x.yummlystatic.com/web/spinner-light-bg.gif?width=250&height=250\",\n                alt: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\silva\\\\OneDrive\\\\Ambiente de Trabalho\\\\foodiesDeployTest\\\\src\\\\pages\\\\foodies\\\\perfil.js\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\silva\\\\OneDrive\\\\Ambiente de Trabalho\\\\foodiesDeployTest\\\\src\\\\pages\\\\foodies\\\\perfil.js\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center h-72\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-8 w-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/receitainfo/arrowBack.svg\",\n                            className: \"\",\n                            onClick: ()=>router.back(),\n                            width: \"40\",\n                            height: \"40\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\silva\\\\OneDrive\\\\Ambiente de Trabalho\\\\foodiesDeployTest\\\\src\\\\pages\\\\foodies\\\\perfil.js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center items-center pt-10\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_profile_ProfileImage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\silva\\\\OneDrive\\\\Ambiente de Trabalho\\\\foodiesDeployTest\\\\src\\\\pages\\\\foodies\\\\perfil.js\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\silva\\\\OneDrive\\\\Ambiente de Trabalho\\\\foodiesDeployTest\\\\src\\\\pages\\\\foodies\\\\perfil.js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\silva\\\\OneDrive\\\\Ambiente de Trabalho\\\\foodiesDeployTest\\\\src\\\\pages\\\\foodies\\\\perfil.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\silva\\\\OneDrive\\\\Ambiente de Trabalho\\\\foodiesDeployTest\\\\src\\\\pages\\\\foodies\\\\perfil.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full flex flex-col items-center justify-center gap-5 px-5 pt-16\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex w-full pt-14  pb-20\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" flex  w-4/12 py-2 justify-start\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"/PerfilPage/person.svg\",\n                                            width: \"15\",\n                                            heigth: \"15\",\n                                            className: \"mr-2\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\silva\\\\OneDrive\\\\Ambiente de Trabalho\\\\foodiesDeployTest\\\\src\\\\pages\\\\foodies\\\\perfil.js\",\n                                            lineNumber: 49,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\silva\\\\OneDrive\\\\Ambiente de Trabalho\\\\foodiesDeployTest\\\\src\\\\pages\\\\foodies\\\\perfil.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 13\n                                    }, this),\n                                    \"Nome\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\silva\\\\OneDrive\\\\Ambiente de Trabalho\\\\foodiesDeployTest\\\\src\\\\pages\\\\foodies\\\\perfil.js\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-cinzaClaro bg-opacity-40 rounded-xl flex w-8/12 indent-5 items-center\",\n                                children: userData.nomeUsuario\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\silva\\\\OneDrive\\\\Ambiente de Trabalho\\\\foodiesDeployTest\\\\src\\\\pages\\\\foodies\\\\perfil.js\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\silva\\\\OneDrive\\\\Ambiente de Trabalho\\\\foodiesDeployTest\\\\src\\\\pages\\\\foodies\\\\perfil.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" flex  w-4/12 py-2 justify-start\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"/PerfilPage/email.svg\",\n                                            width: \"15\",\n                                            heigth: \"15\",\n                                            className: \"mr-2\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\silva\\\\OneDrive\\\\Ambiente de Trabalho\\\\foodiesDeployTest\\\\src\\\\pages\\\\foodies\\\\perfil.js\",\n                                            lineNumber: 65,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\silva\\\\OneDrive\\\\Ambiente de Trabalho\\\\foodiesDeployTest\\\\src\\\\pages\\\\foodies\\\\perfil.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 13\n                                    }, this),\n                                    \"E-mail\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\silva\\\\OneDrive\\\\Ambiente de Trabalho\\\\foodiesDeployTest\\\\src\\\\pages\\\\foodies\\\\perfil.js\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-cinzaClaro  bg-opacity-40 rounded-xl flex w-8/12 indent-5 items-center\",\n                                children: userData.email\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\silva\\\\OneDrive\\\\Ambiente de Trabalho\\\\foodiesDeployTest\\\\src\\\\pages\\\\foodies\\\\perfil.js\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\silva\\\\OneDrive\\\\Ambiente de Trabalho\\\\foodiesDeployTest\\\\src\\\\pages\\\\foodies\\\\perfil.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pt-28\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-verde text-white font-bold py-2 text-bold px-4 rounded-lg\",\n                            onClick: handleLogout,\n                            children: \"Terminar Sess\\xe3o\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\silva\\\\OneDrive\\\\Ambiente de Trabalho\\\\foodiesDeployTest\\\\src\\\\pages\\\\foodies\\\\perfil.js\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\silva\\\\OneDrive\\\\Ambiente de Trabalho\\\\foodiesDeployTest\\\\src\\\\pages\\\\foodies\\\\perfil.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\silva\\\\OneDrive\\\\Ambiente de Trabalho\\\\foodiesDeployTest\\\\src\\\\pages\\\\foodies\\\\perfil.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\silva\\\\OneDrive\\\\Ambiente de Trabalho\\\\foodiesDeployTest\\\\src\\\\pages\\\\foodies\\\\perfil.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(PerfilPage, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = PerfilPage;\nvar _c;\n$RefreshReg$(_c, \"PerfilPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZm9vZGllcy9wZXJmaWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDaUI7QUFDZDtBQUNpQjtBQUU3QyxTQUFTSzs7SUFDdEIsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRSxHQUFHTix5RUFBV0E7SUFDekMsTUFBTU8sU0FBU1Isc0RBQVNBO0lBRXhCRSxnREFBU0EsQ0FBQyxLQUFPLEdBQUc7UUFBQ0s7S0FBUztJQUU5QkUsUUFBUUMsR0FBRyxDQUFDLGFBQWFIO0lBQ3pCLE1BQU1JLGVBQWU7UUFDbkJDLGFBQWFDLFVBQVUsQ0FBQztRQUN4QkwsT0FBT00sSUFBSSxDQUFDO0lBQ2Q7SUFFQSxJQUFJUixTQUFTO1FBQ1gscUJBQ0UsOERBQUNTO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNDO2dCQUNDQyxLQUFJO2dCQUNKQyxLQUFJOzs7Ozs7Ozs7OztJQUlaO0lBRUEscUJBQ0UsOERBQUNKO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDQzs0QkFDQ0MsS0FBSTs0QkFDSkYsV0FBVTs0QkFDVkksU0FBUyxJQUFNWixPQUFPYSxJQUFJOzRCQUMxQkMsT0FBTTs0QkFDTkMsUUFBTzs7Ozs7O3NDQUVULDhEQUFDUjs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ1osd0VBQVdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSWxCLDhEQUFDVztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDRDt3Q0FBSUMsV0FBVTtrREFDYiw0RUFBQ0M7NENBQ0NDLEtBQUk7NENBQ0pJLE9BQU07NENBQ05FLFFBQU87NENBQ1BSLFdBQVU7Ozs7Ozs7Ozs7O29DQUVSOzs7Ozs7OzBDQUdSLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDWlQsU0FBU2tCLFdBQVc7Ozs7Ozs7Ozs7OztrQ0FHekIsOERBQUNWO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDRDt3Q0FBSUMsV0FBVTtrREFDYiw0RUFBQ0M7NENBQ0NDLEtBQUk7NENBQ0pJLE9BQU07NENBQ05FLFFBQU87NENBQ1BSLFdBQVU7Ozs7Ozs7Ozs7O29DQUVSOzs7Ozs7OzBDQUdSLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDWlQsU0FBU21CLEtBQUs7Ozs7Ozs7Ozs7OztrQ0FHbkIsOERBQUNYO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDVzs0QkFDQ1gsV0FBVTs0QkFDVkksU0FBU1Q7c0NBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1g7R0FuRndCTjs7UUFFUEwsa0RBQVNBOzs7S0FGRksiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Zvb2RpZXMvcGVyZmlsLmpzP2IxNGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBQcm90ZWN0UGFnZSBmcm9tIFwiQC91dGlscy9ob29rcy9wcm90ZWN0UGFnZXNIb29rXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVXNlclByb2ZpbGUgZnJvbSBcIkAvY29tcG9uZW50cy9wcm9maWxlL1Byb2ZpbGVJbWFnZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGVyZmlsUGFnZSgpIHtcclxuICBjb25zdCB7IGxvYWRpbmcsIHVzZXJEYXRhIH0gPSBQcm90ZWN0UGFnZSgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge30sIFt1c2VyRGF0YV0pO1xyXG5cclxuICBjb25zb2xlLmxvZyhcInVzZXJkYXRhOlwiLCB1c2VyRGF0YSk7XHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0b2tlblwiKTtcclxuICAgIHJvdXRlci5wdXNoKFwiL2Zvb2RpZXMvbG9naW5cIik7XHJcbiAgfTtcclxuXHJcbiAgaWYgKGxvYWRpbmcpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1zY3JlZW4gcGItNDBcIj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9XCJodHRwczovL2ltYWdlcy1leHQtMS5kaXNjb3JkYXBwLm5ldC9leHRlcm5hbC9POWZPcDdLSFhFUHNIWUpaZklBbF82V2xjdWJCYS1XM3FrbjlRS0RWQ0EwL2h0dHBzL3gueXVtbWx5c3RhdGljLmNvbS93ZWIvc3Bpbm5lci1saWdodC1iZy5naWY/d2lkdGg9MjUwJmhlaWdodD0yNTBcIlxyXG4gICAgICAgICAgYWx0PVwiTG9hZGluZy4uLlwiXHJcbiAgICAgICAgPjwvaW1nPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBoLTcyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTggdy1mdWxsXCI+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz1cIi9yZWNlaXRhaW5mby9hcnJvd0JhY2suc3ZnXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLmJhY2soKX1cclxuICAgICAgICAgICAgd2lkdGg9XCI0MFwiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjQwXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHB0LTEwXCI+XHJcbiAgICAgICAgICAgIDxVc2VyUHJvZmlsZSAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTUgcHgtNSBwdC0xNlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgcHQtMTQgIHBiLTIwXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4ICB3LTQvMTIgcHktMiBqdXN0aWZ5LXN0YXJ0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz1cIi9QZXJmaWxQYWdlL3BlcnNvbi5zdmdcIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxNVwiXHJcbiAgICAgICAgICAgICAgICBoZWlndGg9XCIxNVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0yXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgTm9tZVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWNpbnphQ2xhcm8gYmctb3BhY2l0eS00MCByb3VuZGVkLXhsIGZsZXggdy04LzEyIGluZGVudC01IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICB7dXNlckRhdGEubm9tZVVzdWFyaW99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4ICB3LTQvMTIgcHktMiBqdXN0aWZ5LXN0YXJ0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz1cIi9QZXJmaWxQYWdlL2VtYWlsLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjE1XCJcclxuICAgICAgICAgICAgICAgIGhlaWd0aD1cIjE1XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTJcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBFLW1haWxcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1jaW56YUNsYXJvICBiZy1vcGFjaXR5LTQwIHJvdW5kZWQteGwgZmxleCB3LTgvMTIgaW5kZW50LTUgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIHt1c2VyRGF0YS5lbWFpbH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMjhcIj5cclxuICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXZlcmRlIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgdGV4dC1ib2xkIHB4LTQgcm91bmRlZC1sZ1wiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgVGVybWluYXIgU2Vzc8Ojb1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUHJvdGVjdFBhZ2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlVzZXJQcm9maWxlIiwiUGVyZmlsUGFnZSIsImxvYWRpbmciLCJ1c2VyRGF0YSIsInJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVMb2dvdXQiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsdCIsIm9uQ2xpY2siLCJiYWNrIiwid2lkdGgiLCJoZWlnaHQiLCJoZWlndGgiLCJub21lVXN1YXJpbyIsImVtYWlsIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/foodies/perfil.js\n"));

/***/ })

});
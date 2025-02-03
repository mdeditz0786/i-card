/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/student/route";
exports.ids = ["app/api/student/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fstudent%2Froute&page=%2Fapi%2Fstudent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstudent%2Froute.js&appDir=E%3A%5CStu.%20Card%5Cid_Card%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CStu.%20Card%5Cid_Card&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fstudent%2Froute&page=%2Fapi%2Fstudent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstudent%2Froute.js&appDir=E%3A%5CStu.%20Card%5Cid_Card%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CStu.%20Card%5Cid_Card&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var E_Stu_Card_id_Card_app_api_student_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/student/route.js */ \"(rsc)/./app/api/student/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/student/route\",\n        pathname: \"/api/student\",\n        filename: \"route\",\n        bundlePath: \"app/api/student/route\"\n    },\n    resolvedPagePath: \"E:\\\\Stu. Card\\\\id_Card\\\\app\\\\api\\\\student\\\\route.js\",\n    nextConfigOutput,\n    userland: E_Stu_Card_id_Card_app_api_student_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZzdHVkZW50JTJGcm91dGUmcGFnZT0lMkZhcGklMkZzdHVkZW50JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGc3R1ZGVudCUyRnJvdXRlLmpzJmFwcERpcj1FJTNBJTVDU3R1LiUyMENhcmQlNUNpZF9DYXJkJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1FJTNBJTVDU3R1LiUyMENhcmQlNUNpZF9DYXJkJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNHO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJFOlxcXFxTdHUuIENhcmRcXFxcaWRfQ2FyZFxcXFxhcHBcXFxcYXBpXFxcXHN0dWRlbnRcXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3N0dWRlbnQvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9zdHVkZW50XCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9zdHVkZW50L3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiRTpcXFxcU3R1LiBDYXJkXFxcXGlkX0NhcmRcXFxcYXBwXFxcXGFwaVxcXFxzdHVkZW50XFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fstudent%2Froute&page=%2Fapi%2Fstudent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstudent%2Froute.js&appDir=E%3A%5CStu.%20Card%5Cid_Card%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CStu.%20Card%5Cid_Card&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./app/api/student/route.js":
/*!**********************************!*\
  !*** ./app/api/student/route.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var uid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uid */ \"(rsc)/./node_modules/uid/dist/index.mjs\");\n\n\n\nasync function POST(request) {\n    const { fullname, course, dob, address, email, expiry, phoneNumber, imageurl } = await request.json();\n    const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    const stdid = \"SZ\" + (0,uid__WEBPACK_IMPORTED_MODULE_2__.uid)(6).toUpperCase();\n    try {\n        const student = await prisma.students.create({\n            data: {\n                studentid: stdid,\n                fullname,\n                course,\n                dob,\n                address,\n                email,\n                expiry,\n                phoneNumber,\n                imageurl\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            \"status\": 201,\n            message: \"successfully create account\"\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            \"status\": 404,\n            error: error.message\n        });\n    } finally{\n        await prisma.$disconnect();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3N0dWRlbnQvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBOEM7QUFDSDtBQUNqQjtBQUVuQixlQUFlRyxLQUFLQyxPQUFPO0lBQzlCLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxNQUFNLEVBQUVDLEdBQUcsRUFBRUMsT0FBTyxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsV0FBVyxFQUFFQyxRQUFRLEVBQUUsR0FBRyxNQUFNUixRQUFRUyxJQUFJO0lBQ25HLE1BQU1DLFNBQVMsSUFBSWQsd0RBQVlBO0lBQy9CLE1BQU1lLFFBQVEsT0FBT2Isd0NBQUdBLENBQUMsR0FBR2MsV0FBVztJQUN2QyxJQUFJO1FBQ0EsTUFBTUMsVUFBVSxNQUFNSCxPQUFPSSxRQUFRLENBQUNDLE1BQU0sQ0FBQztZQUN6Q0MsTUFBTTtnQkFDRkMsV0FBVU47Z0JBQ1ZWO2dCQUNBQztnQkFDQUM7Z0JBQ0FDO2dCQUNBQztnQkFDQUM7Z0JBQ0FDO2dCQUNBQztZQUNKO1FBQ0o7UUFFQSxPQUFPWCxxREFBWUEsQ0FBQ1ksSUFBSSxDQUFDO1lBQUUsVUFBVTtZQUFJUyxTQUFRO1FBQTZCO0lBQ2xGLEVBQUUsT0FBT0MsT0FBTztRQUNaLE9BQU90QixxREFBWUEsQ0FBQ1ksSUFBSSxDQUFDO1lBQUUsVUFBVTtZQUFLVSxPQUFPQSxNQUFNRCxPQUFPO1FBQUM7SUFDbkUsU0FBVTtRQUNOLE1BQU1SLE9BQU9VLFdBQVc7SUFDNUI7QUFDSiIsInNvdXJjZXMiOlsiRTpcXFN0dS4gQ2FyZFxcaWRfQ2FyZFxcYXBwXFxhcGlcXHN0dWRlbnRcXHJvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcclxuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xyXG5pbXBvcnQgeyB1aWQgfSBmcm9tICd1aWQnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdCkge1xyXG4gICAgY29uc3QgeyBmdWxsbmFtZSwgY291cnNlLCBkb2IsIGFkZHJlc3MsIGVtYWlsLCBleHBpcnksIHBob25lTnVtYmVyLCBpbWFnZXVybCB9ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcbiAgICBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcbiAgICBjb25zdCBzdGRpZCA9IFwiU1pcIiArIHVpZCg2KS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzdHVkZW50ID0gYXdhaXQgcHJpc21hLnN0dWRlbnRzLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHN0dWRlbnRpZDpzdGRpZCxcclxuICAgICAgICAgICAgICAgIGZ1bGxuYW1lLFxyXG4gICAgICAgICAgICAgICAgY291cnNlLFxyXG4gICAgICAgICAgICAgICAgZG9iLFxyXG4gICAgICAgICAgICAgICAgYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgICAgICAgICAgZXhwaXJ5LFxyXG4gICAgICAgICAgICAgICAgcGhvbmVOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBpbWFnZXVybFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgXCJzdGF0dXNcIjogMjAxLG1lc3NhZ2U6XCJzdWNjZXNzZnVsbHkgY3JlYXRlIGFjY291bnRcIn0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBcInN0YXR1c1wiOiA0MDQsIGVycm9yOiBlcnJvci5tZXNzYWdlIH0pO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgICBhd2FpdCBwcmlzbWEuJGRpc2Nvbm5lY3QoKTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiTmV4dFJlc3BvbnNlIiwidWlkIiwiUE9TVCIsInJlcXVlc3QiLCJmdWxsbmFtZSIsImNvdXJzZSIsImRvYiIsImFkZHJlc3MiLCJlbWFpbCIsImV4cGlyeSIsInBob25lTnVtYmVyIiwiaW1hZ2V1cmwiLCJqc29uIiwicHJpc21hIiwic3RkaWQiLCJ0b1VwcGVyQ2FzZSIsInN0dWRlbnQiLCJzdHVkZW50cyIsImNyZWF0ZSIsImRhdGEiLCJzdHVkZW50aWQiLCJtZXNzYWdlIiwiZXJyb3IiLCIkZGlzY29ubmVjdCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/student/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/uid"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fstudent%2Froute&page=%2Fapi%2Fstudent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstudent%2Froute.js&appDir=E%3A%5CStu.%20Card%5Cid_Card%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CStu.%20Card%5Cid_Card&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();
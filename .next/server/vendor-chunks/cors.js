"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/cors";
exports.ids = ["vendor-chunks/cors"];
exports.modules = {

/***/ "(rsc)/./node_modules/cors/lib/index.js":
/*!****************************************!*\
  !*** ./node_modules/cors/lib/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n(function() {\n    \"use strict\";\n    var assign = __webpack_require__(/*! object-assign */ \"(rsc)/./node_modules/object-assign/index.js\");\n    var vary = __webpack_require__(/*! vary */ \"(rsc)/./node_modules/vary/index.js\");\n    var defaults = {\n        origin: \"*\",\n        methods: \"GET,HEAD,PUT,PATCH,POST,DELETE\",\n        preflightContinue: false,\n        optionsSuccessStatus: 204\n    };\n    function isString(s) {\n        return typeof s === \"string\" || s instanceof String;\n    }\n    function isOriginAllowed(origin, allowedOrigin) {\n        if (Array.isArray(allowedOrigin)) {\n            for(var i = 0; i < allowedOrigin.length; ++i){\n                if (isOriginAllowed(origin, allowedOrigin[i])) {\n                    return true;\n                }\n            }\n            return false;\n        } else if (isString(allowedOrigin)) {\n            return origin === allowedOrigin;\n        } else if (allowedOrigin instanceof RegExp) {\n            return allowedOrigin.test(origin);\n        } else {\n            return !!allowedOrigin;\n        }\n    }\n    function configureOrigin(options, req) {\n        var requestOrigin = req.headers.origin, headers = [], isAllowed;\n        if (!options.origin || options.origin === \"*\") {\n            // allow any origin\n            headers.push([\n                {\n                    key: \"Access-Control-Allow-Origin\",\n                    value: \"*\"\n                }\n            ]);\n        } else if (isString(options.origin)) {\n            // fixed origin\n            headers.push([\n                {\n                    key: \"Access-Control-Allow-Origin\",\n                    value: options.origin\n                }\n            ]);\n            headers.push([\n                {\n                    key: \"Vary\",\n                    value: \"Origin\"\n                }\n            ]);\n        } else {\n            isAllowed = isOriginAllowed(requestOrigin, options.origin);\n            // reflect origin\n            headers.push([\n                {\n                    key: \"Access-Control-Allow-Origin\",\n                    value: isAllowed ? requestOrigin : false\n                }\n            ]);\n            headers.push([\n                {\n                    key: \"Vary\",\n                    value: \"Origin\"\n                }\n            ]);\n        }\n        return headers;\n    }\n    function configureMethods(options) {\n        var methods = options.methods;\n        if (methods.join) {\n            methods = options.methods.join(\",\"); // .methods is an array, so turn it into a string\n        }\n        return {\n            key: \"Access-Control-Allow-Methods\",\n            value: methods\n        };\n    }\n    function configureCredentials(options) {\n        if (options.credentials === true) {\n            return {\n                key: \"Access-Control-Allow-Credentials\",\n                value: \"true\"\n            };\n        }\n        return null;\n    }\n    function configureAllowedHeaders(options, req) {\n        var allowedHeaders = options.allowedHeaders || options.headers;\n        var headers = [];\n        if (!allowedHeaders) {\n            allowedHeaders = req.headers[\"access-control-request-headers\"]; // .headers wasn't specified, so reflect the request headers\n            headers.push([\n                {\n                    key: \"Vary\",\n                    value: \"Access-Control-Request-Headers\"\n                }\n            ]);\n        } else if (allowedHeaders.join) {\n            allowedHeaders = allowedHeaders.join(\",\"); // .headers is an array, so turn it into a string\n        }\n        if (allowedHeaders && allowedHeaders.length) {\n            headers.push([\n                {\n                    key: \"Access-Control-Allow-Headers\",\n                    value: allowedHeaders\n                }\n            ]);\n        }\n        return headers;\n    }\n    function configureExposedHeaders(options) {\n        var headers = options.exposedHeaders;\n        if (!headers) {\n            return null;\n        } else if (headers.join) {\n            headers = headers.join(\",\"); // .headers is an array, so turn it into a string\n        }\n        if (headers && headers.length) {\n            return {\n                key: \"Access-Control-Expose-Headers\",\n                value: headers\n            };\n        }\n        return null;\n    }\n    function configureMaxAge(options) {\n        var maxAge = (typeof options.maxAge === \"number\" || options.maxAge) && options.maxAge.toString();\n        if (maxAge && maxAge.length) {\n            return {\n                key: \"Access-Control-Max-Age\",\n                value: maxAge\n            };\n        }\n        return null;\n    }\n    function applyHeaders(headers, res) {\n        for(var i = 0, n = headers.length; i < n; i++){\n            var header = headers[i];\n            if (header) {\n                if (Array.isArray(header)) {\n                    applyHeaders(header, res);\n                } else if (header.key === \"Vary\" && header.value) {\n                    vary(res, header.value);\n                } else if (header.value) {\n                    res.setHeader(header.key, header.value);\n                }\n            }\n        }\n    }\n    function cors(options, req, res, next) {\n        var headers = [], method = req.method && req.method.toUpperCase && req.method.toUpperCase();\n        if (method === \"OPTIONS\") {\n            // preflight\n            headers.push(configureOrigin(options, req));\n            headers.push(configureCredentials(options, req));\n            headers.push(configureMethods(options, req));\n            headers.push(configureAllowedHeaders(options, req));\n            headers.push(configureMaxAge(options, req));\n            headers.push(configureExposedHeaders(options, req));\n            applyHeaders(headers, res);\n            if (options.preflightContinue) {\n                next();\n            } else {\n                // Safari (and potentially other browsers) need content-length 0,\n                //   for 204 or they just hang waiting for a body\n                res.statusCode = options.optionsSuccessStatus;\n                res.setHeader(\"Content-Length\", \"0\");\n                res.end();\n            }\n        } else {\n            // actual response\n            headers.push(configureOrigin(options, req));\n            headers.push(configureCredentials(options, req));\n            headers.push(configureExposedHeaders(options, req));\n            applyHeaders(headers, res);\n            next();\n        }\n    }\n    function middlewareWrapper(o) {\n        // if options are static (either via defaults or custom options passed in), wrap in a function\n        var optionsCallback = null;\n        if (typeof o === \"function\") {\n            optionsCallback = o;\n        } else {\n            optionsCallback = function(req, cb) {\n                cb(null, o);\n            };\n        }\n        return function corsMiddleware(req, res, next) {\n            optionsCallback(req, function(err, options) {\n                if (err) {\n                    next(err);\n                } else {\n                    var corsOptions = assign({}, defaults, options);\n                    var originCallback = null;\n                    if (corsOptions.origin && typeof corsOptions.origin === \"function\") {\n                        originCallback = corsOptions.origin;\n                    } else if (corsOptions.origin) {\n                        originCallback = function(origin, cb) {\n                            cb(null, corsOptions.origin);\n                        };\n                    }\n                    if (originCallback) {\n                        originCallback(req.headers.origin, function(err2, origin) {\n                            if (err2 || !origin) {\n                                next(err2);\n                            } else {\n                                corsOptions.origin = origin;\n                                cors(corsOptions, req, res, next);\n                            }\n                        });\n                    } else {\n                        next();\n                    }\n                }\n            });\n        };\n    }\n    // can pass either an options hash, an options delegate, or nothing\n    module.exports = middlewareWrapper;\n})();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvY29ycy9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6IjtBQUFDO0lBRUM7SUFFQSxJQUFJQSxTQUFTQyxtQkFBT0EsQ0FBQztJQUNyQixJQUFJQyxPQUFPRCxtQkFBT0EsQ0FBQztJQUVuQixJQUFJRSxXQUFXO1FBQ2JDLFFBQVE7UUFDUkMsU0FBUztRQUNUQyxtQkFBbUI7UUFDbkJDLHNCQUFzQjtJQUN4QjtJQUVBLFNBQVNDLFNBQVNDLENBQUM7UUFDakIsT0FBTyxPQUFPQSxNQUFNLFlBQVlBLGFBQWFDO0lBQy9DO0lBRUEsU0FBU0MsZ0JBQWdCUCxNQUFNLEVBQUVRLGFBQWE7UUFDNUMsSUFBSUMsTUFBTUMsT0FBTyxDQUFDRixnQkFBZ0I7WUFDaEMsSUFBSyxJQUFJRyxJQUFJLEdBQUdBLElBQUlILGNBQWNJLE1BQU0sRUFBRSxFQUFFRCxFQUFHO2dCQUM3QyxJQUFJSixnQkFBZ0JQLFFBQVFRLGFBQWEsQ0FBQ0csRUFBRSxHQUFHO29CQUM3QyxPQUFPO2dCQUNUO1lBQ0Y7WUFDQSxPQUFPO1FBQ1QsT0FBTyxJQUFJUCxTQUFTSSxnQkFBZ0I7WUFDbEMsT0FBT1IsV0FBV1E7UUFDcEIsT0FBTyxJQUFJQSx5QkFBeUJLLFFBQVE7WUFDMUMsT0FBT0wsY0FBY00sSUFBSSxDQUFDZDtRQUM1QixPQUFPO1lBQ0wsT0FBTyxDQUFDLENBQUNRO1FBQ1g7SUFDRjtJQUVBLFNBQVNPLGdCQUFnQkMsT0FBTyxFQUFFQyxHQUFHO1FBQ25DLElBQUlDLGdCQUFnQkQsSUFBSUUsT0FBTyxDQUFDbkIsTUFBTSxFQUNwQ21CLFVBQVUsRUFBRSxFQUNaQztRQUVGLElBQUksQ0FBQ0osUUFBUWhCLE1BQU0sSUFBSWdCLFFBQVFoQixNQUFNLEtBQUssS0FBSztZQUM3QyxtQkFBbUI7WUFDbkJtQixRQUFRRSxJQUFJLENBQUM7Z0JBQUM7b0JBQ1pDLEtBQUs7b0JBQ0xDLE9BQU87Z0JBQ1Q7YUFBRTtRQUNKLE9BQU8sSUFBSW5CLFNBQVNZLFFBQVFoQixNQUFNLEdBQUc7WUFDbkMsZUFBZTtZQUNmbUIsUUFBUUUsSUFBSSxDQUFDO2dCQUFDO29CQUNaQyxLQUFLO29CQUNMQyxPQUFPUCxRQUFRaEIsTUFBTTtnQkFDdkI7YUFBRTtZQUNGbUIsUUFBUUUsSUFBSSxDQUFDO2dCQUFDO29CQUNaQyxLQUFLO29CQUNMQyxPQUFPO2dCQUNUO2FBQUU7UUFDSixPQUFPO1lBQ0xILFlBQVliLGdCQUFnQlcsZUFBZUYsUUFBUWhCLE1BQU07WUFDekQsaUJBQWlCO1lBQ2pCbUIsUUFBUUUsSUFBSSxDQUFDO2dCQUFDO29CQUNaQyxLQUFLO29CQUNMQyxPQUFPSCxZQUFZRixnQkFBZ0I7Z0JBQ3JDO2FBQUU7WUFDRkMsUUFBUUUsSUFBSSxDQUFDO2dCQUFDO29CQUNaQyxLQUFLO29CQUNMQyxPQUFPO2dCQUNUO2FBQUU7UUFDSjtRQUVBLE9BQU9KO0lBQ1Q7SUFFQSxTQUFTSyxpQkFBaUJSLE9BQU87UUFDL0IsSUFBSWYsVUFBVWUsUUFBUWYsT0FBTztRQUM3QixJQUFJQSxRQUFRd0IsSUFBSSxFQUFFO1lBQ2hCeEIsVUFBVWUsUUFBUWYsT0FBTyxDQUFDd0IsSUFBSSxDQUFDLE1BQU0saURBQWlEO1FBQ3hGO1FBQ0EsT0FBTztZQUNMSCxLQUFLO1lBQ0xDLE9BQU90QjtRQUNUO0lBQ0Y7SUFFQSxTQUFTeUIscUJBQXFCVixPQUFPO1FBQ25DLElBQUlBLFFBQVFXLFdBQVcsS0FBSyxNQUFNO1lBQ2hDLE9BQU87Z0JBQ0xMLEtBQUs7Z0JBQ0xDLE9BQU87WUFDVDtRQUNGO1FBQ0EsT0FBTztJQUNUO0lBRUEsU0FBU0ssd0JBQXdCWixPQUFPLEVBQUVDLEdBQUc7UUFDM0MsSUFBSVksaUJBQWlCYixRQUFRYSxjQUFjLElBQUliLFFBQVFHLE9BQU87UUFDOUQsSUFBSUEsVUFBVSxFQUFFO1FBRWhCLElBQUksQ0FBQ1UsZ0JBQWdCO1lBQ25CQSxpQkFBaUJaLElBQUlFLE9BQU8sQ0FBQyxpQ0FBaUMsRUFBRSw0REFBNEQ7WUFDNUhBLFFBQVFFLElBQUksQ0FBQztnQkFBQztvQkFDWkMsS0FBSztvQkFDTEMsT0FBTztnQkFDVDthQUFFO1FBQ0osT0FBTyxJQUFJTSxlQUFlSixJQUFJLEVBQUU7WUFDOUJJLGlCQUFpQkEsZUFBZUosSUFBSSxDQUFDLE1BQU0saURBQWlEO1FBQzlGO1FBQ0EsSUFBSUksa0JBQWtCQSxlQUFlakIsTUFBTSxFQUFFO1lBQzNDTyxRQUFRRSxJQUFJLENBQUM7Z0JBQUM7b0JBQ1pDLEtBQUs7b0JBQ0xDLE9BQU9NO2dCQUNUO2FBQUU7UUFDSjtRQUVBLE9BQU9WO0lBQ1Q7SUFFQSxTQUFTVyx3QkFBd0JkLE9BQU87UUFDdEMsSUFBSUcsVUFBVUgsUUFBUWUsY0FBYztRQUNwQyxJQUFJLENBQUNaLFNBQVM7WUFDWixPQUFPO1FBQ1QsT0FBTyxJQUFJQSxRQUFRTSxJQUFJLEVBQUU7WUFDdkJOLFVBQVVBLFFBQVFNLElBQUksQ0FBQyxNQUFNLGlEQUFpRDtRQUNoRjtRQUNBLElBQUlOLFdBQVdBLFFBQVFQLE1BQU0sRUFBRTtZQUM3QixPQUFPO2dCQUNMVSxLQUFLO2dCQUNMQyxPQUFPSjtZQUNUO1FBQ0Y7UUFDQSxPQUFPO0lBQ1Q7SUFFQSxTQUFTYSxnQkFBZ0JoQixPQUFPO1FBQzlCLElBQUlpQixTQUFTLENBQUMsT0FBT2pCLFFBQVFpQixNQUFNLEtBQUssWUFBWWpCLFFBQVFpQixNQUFNLEtBQUtqQixRQUFRaUIsTUFBTSxDQUFDQyxRQUFRO1FBQzlGLElBQUlELFVBQVVBLE9BQU9yQixNQUFNLEVBQUU7WUFDM0IsT0FBTztnQkFDTFUsS0FBSztnQkFDTEMsT0FBT1U7WUFDVDtRQUNGO1FBQ0EsT0FBTztJQUNUO0lBRUEsU0FBU0UsYUFBYWhCLE9BQU8sRUFBRWlCLEdBQUc7UUFDaEMsSUFBSyxJQUFJekIsSUFBSSxHQUFHMEIsSUFBSWxCLFFBQVFQLE1BQU0sRUFBRUQsSUFBSTBCLEdBQUcxQixJQUFLO1lBQzlDLElBQUkyQixTQUFTbkIsT0FBTyxDQUFDUixFQUFFO1lBQ3ZCLElBQUkyQixRQUFRO2dCQUNWLElBQUk3QixNQUFNQyxPQUFPLENBQUM0QixTQUFTO29CQUN6QkgsYUFBYUcsUUFBUUY7Z0JBQ3ZCLE9BQU8sSUFBSUUsT0FBT2hCLEdBQUcsS0FBSyxVQUFVZ0IsT0FBT2YsS0FBSyxFQUFFO29CQUNoRHpCLEtBQUtzQyxLQUFLRSxPQUFPZixLQUFLO2dCQUN4QixPQUFPLElBQUllLE9BQU9mLEtBQUssRUFBRTtvQkFDdkJhLElBQUlHLFNBQVMsQ0FBQ0QsT0FBT2hCLEdBQUcsRUFBRWdCLE9BQU9mLEtBQUs7Z0JBQ3hDO1lBQ0Y7UUFDRjtJQUNGO0lBRUEsU0FBU2lCLEtBQUt4QixPQUFPLEVBQUVDLEdBQUcsRUFBRW1CLEdBQUcsRUFBRUssSUFBSTtRQUNuQyxJQUFJdEIsVUFBVSxFQUFFLEVBQ2R1QixTQUFTekIsSUFBSXlCLE1BQU0sSUFBSXpCLElBQUl5QixNQUFNLENBQUNDLFdBQVcsSUFBSTFCLElBQUl5QixNQUFNLENBQUNDLFdBQVc7UUFFekUsSUFBSUQsV0FBVyxXQUFXO1lBQ3hCLFlBQVk7WUFDWnZCLFFBQVFFLElBQUksQ0FBQ04sZ0JBQWdCQyxTQUFTQztZQUN0Q0UsUUFBUUUsSUFBSSxDQUFDSyxxQkFBcUJWLFNBQVNDO1lBQzNDRSxRQUFRRSxJQUFJLENBQUNHLGlCQUFpQlIsU0FBU0M7WUFDdkNFLFFBQVFFLElBQUksQ0FBQ08sd0JBQXdCWixTQUFTQztZQUM5Q0UsUUFBUUUsSUFBSSxDQUFDVyxnQkFBZ0JoQixTQUFTQztZQUN0Q0UsUUFBUUUsSUFBSSxDQUFDUyx3QkFBd0JkLFNBQVNDO1lBQzlDa0IsYUFBYWhCLFNBQVNpQjtZQUV0QixJQUFJcEIsUUFBUWQsaUJBQWlCLEVBQUU7Z0JBQzdCdUM7WUFDRixPQUFPO2dCQUNMLGlFQUFpRTtnQkFDakUsaURBQWlEO2dCQUNqREwsSUFBSVEsVUFBVSxHQUFHNUIsUUFBUWIsb0JBQW9CO2dCQUM3Q2lDLElBQUlHLFNBQVMsQ0FBQyxrQkFBa0I7Z0JBQ2hDSCxJQUFJUyxHQUFHO1lBQ1Q7UUFDRixPQUFPO1lBQ0wsa0JBQWtCO1lBQ2xCMUIsUUFBUUUsSUFBSSxDQUFDTixnQkFBZ0JDLFNBQVNDO1lBQ3RDRSxRQUFRRSxJQUFJLENBQUNLLHFCQUFxQlYsU0FBU0M7WUFDM0NFLFFBQVFFLElBQUksQ0FBQ1Msd0JBQXdCZCxTQUFTQztZQUM5Q2tCLGFBQWFoQixTQUFTaUI7WUFDdEJLO1FBQ0Y7SUFDRjtJQUVBLFNBQVNLLGtCQUFrQkMsQ0FBQztRQUMxQiw4RkFBOEY7UUFDOUYsSUFBSUMsa0JBQWtCO1FBQ3RCLElBQUksT0FBT0QsTUFBTSxZQUFZO1lBQzNCQyxrQkFBa0JEO1FBQ3BCLE9BQU87WUFDTEMsa0JBQWtCLFNBQVUvQixHQUFHLEVBQUVnQyxFQUFFO2dCQUNqQ0EsR0FBRyxNQUFNRjtZQUNYO1FBQ0Y7UUFFQSxPQUFPLFNBQVNHLGVBQWVqQyxHQUFHLEVBQUVtQixHQUFHLEVBQUVLLElBQUk7WUFDM0NPLGdCQUFnQi9CLEtBQUssU0FBVWtDLEdBQUcsRUFBRW5DLE9BQU87Z0JBQ3pDLElBQUltQyxLQUFLO29CQUNQVixLQUFLVTtnQkFDUCxPQUFPO29CQUNMLElBQUlDLGNBQWN4RCxPQUFPLENBQUMsR0FBR0csVUFBVWlCO29CQUN2QyxJQUFJcUMsaUJBQWlCO29CQUNyQixJQUFJRCxZQUFZcEQsTUFBTSxJQUFJLE9BQU9vRCxZQUFZcEQsTUFBTSxLQUFLLFlBQVk7d0JBQ2xFcUQsaUJBQWlCRCxZQUFZcEQsTUFBTTtvQkFDckMsT0FBTyxJQUFJb0QsWUFBWXBELE1BQU0sRUFBRTt3QkFDN0JxRCxpQkFBaUIsU0FBVXJELE1BQU0sRUFBRWlELEVBQUU7NEJBQ25DQSxHQUFHLE1BQU1HLFlBQVlwRCxNQUFNO3dCQUM3QjtvQkFDRjtvQkFFQSxJQUFJcUQsZ0JBQWdCO3dCQUNsQkEsZUFBZXBDLElBQUlFLE9BQU8sQ0FBQ25CLE1BQU0sRUFBRSxTQUFVc0QsSUFBSSxFQUFFdEQsTUFBTTs0QkFDdkQsSUFBSXNELFFBQVEsQ0FBQ3RELFFBQVE7Z0NBQ25CeUMsS0FBS2E7NEJBQ1AsT0FBTztnQ0FDTEYsWUFBWXBELE1BQU0sR0FBR0E7Z0NBQ3JCd0MsS0FBS1ksYUFBYW5DLEtBQUttQixLQUFLSzs0QkFDOUI7d0JBQ0Y7b0JBQ0YsT0FBTzt3QkFDTEE7b0JBQ0Y7Z0JBQ0Y7WUFDRjtRQUNGO0lBQ0Y7SUFFQSxtRUFBbUU7SUFDbkVjLE9BQU9DLE9BQU8sR0FBR1Y7QUFFbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaWdjb21tZXJjZS8uL25vZGVfbW9kdWxlcy9jb3JzL2xpYi9pbmRleC5qcz82NDI3Il0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG5cbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG4gIHZhciB2YXJ5ID0gcmVxdWlyZSgndmFyeScpO1xuXG4gIHZhciBkZWZhdWx0cyA9IHtcbiAgICBvcmlnaW46ICcqJyxcbiAgICBtZXRob2RzOiAnR0VULEhFQUQsUFVULFBBVENILFBPU1QsREVMRVRFJyxcbiAgICBwcmVmbGlnaHRDb250aW51ZTogZmFsc2UsXG4gICAgb3B0aW9uc1N1Y2Nlc3NTdGF0dXM6IDIwNFxuICB9O1xuXG4gIGZ1bmN0aW9uIGlzU3RyaW5nKHMpIHtcbiAgICByZXR1cm4gdHlwZW9mIHMgPT09ICdzdHJpbmcnIHx8IHMgaW5zdGFuY2VvZiBTdHJpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBpc09yaWdpbkFsbG93ZWQob3JpZ2luLCBhbGxvd2VkT3JpZ2luKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYWxsb3dlZE9yaWdpbikpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsb3dlZE9yaWdpbi5sZW5ndGg7ICsraSkge1xuICAgICAgICBpZiAoaXNPcmlnaW5BbGxvd2VkKG9yaWdpbiwgYWxsb3dlZE9yaWdpbltpXSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoaXNTdHJpbmcoYWxsb3dlZE9yaWdpbikpIHtcbiAgICAgIHJldHVybiBvcmlnaW4gPT09IGFsbG93ZWRPcmlnaW47XG4gICAgfSBlbHNlIGlmIChhbGxvd2VkT3JpZ2luIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICByZXR1cm4gYWxsb3dlZE9yaWdpbi50ZXN0KG9yaWdpbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAhIWFsbG93ZWRPcmlnaW47XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY29uZmlndXJlT3JpZ2luKG9wdGlvbnMsIHJlcSkge1xuICAgIHZhciByZXF1ZXN0T3JpZ2luID0gcmVxLmhlYWRlcnMub3JpZ2luLFxuICAgICAgaGVhZGVycyA9IFtdLFxuICAgICAgaXNBbGxvd2VkO1xuXG4gICAgaWYgKCFvcHRpb25zLm9yaWdpbiB8fCBvcHRpb25zLm9yaWdpbiA9PT0gJyonKSB7XG4gICAgICAvLyBhbGxvdyBhbnkgb3JpZ2luXG4gICAgICBoZWFkZXJzLnB1c2goW3tcbiAgICAgICAga2V5OiAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJyxcbiAgICAgICAgdmFsdWU6ICcqJ1xuICAgICAgfV0pO1xuICAgIH0gZWxzZSBpZiAoaXNTdHJpbmcob3B0aW9ucy5vcmlnaW4pKSB7XG4gICAgICAvLyBmaXhlZCBvcmlnaW5cbiAgICAgIGhlYWRlcnMucHVzaChbe1xuICAgICAgICBrZXk6ICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLFxuICAgICAgICB2YWx1ZTogb3B0aW9ucy5vcmlnaW5cbiAgICAgIH1dKTtcbiAgICAgIGhlYWRlcnMucHVzaChbe1xuICAgICAgICBrZXk6ICdWYXJ5JyxcbiAgICAgICAgdmFsdWU6ICdPcmlnaW4nXG4gICAgICB9XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlzQWxsb3dlZCA9IGlzT3JpZ2luQWxsb3dlZChyZXF1ZXN0T3JpZ2luLCBvcHRpb25zLm9yaWdpbik7XG4gICAgICAvLyByZWZsZWN0IG9yaWdpblxuICAgICAgaGVhZGVycy5wdXNoKFt7XG4gICAgICAgIGtleTogJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsXG4gICAgICAgIHZhbHVlOiBpc0FsbG93ZWQgPyByZXF1ZXN0T3JpZ2luIDogZmFsc2VcbiAgICAgIH1dKTtcbiAgICAgIGhlYWRlcnMucHVzaChbe1xuICAgICAgICBrZXk6ICdWYXJ5JyxcbiAgICAgICAgdmFsdWU6ICdPcmlnaW4nXG4gICAgICB9XSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhlYWRlcnM7XG4gIH1cblxuICBmdW5jdGlvbiBjb25maWd1cmVNZXRob2RzKG9wdGlvbnMpIHtcbiAgICB2YXIgbWV0aG9kcyA9IG9wdGlvbnMubWV0aG9kcztcbiAgICBpZiAobWV0aG9kcy5qb2luKSB7XG4gICAgICBtZXRob2RzID0gb3B0aW9ucy5tZXRob2RzLmpvaW4oJywnKTsgLy8gLm1ldGhvZHMgaXMgYW4gYXJyYXksIHNvIHR1cm4gaXQgaW50byBhIHN0cmluZ1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAga2V5OiAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcycsXG4gICAgICB2YWx1ZTogbWV0aG9kc1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBjb25maWd1cmVDcmVkZW50aWFscyhvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMuY3JlZGVudGlhbHMgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGtleTogJ0FjY2Vzcy1Db250cm9sLUFsbG93LUNyZWRlbnRpYWxzJyxcbiAgICAgICAgdmFsdWU6ICd0cnVlJ1xuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBmdW5jdGlvbiBjb25maWd1cmVBbGxvd2VkSGVhZGVycyhvcHRpb25zLCByZXEpIHtcbiAgICB2YXIgYWxsb3dlZEhlYWRlcnMgPSBvcHRpb25zLmFsbG93ZWRIZWFkZXJzIHx8IG9wdGlvbnMuaGVhZGVycztcbiAgICB2YXIgaGVhZGVycyA9IFtdO1xuXG4gICAgaWYgKCFhbGxvd2VkSGVhZGVycykge1xuICAgICAgYWxsb3dlZEhlYWRlcnMgPSByZXEuaGVhZGVyc1snYWNjZXNzLWNvbnRyb2wtcmVxdWVzdC1oZWFkZXJzJ107IC8vIC5oZWFkZXJzIHdhc24ndCBzcGVjaWZpZWQsIHNvIHJlZmxlY3QgdGhlIHJlcXVlc3QgaGVhZGVyc1xuICAgICAgaGVhZGVycy5wdXNoKFt7XG4gICAgICAgIGtleTogJ1ZhcnknLFxuICAgICAgICB2YWx1ZTogJ0FjY2Vzcy1Db250cm9sLVJlcXVlc3QtSGVhZGVycydcbiAgICAgIH1dKTtcbiAgICB9IGVsc2UgaWYgKGFsbG93ZWRIZWFkZXJzLmpvaW4pIHtcbiAgICAgIGFsbG93ZWRIZWFkZXJzID0gYWxsb3dlZEhlYWRlcnMuam9pbignLCcpOyAvLyAuaGVhZGVycyBpcyBhbiBhcnJheSwgc28gdHVybiBpdCBpbnRvIGEgc3RyaW5nXG4gICAgfVxuICAgIGlmIChhbGxvd2VkSGVhZGVycyAmJiBhbGxvd2VkSGVhZGVycy5sZW5ndGgpIHtcbiAgICAgIGhlYWRlcnMucHVzaChbe1xuICAgICAgICBrZXk6ICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJyxcbiAgICAgICAgdmFsdWU6IGFsbG93ZWRIZWFkZXJzXG4gICAgICB9XSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhlYWRlcnM7XG4gIH1cblxuICBmdW5jdGlvbiBjb25maWd1cmVFeHBvc2VkSGVhZGVycyhvcHRpb25zKSB7XG4gICAgdmFyIGhlYWRlcnMgPSBvcHRpb25zLmV4cG9zZWRIZWFkZXJzO1xuICAgIGlmICghaGVhZGVycykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIGlmIChoZWFkZXJzLmpvaW4pIHtcbiAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLmpvaW4oJywnKTsgLy8gLmhlYWRlcnMgaXMgYW4gYXJyYXksIHNvIHR1cm4gaXQgaW50byBhIHN0cmluZ1xuICAgIH1cbiAgICBpZiAoaGVhZGVycyAmJiBoZWFkZXJzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAga2V5OiAnQWNjZXNzLUNvbnRyb2wtRXhwb3NlLUhlYWRlcnMnLFxuICAgICAgICB2YWx1ZTogaGVhZGVyc1xuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBmdW5jdGlvbiBjb25maWd1cmVNYXhBZ2Uob3B0aW9ucykge1xuICAgIHZhciBtYXhBZ2UgPSAodHlwZW9mIG9wdGlvbnMubWF4QWdlID09PSAnbnVtYmVyJyB8fCBvcHRpb25zLm1heEFnZSkgJiYgb3B0aW9ucy5tYXhBZ2UudG9TdHJpbmcoKVxuICAgIGlmIChtYXhBZ2UgJiYgbWF4QWdlLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAga2V5OiAnQWNjZXNzLUNvbnRyb2wtTWF4LUFnZScsXG4gICAgICAgIHZhbHVlOiBtYXhBZ2VcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZnVuY3Rpb24gYXBwbHlIZWFkZXJzKGhlYWRlcnMsIHJlcykge1xuICAgIGZvciAodmFyIGkgPSAwLCBuID0gaGVhZGVycy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgIHZhciBoZWFkZXIgPSBoZWFkZXJzW2ldO1xuICAgICAgaWYgKGhlYWRlcikge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShoZWFkZXIpKSB7XG4gICAgICAgICAgYXBwbHlIZWFkZXJzKGhlYWRlciwgcmVzKTtcbiAgICAgICAgfSBlbHNlIGlmIChoZWFkZXIua2V5ID09PSAnVmFyeScgJiYgaGVhZGVyLnZhbHVlKSB7XG4gICAgICAgICAgdmFyeShyZXMsIGhlYWRlci52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaGVhZGVyLnZhbHVlKSB7XG4gICAgICAgICAgcmVzLnNldEhlYWRlcihoZWFkZXIua2V5LCBoZWFkZXIudmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY29ycyhvcHRpb25zLCByZXEsIHJlcywgbmV4dCkge1xuICAgIHZhciBoZWFkZXJzID0gW10sXG4gICAgICBtZXRob2QgPSByZXEubWV0aG9kICYmIHJlcS5tZXRob2QudG9VcHBlckNhc2UgJiYgcmVxLm1ldGhvZC50b1VwcGVyQ2FzZSgpO1xuXG4gICAgaWYgKG1ldGhvZCA9PT0gJ09QVElPTlMnKSB7XG4gICAgICAvLyBwcmVmbGlnaHRcbiAgICAgIGhlYWRlcnMucHVzaChjb25maWd1cmVPcmlnaW4ob3B0aW9ucywgcmVxKSk7XG4gICAgICBoZWFkZXJzLnB1c2goY29uZmlndXJlQ3JlZGVudGlhbHMob3B0aW9ucywgcmVxKSk7XG4gICAgICBoZWFkZXJzLnB1c2goY29uZmlndXJlTWV0aG9kcyhvcHRpb25zLCByZXEpKTtcbiAgICAgIGhlYWRlcnMucHVzaChjb25maWd1cmVBbGxvd2VkSGVhZGVycyhvcHRpb25zLCByZXEpKTtcbiAgICAgIGhlYWRlcnMucHVzaChjb25maWd1cmVNYXhBZ2Uob3B0aW9ucywgcmVxKSk7XG4gICAgICBoZWFkZXJzLnB1c2goY29uZmlndXJlRXhwb3NlZEhlYWRlcnMob3B0aW9ucywgcmVxKSk7XG4gICAgICBhcHBseUhlYWRlcnMoaGVhZGVycywgcmVzKTtcblxuICAgICAgaWYgKG9wdGlvbnMucHJlZmxpZ2h0Q29udGludWUpIHtcbiAgICAgICAgbmV4dCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gU2FmYXJpIChhbmQgcG90ZW50aWFsbHkgb3RoZXIgYnJvd3NlcnMpIG5lZWQgY29udGVudC1sZW5ndGggMCxcbiAgICAgICAgLy8gICBmb3IgMjA0IG9yIHRoZXkganVzdCBoYW5nIHdhaXRpbmcgZm9yIGEgYm9keVxuICAgICAgICByZXMuc3RhdHVzQ29kZSA9IG9wdGlvbnMub3B0aW9uc1N1Y2Nlc3NTdGF0dXM7XG4gICAgICAgIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtTGVuZ3RoJywgJzAnKTtcbiAgICAgICAgcmVzLmVuZCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBhY3R1YWwgcmVzcG9uc2VcbiAgICAgIGhlYWRlcnMucHVzaChjb25maWd1cmVPcmlnaW4ob3B0aW9ucywgcmVxKSk7XG4gICAgICBoZWFkZXJzLnB1c2goY29uZmlndXJlQ3JlZGVudGlhbHMob3B0aW9ucywgcmVxKSk7XG4gICAgICBoZWFkZXJzLnB1c2goY29uZmlndXJlRXhwb3NlZEhlYWRlcnMob3B0aW9ucywgcmVxKSk7XG4gICAgICBhcHBseUhlYWRlcnMoaGVhZGVycywgcmVzKTtcbiAgICAgIG5leHQoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtaWRkbGV3YXJlV3JhcHBlcihvKSB7XG4gICAgLy8gaWYgb3B0aW9ucyBhcmUgc3RhdGljIChlaXRoZXIgdmlhIGRlZmF1bHRzIG9yIGN1c3RvbSBvcHRpb25zIHBhc3NlZCBpbiksIHdyYXAgaW4gYSBmdW5jdGlvblxuICAgIHZhciBvcHRpb25zQ2FsbGJhY2sgPSBudWxsO1xuICAgIGlmICh0eXBlb2YgbyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb3B0aW9uc0NhbGxiYWNrID0gbztcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0aW9uc0NhbGxiYWNrID0gZnVuY3Rpb24gKHJlcSwgY2IpIHtcbiAgICAgICAgY2IobnVsbCwgbyk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiBjb3JzTWlkZGxld2FyZShyZXEsIHJlcywgbmV4dCkge1xuICAgICAgb3B0aW9uc0NhbGxiYWNrKHJlcSwgZnVuY3Rpb24gKGVyciwgb3B0aW9ucykge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgbmV4dChlcnIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBjb3JzT3B0aW9ucyA9IGFzc2lnbih7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgICAgICAgIHZhciBvcmlnaW5DYWxsYmFjayA9IG51bGw7XG4gICAgICAgICAgaWYgKGNvcnNPcHRpb25zLm9yaWdpbiAmJiB0eXBlb2YgY29yc09wdGlvbnMub3JpZ2luID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBvcmlnaW5DYWxsYmFjayA9IGNvcnNPcHRpb25zLm9yaWdpbjtcbiAgICAgICAgICB9IGVsc2UgaWYgKGNvcnNPcHRpb25zLm9yaWdpbikge1xuICAgICAgICAgICAgb3JpZ2luQ2FsbGJhY2sgPSBmdW5jdGlvbiAob3JpZ2luLCBjYikge1xuICAgICAgICAgICAgICBjYihudWxsLCBjb3JzT3B0aW9ucy5vcmlnaW4pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAob3JpZ2luQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIG9yaWdpbkNhbGxiYWNrKHJlcS5oZWFkZXJzLm9yaWdpbiwgZnVuY3Rpb24gKGVycjIsIG9yaWdpbikge1xuICAgICAgICAgICAgICBpZiAoZXJyMiB8fCAhb3JpZ2luKSB7XG4gICAgICAgICAgICAgICAgbmV4dChlcnIyKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb3JzT3B0aW9ucy5vcmlnaW4gPSBvcmlnaW47XG4gICAgICAgICAgICAgICAgY29ycyhjb3JzT3B0aW9ucywgcmVxLCByZXMsIG5leHQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuXG4gIC8vIGNhbiBwYXNzIGVpdGhlciBhbiBvcHRpb25zIGhhc2gsIGFuIG9wdGlvbnMgZGVsZWdhdGUsIG9yIG5vdGhpbmdcbiAgbW9kdWxlLmV4cG9ydHMgPSBtaWRkbGV3YXJlV3JhcHBlcjtcblxufSgpKTtcbiJdLCJuYW1lcyI6WyJhc3NpZ24iLCJyZXF1aXJlIiwidmFyeSIsImRlZmF1bHRzIiwib3JpZ2luIiwibWV0aG9kcyIsInByZWZsaWdodENvbnRpbnVlIiwib3B0aW9uc1N1Y2Nlc3NTdGF0dXMiLCJpc1N0cmluZyIsInMiLCJTdHJpbmciLCJpc09yaWdpbkFsbG93ZWQiLCJhbGxvd2VkT3JpZ2luIiwiQXJyYXkiLCJpc0FycmF5IiwiaSIsImxlbmd0aCIsIlJlZ0V4cCIsInRlc3QiLCJjb25maWd1cmVPcmlnaW4iLCJvcHRpb25zIiwicmVxIiwicmVxdWVzdE9yaWdpbiIsImhlYWRlcnMiLCJpc0FsbG93ZWQiLCJwdXNoIiwia2V5IiwidmFsdWUiLCJjb25maWd1cmVNZXRob2RzIiwiam9pbiIsImNvbmZpZ3VyZUNyZWRlbnRpYWxzIiwiY3JlZGVudGlhbHMiLCJjb25maWd1cmVBbGxvd2VkSGVhZGVycyIsImFsbG93ZWRIZWFkZXJzIiwiY29uZmlndXJlRXhwb3NlZEhlYWRlcnMiLCJleHBvc2VkSGVhZGVycyIsImNvbmZpZ3VyZU1heEFnZSIsIm1heEFnZSIsInRvU3RyaW5nIiwiYXBwbHlIZWFkZXJzIiwicmVzIiwibiIsImhlYWRlciIsInNldEhlYWRlciIsImNvcnMiLCJuZXh0IiwibWV0aG9kIiwidG9VcHBlckNhc2UiLCJzdGF0dXNDb2RlIiwiZW5kIiwibWlkZGxld2FyZVdyYXBwZXIiLCJvIiwib3B0aW9uc0NhbGxiYWNrIiwiY2IiLCJjb3JzTWlkZGxld2FyZSIsImVyciIsImNvcnNPcHRpb25zIiwib3JpZ2luQ2FsbGJhY2siLCJlcnIyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/cors/lib/index.js\n");

/***/ })

};
;
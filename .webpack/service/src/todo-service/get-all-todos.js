/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/db/db.ts":
/*!**********************!*\
  !*** ./src/db/db.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n// import { Sequelize } from 'sequelize';\n// import * as config from '../config/config.json';\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n// const env = process.env.NODE_ENV || 'development';\n// const sequelize = new Sequelize((config as any)[env]);\n// // Test the connection\n// async function testConnection() {\n//   try {\n//     await sequelize.authenticate();\n//     console.log('Connection to the database has been established successfully.');\n//   } catch (error) {\n//     console.error('Unable to connect to the database:', error);\n//   }\n// }\n// // Synchronize all defined models to the DB\n// async function syncModels() {\n//   try {\n//     await sequelize.sync({ alter: true }); // Use alter: true for development to automatically update schema\n//     console.log('All models were synchronized successfully.');\n//   } catch (error) {\n//     console.error('Unable to synchronize models:', error);\n//   }\n// }\n// testConnection();\n// syncModels();\n// export default sequelize;\nconst sequelize_1 = __webpack_require__(/*! sequelize */ \"sequelize\");\nconst sequelize = new sequelize_1.Sequelize({\n    database: process.env.DB_NAME,\n    username: process.env.DB_USER,\n    password: process.env.DB_PASSWORD,\n    host: process.env.DB_HOST,\n    port: 5432, // PostgreSQL default port\n    dialect: 'postgres', // Specify the dialect of the database\n});\nsequelize.authenticate()\n    .then(async () => {\n    console.log('Connection has been established successfully.');\n    // Synchronize all models\n    await sequelize.sync({ alter: true }); // Use alter: true to update tables to match the models\n    console.log('All models were synchronized successfully.');\n})\n    .catch(err => {\n    console.error('Unable to connect to the database:', err);\n});\nexports[\"default\"] = sequelize;\n\n\n//# sourceURL=webpack://serverless-todo/./src/db/db.ts?");

/***/ }),

/***/ "./src/models/todo.ts":
/*!****************************!*\
  !*** ./src/models/todo.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst sequelize_1 = __webpack_require__(/*! sequelize */ \"sequelize\");\nconst db_1 = __importDefault(__webpack_require__(/*! ../db/db */ \"./src/db/db.ts\"));\nconst Todo = db_1.default.define(\"Todo\", {\n    id: {\n        type: sequelize_1.DataTypes.INTEGER,\n        primaryKey: true,\n        autoIncrement: true\n    },\n    title: {\n        type: sequelize_1.DataTypes.STRING,\n        allowNull: false\n    },\n    description: {\n        type: sequelize_1.DataTypes.TEXT,\n        allowNull: true\n    },\n    completed: {\n        type: sequelize_1.DataTypes.BOOLEAN,\n        allowNull: false,\n        defaultValue: false\n    }\n}, {\n    // Use Sequelize's built-in timestamps\n    timestamps: true,\n    createdAt: 'created_at',\n    updatedAt: 'updated_at',\n    // Ensure the timestamps are in the correct format\n    defaultScope: {\n        attributes: { exclude: ['createdAt', 'updatedAt'] },\n    },\n    scopes: {\n        withTimestamps: {\n            attributes: { include: ['created_at', 'updated_at'] },\n        },\n    },\n});\nexports[\"default\"] = Todo;\n\n\n//# sourceURL=webpack://serverless-todo/./src/models/todo.ts?");

/***/ }),

/***/ "./src/todo-service/get-all-todos.ts":
/*!*******************************************!*\
  !*** ./src/todo-service/get-all-todos.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getAllTodos = void 0;\nconst todo_1 = __importDefault(__webpack_require__(/*! ../models/todo */ \"./src/models/todo.ts\"));\nconst getAllTodos = async (event) => {\n    try {\n        const todos = await todo_1.default.findAll();\n        return {\n            statusCode: 201,\n            body: JSON.stringify(todos)\n        };\n    }\n    catch {\n        return {\n            statusCode: 500,\n            body: JSON.stringify({ message: 'Internal server error' })\n        };\n    }\n};\nexports.getAllTodos = getAllTodos;\n\n\n//# sourceURL=webpack://serverless-todo/./src/todo-service/get-all-todos.ts?");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("sequelize");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/todo-service/get-all-todos.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;
"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userController = __importStar(require("./user.controller"));
var withErrorHandlerRoute_1 = __importDefault(require("../../routers/withErrorHandlerRoute"));
var router = express_1.Router();
var errorHandledRouter = withErrorHandlerRoute_1.default(router);
/**
 * @swagger
 *
 * /users:
 *   get:
 *     tags: ['User']
 *     summary: Get All User
 *     parameters:
 *       - name: email
 *         in: query
 *       - name: name
 *         in: query
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: login
 */
errorHandledRouter.get('/', userController.getAllUser);
/**
 * @swagger
 *
 * /users:
 *   post:
 *     tags: ['User']
 *     summary: Create User
 *     parameters:
 *       - name: email
 *         in: formData
 *       - name: name
 *         in: formData
 *       - name: role_id
 *         in: formData
 *       - name: password
 *         in: formData
 *       - name: jadwal_id
 *         in: formData
 *       - name: sekolah_tujuan
 *         in: formData
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: login
 */
errorHandledRouter.post('/', userController.createUser);
/**
 * @swagger
 *
 * /users/{userId}:
 *   delete:
 *     tags: ['User']
 *     summary: Get All User
 *     parameters:
 *       - name: userId
 *         in: path
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: login
 */
errorHandledRouter.delete('/:userId', userController.deleteUser);
/**
 * @swagger
 *
 * /users/{userId}:
 *   put:
 *     tags: ['User']
 *     summary: Edit User
 *     parameters:
 *       - name: userId
 *         in: path
 *       - name: email
 *         in: formData
 *       - name: name
 *         in: formData
 *       - name: role_id
 *         in: formData
 *       - name: password
 *         in: formData
 *       - name: jadwal_id
 *         in: formData
 *       - name: sekolah_tujuan
 *         in: formData
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: login
 */
errorHandledRouter.put('/:userId', userController.editUser);
exports.default = router;
//# sourceMappingURL=user.routes.js.map
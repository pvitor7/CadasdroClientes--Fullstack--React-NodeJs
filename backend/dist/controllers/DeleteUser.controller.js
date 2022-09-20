"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserController = void 0;
const DeleteUser_service_1 = require("../services/DeleteUser.service");
const deleteUserController = (request) => {
    const { id } = request.params;
    const user = (0, DeleteUser_service_1.DeleteUserService)(id);
    return user;
};
exports.deleteUserController = deleteUserController;

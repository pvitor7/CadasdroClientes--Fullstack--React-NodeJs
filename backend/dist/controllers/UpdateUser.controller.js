"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserController = void 0;
const UpdateUser_service_1 = require("../services/UpdateUser.service");
const UpdateUserController = (request) => {
    const { id } = request.params;
    const user = (0, UpdateUser_service_1.UpdateUserService)(id);
};
exports.UpdateUserController = UpdateUserController;

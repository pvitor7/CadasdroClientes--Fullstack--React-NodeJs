"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAllUsersController = void 0;
const ListAllUsers_service_1 = require("../services/ListAllUsers.service");
const ListAllUsersController = (request) => {
    const users = (0, ListAllUsers_service_1.ListAllUsersService)();
    return users;
};
exports.ListAllUsersController = ListAllUsersController;

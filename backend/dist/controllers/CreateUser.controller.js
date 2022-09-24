"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CreateUser_service_1 = require("../services/CreateUser.service");
const CreateUserController = (request) => {
    const newUser = (0, CreateUser_service_1.CreateUserService)(request.body);
    return { 'detail': newUser };
};

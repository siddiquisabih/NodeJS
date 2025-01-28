"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const authSchema_1 = require("../schema/authSchema");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(authSchema, jwtService) {
        this.authSchema = authSchema;
        this.jwtService = jwtService;
    }
    async createNewUser(createDto) {
        const newUser = new this.authSchema(createDto);
        return await newUser.save();
    }
    async loginUser(loginDto) {
        const findUser = await this.authSchema.findOne({ username: loginDto.username, password: loginDto.password });
        if (!findUser) {
            throw new common_1.NotFoundException('User Not found in database');
        }
        const payload = { username: findUser.username, sub: findUser._id };
        const accessToken = this.jwtService.sign(payload);
        return { user: findUser, token: accessToken };
    }
    async getAllUsers() {
        const findUser = await this.authSchema.find().exec();
        return findUser;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(authSchema_1.Auth.name)),
    __metadata("design:paramtypes", [mongoose_2.Model, jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map
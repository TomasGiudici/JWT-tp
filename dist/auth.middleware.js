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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let AuthGuard = class AuthGuard {
    constructor(permissionCode) {
        this.permissionCode = permissionCode;
        this.url = 'http://localhost:3000/can-do';
    }
    async canActivate(context) {
        try {
            const request = context.switchToHttp().getRequest();
            const token = request.headers.authorization;
            if (token == null) {
                throw new common_1.UnauthorizedException('El token no existe');
            }
            (await axios_1.default.get(`${this.url}/${this.permissionCode}`, {
                headers: {
                    Authorization: token,
                },
            })).data;
            return true;
        }
        catch (error) {
            throw new common_1.UnauthorizedException(error?.message);
        }
    }
};
exports.AuthGuard = AuthGuard;
exports.AuthGuard = AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [String])
], AuthGuard);
//# sourceMappingURL=auth.middleware.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtService = void 0;
const common_1 = require("@nestjs/common");
const jsonwebtoken_1 = require("jsonwebtoken");
let JwtService = class JwtService {
    constructor() {
        this.config = {
            auth: {
                secret: 'authSecret',
                expiresIn: '15m',
            },
            refresh: {
                secret: 'refreshSecret',
                expiresIn: '1d',
            },
        };
    }
    generateToken(payload, type = 'auth') {
        return (0, jsonwebtoken_1.sign)(payload, this.config[type].secret, {
            expiresIn: this.config[type].expiresIn,
        });
    }
    refreshToken(refreshToken) {
        try {
            const payload = (0, jsonwebtoken_1.verify)(refreshToken, this.config.refresh.secret);
            const currentTime = Math.floor(Date.now() / 1000);
            const timeToExpire = (payload.exp - currentTime) / 60;
            if (timeToExpire < 20) {
                return {
                    accessToken: this.generateToken({ email: payload.email }),
                    refreshToken: this.generateToken({ email: payload.email }, 'refresh'),
                };
            }
            return {
                accessToken: this.generateToken({ email: payload.email }),
            };
        }
        catch (error) {
            throw new common_1.UnauthorizedException();
        }
    }
    getPayload(token, type = 'auth') {
        return (0, jsonwebtoken_1.verify)(token, this.config[type].secret);
    }
};
exports.JwtService = JwtService;
exports.JwtService = JwtService = __decorate([
    (0, common_1.Injectable)()
], JwtService);
//# sourceMappingURL=jwt.service.js.map
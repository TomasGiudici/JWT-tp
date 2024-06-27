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
exports.RolesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const role_entity_1 = require("../../entities/role.entity");
const permission_entity_1 = require("../../entities/permission.entity");
let RolesService = class RolesService {
    constructor(roleRepository, permissionRepository) {
        this.roleRepository = roleRepository;
        this.permissionRepository = permissionRepository;
    }
    async create(role) {
        const { name, code, description } = role;
        const roleExists = await this.roleRepository.findOne({ where: { name } });
        if (roleExists) {
            throw new common_1.ConflictException(`Role with name ${name} already exists`);
        }
        return this.roleRepository.save(role);
    }
    async findAll() {
        return await this.roleRepository.find({ relations: ['permissions'] });
    }
    async update(id, body) {
        const role = await this.roleRepository.findOne({ where: { id } });
        if (!role) {
            throw new Error(`Permission with id ${id} not found`);
        }
        this.roleRepository.merge(role, body);
        return this.roleRepository.save(role);
    }
    async delete(id) {
        const result = await this.roleRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Permission with id ${id} not found`);
        }
    }
    async assignPermissionToRole(roleId, permissionId) {
        const role = await this.roleRepository.findOne({
            where: { id: roleId },
            relations: ['permissions'],
        });
        if (!role) {
            throw new common_1.NotFoundException(`Role with ID ${roleId} not found`);
        }
        const permission = await this.permissionRepository.findOne({ where: { id: permissionId } });
        if (!permission) {
            throw new common_1.NotFoundException(`Permission with ID ${permissionId} not found`);
        }
        if (role.permissions.find(p => p.id === permission.id)) {
            throw new common_1.ConflictException(`Permission with ID ${permissionId} is already assigned to Role with ID ${roleId}`);
        }
        role.permissions.push(permission);
        return this.roleRepository.save(role);
    }
};
exports.RolesService = RolesService;
exports.RolesService = RolesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(role_entity_1.RoleEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(permission_entity_1.PermissionEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], RolesService);
//# sourceMappingURL=roles.service.js.map
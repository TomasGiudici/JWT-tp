import { RolesService } from './roles.service';
import { RoleEntity } from 'src/entities/role.entity';
export declare class RolesController {
    private service;
    constructor(service: RolesService);
    create(role: Partial<RoleEntity>): Promise<RoleEntity>;
    findAll(): Promise<RoleEntity[]>;
    update(id: number, body: Partial<RoleEntity>): Promise<RoleEntity>;
    delete(id: number): Promise<void>;
    assignPermissionToRole(roleId: number, permissionId: number): Promise<RoleEntity>;
}

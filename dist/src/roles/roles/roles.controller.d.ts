import { RolesService } from './roles.service';
import { RoleEntity } from 'src/entities/role.entity';
export declare class RolesController {
    private service;
    constructor(service: RolesService);
    createRole(role: Partial<RoleEntity>): Promise<RoleEntity>;
}

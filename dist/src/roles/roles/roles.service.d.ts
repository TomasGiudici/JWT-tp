import { Repository } from 'typeorm';
import { RoleEntity } from 'src/entities/role.entity';
import { PermissionEntity } from 'src/entities/permission.entity';
export declare class RolesService {
    private roleRepository;
    private permissionRepository;
    constructor(roleRepository: Repository<RoleEntity>, permissionRepository: Repository<PermissionEntity>);
    create(role: Partial<RoleEntity>): Promise<RoleEntity>;
    findAll(): Promise<RoleEntity[]>;
    update(id: number, body: Partial<RoleEntity>): Promise<RoleEntity>;
    delete(id: number): Promise<void>;
    assignPermissionToRole(roleId: number, permissionId: number): Promise<RoleEntity>;
}

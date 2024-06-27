import { Repository } from 'typeorm';
import { RoleEntity } from 'src/entities/role.entity';
import { PermissionEntity } from 'src/entities/permission.entity';
export declare class RolesService {
    private roleRepository;
    private permissionRepository;
    constructor(roleRepository: Repository<RoleEntity>, permissionRepository: Repository<PermissionEntity>);
    create(role: Partial<RoleEntity>): Promise<RoleEntity>;
}

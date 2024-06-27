import { DeepPartial, Repository } from 'typeorm';
import { PermissionEntity } from 'src/entities/permission.entity';
export declare class PermissionsService {
    private permissionsRepository;
    constructor(permissionsRepository: Repository<PermissionEntity>);
    create(permission: DeepPartial<PermissionEntity>): Promise<PermissionEntity>;
    findAll(): Promise<PermissionEntity[]>;
    update(id: number, body: Partial<PermissionEntity>): Promise<PermissionEntity>;
    delete(id: number): Promise<void>;
}

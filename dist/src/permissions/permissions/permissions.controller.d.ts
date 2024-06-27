import { PermissionsService } from './permissions.service';
import { DeepPartial } from 'typeorm';
import { PermissionEntity } from 'src/entities/permission.entity';
export declare class PermissionsController {
    private service;
    constructor(service: PermissionsService);
    create(permission: DeepPartial<PermissionEntity>): Promise<PermissionEntity>;
    findAll(): Promise<PermissionEntity[]>;
    update(id: number, body: Partial<PermissionEntity>): Promise<PermissionEntity>;
    delete(id: number): Promise<void>;
}

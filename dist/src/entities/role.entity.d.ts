import { PermissionEntity } from './permission.entity';
export declare class RoleEntity {
    id: number;
    name: string;
    code: string;
    description: string;
    permissions: PermissionEntity[];
}

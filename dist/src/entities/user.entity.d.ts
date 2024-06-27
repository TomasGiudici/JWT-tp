import { UserI } from '../interfaces/user.interface';
import { BaseEntity } from 'typeorm';
export declare class UserEntity extends BaseEntity implements UserI {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    get permissionCodes(): string[];
}

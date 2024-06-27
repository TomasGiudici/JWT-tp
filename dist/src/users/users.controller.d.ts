import { UsersService } from './users.service';
import { LoginDTO } from '../interfaces/login.dto';
import { RegisterDTO } from '../interfaces/register.dto';
import { RequestWithUser } from 'src/interfaces/request-user';
import { Request } from 'express';
import { UserEntity } from 'src/entities/user.entity';
export declare class UsersController {
    private service;
    constructor(service: UsersService);
    me(req: Request & {
        user: UserEntity;
    }): {
        firstName: string;
    };
    login(body: LoginDTO): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    register(body: RegisterDTO): Promise<{
        status: string;
    }>;
    canDo(request: RequestWithUser, permission: string): Promise<void>;
    refreshToken(request: Request): Promise<{
        accessToken: string;
        refreshToken: string;
    } | {
        accessToken: string;
        refreshToken?: undefined;
    }>;
}

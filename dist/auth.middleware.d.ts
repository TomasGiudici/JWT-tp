import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class AuthGuard implements CanActivate {
    private permissionCode;
    url: string;
    constructor(permissionCode: string);
    canActivate(context: ExecutionContext): Promise<boolean>;
}

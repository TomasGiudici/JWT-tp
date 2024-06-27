import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { DeepPartial } from 'typeorm';
import { PermissionEntity } from 'src/entities/permission.entity';

@Controller('permissions')
export class PermissionsController {
    constructor(private service:PermissionsService) {}

    @Post()
    async create(
        @Body() permission: DeepPartial<PermissionEntity>,
    ): Promise<PermissionEntity> {
        return await this.service.create(permission);
    }

    @Get()
    async findAll() :Promise<PermissionEntity[]> {
        return await this.service.findAll()
    }

    @Put(':id')
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() body: Partial<PermissionEntity>,
    ) :Promise<PermissionEntity> {
        try{
            return await this.service.update(id, body)
        } catch(error) {
            throw new NotFoundException(error.message);
        }
    }

    @Delete(':id')
    async delete(
        @Param('id', ParseIntPipe) id: number
    ) :Promise<void> {
        try {
            await this.service.delete(id);
        } catch(error) {
            throw new NotFoundException(error.message)
        }
    }
}

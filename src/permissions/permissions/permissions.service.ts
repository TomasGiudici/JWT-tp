import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { PermissionEntity } from 'src/entities/permission.entity';

@Injectable()
export class PermissionsService {
  constructor(
    @InjectRepository(PermissionEntity)
    private permissionsRepository: Repository<PermissionEntity>,
  ) {}

    async create(permission: DeepPartial<PermissionEntity>): Promise<PermissionEntity> {
        return this.permissionsRepository.save(permission);
    }

    async findAll(): Promise<PermissionEntity[]> {
        return await this.permissionsRepository.find()
    }

    async update(id: number, body: Partial<PermissionEntity>) :Promise<PermissionEntity> {
        const permission = await this.permissionsRepository.findOne({ where: { id } });

        if (!permission) {
            throw new Error(`Permission with id ${id} not found`);
        }
        this.permissionsRepository.merge(permission, body);

        return this.permissionsRepository.save(permission);
    }

    async delete(id: number) :Promise<void> {
        const result = await this.permissionsRepository.delete(id);

        if (result.affected === 0) {
            throw new NotFoundException(`Permission with id ${id} not found`);
        }
    }
}

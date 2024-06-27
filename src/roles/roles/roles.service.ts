import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoleEntity } from 'src/entities/role.entity';
import { PermissionEntity } from 'src/entities/permission.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(RoleEntity)
    private roleRepository: Repository<RoleEntity>,
    @InjectRepository(PermissionEntity)
    private permissionRepository: Repository<PermissionEntity>,
  ) {}

  async create(role: Partial<RoleEntity>): Promise<RoleEntity> {
    const { name, code, description } = role;

    const roleExists = await this.roleRepository.findOne({ where: { name } });

    if (roleExists) {
      throw new ConflictException(`Role with name ${name} already exists`);
    }

    return this.roleRepository.save(role);
  }

  async findAll(): Promise<RoleEntity[]> {
    return await this.roleRepository.find();
  }

  async update(id: number, body: Partial<RoleEntity>): Promise<RoleEntity> {
    const role = await this.roleRepository.findOne({ where: { id } });

    if (!role) {
        throw new Error(`Permission with id ${id} not found`);
    }
    this.roleRepository.merge(role, body);

    return this.roleRepository.save(role);
  }

  async delete(id: number) :Promise<void> {
    const result = await this.roleRepository.delete(id);

    if (result.affected === 0) {
        throw new NotFoundException(`Permission with id ${id} not found`);
    }
}
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { RoleEntity } from 'src/entities/role.entity';
import { PermissionEntity } from 'src/entities/permission.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([RoleEntity, PermissionEntity]), // Importa las entidades necesarias
  ],
  controllers: [RolesController], // Registra el controlador
  providers: [RolesService], // Proporciona el servicio
})
export class RolesModule {}

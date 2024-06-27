import { Controller, Post, Body, ConflictException, Get, Put, Param, ParseIntPipe, NotFoundException, Delete } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RoleEntity } from 'src/entities/role.entity';

@Controller('roles')
export class RolesController {
  constructor(private service: RolesService) {}

  @Post()
  async create(@Body() role: Partial<RoleEntity>): Promise<RoleEntity> {
    try {
      return await this.service.create(role);
    } catch (error) {
      if (error instanceof ConflictException) {
        throw new ConflictException(error.message); // Captura el error de conflicto (nombre duplicado) y devuelve un error HTTP 409
      }
      throw error; // Re-lanzar cualquier otro error desconocido
    }
  }

    @Get()
    async findAll() :Promise <RoleEntity[]> {
        return await this.service.findAll();
    }

    @Put(':id')
    async update (
        @Param('id', ParseIntPipe) id: number,
        @Body() body: Partial<RoleEntity>
    ): Promise<RoleEntity> {
        try {
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

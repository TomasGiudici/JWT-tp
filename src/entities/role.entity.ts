import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { PermissionEntity } from './permission.entity';

@Entity()
export class RoleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  code: string;

  @Column()
  description: string;

  @ManyToMany(() => PermissionEntity)
  @JoinTable()
  permissions: PermissionEntity[];
}
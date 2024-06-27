import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PermissionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}

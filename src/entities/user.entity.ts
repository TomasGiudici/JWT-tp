import { UserI } from '../interfaces/user.interface';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity extends BaseEntity implements UserI {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  firstName: string;
  @Column()
  lastName: string;

  get permissionCodes() {
    return ['create-users'];
  }
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from './entities';
import { UsersModule } from './users/users.module';
import { JwtModule } from './jwt/jwt.module';
import { AuthGuard } from './middlewares/auth.middleware';
import { PermissionsModule } from './permissions/permissions/permissions.module';
import { RolesModule } from './roles/roles/roles.module';

@Module({
  imports: [
    PermissionsModule,
    RolesModule,
    UsersModule,
    TypeOrmModule.forRoot({
      database: 'db.sql',
      entities,
      type: 'sqlite',
      synchronize: true,
    }),
    JwtModule,
  ],
  controllers: [AppController],
  providers: [AuthGuard],
})
export class AppModule {}

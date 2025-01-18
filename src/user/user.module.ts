import { Module } from '@nestjs/common';
import { UserController } from './user.controller';  // Ensure correct import
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';  // Ensure correct import

@Module({
  imports: [TypeOrmModule.forFeature([User])],  // Ensure TypeOrmModule is configured correctly
  controllers: [UserController],  // Ensure the controller is registered
  providers: [UserService],  // Ensure the service is registered
})
export class UserModule {}

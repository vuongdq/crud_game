import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { GameModule } from './game/game.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Vuong1',
      database: 'crud_db',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,  // Chỉ dùng cho môi trường phát triển
    }),
    UserModule,
    GameModule,
    CategoryModule,
  ],
})
export class AppModule {}

// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Bật CORS
  app.enableCors({
    origin: 'http://localhost:3001',  // Đảm bảo frontend đang chạy trên port 3001
    methods: 'GET, POST, PUT, DELETE',  // Các phương thức cần cho frontend
    allowedHeaders: 'Content-Type, Authorization',  // Các header cần thiết
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

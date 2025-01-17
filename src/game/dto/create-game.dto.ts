// src/game/dto/create-game.dto.ts
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateGameDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  thumbnail: string; // Thêm trường này

  @IsString()
  @IsNotEmpty()
  flashFile: string; // Thêm trường này
}

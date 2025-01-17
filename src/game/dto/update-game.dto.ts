// src/game/dto/update-game.dto.ts
export class UpdateGameDto {
    name?: string;
    description?: string;
    categoryId?: number;  // Optional for partial updates
  }
  
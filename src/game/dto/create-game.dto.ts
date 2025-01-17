// src/game/dto/create-game.dto.ts
export class CreateGameDto {
    name: string;
    description: string;
    categoryId: number;  // This should be the ID of the related Category
  }
  
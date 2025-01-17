import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Category } from '../category/category.entity';

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column({ nullable: true })
  thumbnail: string;  // Thêm trường thumbnail

  @Column({ nullable: true })
  flashFile: string;  // Thêm trường flash file

  @ManyToOne(() => Category, (category) => category.games)
  category: Category;
}

import { User } from 'src/user/entities/user.entity';

export class CreatePostDto {
  title: string;

  content: string;

  category: string;

  author: number;
}

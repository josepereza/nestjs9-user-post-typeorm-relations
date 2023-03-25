import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
  ) {}
  async create(createPostDto: CreatePostDto) {
    const { title, content, category, author } = createPostDto;
    const post = new Post();
    post.author = await User.findOneBy({ id: author });
    post.category = category;
    post.content = content;
    post.title = title;
    return this.postRepository.save(post);
  }

  findAll() {
    return this.postRepository.find({ relations: ['author'] });
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}

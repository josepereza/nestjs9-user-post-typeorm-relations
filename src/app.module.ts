import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [
     TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345',
      database: 'userpost',
      autoLoadEntities: true,
      synchronize: true,
    }),
     UserModule,
     PostModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

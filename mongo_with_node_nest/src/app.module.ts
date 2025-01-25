import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './todo/todo.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://192.168.150.113/todo'),
    TodoModule,],
    
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forRoot('mongodb://192.168.150.114/auth'), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }

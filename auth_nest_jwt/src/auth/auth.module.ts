import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Auth, AuthSchema } from 'src/schema/authSchema';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/auth/jwtStrategy';

@Module({
  imports: [MongooseModule.forFeature([{ name: Auth.name, schema: AuthSchema }]),
  JwtModule.register({
    secret: 'thisissomesecret',
    signOptions: { expiresIn: '1h' },
  }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [JwtStrategy],
})
export class AuthModule { }

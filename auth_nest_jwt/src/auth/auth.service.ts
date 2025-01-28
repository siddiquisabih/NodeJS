import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
import { Auth } from 'src/schema/authSchema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoginUserDto } from './dto/loginUserDto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(@InjectModel(Auth.name) private authSchema: Model<Auth>, private readonly jwtService: JwtService) { }

    async createNewUser(createDto: CreateUserDto): Promise<Auth> {
        const newUser = new this.authSchema(createDto);
        return await newUser.save()
    }

    async loginUser(loginDto: LoginUserDto): Promise<{ user: Auth, token: string }> {
        const findUser = await this.authSchema.findOne({ username: loginDto.username, password: loginDto.password });
        if (!findUser) {
            throw new NotFoundException('User Not found in database')
        }
        const payload = { username: findUser.username, sub: findUser._id };
        const accessToken = this.jwtService.sign(payload);
        return { user: findUser, token: accessToken };
    }

    async getAllUsers(): Promise<Auth[]> {
        const findUser = await this.authSchema.find().exec();
        return findUser;
    }

}
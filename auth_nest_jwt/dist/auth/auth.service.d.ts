import { CreateUserDto } from './dto/createUserDto';
import { Auth } from 'src/schema/authSchema';
import { Model } from 'mongoose';
import { LoginUserDto } from './dto/loginUserDto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private authSchema;
    private readonly jwtService;
    constructor(authSchema: Model<Auth>, jwtService: JwtService);
    createNewUser(createDto: CreateUserDto): Promise<Auth>;
    loginUser(loginDto: LoginUserDto): Promise<{
        user: Auth;
        token: string;
    }>;
    getAllUsers(): Promise<Auth[]>;
}

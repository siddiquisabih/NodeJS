import { CreateUserDto } from './dto/createUserDto';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/loginUserDto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    createNewUser(createDto: CreateUserDto): Promise<import("../schema/authSchema").Auth>;
    loginUser(loginDto: LoginUserDto): Promise<{
        user: import("../schema/authSchema").Auth;
        token: string;
    }>;
    getProtectedData(req: any): Promise<import("../schema/authSchema").Auth[]>;
}

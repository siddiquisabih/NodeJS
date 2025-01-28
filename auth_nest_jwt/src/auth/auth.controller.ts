import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/loginUserDto';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from './guards/jwt-auth-guard/jwt-auth-guard.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }


    @Post()
    createNewUser(@Body() createDto: CreateUserDto) {
        return this.authService.createNewUser(createDto);
    }

    @Post('login')
    loginUser(@Body() loginDto: LoginUserDto) {
        return this.authService.loginUser(loginDto);
    }


    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth('access-token')
    @Get('allusers')
    getProtectedData(@Request() req) {
        console.log(req?.user)
        return this.authService.getAllUsers();
    }

}

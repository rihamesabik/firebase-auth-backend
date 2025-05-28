import { Controller, Post, Req, UseGuards, Get, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signup(@Body() body: { email: string; password: string }) {
    return this.authService.register(body.email, body.password);
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const user = await this.authService.validateUser(body.email, body.password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.authService.login(user);
  }
  @UseGuards(JwtAuthGuard)
  @Get('me')
  getProfile(@Req() req) {
    // req.user vient du JwtStrategy.validate()
    console.log('User profileyyyyyyyyy:', req.user);
    return req.user;
  }
}

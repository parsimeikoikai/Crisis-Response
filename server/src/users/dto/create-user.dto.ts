import { IsString, IsEmail, IsEnum, IsNotEmpty, IsOptional, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(6, 20)  
  password: string;

  @IsEnum(['Admin', 'Reporter', 'User'])
  @IsOptional()  
  role?: string;

  @IsString()
  @IsNotEmpty()
  phoneNumber: string;
}

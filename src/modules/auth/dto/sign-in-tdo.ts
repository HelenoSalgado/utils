import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"
import { Role } from "../role";

export class SignInDto {
    
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsString()
    firstName?: string;
    
    @IsNotEmpty()
    @IsString()
    @IsOptional()
    lastName?: string;

    @IsString()
    @IsNotEmpty()
    passwordInput: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsOptional()
    role?: Role
}

export class HashDto {
    @IsNotEmpty()
    @IsString()
    password: string;
}
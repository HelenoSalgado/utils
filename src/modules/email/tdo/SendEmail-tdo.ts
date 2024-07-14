import { IsEmail, IsNotEmpty } from "class-validator";

export class SendEmail{
    
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    text: string;
    
}
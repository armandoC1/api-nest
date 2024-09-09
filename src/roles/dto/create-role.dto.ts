import { IsNotEmpty, IsString } from "class-validator";

export class CreateRoles {
    @IsNotEmpty()
    @IsString()
    name : string
}
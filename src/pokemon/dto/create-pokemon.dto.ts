import { IsInt, IsString, Min } from "class-validator";

export class CreatePokemonDto {
    @IsString()
    name: string;

    @IsInt()
    @Min(1)
    no: number;
}

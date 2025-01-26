import { IsNumber, IsOptional, Min } from "class-validator";



export class PaginationRequest {
    @IsNumber()
    @IsOptional()
    @Min(1)
    limit: number;
    @IsNumber()
    @IsOptional()
    offset: number;
}
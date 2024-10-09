import { IsOptional, IsString } from 'class-validator';

export class UpdateCommentDto {
  @IsOptional()
  @IsString()
  text?: string;

  @IsOptional()
  @IsString()
  user?: string; // Reference to the User ID

  @IsOptional()
  @IsString()
  crisis?: string; // Reference to the Crisis ID
}

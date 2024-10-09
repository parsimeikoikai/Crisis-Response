import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCommentDto {
  @IsNotEmpty()
  @IsString()
  text: string;

  @IsNotEmpty()
  @IsString()
  user: string; // Reference to the User ID

  @IsNotEmpty()
  @IsString()
  crisis: string; // Reference to the Crisis ID
}

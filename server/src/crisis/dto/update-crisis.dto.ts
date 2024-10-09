import { IsArray, IsEnum, IsNotEmpty, IsObject, IsOptional, IsString } from 'class-validator';

export class UpdateCrisisDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsObject()
  location?: {
    type: string;
    coordinates: number[];
  };

  @IsOptional()
  @IsEnum(['Low', 'Medium', 'High', 'Critical'])
  severity?: string;

  @IsOptional()
  @IsString()
  reportedBy?: string;

  @IsOptional()
  @IsEnum(['Pending', 'Ongoing', 'Resolved'])
  status?: string;

  @IsOptional()
  @IsArray()
  images?: string[];

  @IsOptional()
  @IsEnum(['Natural Disaster', 'Health Emergency', 'Conflict', 'Accident', 'Other'])
  category?: string;
}

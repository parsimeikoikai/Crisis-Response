import { IsArray, IsEnum, IsNotEmpty, IsObject, IsString } from 'class-validator';

export class CreateCrisisDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsObject()
  location: {
    type: string; // 'Point'
    coordinates: number[]; // [longitude, latitude]
  };

  @IsEnum(['Low', 'Medium', 'High', 'Critical'])
  severity: string;

  @IsNotEmpty()
  @IsString()
  reportedBy: string;

  @IsEnum(['Pending', 'Ongoing', 'Resolved'])
  status?: string; // Optional, defaults to 'Pending'

  @IsArray()
  images?: string[]; // Optional

  @IsEnum(['Natural Disaster', 'Health Emergency', 'Conflict', 'Accident', 'Other'])
  category: string;
}

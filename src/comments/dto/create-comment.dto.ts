import {
  IsOptional,
  IsEmpty,
  IsNotEmpty,
  IsString,
  IsUUID,
  Min,
  Max,
} from 'class-validator';

/**
 * class: CreateCommentDto
 */
export class CreateCommentDto {
  @IsNotEmpty()
  @IsUUID()
  restaurantId: string;

  @IsEmpty()
  userId: string;

  @IsNotEmpty()
  @IsString()
  text: string;

  @IsOptional()
  @IsNotEmpty({ each: true })
  @IsString({ each: true })
  images: string;

  @IsNotEmpty()
  @Min(0)
  @Max(5)
  rating: number;
}

import { IsOptional, IsNotEmpty, IsString, Length } from 'class-validator';

/**
 * class CreateUserDto
 */
export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  @Length(6)
  password: string;

  @IsNotEmpty()
  @IsString()
  @Length(3)
  nickname: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  picture: string;
}

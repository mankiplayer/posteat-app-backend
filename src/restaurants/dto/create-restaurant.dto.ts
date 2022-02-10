import {
  IsOptional,
  IsNotEmpty,
  IsString,
  IsPositive,
  IsPhoneNumber,
} from 'class-validator';

/**
 * class: CreateRestaurantDto
 */
export class CreateRestaurantDto {
  /** 네이버 플레이스 ID */
  @IsOptional()
  @IsPositive()
  nvPlaceId: number;

  /** 상호 */
  @IsNotEmpty()
  @IsString()
  name: string;

  /** 카테고리 */
  @IsNotEmpty()
  @IsString()
  category: string;

  /** 한줄 소개글 */
  @IsOptional()
  @IsString()
  summary: string;

  /** 대표 이미지 */
  @IsOptional()
  @IsString()
  image: string;

  /** 소개글 */
  @IsOptional()
  @IsString()
  description: string;

  /** 추가 이미지 */
  @IsOptional()
  @IsNotEmpty({ each: true })
  @IsString({ each: true })
  extraImages: string[];

  /** 전화번호 */
  @IsOptional()
  @IsPhoneNumber('KR')
  phone: string;

  /** 지번주소 */
  @IsOptional()
  @IsString()
  address: string;

  /** 오시는 길 */
  @IsOptional()
  @IsString()
  way: string;

  /** 검색 키워드 */
  @IsOptional()
  @IsNotEmpty({ each: true })
  @IsString({ each: true })
  keywords: string[];
}

import { Attribute, Entity } from '@typedorm/common';
import { Channel, Coordinate, Facility, Menu } from '../restaurants.interface';

@Entity({
  name: 'restaurant',
  primaryKey: {
    partitionKey: 'restaurant#{{id}}',
  },
})
export class Restaurant {
  /** ID */
  @Attribute()
  id: string;

  /** 네이버 플레이스 ID */
  @Attribute({ unique: true })
  nid: number;

  /** 상호 */
  @Attribute()
  name: string;

  /** 카테고리 */
  @Attribute()
  category: string;

  /** 한줄 소개글 */
  @Attribute()
  summary: string;

  /** 대표 이미지 */
  @Attribute()
  image: string;

  /** 네이버 리뷰 수 */
  @Attribute()
  reviewCount: number;

  /** 네이버 평점 */
  @Attribute()
  avgRating: number;

  /** 미쉐린 가이드 */
  @Attribute()
  michelinGuide: {
    year: number;
    star: number; // 0~3, 0은 '빕 구르망'
    url?: string;
  } | null;

  /** 소개글 */
  @Attribute()
  description: string;

  /** 추가 이미지 */
  @Attribute()
  extraImages: string[];

  /** 전화번호 */
  @Attribute()
  phone: string;

  /** 지번주소 */
  @Attribute()
  address: string;

  /** 좌표(위도, 경도) */
  @Attribute()
  location: Coordinate;

  /** 오시는 길 */
  @Attribute()
  way: string;

  /** 검색 키워드 */
  @Attribute()
  keywords: string[];

  /** 메뉴 */
  @Attribute()
  menus: Menu[];

  /** 메뉴판 이미지 */
  @Attribute()
  menuImages: string[];

  // /** 영업시간 */
  // @Attribute()
  // bizHours: BizHour[];

  /** 편의시설 */
  @Attribute()
  facilities: Facility[];

  /** 인스타그램, 페이스북 등 */
  @Attribute()
  channels: Channel[];

  /** 방송 출연 정보 */
  @Attribute()
  inMedia: {
    program: string;
    menu?: string;
  } | null;
}

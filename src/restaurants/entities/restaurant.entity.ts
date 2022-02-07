import { Coordinate, Menu, Facility, Channel } from '../restaurants.interface';

export class Restaurant {
  /** 소개글 */
  description: string;
  /** 추가 이미지 */
  extraImages: string[];
  /** 전화번호 */
  phone: string;
  /** 지번주소 */
  address: string;
  /** 좌표(위도, 경도) */
  location: Coordinate;
  /** 오시는 길 */
  way: string;
  /** 검색 키워드 */
  keywords: string[];
  /** 메뉴 */
  menus: Menu[];
  /** 메뉴판 이미지 */
  menuImages: string[];
  // /** 영업시간 */
  // bizHours: BizHour[];
  /** 편의시설 */
  facilities: Facility[];
  /** 인스타그램, 페이스북 등 */
  channels: Channel[];
  /** 방송 출연 정보 */
  inMedia: {
    program: string;
    menu?: string;
  } | null;
}

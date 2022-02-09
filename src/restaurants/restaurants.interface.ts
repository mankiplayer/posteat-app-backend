export interface Coordinate {
  /** 위도(latitude) */
  lat: number;
  /** 경도(longitude) */
  lng: number;
}

export interface Menu {
  name: string;
  price: number;
}

export const FacilityMap = {
  예약: '예약',
  주차: '주차',
  포장: '포장',
  단체석: '단체석',
  와이파이: '무선 인터넷',
};
export type Facility = keyof typeof FacilityMap;

export interface Channel {
  type: 'homepage' | 'facebook' | 'instagram' | 'blog' | 'etc';
  url: string;
}

export interface MichelinGuide {
  year: number;
  star: number; // 0~3, 0은 '빕 구르망'
  url?: string;
}

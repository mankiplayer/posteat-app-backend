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

export class ListRestaurantsDto {
  /** 페이지 번호 (1-indexed) */
  page: number;
  /** 페이지 내 항목 수 */
  size: number;
  /** 검색어 */
  query?: string;
  /** 카테고리 필터 */
  category?: string;
}

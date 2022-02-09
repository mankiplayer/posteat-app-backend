# posteat-app-backend
Shinhan AI internal project - providing information about restaurants in Yeouido



/auth
 - login: JWT

/users
 - Create: 회원가입
 - Read: 정보 보기 (내 정보 포함)
 - Update: 개인정보 변경
 - Delete: 탈퇴

/restaurants
 - Create: [admin/user]
   - 네이버 shop-id 필수
   - user가 생성한 경우 등록대기 상태로
   - 이미 존재하는 경우 에러
 - Read
   - 상점 정보
 - Update: [admin/user]
   - user의 경우 수정 제안
   - admin의 경우 즉시 반영
 - Delete
   - user의 경우 폐업 신고
   - admin의 경우 즉시 삭제
 - List & Search
 - 네이버에서 검색하기 -> 이미 등록된 것은 표시하거나 결과에서 삭제

/comments (user + comment)
 - List
   - type=restaurant
   - id={restaurant-id}
   - page
   - size

/scraps

평점 avgRating
리뷰수 reviewCount
조회수 viewCount
저장수 scrapCount

## API DOC

- endpoint: /v1/graphql
- 실제 input, output은 graphql playground에서 확인 가능하기 때문에 해당 페이지에서는 전체 Query, Mutation을 설명과 함께 모아보기 위한 용도로 작성

- resolver: kwordle

| type  | name             | 설명           |
| ----- | ---------------- | -------------- |
| query | submitAnswer     | 쿼들 답안 제출 |
| query | getCorrectAnswer | 쿼들 정답 확인 |

- 답안 조건

  1. 순수 한글 자모음으로 구성
  2. 자모음 분리 후 5자 이내

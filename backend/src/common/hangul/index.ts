import { divideHangul } from './divide';
import { isHangul } from './validate';

// 참고 블로그: https://gurtn.tistory.com/207

const HANGUL = {
  isHangul: isHangul,
  divideHangul: divideHangul,
};

export default HANGUL;

import { HANGUL_END_CHARCODE, HANGUL_START_CHARCODE } from './common';

/**
 * type
 */
type HANGUL_FUNCTTION = (param: string) => boolean;

/**
 * @description 입력한 "단어"가 한글인지 확인
 * @param word
 * @returns
 */
const isHangul: HANGUL_FUNCTTION = (word: string) => {
  let isHangul = true;
  for (const per of word) {
    const flag = _perIsHangul(per);
    if (flag === false) {
      isHangul = false;
      break;
    }
  }
  return isHangul;
};

/**
 * @description 입력한 "글자"가 한글인지 확인
 * @param char
 * @returns
 */
const _perIsHangul: HANGUL_FUNCTTION = (char: string) => {
  const charCode = char.charCodeAt(0);
  return HANGUL_START_CHARCODE <= charCode && charCode <= HANGUL_END_CHARCODE;
};

export { isHangul };

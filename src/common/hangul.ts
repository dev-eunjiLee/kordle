const HANGUL_START_CHARCODE_TOKEN = '가'.charCodeAt(0);
const HANGUL_END_CHARCODE_TOKEN = '힣'.charCodeAt(0);

/**
 * @description 입력한 "단어"가 한글인지 확인
 * @param word
 * @returns
 */
const isHangul: (word: string) => boolean = (word: string) => {
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
const _perIsHangul: (char: string) => boolean = (char: string) => {
  const charCode = char.charCodeAt(0);
  return (
    HANGUL_START_CHARCODE_TOKEN <= charCode &&
    charCode <= HANGUL_END_CHARCODE_TOKEN
  );
};

const HANGUL = {
  isHangul,
};

export default HANGUL;

import { HANGUL_START_CHARCODE } from './common';

// 초성(19개)
const CHO_HANGUL = [
  'ㄱ',
  'ㄲ',
  'ㄴ',
  'ㄷ',
  'ㄸ',
  'ㄹ',
  'ㅁ',
  'ㅂ',
  'ㅃ',
  'ㅅ',
  'ㅆ',
  'ㅇ',
  'ㅈ',
  'ㅉ',
  'ㅊ',
  'ㅋ',
  'ㅌ',
  'ㅍ',
  'ㅎ',
];
// 중성(21개)
const JUNG_HANGUL = [
  'ㅏ',
  'ㅐ',
  'ㅑ',
  'ㅒ',
  'ㅓ',
  'ㅔ',
  'ㅕ',
  'ㅖ',
  'ㅗ',
  'ㅘ',
  'ㅙ',
  'ㅚ',
  'ㅛ',
  'ㅜ',
  'ㅝ',
  'ㅞ',
  'ㅟ',
  'ㅠ',
  'ㅡ',
  'ㅢ',
  'ㅣ',
];
// 종성(28개)
const JONG_HANGUL = [
  '',
  'ㄱ',
  'ㄲ',
  'ㄳ',
  'ㄴ',
  'ㄵ',
  'ㄶ',
  'ㄷ',
  'ㄹ',
  'ㄺ',
  'ㄻ',
  'ㄼ',
  'ㄽ',
  'ㄾ',
  'ㄿ',
  'ㅀ',
  'ㅁ',
  'ㅂ',
  'ㅄ',
  'ㅅ',
  'ㅆ',
  'ㅇ',
  'ㅈ',
  'ㅊ',
  'ㅋ',
  'ㅌ',
  'ㅍ',
  'ㅎ',
];

const DOUBLE_CHARACTER: { [key: string]: Array<string> } = {
  ㄲ: ['ㄱ', 'ㄱ'],
  ㄸ: ['ㄷ', 'ㄷ'],
  ㅃ: ['ㅂ', 'ㅂ'],
  ㅉ: ['ㅈ', 'ㅈ'],
  ㄳ: ['ㄱ', 'ㅅ'],
  ㄵ: ['ㄴ', 'ㅈ'],
  ㄶ: ['ㄴ', 'ㅎ'],
  ㄺ: ['ㄹ', 'ㄱ'],
  ㄻ: ['ㄹ', 'ㅁ'],
  ㄼ: ['ㄹ', 'ㅂ'],
  ㄽ: ['ㄹ', 'ㅅ'],
  ㄾ: ['ㄹ', 'ㅌ'],
  ㄿ: ['ㄹ', 'ㅍ'],
  ㅀ: ['ㄹ', 'ㅎ'],
  ㅄ: ['ㅂ', 'ㅅ'],
};

const CHO_PERIOD = Math.floor('까'.charCodeAt(0) - '가'.charCodeAt(0)); // 588 ( 28 * 21 )
const JUNG_PERIOD = Math.floor('개'.charCodeAt(0) - '가'.charCodeAt(0));

type HANGUL_DIVIDE_FUNCTION_TYPE = (param: string) => Array<string>;

const divideDoubleCharacter: HANGUL_DIVIDE_FUNCTION_TYPE = (word: string) => {
  return DOUBLE_CHARACTER[word] || word;
};

const divideHangul: HANGUL_DIVIDE_FUNCTION_TYPE = (word: string) => {
  const letterCode = word.charCodeAt(0);

  const charCode = letterCode - HANGUL_START_CHARCODE;

  const choIndex = Math.floor(charCode / CHO_PERIOD);
  const jungIndex = Math.floor((charCode % CHO_PERIOD) / JUNG_PERIOD);
  const jongIndex = charCode % JUNG_PERIOD;

  return [CHO_HANGUL[choIndex], JUNG_HANGUL[jungIndex], JONG_HANGUL[jongIndex]]
    .map((per) => {
      return divideDoubleCharacter(per);
    })
    .flat();
};

export { divideHangul };

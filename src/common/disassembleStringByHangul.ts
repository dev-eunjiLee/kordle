import * as hangul from 'hangul-js';

export function DisassembleStringByHangul(keyword: string) {
  let disassembledList: Array<string | number> = [];
  disassembledList = hangul.disassemble(keyword).map((char: string) => {
    if (isNaN(Number(char))) return char;
    else throw Error(`키워드를 다시 확인해주세요 (사유: 숫자 포함)`);
  });
  return disassembledList;
}

import HANGUL from 'src/common/hangul';

export class TodayKeyword {
  private keyword: string;
  private keywordList: Array<string>;

  getKeywordList(): Array<string> {
    return this.keywordList;
  }

  getKeyword(): string {
    return this.keyword;
  }
  setKeywordAndList(newKeyword: string) {
    this.keyword = newKeyword;
    this.keywordList = newKeyword
      .split('')
      .map((per) => {
        return HANGUL.divideHangul(per);
      })
      .flat();
  }
}

import { Field, InputType } from '@nestjs/graphql';
import { Transform, TransformFnParams } from 'class-transformer';
import { ArrayMaxSize, ArrayMinSize, IsArray, IsString } from 'class-validator';
import * as HANGUL from 'hangul-js';

function DisassembleStringByHangul({ value }: TransformFnParams) {
  let disassembledList: Array<string | number> = [];
  disassembledList = HANGUL.disassemble(value).map((char: string) => {
    if (isNaN(Number(char))) return char;
    else return Number(char);
  });
  console.log(disassembledList);
  return disassembledList;
}

@InputType()
export class SubmitAnswerInputDto {
  @Field(() => String, { description: '유저가 입력한 답안' })
  @Transform(DisassembleStringByHangul)
  @IsString({ each: true })
  @IsArray()
  @ArrayMinSize(0)
  @ArrayMaxSize(5)
  answer: string[];
}

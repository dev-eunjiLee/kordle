import { Field, InputType } from '@nestjs/graphql';
import { Transform, TransformFnParams } from 'class-transformer';
import { IsString } from 'class-validator';
import * as HANGUL from 'hangul-js';

function disassembleString({ value }: TransformFnParams) {
  const disassembledList = HANGUL.disassemble(value);
  console.log(disassembledList);
  return disassembledList;
}

@InputType()
export class SubmitAnswerInputDto {
  @Field(() => String, { description: '유저가 입력한 답안' })
  @IsString()
  @Transform(disassembleString)
  answer: string;
}

import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class SubmitAnswerInputDto {
  @Field(() => String, { description: '유저가 입력한 답안' })
  @IsString()
  answer: string;
}

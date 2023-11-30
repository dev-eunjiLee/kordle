import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class SubmitAnswerInputDto {
  @Field(() => String, { description: '유저가 입력한 답안' })
  @IsString()
  answer: string;
}

@ObjectType()
export class SubmitAnswerOutputDto {
  @Field(() => Boolean, { description: '정답 여부' })
  correctFlag: boolean;

  @Field(() => [String], { description: '글자 위치별 일치 여부' })
  correctList: string[];
}

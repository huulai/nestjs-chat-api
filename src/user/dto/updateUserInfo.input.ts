import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateUserInfoInput {
  @Field({ nullable: true })
  age: number | null;

  @Field({ nullable: true })
  aboutMe: string | null;

  @Field({ nullable: true })
  username: string | null;

  @Field({ nullable: true })
  occupation: string | null;

  @Field({ nullable: true })
  sex: string | null;

  @Field(() => [String], { nullable: true })
  interests: string[];

  @Field({ nullable: true })
  avatar: string | null;
}

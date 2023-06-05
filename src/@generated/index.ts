import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { Int } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    username = "username",
    email = "email",
    hashedPassword = "hashedPassword",
    hashedRefreshToken = "hashedRefreshToken",
    avatar = "avatar",
    sex = "sex",
    age = "age",
    occupation = "occupation",
    aboutMe = "aboutMe",
    interests = "interests",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum TransactionIsolationLevel {
    ReadUncommitted = "ReadUncommitted",
    ReadCommitted = "ReadCommitted",
    RepeatableRead = "RepeatableRead",
    Serializable = "Serializable"
}

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export enum QueryMode {
    'default' = "default",
    insensitive = "insensitive"
}

export enum FriendStatus {
    ACCEPTED = "ACCEPTED",
    PENDING = "PENDING"
}

export enum FriendScalarFieldEnum {
    id = "id",
    senderId = "senderId",
    receiverId = "receiverId",
    status = "status"
}

registerEnumType(FriendScalarFieldEnum, { name: 'FriendScalarFieldEnum', description: undefined })
registerEnumType(FriendStatus, { name: 'FriendStatus', description: undefined })
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })
registerEnumType(TransactionIsolationLevel, { name: 'TransactionIsolationLevel', description: undefined })
registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })

@ObjectType()
export class AggregateFriend {
    @Field(() => FriendCountAggregate, {nullable:true})
    _count?: InstanceType<typeof FriendCountAggregate>;
    @Field(() => FriendAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof FriendAvgAggregate>;
    @Field(() => FriendSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof FriendSumAggregate>;
    @Field(() => FriendMinAggregate, {nullable:true})
    _min?: InstanceType<typeof FriendMinAggregate>;
    @Field(() => FriendMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof FriendMaxAggregate>;
}

@ArgsType()
export class CreateManyFriendArgs {
    @Field(() => [FriendCreateManyInput], {nullable:false})
    @Type(() => FriendCreateManyInput)
    @ValidateNested()
    data!: Array<FriendCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneFriendArgs {
    @Field(() => FriendCreateInput, {nullable:false})
    @Type(() => FriendCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof FriendCreateInput>;
}

@ArgsType()
export class DeleteManyFriendArgs {
    @Field(() => FriendWhereInput, {nullable:true})
    @Type(() => FriendWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof FriendWhereInput>;
}

@ArgsType()
export class DeleteOneFriendArgs {
    @Field(() => FriendWhereUniqueInput, {nullable:false})
    @Type(() => FriendWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof FriendWhereUniqueInput>;
}

@ArgsType()
export class FindFirstFriendOrThrowArgs {
    @Field(() => FriendWhereInput, {nullable:true})
    @Type(() => FriendWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof FriendWhereInput>;
    @Field(() => [FriendOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FriendOrderByWithRelationInput>;
    @Field(() => FriendWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof FriendWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [FriendScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof FriendScalarFieldEnum>;
}

@ArgsType()
export class FindFirstFriendArgs {
    @Field(() => FriendWhereInput, {nullable:true})
    @Type(() => FriendWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof FriendWhereInput>;
    @Field(() => [FriendOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FriendOrderByWithRelationInput>;
    @Field(() => FriendWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof FriendWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [FriendScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof FriendScalarFieldEnum>;
}

@ArgsType()
export class FindManyFriendArgs {
    @Field(() => FriendWhereInput, {nullable:true})
    @Type(() => FriendWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof FriendWhereInput>;
    @Field(() => [FriendOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FriendOrderByWithRelationInput>;
    @Field(() => FriendWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof FriendWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [FriendScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof FriendScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueFriendOrThrowArgs {
    @Field(() => FriendWhereUniqueInput, {nullable:false})
    @Type(() => FriendWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof FriendWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueFriendArgs {
    @Field(() => FriendWhereUniqueInput, {nullable:false})
    @Type(() => FriendWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof FriendWhereUniqueInput>;
}

@ArgsType()
export class FriendAggregateArgs {
    @Field(() => FriendWhereInput, {nullable:true})
    @Type(() => FriendWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof FriendWhereInput>;
    @Field(() => [FriendOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FriendOrderByWithRelationInput>;
    @Field(() => FriendWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof FriendWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => FriendCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof FriendCountAggregateInput>;
    @Field(() => FriendAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof FriendAvgAggregateInput>;
    @Field(() => FriendSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof FriendSumAggregateInput>;
    @Field(() => FriendMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof FriendMinAggregateInput>;
    @Field(() => FriendMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof FriendMaxAggregateInput>;
}

@InputType()
export class FriendAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    senderId?: true;
    @Field(() => Boolean, {nullable:true})
    receiverId?: true;
}

@ObjectType()
export class FriendAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
    @Field(() => Float, {nullable:true})
    senderId?: number;
    @Field(() => Float, {nullable:true})
    receiverId?: number;
}

@InputType()
export class FriendAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    senderId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    receiverId?: keyof typeof SortOrder;
}

@InputType()
export class FriendCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    senderId?: true;
    @Field(() => Boolean, {nullable:true})
    receiverId?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class FriendCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    senderId!: number;
    @Field(() => Int, {nullable:false})
    receiverId!: number;
    @Field(() => Int, {nullable:false})
    status!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class FriendCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    senderId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    receiverId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
}

@InputType()
export class FriendCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:false})
    senderId!: number;
    @Field(() => Int, {nullable:false})
    receiverId!: number;
    @Field(() => FriendStatus, {nullable:true})
    status?: keyof typeof FriendStatus;
}

@InputType()
export class FriendCreateNestedOneWithoutReceiverInput {
    @Field(() => FriendCreateWithoutReceiverInput, {nullable:true})
    @Type(() => FriendCreateWithoutReceiverInput)
    create?: InstanceType<typeof FriendCreateWithoutReceiverInput>;
    @Field(() => FriendCreateOrConnectWithoutReceiverInput, {nullable:true})
    @Type(() => FriendCreateOrConnectWithoutReceiverInput)
    connectOrCreate?: InstanceType<typeof FriendCreateOrConnectWithoutReceiverInput>;
    @Field(() => FriendWhereUniqueInput, {nullable:true})
    @Type(() => FriendWhereUniqueInput)
    connect?: InstanceType<typeof FriendWhereUniqueInput>;
}

@InputType()
export class FriendCreateNestedOneWithoutSenderInput {
    @Field(() => FriendCreateWithoutSenderInput, {nullable:true})
    @Type(() => FriendCreateWithoutSenderInput)
    create?: InstanceType<typeof FriendCreateWithoutSenderInput>;
    @Field(() => FriendCreateOrConnectWithoutSenderInput, {nullable:true})
    @Type(() => FriendCreateOrConnectWithoutSenderInput)
    connectOrCreate?: InstanceType<typeof FriendCreateOrConnectWithoutSenderInput>;
    @Field(() => FriendWhereUniqueInput, {nullable:true})
    @Type(() => FriendWhereUniqueInput)
    connect?: InstanceType<typeof FriendWhereUniqueInput>;
}

@InputType()
export class FriendCreateOrConnectWithoutReceiverInput {
    @Field(() => FriendWhereUniqueInput, {nullable:false})
    @Type(() => FriendWhereUniqueInput)
    where!: InstanceType<typeof FriendWhereUniqueInput>;
    @Field(() => FriendCreateWithoutReceiverInput, {nullable:false})
    @Type(() => FriendCreateWithoutReceiverInput)
    create!: InstanceType<typeof FriendCreateWithoutReceiverInput>;
}

@InputType()
export class FriendCreateOrConnectWithoutSenderInput {
    @Field(() => FriendWhereUniqueInput, {nullable:false})
    @Type(() => FriendWhereUniqueInput)
    where!: InstanceType<typeof FriendWhereUniqueInput>;
    @Field(() => FriendCreateWithoutSenderInput, {nullable:false})
    @Type(() => FriendCreateWithoutSenderInput)
    create!: InstanceType<typeof FriendCreateWithoutSenderInput>;
}

@InputType()
export class FriendCreateWithoutReceiverInput {
    @Field(() => FriendStatus, {nullable:true})
    status?: keyof typeof FriendStatus;
    @Field(() => UserCreateNestedOneWithoutSenderInput, {nullable:false})
    sender!: InstanceType<typeof UserCreateNestedOneWithoutSenderInput>;
}

@InputType()
export class FriendCreateWithoutSenderInput {
    @Field(() => FriendStatus, {nullable:true})
    status?: keyof typeof FriendStatus;
    @Field(() => UserCreateNestedOneWithoutReceiverInput, {nullable:false})
    receiver!: InstanceType<typeof UserCreateNestedOneWithoutReceiverInput>;
}

@InputType()
export class FriendCreateInput {
    @Field(() => FriendStatus, {nullable:true})
    status?: keyof typeof FriendStatus;
    @Field(() => UserCreateNestedOneWithoutSenderInput, {nullable:false})
    sender!: InstanceType<typeof UserCreateNestedOneWithoutSenderInput>;
    @Field(() => UserCreateNestedOneWithoutReceiverInput, {nullable:false})
    receiver!: InstanceType<typeof UserCreateNestedOneWithoutReceiverInput>;
}

@ArgsType()
export class FriendGroupByArgs {
    @Field(() => FriendWhereInput, {nullable:true})
    @Type(() => FriendWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof FriendWhereInput>;
    @Field(() => [FriendOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<FriendOrderByWithAggregationInput>;
    @Field(() => [FriendScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof FriendScalarFieldEnum>;
    @Field(() => FriendScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof FriendScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => FriendCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof FriendCountAggregateInput>;
    @Field(() => FriendAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof FriendAvgAggregateInput>;
    @Field(() => FriendSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof FriendSumAggregateInput>;
    @Field(() => FriendMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof FriendMinAggregateInput>;
    @Field(() => FriendMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof FriendMaxAggregateInput>;
}

@ObjectType()
export class FriendGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    senderId!: number;
    @Field(() => Int, {nullable:false})
    receiverId!: number;
    @Field(() => FriendStatus, {nullable:false})
    status!: keyof typeof FriendStatus;
    @Field(() => FriendCountAggregate, {nullable:true})
    _count?: InstanceType<typeof FriendCountAggregate>;
    @Field(() => FriendAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof FriendAvgAggregate>;
    @Field(() => FriendSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof FriendSumAggregate>;
    @Field(() => FriendMinAggregate, {nullable:true})
    _min?: InstanceType<typeof FriendMinAggregate>;
    @Field(() => FriendMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof FriendMaxAggregate>;
}

@InputType()
export class FriendMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    senderId?: true;
    @Field(() => Boolean, {nullable:true})
    receiverId?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
}

@ObjectType()
export class FriendMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    senderId?: number;
    @Field(() => Int, {nullable:true})
    receiverId?: number;
    @Field(() => FriendStatus, {nullable:true})
    status?: keyof typeof FriendStatus;
}

@InputType()
export class FriendMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    senderId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    receiverId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
}

@InputType()
export class FriendMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    senderId?: true;
    @Field(() => Boolean, {nullable:true})
    receiverId?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
}

@ObjectType()
export class FriendMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    senderId?: number;
    @Field(() => Int, {nullable:true})
    receiverId?: number;
    @Field(() => FriendStatus, {nullable:true})
    status?: keyof typeof FriendStatus;
}

@InputType()
export class FriendMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    senderId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    receiverId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
}

@InputType()
export class FriendOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    senderId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    receiverId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => FriendCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof FriendCountOrderByAggregateInput>;
    @Field(() => FriendAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof FriendAvgOrderByAggregateInput>;
    @Field(() => FriendMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof FriendMaxOrderByAggregateInput>;
    @Field(() => FriendMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof FriendMinOrderByAggregateInput>;
    @Field(() => FriendSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof FriendSumOrderByAggregateInput>;
}

@InputType()
export class FriendOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    senderId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    receiverId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    sender?: InstanceType<typeof UserOrderByWithRelationInput>;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    receiver?: InstanceType<typeof UserOrderByWithRelationInput>;
}

@InputType()
export class FriendRelationFilter {
    @Field(() => FriendWhereInput, {nullable:true})
    is?: InstanceType<typeof FriendWhereInput>;
    @Field(() => FriendWhereInput, {nullable:true})
    isNot?: InstanceType<typeof FriendWhereInput>;
}

@InputType()
export class FriendScalarWhereWithAggregatesInput {
    @Field(() => [FriendScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<FriendScalarWhereWithAggregatesInput>;
    @Field(() => [FriendScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<FriendScalarWhereWithAggregatesInput>;
    @Field(() => [FriendScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<FriendScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    senderId?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    receiverId?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => EnumFriendStatusWithAggregatesFilter, {nullable:true})
    status?: InstanceType<typeof EnumFriendStatusWithAggregatesFilter>;
}

@InputType()
export class FriendSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    senderId?: true;
    @Field(() => Boolean, {nullable:true})
    receiverId?: true;
}

@ObjectType()
export class FriendSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    senderId?: number;
    @Field(() => Int, {nullable:true})
    receiverId?: number;
}

@InputType()
export class FriendSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    senderId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    receiverId?: keyof typeof SortOrder;
}

@InputType()
export class FriendUncheckedCreateNestedOneWithoutReceiverInput {
    @Field(() => FriendCreateWithoutReceiverInput, {nullable:true})
    @Type(() => FriendCreateWithoutReceiverInput)
    create?: InstanceType<typeof FriendCreateWithoutReceiverInput>;
    @Field(() => FriendCreateOrConnectWithoutReceiverInput, {nullable:true})
    @Type(() => FriendCreateOrConnectWithoutReceiverInput)
    connectOrCreate?: InstanceType<typeof FriendCreateOrConnectWithoutReceiverInput>;
    @Field(() => FriendWhereUniqueInput, {nullable:true})
    @Type(() => FriendWhereUniqueInput)
    connect?: InstanceType<typeof FriendWhereUniqueInput>;
}

@InputType()
export class FriendUncheckedCreateNestedOneWithoutSenderInput {
    @Field(() => FriendCreateWithoutSenderInput, {nullable:true})
    @Type(() => FriendCreateWithoutSenderInput)
    create?: InstanceType<typeof FriendCreateWithoutSenderInput>;
    @Field(() => FriendCreateOrConnectWithoutSenderInput, {nullable:true})
    @Type(() => FriendCreateOrConnectWithoutSenderInput)
    connectOrCreate?: InstanceType<typeof FriendCreateOrConnectWithoutSenderInput>;
    @Field(() => FriendWhereUniqueInput, {nullable:true})
    @Type(() => FriendWhereUniqueInput)
    connect?: InstanceType<typeof FriendWhereUniqueInput>;
}

@InputType()
export class FriendUncheckedCreateWithoutReceiverInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:false})
    senderId!: number;
    @Field(() => FriendStatus, {nullable:true})
    status?: keyof typeof FriendStatus;
}

@InputType()
export class FriendUncheckedCreateWithoutSenderInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:false})
    receiverId!: number;
    @Field(() => FriendStatus, {nullable:true})
    status?: keyof typeof FriendStatus;
}

@InputType()
export class FriendUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:false})
    senderId!: number;
    @Field(() => Int, {nullable:false})
    receiverId!: number;
    @Field(() => FriendStatus, {nullable:true})
    status?: keyof typeof FriendStatus;
}

@InputType()
export class FriendUncheckedUpdateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    senderId?: number;
    @Field(() => Int, {nullable:true})
    receiverId?: number;
    @Field(() => FriendStatus, {nullable:true})
    status?: keyof typeof FriendStatus;
}

@InputType()
export class FriendUncheckedUpdateOneWithoutReceiverNestedInput {
    @Field(() => FriendCreateWithoutReceiverInput, {nullable:true})
    @Type(() => FriendCreateWithoutReceiverInput)
    create?: InstanceType<typeof FriendCreateWithoutReceiverInput>;
    @Field(() => FriendCreateOrConnectWithoutReceiverInput, {nullable:true})
    @Type(() => FriendCreateOrConnectWithoutReceiverInput)
    connectOrCreate?: InstanceType<typeof FriendCreateOrConnectWithoutReceiverInput>;
    @Field(() => FriendUpsertWithoutReceiverInput, {nullable:true})
    @Type(() => FriendUpsertWithoutReceiverInput)
    upsert?: InstanceType<typeof FriendUpsertWithoutReceiverInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => FriendWhereUniqueInput, {nullable:true})
    @Type(() => FriendWhereUniqueInput)
    connect?: InstanceType<typeof FriendWhereUniqueInput>;
    @Field(() => FriendUpdateWithoutReceiverInput, {nullable:true})
    @Type(() => FriendUpdateWithoutReceiverInput)
    update?: InstanceType<typeof FriendUpdateWithoutReceiverInput>;
}

@InputType()
export class FriendUncheckedUpdateOneWithoutSenderNestedInput {
    @Field(() => FriendCreateWithoutSenderInput, {nullable:true})
    @Type(() => FriendCreateWithoutSenderInput)
    create?: InstanceType<typeof FriendCreateWithoutSenderInput>;
    @Field(() => FriendCreateOrConnectWithoutSenderInput, {nullable:true})
    @Type(() => FriendCreateOrConnectWithoutSenderInput)
    connectOrCreate?: InstanceType<typeof FriendCreateOrConnectWithoutSenderInput>;
    @Field(() => FriendUpsertWithoutSenderInput, {nullable:true})
    @Type(() => FriendUpsertWithoutSenderInput)
    upsert?: InstanceType<typeof FriendUpsertWithoutSenderInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => FriendWhereUniqueInput, {nullable:true})
    @Type(() => FriendWhereUniqueInput)
    connect?: InstanceType<typeof FriendWhereUniqueInput>;
    @Field(() => FriendUpdateWithoutSenderInput, {nullable:true})
    @Type(() => FriendUpdateWithoutSenderInput)
    update?: InstanceType<typeof FriendUpdateWithoutSenderInput>;
}

@InputType()
export class FriendUncheckedUpdateWithoutReceiverInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    senderId?: number;
    @Field(() => FriendStatus, {nullable:true})
    status?: keyof typeof FriendStatus;
}

@InputType()
export class FriendUncheckedUpdateWithoutSenderInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    receiverId?: number;
    @Field(() => FriendStatus, {nullable:true})
    status?: keyof typeof FriendStatus;
}

@InputType()
export class FriendUncheckedUpdateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    senderId?: number;
    @Field(() => Int, {nullable:true})
    receiverId?: number;
    @Field(() => FriendStatus, {nullable:true})
    status?: keyof typeof FriendStatus;
}

@InputType()
export class FriendUpdateManyMutationInput {
    @Field(() => FriendStatus, {nullable:true})
    status?: keyof typeof FriendStatus;
}

@InputType()
export class FriendUpdateOneWithoutReceiverNestedInput {
    @Field(() => FriendCreateWithoutReceiverInput, {nullable:true})
    @Type(() => FriendCreateWithoutReceiverInput)
    create?: InstanceType<typeof FriendCreateWithoutReceiverInput>;
    @Field(() => FriendCreateOrConnectWithoutReceiverInput, {nullable:true})
    @Type(() => FriendCreateOrConnectWithoutReceiverInput)
    connectOrCreate?: InstanceType<typeof FriendCreateOrConnectWithoutReceiverInput>;
    @Field(() => FriendUpsertWithoutReceiverInput, {nullable:true})
    @Type(() => FriendUpsertWithoutReceiverInput)
    upsert?: InstanceType<typeof FriendUpsertWithoutReceiverInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => FriendWhereUniqueInput, {nullable:true})
    @Type(() => FriendWhereUniqueInput)
    connect?: InstanceType<typeof FriendWhereUniqueInput>;
    @Field(() => FriendUpdateWithoutReceiverInput, {nullable:true})
    @Type(() => FriendUpdateWithoutReceiverInput)
    update?: InstanceType<typeof FriendUpdateWithoutReceiverInput>;
}

@InputType()
export class FriendUpdateOneWithoutSenderNestedInput {
    @Field(() => FriendCreateWithoutSenderInput, {nullable:true})
    @Type(() => FriendCreateWithoutSenderInput)
    create?: InstanceType<typeof FriendCreateWithoutSenderInput>;
    @Field(() => FriendCreateOrConnectWithoutSenderInput, {nullable:true})
    @Type(() => FriendCreateOrConnectWithoutSenderInput)
    connectOrCreate?: InstanceType<typeof FriendCreateOrConnectWithoutSenderInput>;
    @Field(() => FriendUpsertWithoutSenderInput, {nullable:true})
    @Type(() => FriendUpsertWithoutSenderInput)
    upsert?: InstanceType<typeof FriendUpsertWithoutSenderInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => FriendWhereUniqueInput, {nullable:true})
    @Type(() => FriendWhereUniqueInput)
    connect?: InstanceType<typeof FriendWhereUniqueInput>;
    @Field(() => FriendUpdateWithoutSenderInput, {nullable:true})
    @Type(() => FriendUpdateWithoutSenderInput)
    update?: InstanceType<typeof FriendUpdateWithoutSenderInput>;
}

@InputType()
export class FriendUpdateWithoutReceiverInput {
    @Field(() => FriendStatus, {nullable:true})
    status?: keyof typeof FriendStatus;
    @Field(() => UserUpdateOneRequiredWithoutSenderNestedInput, {nullable:true})
    sender?: InstanceType<typeof UserUpdateOneRequiredWithoutSenderNestedInput>;
}

@InputType()
export class FriendUpdateWithoutSenderInput {
    @Field(() => FriendStatus, {nullable:true})
    status?: keyof typeof FriendStatus;
    @Field(() => UserUpdateOneRequiredWithoutReceiverNestedInput, {nullable:true})
    receiver?: InstanceType<typeof UserUpdateOneRequiredWithoutReceiverNestedInput>;
}

@InputType()
export class FriendUpdateInput {
    @Field(() => FriendStatus, {nullable:true})
    status?: keyof typeof FriendStatus;
    @Field(() => UserUpdateOneRequiredWithoutSenderNestedInput, {nullable:true})
    sender?: InstanceType<typeof UserUpdateOneRequiredWithoutSenderNestedInput>;
    @Field(() => UserUpdateOneRequiredWithoutReceiverNestedInput, {nullable:true})
    receiver?: InstanceType<typeof UserUpdateOneRequiredWithoutReceiverNestedInput>;
}

@InputType()
export class FriendUpsertWithoutReceiverInput {
    @Field(() => FriendUpdateWithoutReceiverInput, {nullable:false})
    @Type(() => FriendUpdateWithoutReceiverInput)
    update!: InstanceType<typeof FriendUpdateWithoutReceiverInput>;
    @Field(() => FriendCreateWithoutReceiverInput, {nullable:false})
    @Type(() => FriendCreateWithoutReceiverInput)
    create!: InstanceType<typeof FriendCreateWithoutReceiverInput>;
}

@InputType()
export class FriendUpsertWithoutSenderInput {
    @Field(() => FriendUpdateWithoutSenderInput, {nullable:false})
    @Type(() => FriendUpdateWithoutSenderInput)
    update!: InstanceType<typeof FriendUpdateWithoutSenderInput>;
    @Field(() => FriendCreateWithoutSenderInput, {nullable:false})
    @Type(() => FriendCreateWithoutSenderInput)
    create!: InstanceType<typeof FriendCreateWithoutSenderInput>;
}

@InputType()
export class FriendWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    senderId?: number;
    @Field(() => Int, {nullable:true})
    receiverId?: number;
}

@InputType()
export class FriendWhereInput {
    @Field(() => [FriendWhereInput], {nullable:true})
    AND?: Array<FriendWhereInput>;
    @Field(() => [FriendWhereInput], {nullable:true})
    OR?: Array<FriendWhereInput>;
    @Field(() => [FriendWhereInput], {nullable:true})
    NOT?: Array<FriendWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    senderId?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    receiverId?: InstanceType<typeof IntFilter>;
    @Field(() => EnumFriendStatusFilter, {nullable:true})
    status?: InstanceType<typeof EnumFriendStatusFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    sender?: InstanceType<typeof UserRelationFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    receiver?: InstanceType<typeof UserRelationFilter>;
}

@ObjectType()
export class Friend {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    senderId!: number;
    @Field(() => Int, {nullable:false})
    receiverId!: number;
    @Field(() => FriendStatus, {nullable:false,defaultValue:'PENDING'})
    status!: keyof typeof FriendStatus;
    @Field(() => User, {nullable:false})
    sender?: InstanceType<typeof User>;
    @Field(() => User, {nullable:false})
    receiver?: InstanceType<typeof User>;
}

@ArgsType()
export class UpdateManyFriendArgs {
    @Field(() => FriendUpdateManyMutationInput, {nullable:false})
    @Type(() => FriendUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof FriendUpdateManyMutationInput>;
    @Field(() => FriendWhereInput, {nullable:true})
    @Type(() => FriendWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof FriendWhereInput>;
}

@ArgsType()
export class UpdateOneFriendArgs {
    @Field(() => FriendUpdateInput, {nullable:false})
    @Type(() => FriendUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof FriendUpdateInput>;
    @Field(() => FriendWhereUniqueInput, {nullable:false})
    @Type(() => FriendWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof FriendWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneFriendArgs {
    @Field(() => FriendWhereUniqueInput, {nullable:false})
    @Type(() => FriendWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof FriendWhereUniqueInput>;
    @Field(() => FriendCreateInput, {nullable:false})
    @Type(() => FriendCreateInput)
    create!: InstanceType<typeof FriendCreateInput>;
    @Field(() => FriendUpdateInput, {nullable:false})
    @Type(() => FriendUpdateInput)
    update!: InstanceType<typeof FriendUpdateInput>;
}

@ObjectType()
export class AffectedRows {
    @Field(() => Int, {nullable:false})
    count!: number;
}

@InputType()
export class DateTimeFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class DateTimeWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class EnumFriendStatusFilter {
    @Field(() => FriendStatus, {nullable:true})
    equals?: keyof typeof FriendStatus;
    @Field(() => [FriendStatus], {nullable:true})
    in?: Array<keyof typeof FriendStatus>;
    @Field(() => [FriendStatus], {nullable:true})
    notIn?: Array<keyof typeof FriendStatus>;
    @Field(() => NestedEnumFriendStatusFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumFriendStatusFilter>;
}

@InputType()
export class EnumFriendStatusWithAggregatesFilter {
    @Field(() => FriendStatus, {nullable:true})
    equals?: keyof typeof FriendStatus;
    @Field(() => [FriendStatus], {nullable:true})
    in?: Array<keyof typeof FriendStatus>;
    @Field(() => [FriendStatus], {nullable:true})
    notIn?: Array<keyof typeof FriendStatus>;
    @Field(() => NestedEnumFriendStatusWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumFriendStatusWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumFriendStatusFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumFriendStatusFilter>;
    @Field(() => NestedEnumFriendStatusFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumFriendStatusFilter>;
}

@InputType()
export class IntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class IntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedDateTimeFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class NestedDateTimeWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class NestedEnumFriendStatusFilter {
    @Field(() => FriendStatus, {nullable:true})
    equals?: keyof typeof FriendStatus;
    @Field(() => [FriendStatus], {nullable:true})
    in?: Array<keyof typeof FriendStatus>;
    @Field(() => [FriendStatus], {nullable:true})
    notIn?: Array<keyof typeof FriendStatus>;
    @Field(() => NestedEnumFriendStatusFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumFriendStatusFilter>;
}

@InputType()
export class NestedEnumFriendStatusWithAggregatesFilter {
    @Field(() => FriendStatus, {nullable:true})
    equals?: keyof typeof FriendStatus;
    @Field(() => [FriendStatus], {nullable:true})
    in?: Array<keyof typeof FriendStatus>;
    @Field(() => [FriendStatus], {nullable:true})
    notIn?: Array<keyof typeof FriendStatus>;
    @Field(() => NestedEnumFriendStatusWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumFriendStatusWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumFriendStatusFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumFriendStatusFilter>;
    @Field(() => NestedEnumFriendStatusFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumFriendStatusFilter>;
}

@InputType()
export class NestedFloatFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => NestedFloatFilter, {nullable:true})
    not?: InstanceType<typeof NestedFloatFilter>;
}

@InputType()
export class NestedIntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedIntNullableFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class NestedIntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedStringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NestedStringNullableFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class NestedStringNullableWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class NestedStringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class StringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class StringNullableFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class StringNullableListFilter {
    @Field(() => [String], {nullable:true})
    equals?: Array<string>;
    @Field(() => String, {nullable:true})
    has?: string;
    @Field(() => [String], {nullable:true})
    hasEvery?: Array<string>;
    @Field(() => [String], {nullable:true})
    hasSome?: Array<string>;
    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;
}

@InputType()
export class StringNullableWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class StringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringFilter>;
}

@ObjectType()
export class AggregateUser {
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof UserAvgAggregate>;
    @Field(() => UserSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof UserSumAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@ArgsType()
export class CreateManyUserArgs {
    @Field(() => [UserCreateManyInput], {nullable:false})
    @Type(() => UserCreateManyInput)
    @ValidateNested()
    data!: Array<UserCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneUserArgs {
    @Field(() => UserCreateInput, {nullable:false})
    @Type(() => UserCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof UserCreateInput>;
}

@ArgsType()
export class DeleteManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class DeleteOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class FindFirstUserOrThrowArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindFirstUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueUserOrThrowArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyUserArgs {
    @Field(() => UserUpdateManyMutationInput, {nullable:false})
    @Type(() => UserUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof UserUpdateManyMutationInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class UpdateOneUserArgs {
    @Field(() => UserUpdateInput, {nullable:false})
    @Type(() => UserUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof UserUpdateInput>;
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateInput, {nullable:false})
    @Type(() => UserCreateInput)
    create!: InstanceType<typeof UserCreateInput>;
    @Field(() => UserUpdateInput, {nullable:false})
    @Type(() => UserUpdateInput)
    update!: InstanceType<typeof UserUpdateInput>;
}

@ArgsType()
export class UserAggregateArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof UserAvgAggregateInput>;
    @Field(() => UserSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof UserSumAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@InputType()
export class UserAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    age?: true;
}

@ObjectType()
export class UserAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
    @Field(() => Float, {nullable:true})
    age?: number;
}

@InputType()
export class UserAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    age?: keyof typeof SortOrder;
}

@InputType()
export class UserCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    username?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    hashedPassword?: true;
    @Field(() => Boolean, {nullable:true})
    hashedRefreshToken?: true;
    @Field(() => Boolean, {nullable:true})
    avatar?: true;
    @Field(() => Boolean, {nullable:true})
    sex?: true;
    @Field(() => Boolean, {nullable:true})
    age?: true;
    @Field(() => Boolean, {nullable:true})
    occupation?: true;
    @Field(() => Boolean, {nullable:true})
    aboutMe?: true;
    @Field(() => Boolean, {nullable:true})
    interests?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class UserCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    username!: number;
    @Field(() => Int, {nullable:false})
    email!: number;
    @Field(() => Int, {nullable:false})
    hashedPassword!: number;
    @Field(() => Int, {nullable:false})
    hashedRefreshToken!: number;
    @Field(() => Int, {nullable:false})
    avatar!: number;
    @Field(() => Int, {nullable:false})
    sex!: number;
    @Field(() => Int, {nullable:false})
    age!: number;
    @Field(() => Int, {nullable:false})
    occupation!: number;
    @Field(() => Int, {nullable:false})
    aboutMe!: number;
    @Field(() => Int, {nullable:false})
    interests!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class UserCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    hashedPassword?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    hashedRefreshToken?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    avatar?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    sex?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    age?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    occupation?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    aboutMe?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    interests?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class UserCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    hashedPassword!: string;
    @Field(() => String, {nullable:true})
    hashedRefreshToken?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => String, {nullable:true})
    sex?: string;
    @Field(() => Int, {nullable:true})
    age?: number;
    @Field(() => String, {nullable:true})
    occupation?: string;
    @Field(() => String, {nullable:true})
    aboutMe?: string;
    @Field(() => [String], {nullable:true})
    interests?: Array<string>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserCreateNestedOneWithoutReceiverInput {
    @Field(() => UserCreateWithoutReceiverInput, {nullable:true})
    @Type(() => UserCreateWithoutReceiverInput)
    create?: InstanceType<typeof UserCreateWithoutReceiverInput>;
    @Field(() => UserCreateOrConnectWithoutReceiverInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutReceiverInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutReceiverInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: InstanceType<typeof UserWhereUniqueInput>;
}

@InputType()
export class UserCreateNestedOneWithoutSenderInput {
    @Field(() => UserCreateWithoutSenderInput, {nullable:true})
    @Type(() => UserCreateWithoutSenderInput)
    create?: InstanceType<typeof UserCreateWithoutSenderInput>;
    @Field(() => UserCreateOrConnectWithoutSenderInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutSenderInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutSenderInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: InstanceType<typeof UserWhereUniqueInput>;
}

@InputType()
export class UserCreateOrConnectWithoutReceiverInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateWithoutReceiverInput, {nullable:false})
    @Type(() => UserCreateWithoutReceiverInput)
    create!: InstanceType<typeof UserCreateWithoutReceiverInput>;
}

@InputType()
export class UserCreateOrConnectWithoutSenderInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateWithoutSenderInput, {nullable:false})
    @Type(() => UserCreateWithoutSenderInput)
    create!: InstanceType<typeof UserCreateWithoutSenderInput>;
}

@InputType()
export class UserCreateWithoutReceiverInput {
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    hashedPassword!: string;
    @Field(() => String, {nullable:true})
    hashedRefreshToken?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => String, {nullable:true})
    sex?: string;
    @Field(() => Int, {nullable:true})
    age?: number;
    @Field(() => String, {nullable:true})
    occupation?: string;
    @Field(() => String, {nullable:true})
    aboutMe?: string;
    @Field(() => [String], {nullable:true})
    interests?: Array<string>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => FriendCreateNestedOneWithoutSenderInput, {nullable:true})
    sender?: InstanceType<typeof FriendCreateNestedOneWithoutSenderInput>;
}

@InputType()
export class UserCreateWithoutSenderInput {
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    hashedPassword!: string;
    @Field(() => String, {nullable:true})
    hashedRefreshToken?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => String, {nullable:true})
    sex?: string;
    @Field(() => Int, {nullable:true})
    age?: number;
    @Field(() => String, {nullable:true})
    occupation?: string;
    @Field(() => String, {nullable:true})
    aboutMe?: string;
    @Field(() => [String], {nullable:true})
    interests?: Array<string>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => FriendCreateNestedOneWithoutReceiverInput, {nullable:true})
    receiver?: InstanceType<typeof FriendCreateNestedOneWithoutReceiverInput>;
}

@InputType()
export class UserCreateInput {
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    hashedPassword!: string;
    @Field(() => String, {nullable:true})
    hashedRefreshToken?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => String, {nullable:true})
    sex?: string;
    @Field(() => Int, {nullable:true})
    age?: number;
    @Field(() => String, {nullable:true})
    occupation?: string;
    @Field(() => String, {nullable:true})
    aboutMe?: string;
    @Field(() => [String], {nullable:true})
    interests?: Array<string>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => FriendCreateNestedOneWithoutSenderInput, {nullable:true})
    sender?: InstanceType<typeof FriendCreateNestedOneWithoutSenderInput>;
    @Field(() => FriendCreateNestedOneWithoutReceiverInput, {nullable:true})
    receiver?: InstanceType<typeof FriendCreateNestedOneWithoutReceiverInput>;
}

@InputType()
export class UserCreateinterestsInput {
    @Field(() => [String], {nullable:false})
    set!: Array<string>;
}

@ArgsType()
export class UserGroupByArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithAggregationInput>;
    @Field(() => [UserScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserScalarFieldEnum>;
    @Field(() => UserScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof UserScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof UserAvgAggregateInput>;
    @Field(() => UserSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof UserSumAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@ObjectType()
export class UserGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    hashedPassword!: string;
    @Field(() => String, {nullable:true})
    hashedRefreshToken?: string;
    @Field(() => String, {nullable:false})
    avatar!: string;
    @Field(() => String, {nullable:false})
    sex!: string;
    @Field(() => Int, {nullable:false})
    age!: number;
    @Field(() => String, {nullable:false})
    occupation!: string;
    @Field(() => String, {nullable:false})
    aboutMe!: string;
    @Field(() => [String], {nullable:true})
    interests?: Array<string>;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof UserAvgAggregate>;
    @Field(() => UserSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof UserSumAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@InputType()
export class UserMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    username?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    hashedPassword?: true;
    @Field(() => Boolean, {nullable:true})
    hashedRefreshToken?: true;
    @Field(() => Boolean, {nullable:true})
    avatar?: true;
    @Field(() => Boolean, {nullable:true})
    sex?: true;
    @Field(() => Boolean, {nullable:true})
    age?: true;
    @Field(() => Boolean, {nullable:true})
    occupation?: true;
    @Field(() => Boolean, {nullable:true})
    aboutMe?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class UserMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    username?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    hashedPassword?: string;
    @Field(() => String, {nullable:true})
    hashedRefreshToken?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => String, {nullable:true})
    sex?: string;
    @Field(() => Int, {nullable:true})
    age?: number;
    @Field(() => String, {nullable:true})
    occupation?: string;
    @Field(() => String, {nullable:true})
    aboutMe?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    hashedPassword?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    hashedRefreshToken?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    avatar?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    sex?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    age?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    occupation?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    aboutMe?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class UserMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    username?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    hashedPassword?: true;
    @Field(() => Boolean, {nullable:true})
    hashedRefreshToken?: true;
    @Field(() => Boolean, {nullable:true})
    avatar?: true;
    @Field(() => Boolean, {nullable:true})
    sex?: true;
    @Field(() => Boolean, {nullable:true})
    age?: true;
    @Field(() => Boolean, {nullable:true})
    occupation?: true;
    @Field(() => Boolean, {nullable:true})
    aboutMe?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class UserMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    username?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    hashedPassword?: string;
    @Field(() => String, {nullable:true})
    hashedRefreshToken?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => String, {nullable:true})
    sex?: string;
    @Field(() => Int, {nullable:true})
    age?: number;
    @Field(() => String, {nullable:true})
    occupation?: string;
    @Field(() => String, {nullable:true})
    aboutMe?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    hashedPassword?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    hashedRefreshToken?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    avatar?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    sex?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    age?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    occupation?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    aboutMe?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class UserOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    hashedPassword?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    hashedRefreshToken?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    avatar?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    sex?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    age?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    occupation?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    aboutMe?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    interests?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => UserCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountOrderByAggregateInput>;
    @Field(() => UserAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof UserAvgOrderByAggregateInput>;
    @Field(() => UserMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxOrderByAggregateInput>;
    @Field(() => UserMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinOrderByAggregateInput>;
    @Field(() => UserSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof UserSumOrderByAggregateInput>;
}

@InputType()
export class UserOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    hashedPassword?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    hashedRefreshToken?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    avatar?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    sex?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    age?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    occupation?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    aboutMe?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    interests?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => FriendOrderByWithRelationInput, {nullable:true})
    sender?: InstanceType<typeof FriendOrderByWithRelationInput>;
    @Field(() => FriendOrderByWithRelationInput, {nullable:true})
    receiver?: InstanceType<typeof FriendOrderByWithRelationInput>;
}

@InputType()
export class UserRelationFilter {
    @Field(() => UserWhereInput, {nullable:true})
    is?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereInput, {nullable:true})
    isNot?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserScalarWhereWithAggregatesInput {
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    username?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    hashedPassword?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    hashedRefreshToken?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    avatar?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    sex?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    age?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    occupation?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    aboutMe?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableListFilter, {nullable:true})
    interests?: InstanceType<typeof StringNullableListFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class UserSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    age?: true;
}

@ObjectType()
export class UserSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    age?: number;
}

@InputType()
export class UserSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    age?: keyof typeof SortOrder;
}

@InputType()
export class UserUncheckedCreateWithoutReceiverInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    hashedPassword!: string;
    @Field(() => String, {nullable:true})
    hashedRefreshToken?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => String, {nullable:true})
    sex?: string;
    @Field(() => Int, {nullable:true})
    age?: number;
    @Field(() => String, {nullable:true})
    occupation?: string;
    @Field(() => String, {nullable:true})
    aboutMe?: string;
    @Field(() => [String], {nullable:true})
    interests?: Array<string>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => FriendUncheckedCreateNestedOneWithoutSenderInput, {nullable:true})
    sender?: InstanceType<typeof FriendUncheckedCreateNestedOneWithoutSenderInput>;
}

@InputType()
export class UserUncheckedCreateWithoutSenderInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    hashedPassword!: string;
    @Field(() => String, {nullable:true})
    hashedRefreshToken?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => String, {nullable:true})
    sex?: string;
    @Field(() => Int, {nullable:true})
    age?: number;
    @Field(() => String, {nullable:true})
    occupation?: string;
    @Field(() => String, {nullable:true})
    aboutMe?: string;
    @Field(() => [String], {nullable:true})
    interests?: Array<string>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => FriendUncheckedCreateNestedOneWithoutReceiverInput, {nullable:true})
    receiver?: InstanceType<typeof FriendUncheckedCreateNestedOneWithoutReceiverInput>;
}

@InputType()
export class UserUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    hashedPassword!: string;
    @Field(() => String, {nullable:true})
    hashedRefreshToken?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => String, {nullable:true})
    sex?: string;
    @Field(() => Int, {nullable:true})
    age?: number;
    @Field(() => String, {nullable:true})
    occupation?: string;
    @Field(() => String, {nullable:true})
    aboutMe?: string;
    @Field(() => [String], {nullable:true})
    interests?: Array<string>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => FriendUncheckedCreateNestedOneWithoutSenderInput, {nullable:true})
    sender?: InstanceType<typeof FriendUncheckedCreateNestedOneWithoutSenderInput>;
    @Field(() => FriendUncheckedCreateNestedOneWithoutReceiverInput, {nullable:true})
    receiver?: InstanceType<typeof FriendUncheckedCreateNestedOneWithoutReceiverInput>;
}

@InputType()
export class UserUncheckedUpdateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    username?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    hashedPassword?: string;
    @Field(() => String, {nullable:true})
    hashedRefreshToken?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => String, {nullable:true})
    sex?: string;
    @Field(() => Int, {nullable:true})
    age?: number;
    @Field(() => String, {nullable:true})
    occupation?: string;
    @Field(() => String, {nullable:true})
    aboutMe?: string;
    @Field(() => [String], {nullable:true})
    interests?: Array<string>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserUncheckedUpdateWithoutReceiverInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    username?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    hashedPassword?: string;
    @Field(() => String, {nullable:true})
    hashedRefreshToken?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => String, {nullable:true})
    sex?: string;
    @Field(() => Int, {nullable:true})
    age?: number;
    @Field(() => String, {nullable:true})
    occupation?: string;
    @Field(() => String, {nullable:true})
    aboutMe?: string;
    @Field(() => [String], {nullable:true})
    interests?: Array<string>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => FriendUncheckedUpdateOneWithoutSenderNestedInput, {nullable:true})
    sender?: InstanceType<typeof FriendUncheckedUpdateOneWithoutSenderNestedInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutSenderInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    username?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    hashedPassword?: string;
    @Field(() => String, {nullable:true})
    hashedRefreshToken?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => String, {nullable:true})
    sex?: string;
    @Field(() => Int, {nullable:true})
    age?: number;
    @Field(() => String, {nullable:true})
    occupation?: string;
    @Field(() => String, {nullable:true})
    aboutMe?: string;
    @Field(() => [String], {nullable:true})
    interests?: Array<string>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => FriendUncheckedUpdateOneWithoutReceiverNestedInput, {nullable:true})
    receiver?: InstanceType<typeof FriendUncheckedUpdateOneWithoutReceiverNestedInput>;
}

@InputType()
export class UserUncheckedUpdateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    username?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    hashedPassword?: string;
    @Field(() => String, {nullable:true})
    hashedRefreshToken?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => String, {nullable:true})
    sex?: string;
    @Field(() => Int, {nullable:true})
    age?: number;
    @Field(() => String, {nullable:true})
    occupation?: string;
    @Field(() => String, {nullable:true})
    aboutMe?: string;
    @Field(() => [String], {nullable:true})
    interests?: Array<string>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => FriendUncheckedUpdateOneWithoutSenderNestedInput, {nullable:true})
    sender?: InstanceType<typeof FriendUncheckedUpdateOneWithoutSenderNestedInput>;
    @Field(() => FriendUncheckedUpdateOneWithoutReceiverNestedInput, {nullable:true})
    receiver?: InstanceType<typeof FriendUncheckedUpdateOneWithoutReceiverNestedInput>;
}

@InputType()
export class UserUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    username?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    hashedPassword?: string;
    @Field(() => String, {nullable:true})
    hashedRefreshToken?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => String, {nullable:true})
    sex?: string;
    @Field(() => Int, {nullable:true})
    age?: number;
    @Field(() => String, {nullable:true})
    occupation?: string;
    @Field(() => String, {nullable:true})
    aboutMe?: string;
    @Field(() => [String], {nullable:true})
    interests?: Array<string>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserUpdateOneRequiredWithoutReceiverNestedInput {
    @Field(() => UserCreateWithoutReceiverInput, {nullable:true})
    @Type(() => UserCreateWithoutReceiverInput)
    create?: InstanceType<typeof UserCreateWithoutReceiverInput>;
    @Field(() => UserCreateOrConnectWithoutReceiverInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutReceiverInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutReceiverInput>;
    @Field(() => UserUpsertWithoutReceiverInput, {nullable:true})
    @Type(() => UserUpsertWithoutReceiverInput)
    upsert?: InstanceType<typeof UserUpsertWithoutReceiverInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserUpdateWithoutReceiverInput, {nullable:true})
    @Type(() => UserUpdateWithoutReceiverInput)
    update?: InstanceType<typeof UserUpdateWithoutReceiverInput>;
}

@InputType()
export class UserUpdateOneRequiredWithoutSenderNestedInput {
    @Field(() => UserCreateWithoutSenderInput, {nullable:true})
    @Type(() => UserCreateWithoutSenderInput)
    create?: InstanceType<typeof UserCreateWithoutSenderInput>;
    @Field(() => UserCreateOrConnectWithoutSenderInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutSenderInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutSenderInput>;
    @Field(() => UserUpsertWithoutSenderInput, {nullable:true})
    @Type(() => UserUpsertWithoutSenderInput)
    upsert?: InstanceType<typeof UserUpsertWithoutSenderInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserUpdateWithoutSenderInput, {nullable:true})
    @Type(() => UserUpdateWithoutSenderInput)
    update?: InstanceType<typeof UserUpdateWithoutSenderInput>;
}

@InputType()
export class UserUpdateWithoutReceiverInput {
    @Field(() => String, {nullable:true})
    username?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    hashedPassword?: string;
    @Field(() => String, {nullable:true})
    hashedRefreshToken?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => String, {nullable:true})
    sex?: string;
    @Field(() => Int, {nullable:true})
    age?: number;
    @Field(() => String, {nullable:true})
    occupation?: string;
    @Field(() => String, {nullable:true})
    aboutMe?: string;
    @Field(() => [String], {nullable:true})
    interests?: Array<string>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => FriendUpdateOneWithoutSenderNestedInput, {nullable:true})
    sender?: InstanceType<typeof FriendUpdateOneWithoutSenderNestedInput>;
}

@InputType()
export class UserUpdateWithoutSenderInput {
    @Field(() => String, {nullable:true})
    username?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    hashedPassword?: string;
    @Field(() => String, {nullable:true})
    hashedRefreshToken?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => String, {nullable:true})
    sex?: string;
    @Field(() => Int, {nullable:true})
    age?: number;
    @Field(() => String, {nullable:true})
    occupation?: string;
    @Field(() => String, {nullable:true})
    aboutMe?: string;
    @Field(() => [String], {nullable:true})
    interests?: Array<string>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => FriendUpdateOneWithoutReceiverNestedInput, {nullable:true})
    receiver?: InstanceType<typeof FriendUpdateOneWithoutReceiverNestedInput>;
}

@InputType()
export class UserUpdateInput {
    @Field(() => String, {nullable:true})
    username?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    hashedPassword?: string;
    @Field(() => String, {nullable:true})
    hashedRefreshToken?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => String, {nullable:true})
    sex?: string;
    @Field(() => Int, {nullable:true})
    age?: number;
    @Field(() => String, {nullable:true})
    occupation?: string;
    @Field(() => String, {nullable:true})
    aboutMe?: string;
    @Field(() => [String], {nullable:true})
    interests?: Array<string>;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => FriendUpdateOneWithoutSenderNestedInput, {nullable:true})
    sender?: InstanceType<typeof FriendUpdateOneWithoutSenderNestedInput>;
    @Field(() => FriendUpdateOneWithoutReceiverNestedInput, {nullable:true})
    receiver?: InstanceType<typeof FriendUpdateOneWithoutReceiverNestedInput>;
}

@InputType()
export class UserUpdateinterestsInput {
    @Field(() => [String], {nullable:true})
    set?: Array<string>;
    @Field(() => [String], {nullable:true})
    push?: Array<string>;
}

@InputType()
export class UserUpsertWithoutReceiverInput {
    @Field(() => UserUpdateWithoutReceiverInput, {nullable:false})
    @Type(() => UserUpdateWithoutReceiverInput)
    update!: InstanceType<typeof UserUpdateWithoutReceiverInput>;
    @Field(() => UserCreateWithoutReceiverInput, {nullable:false})
    @Type(() => UserCreateWithoutReceiverInput)
    create!: InstanceType<typeof UserCreateWithoutReceiverInput>;
}

@InputType()
export class UserUpsertWithoutSenderInput {
    @Field(() => UserUpdateWithoutSenderInput, {nullable:false})
    @Type(() => UserUpdateWithoutSenderInput)
    update!: InstanceType<typeof UserUpdateWithoutSenderInput>;
    @Field(() => UserCreateWithoutSenderInput, {nullable:false})
    @Type(() => UserCreateWithoutSenderInput)
    create!: InstanceType<typeof UserCreateWithoutSenderInput>;
}

@InputType()
export class UserWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    email?: string;
}

@InputType()
export class UserWhereInput {
    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    username?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    email?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    hashedPassword?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    hashedRefreshToken?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    avatar?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    sex?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    age?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    occupation?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    aboutMe?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableListFilter, {nullable:true})
    interests?: InstanceType<typeof StringNullableListFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => FriendRelationFilter, {nullable:true})
    sender?: InstanceType<typeof FriendRelationFilter>;
    @Field(() => FriendRelationFilter, {nullable:true})
    receiver?: InstanceType<typeof FriendRelationFilter>;
}

@ObjectType()
export class User {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    hashedPassword!: string;
    @Field(() => String, {nullable:true})
    hashedRefreshToken!: string | null;
    @Field(() => String, {nullable:false,defaultValue:'/avatar/man.png'})
    avatar!: string;
    @Field(() => String, {nullable:false,defaultValue:''})
    sex!: string;
    @Field(() => Int, {nullable:false,defaultValue:0})
    age!: number;
    @Field(() => String, {nullable:false,defaultValue:''})
    occupation!: string;
    @Field(() => String, {nullable:false,defaultValue:''})
    aboutMe!: string;
    @Field(() => [String], {nullable:true})
    interests!: Array<string>;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => Friend, {nullable:true})
    sender?: InstanceType<typeof Friend> | null;
    @Field(() => Friend, {nullable:true})
    receiver?: InstanceType<typeof Friend> | null;
}

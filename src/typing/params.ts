export type Params<WhereUniqueInput, WhereInput, OrderByWithRelationInput> = {
  skip?: number;
  take?: number;
  cursor?: WhereUniqueInput;
  where?: WhereInput;
  orderBy?: OrderByWithRelationInput;
};

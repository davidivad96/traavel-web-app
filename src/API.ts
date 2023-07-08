/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  email: string,
  name?: string | null,
  avatarUrl?: string | null,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  avatarUrl?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type User = {
  __typename: "User",
  id: string,
  email: string,
  name?: string | null,
  avatarUrl?: string | null,
  plans?: ModelPlanConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelPlanConnection = {
  __typename: "ModelPlanConnection",
  items:  Array<Plan | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Plan = {
  __typename: "Plan",
  id: string,
  name: string,
  destination?: string | null,
  startDate?: string | null,
  endDate?: string | null,
  owner?: User | null,
  ownerId: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateUserInput = {
  id: string,
  email?: string | null,
  name?: string | null,
  avatarUrl?: string | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreatePlanInput = {
  id?: string | null,
  name: string,
  destination?: string | null,
  startDate?: string | null,
  endDate?: string | null,
  ownerId: string,
  _version?: number | null,
};

export type ModelPlanConditionInput = {
  name?: ModelStringInput | null,
  destination?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  ownerId?: ModelIDInput | null,
  and?: Array< ModelPlanConditionInput | null > | null,
  or?: Array< ModelPlanConditionInput | null > | null,
  not?: ModelPlanConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdatePlanInput = {
  id: string,
  name?: string | null,
  destination?: string | null,
  startDate?: string | null,
  endDate?: string | null,
  ownerId?: string | null,
  _version?: number | null,
};

export type DeletePlanInput = {
  id: string,
  _version?: number | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  avatarUrl?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelPlanFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  destination?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  ownerId?: ModelIDInput | null,
  and?: Array< ModelPlanFilterInput | null > | null,
  or?: Array< ModelPlanFilterInput | null > | null,
  not?: ModelPlanFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  avatarUrl?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionPlanFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  destination?: ModelSubscriptionStringInput | null,
  startDate?: ModelSubscriptionStringInput | null,
  endDate?: ModelSubscriptionStringInput | null,
  ownerId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionPlanFilterInput | null > | null,
  or?: Array< ModelSubscriptionPlanFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    email: string,
    name?: string | null,
    avatarUrl?: string | null,
    plans?:  {
      __typename: "ModelPlanConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    name?: string | null,
    avatarUrl?: string | null,
    plans?:  {
      __typename: "ModelPlanConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    email: string,
    name?: string | null,
    avatarUrl?: string | null,
    plans?:  {
      __typename: "ModelPlanConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreatePlanMutationVariables = {
  input: CreatePlanInput,
  condition?: ModelPlanConditionInput | null,
};

export type CreatePlanMutation = {
  createPlan?:  {
    __typename: "Plan",
    id: string,
    name: string,
    destination?: string | null,
    startDate?: string | null,
    endDate?: string | null,
    owner?:  {
      __typename: "User",
      id: string,
      email: string,
      name?: string | null,
      avatarUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    ownerId: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdatePlanMutationVariables = {
  input: UpdatePlanInput,
  condition?: ModelPlanConditionInput | null,
};

export type UpdatePlanMutation = {
  updatePlan?:  {
    __typename: "Plan",
    id: string,
    name: string,
    destination?: string | null,
    startDate?: string | null,
    endDate?: string | null,
    owner?:  {
      __typename: "User",
      id: string,
      email: string,
      name?: string | null,
      avatarUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    ownerId: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeletePlanMutationVariables = {
  input: DeletePlanInput,
  condition?: ModelPlanConditionInput | null,
};

export type DeletePlanMutation = {
  deletePlan?:  {
    __typename: "Plan",
    id: string,
    name: string,
    destination?: string | null,
    startDate?: string | null,
    endDate?: string | null,
    owner?:  {
      __typename: "User",
      id: string,
      email: string,
      name?: string | null,
      avatarUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    ownerId: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    email: string,
    name?: string | null,
    avatarUrl?: string | null,
    plans?:  {
      __typename: "ModelPlanConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      email: string,
      name?: string | null,
      avatarUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      email: string,
      name?: string | null,
      avatarUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPlanQueryVariables = {
  id: string,
};

export type GetPlanQuery = {
  getPlan?:  {
    __typename: "Plan",
    id: string,
    name: string,
    destination?: string | null,
    startDate?: string | null,
    endDate?: string | null,
    owner?:  {
      __typename: "User",
      id: string,
      email: string,
      name?: string | null,
      avatarUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    ownerId: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListPlansQueryVariables = {
  filter?: ModelPlanFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlansQuery = {
  listPlans?:  {
    __typename: "ModelPlanConnection",
    items:  Array< {
      __typename: "Plan",
      id: string,
      name: string,
      destination?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      ownerId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPlansQueryVariables = {
  filter?: ModelPlanFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPlansQuery = {
  syncPlans?:  {
    __typename: "ModelPlanConnection",
    items:  Array< {
      __typename: "Plan",
      id: string,
      name: string,
      destination?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      ownerId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type PlansByOwnerIdQueryVariables = {
  ownerId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPlanFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PlansByOwnerIdQuery = {
  plansByOwnerId?:  {
    __typename: "ModelPlanConnection",
    items:  Array< {
      __typename: "Plan",
      id: string,
      name: string,
      destination?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      ownerId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    name?: string | null,
    avatarUrl?: string | null,
    plans?:  {
      __typename: "ModelPlanConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    name?: string | null,
    avatarUrl?: string | null,
    plans?:  {
      __typename: "ModelPlanConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    email: string,
    name?: string | null,
    avatarUrl?: string | null,
    plans?:  {
      __typename: "ModelPlanConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreatePlanSubscriptionVariables = {
  filter?: ModelSubscriptionPlanFilterInput | null,
};

export type OnCreatePlanSubscription = {
  onCreatePlan?:  {
    __typename: "Plan",
    id: string,
    name: string,
    destination?: string | null,
    startDate?: string | null,
    endDate?: string | null,
    owner?:  {
      __typename: "User",
      id: string,
      email: string,
      name?: string | null,
      avatarUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    ownerId: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdatePlanSubscriptionVariables = {
  filter?: ModelSubscriptionPlanFilterInput | null,
};

export type OnUpdatePlanSubscription = {
  onUpdatePlan?:  {
    __typename: "Plan",
    id: string,
    name: string,
    destination?: string | null,
    startDate?: string | null,
    endDate?: string | null,
    owner?:  {
      __typename: "User",
      id: string,
      email: string,
      name?: string | null,
      avatarUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    ownerId: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeletePlanSubscriptionVariables = {
  filter?: ModelSubscriptionPlanFilterInput | null,
};

export type OnDeletePlanSubscription = {
  onDeletePlan?:  {
    __typename: "Plan",
    id: string,
    name: string,
    destination?: string | null,
    startDate?: string | null,
    endDate?: string | null,
    owner?:  {
      __typename: "User",
      id: string,
      email: string,
      name?: string | null,
      avatarUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    ownerId: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

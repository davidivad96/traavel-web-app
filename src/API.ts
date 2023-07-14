/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  email: string,
  name?: string | null,
  avatarUrl?: string | null,
};

export type ModelUserConditionInput = {
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  avatarUrl?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
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

export type User = {
  __typename: "User",
  id: string,
  email: string,
  name?: string | null,
  avatarUrl?: string | null,
  trips?: ModelTripConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelTripConnection = {
  __typename: "ModelTripConnection",
  items:  Array<Trip | null >,
  nextToken?: string | null,
};

export type Trip = {
  __typename: "Trip",
  id: string,
  name?: string | null,
  destination?: string | null,
  startDate?: string | null,
  endDate?: string | null,
  imgUrl?: string | null,
  owner?: User | null,
  ownerId: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  email?: string | null,
  name?: string | null,
  avatarUrl?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateTripInput = {
  id?: string | null,
  name?: string | null,
  destination?: string | null,
  startDate?: string | null,
  endDate?: string | null,
  imgUrl?: string | null,
  ownerId: string,
};

export type ModelTripConditionInput = {
  name?: ModelStringInput | null,
  destination?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  imgUrl?: ModelStringInput | null,
  ownerId?: ModelIDInput | null,
  and?: Array< ModelTripConditionInput | null > | null,
  or?: Array< ModelTripConditionInput | null > | null,
  not?: ModelTripConditionInput | null,
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

export type UpdateTripInput = {
  id: string,
  name?: string | null,
  destination?: string | null,
  startDate?: string | null,
  endDate?: string | null,
  imgUrl?: string | null,
  ownerId?: string | null,
};

export type DeleteTripInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  avatarUrl?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelTripFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  destination?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  imgUrl?: ModelStringInput | null,
  ownerId?: ModelIDInput | null,
  and?: Array< ModelTripFilterInput | null > | null,
  or?: Array< ModelTripFilterInput | null > | null,
  not?: ModelTripFilterInput | null,
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

export type ModelSubscriptionTripFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  destination?: ModelSubscriptionStringInput | null,
  startDate?: ModelSubscriptionStringInput | null,
  endDate?: ModelSubscriptionStringInput | null,
  imgUrl?: ModelSubscriptionStringInput | null,
  ownerId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionTripFilterInput | null > | null,
  or?: Array< ModelSubscriptionTripFilterInput | null > | null,
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
    trips?:  {
      __typename: "ModelTripConnection",
      items:  Array< {
        __typename: "Trip",
        id: string,
        name?: string | null,
        destination?: string | null,
        startDate?: string | null,
        endDate?: string | null,
        imgUrl?: string | null,
        ownerId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    trips?:  {
      __typename: "ModelTripConnection",
      items:  Array< {
        __typename: "Trip",
        id: string,
        name?: string | null,
        destination?: string | null,
        startDate?: string | null,
        endDate?: string | null,
        imgUrl?: string | null,
        ownerId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    trips?:  {
      __typename: "ModelTripConnection",
      items:  Array< {
        __typename: "Trip",
        id: string,
        name?: string | null,
        destination?: string | null,
        startDate?: string | null,
        endDate?: string | null,
        imgUrl?: string | null,
        ownerId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTripMutationVariables = {
  input: CreateTripInput,
  condition?: ModelTripConditionInput | null,
};

export type CreateTripMutation = {
  createTrip?:  {
    __typename: "Trip",
    id: string,
    name?: string | null,
    destination?: string | null,
    startDate?: string | null,
    endDate?: string | null,
    imgUrl?: string | null,
    owner?:  {
      __typename: "User",
      id: string,
      email: string,
      name?: string | null,
      avatarUrl?: string | null,
      trips?:  {
        __typename: "ModelTripConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    ownerId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTripMutationVariables = {
  input: UpdateTripInput,
  condition?: ModelTripConditionInput | null,
};

export type UpdateTripMutation = {
  updateTrip?:  {
    __typename: "Trip",
    id: string,
    name?: string | null,
    destination?: string | null,
    startDate?: string | null,
    endDate?: string | null,
    imgUrl?: string | null,
    owner?:  {
      __typename: "User",
      id: string,
      email: string,
      name?: string | null,
      avatarUrl?: string | null,
      trips?:  {
        __typename: "ModelTripConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    ownerId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTripMutationVariables = {
  input: DeleteTripInput,
  condition?: ModelTripConditionInput | null,
};

export type DeleteTripMutation = {
  deleteTrip?:  {
    __typename: "Trip",
    id: string,
    name?: string | null,
    destination?: string | null,
    startDate?: string | null,
    endDate?: string | null,
    imgUrl?: string | null,
    owner?:  {
      __typename: "User",
      id: string,
      email: string,
      name?: string | null,
      avatarUrl?: string | null,
      trips?:  {
        __typename: "ModelTripConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    ownerId: string,
    createdAt: string,
    updatedAt: string,
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
    trips?:  {
      __typename: "ModelTripConnection",
      items:  Array< {
        __typename: "Trip",
        id: string,
        name?: string | null,
        destination?: string | null,
        startDate?: string | null,
        endDate?: string | null,
        imgUrl?: string | null,
        ownerId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
      trips?:  {
        __typename: "ModelTripConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTripQueryVariables = {
  id: string,
};

export type GetTripQuery = {
  getTrip?:  {
    __typename: "Trip",
    id: string,
    name?: string | null,
    destination?: string | null,
    startDate?: string | null,
    endDate?: string | null,
    imgUrl?: string | null,
    owner?:  {
      __typename: "User",
      id: string,
      email: string,
      name?: string | null,
      avatarUrl?: string | null,
      trips?:  {
        __typename: "ModelTripConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    ownerId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTripsQueryVariables = {
  filter?: ModelTripFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTripsQuery = {
  listTrips?:  {
    __typename: "ModelTripConnection",
    items:  Array< {
      __typename: "Trip",
      id: string,
      name?: string | null,
      destination?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      imgUrl?: string | null,
      owner?:  {
        __typename: "User",
        id: string,
        email: string,
        name?: string | null,
        avatarUrl?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      ownerId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type TripsByOwnerIdQueryVariables = {
  ownerId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTripFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TripsByOwnerIdQuery = {
  tripsByOwnerId?:  {
    __typename: "ModelTripConnection",
    items:  Array< {
      __typename: "Trip",
      id: string,
      name?: string | null,
      destination?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      imgUrl?: string | null,
      owner?:  {
        __typename: "User",
        id: string,
        email: string,
        name?: string | null,
        avatarUrl?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      ownerId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
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
    trips?:  {
      __typename: "ModelTripConnection",
      items:  Array< {
        __typename: "Trip",
        id: string,
        name?: string | null,
        destination?: string | null,
        startDate?: string | null,
        endDate?: string | null,
        imgUrl?: string | null,
        ownerId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    trips?:  {
      __typename: "ModelTripConnection",
      items:  Array< {
        __typename: "Trip",
        id: string,
        name?: string | null,
        destination?: string | null,
        startDate?: string | null,
        endDate?: string | null,
        imgUrl?: string | null,
        ownerId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    trips?:  {
      __typename: "ModelTripConnection",
      items:  Array< {
        __typename: "Trip",
        id: string,
        name?: string | null,
        destination?: string | null,
        startDate?: string | null,
        endDate?: string | null,
        imgUrl?: string | null,
        ownerId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTripSubscriptionVariables = {
  filter?: ModelSubscriptionTripFilterInput | null,
};

export type OnCreateTripSubscription = {
  onCreateTrip?:  {
    __typename: "Trip",
    id: string,
    name?: string | null,
    destination?: string | null,
    startDate?: string | null,
    endDate?: string | null,
    imgUrl?: string | null,
    owner?:  {
      __typename: "User",
      id: string,
      email: string,
      name?: string | null,
      avatarUrl?: string | null,
      trips?:  {
        __typename: "ModelTripConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    ownerId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTripSubscriptionVariables = {
  filter?: ModelSubscriptionTripFilterInput | null,
};

export type OnUpdateTripSubscription = {
  onUpdateTrip?:  {
    __typename: "Trip",
    id: string,
    name?: string | null,
    destination?: string | null,
    startDate?: string | null,
    endDate?: string | null,
    imgUrl?: string | null,
    owner?:  {
      __typename: "User",
      id: string,
      email: string,
      name?: string | null,
      avatarUrl?: string | null,
      trips?:  {
        __typename: "ModelTripConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    ownerId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTripSubscriptionVariables = {
  filter?: ModelSubscriptionTripFilterInput | null,
};

export type OnDeleteTripSubscription = {
  onDeleteTrip?:  {
    __typename: "Trip",
    id: string,
    name?: string | null,
    destination?: string | null,
    startDate?: string | null,
    endDate?: string | null,
    imgUrl?: string | null,
    owner?:  {
      __typename: "User",
      id: string,
      email: string,
      name?: string | null,
      avatarUrl?: string | null,
      trips?:  {
        __typename: "ModelTripConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    ownerId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

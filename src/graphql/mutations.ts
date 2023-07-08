/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      email
      name
      avatarUrl
      plans {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      email
      name
      avatarUrl
      plans {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      email
      name
      avatarUrl
      plans {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createPlan = /* GraphQL */ `
  mutation CreatePlan(
    $input: CreatePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    createPlan(input: $input, condition: $condition) {
      id
      name
      destination
      startDate
      endDate
      owner {
        id
        email
        name
        avatarUrl
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      ownerId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updatePlan = /* GraphQL */ `
  mutation UpdatePlan(
    $input: UpdatePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    updatePlan(input: $input, condition: $condition) {
      id
      name
      destination
      startDate
      endDate
      owner {
        id
        email
        name
        avatarUrl
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      ownerId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deletePlan = /* GraphQL */ `
  mutation DeletePlan(
    $input: DeletePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    deletePlan(input: $input, condition: $condition) {
      id
      name
      destination
      startDate
      endDate
      owner {
        id
        email
        name
        avatarUrl
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      ownerId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;

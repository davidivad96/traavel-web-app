/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      name
      avatarUrl
      plans {
        items {
          id
          placeId
          name
          destination
          startDate
          endDate
          base64img
          ownerId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        name
        avatarUrl
        plans {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPlan = /* GraphQL */ `
  query GetPlan($id: ID!) {
    getPlan(id: $id) {
      id
      placeId
      name
      destination
      location {
        latitude
        longitude
        __typename
      }
      startDate
      endDate
      base64img
      owner {
        id
        email
        name
        avatarUrl
        plans {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      ownerId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPlans = /* GraphQL */ `
  query ListPlans(
    $filter: ModelPlanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlans(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        placeId
        name
        destination
        location {
          latitude
          longitude
          __typename
        }
        startDate
        endDate
        base64img
        owner {
          id
          email
          name
          avatarUrl
          createdAt
          updatedAt
          __typename
        }
        ownerId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const plansByOwnerId = /* GraphQL */ `
  query PlansByOwnerId(
    $ownerId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPlanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    plansByOwnerId(
      ownerId: $ownerId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        placeId
        name
        destination
        location {
          latitude
          longitude
          __typename
        }
        startDate
        endDate
        base64img
        owner {
          id
          email
          name
          avatarUrl
          createdAt
          updatedAt
          __typename
        }
        ownerId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;

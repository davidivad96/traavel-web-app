/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreatePlan = /* GraphQL */ `
  subscription OnCreatePlan($filter: ModelSubscriptionPlanFilterInput) {
    onCreatePlan(filter: $filter) {
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
export const onUpdatePlan = /* GraphQL */ `
  subscription OnUpdatePlan($filter: ModelSubscriptionPlanFilterInput) {
    onUpdatePlan(filter: $filter) {
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
export const onDeletePlan = /* GraphQL */ `
  subscription OnDeletePlan($filter: ModelSubscriptionPlanFilterInput) {
    onDeletePlan(filter: $filter) {
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

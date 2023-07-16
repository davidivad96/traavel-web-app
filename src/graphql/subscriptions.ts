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
      trips {
        items {
          id
          name
          destination
          startDate
          endDate
          imgUrl
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
      trips {
        items {
          id
          name
          destination
          startDate
          endDate
          imgUrl
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
      trips {
        items {
          id
          name
          destination
          startDate
          endDate
          imgUrl
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
export const onCreateTrip = /* GraphQL */ `
  subscription OnCreateTrip($filter: ModelSubscriptionTripFilterInput) {
    onCreateTrip(filter: $filter) {
      id
      name
      destination
      location {
        latitude
        longitude
        __typename
      }
      startDate
      endDate
      imgUrl
      owner {
        id
        email
        name
        avatarUrl
        trips {
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
export const onUpdateTrip = /* GraphQL */ `
  subscription OnUpdateTrip($filter: ModelSubscriptionTripFilterInput) {
    onUpdateTrip(filter: $filter) {
      id
      name
      destination
      location {
        latitude
        longitude
        __typename
      }
      startDate
      endDate
      imgUrl
      owner {
        id
        email
        name
        avatarUrl
        trips {
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
export const onDeleteTrip = /* GraphQL */ `
  subscription OnDeleteTrip($filter: ModelSubscriptionTripFilterInput) {
    onDeleteTrip(filter: $filter) {
      id
      name
      destination
      location {
        latitude
        longitude
        __typename
      }
      startDate
      endDate
      imgUrl
      owner {
        id
        email
        name
        avatarUrl
        trips {
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

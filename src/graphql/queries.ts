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
        trips {
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
export const getTrip = /* GraphQL */ `
  query GetTrip($id: ID!) {
    getTrip(id: $id) {
      id
      name
      destination
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
export const listTrips = /* GraphQL */ `
  query ListTrips(
    $filter: ModelTripFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrips(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        destination
        startDate
        endDate
        imgUrl
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
export const tripsByOwnerId = /* GraphQL */ `
  query TripsByOwnerId(
    $ownerId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTripFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tripsByOwnerId(
      ownerId: $ownerId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        destination
        startDate
        endDate
        imgUrl
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

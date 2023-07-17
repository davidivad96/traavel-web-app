/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getActivity = /* GraphQL */ `
  query GetActivity($dayId: ID!, $startTime: AWSTime!) {
    getActivity(dayId: $dayId, startTime: $startTime) {
      id
      dayId
      startTime
      endTime
      name
      description
      location {
        latitude
        longitude
        __typename
      }
      type
      createdAt
      updatedAt
      dayActivitiesTripId
      dayActivitiesDate
      __typename
    }
  }
`;
export const listActivities = /* GraphQL */ `
  query ListActivities(
    $dayId: ID
    $startTime: ModelStringKeyConditionInput
    $filter: ModelActivityFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listActivities(
      dayId: $dayId
      startTime: $startTime
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        dayId
        startTime
        endTime
        name
        description
        location {
          latitude
          longitude
          __typename
        }
        type
        createdAt
        updatedAt
        dayActivitiesTripId
        dayActivitiesDate
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getDay = /* GraphQL */ `
  query GetDay($tripId: ID!, $date: AWSDate!) {
    getDay(tripId: $tripId, date: $date) {
      id
      tripId
      date
      activities {
        items {
          id
          dayId
          startTime
          endTime
          name
          description
          type
          createdAt
          updatedAt
          dayActivitiesTripId
          dayActivitiesDate
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      tripDaysId
      __typename
    }
  }
`;
export const listDays = /* GraphQL */ `
  query ListDays(
    $tripId: ID
    $date: ModelStringKeyConditionInput
    $filter: ModelDayFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listDays(
      tripId: $tripId
      date: $date
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        tripId
        date
        activities {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        tripDaysId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
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
          userTripsId
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
      days {
        items {
          id
          tripId
          date
          createdAt
          updatedAt
          tripDaysId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userTripsId
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
          createdAt
          updatedAt
          __typename
        }
        ownerId
        days {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userTripsId
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
          createdAt
          updatedAt
          __typename
        }
        ownerId
        days {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userTripsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;

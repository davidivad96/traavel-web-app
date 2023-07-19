/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getActivity = /* GraphQL */ `
  query GetActivity($id: ID!) {
    getActivity(id: $id) {
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
      dayActivitiesId
      __typename
    }
  }
`;
export const listActivities = /* GraphQL */ `
  query ListActivities(
    $id: ID
    $filter: ModelActivityFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listActivities(
      id: $id
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
        dayActivitiesId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const activitiesByDayIdAndStartTime = /* GraphQL */ `
  query ActivitiesByDayIdAndStartTime(
    $dayId: ID!
    $startTime: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelActivityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    activitiesByDayIdAndStartTime(
      dayId: $dayId
      startTime: $startTime
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
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
        dayActivitiesId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getDay = /* GraphQL */ `
  query GetDay($id: ID!) {
    getDay(id: $id) {
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
          dayActivitiesId
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
    $id: ID
    $filter: ModelDayFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listDays(
      id: $id
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
export const daysByTripIdAndDate = /* GraphQL */ `
  query DaysByTripIdAndDate(
    $tripId: ID!
    $date: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelDayFilterInput
    $limit: Int
    $nextToken: String
  ) {
    daysByTripIdAndDate(
      tripId: $tripId
      date: $date
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
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
          userId
          name
          destination
          startDate
          endDate
          imgUrl
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
    $id: ID
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
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
      userId
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
    $id: ID
    $filter: ModelTripFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTrips(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        userId
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
export const tripsByUserIdAndStartDate = /* GraphQL */ `
  query TripsByUserIdAndStartDate(
    $userId: ID!
    $startDate: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTripFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tripsByUserIdAndStartDate(
      userId: $userId
      startDate: $startDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
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

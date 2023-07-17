/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateActivity = /* GraphQL */ `
  subscription OnCreateActivity($filter: ModelSubscriptionActivityFilterInput) {
    onCreateActivity(filter: $filter) {
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
export const onUpdateActivity = /* GraphQL */ `
  subscription OnUpdateActivity($filter: ModelSubscriptionActivityFilterInput) {
    onUpdateActivity(filter: $filter) {
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
export const onDeleteActivity = /* GraphQL */ `
  subscription OnDeleteActivity($filter: ModelSubscriptionActivityFilterInput) {
    onDeleteActivity(filter: $filter) {
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
export const onCreateDay = /* GraphQL */ `
  subscription OnCreateDay($filter: ModelSubscriptionDayFilterInput) {
    onCreateDay(filter: $filter) {
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
export const onUpdateDay = /* GraphQL */ `
  subscription OnUpdateDay($filter: ModelSubscriptionDayFilterInput) {
    onUpdateDay(filter: $filter) {
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
export const onDeleteDay = /* GraphQL */ `
  subscription OnDeleteDay($filter: ModelSubscriptionDayFilterInput) {
    onDeleteDay(filter: $filter) {
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

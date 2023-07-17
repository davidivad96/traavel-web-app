/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createActivity = /* GraphQL */ `
  mutation CreateActivity(
    $input: CreateActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    createActivity(input: $input, condition: $condition) {
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
export const updateActivity = /* GraphQL */ `
  mutation UpdateActivity(
    $input: UpdateActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    updateActivity(input: $input, condition: $condition) {
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
export const deleteActivity = /* GraphQL */ `
  mutation DeleteActivity(
    $input: DeleteActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    deleteActivity(input: $input, condition: $condition) {
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
export const createDay = /* GraphQL */ `
  mutation CreateDay(
    $input: CreateDayInput!
    $condition: ModelDayConditionInput
  ) {
    createDay(input: $input, condition: $condition) {
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
export const updateDay = /* GraphQL */ `
  mutation UpdateDay(
    $input: UpdateDayInput!
    $condition: ModelDayConditionInput
  ) {
    updateDay(input: $input, condition: $condition) {
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
export const deleteDay = /* GraphQL */ `
  mutation DeleteDay(
    $input: DeleteDayInput!
    $condition: ModelDayConditionInput
  ) {
    deleteDay(input: $input, condition: $condition) {
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
export const createTrip = /* GraphQL */ `
  mutation CreateTrip(
    $input: CreateTripInput!
    $condition: ModelTripConditionInput
  ) {
    createTrip(input: $input, condition: $condition) {
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
export const updateTrip = /* GraphQL */ `
  mutation UpdateTrip(
    $input: UpdateTripInput!
    $condition: ModelTripConditionInput
  ) {
    updateTrip(input: $input, condition: $condition) {
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
export const deleteTrip = /* GraphQL */ `
  mutation DeleteTrip(
    $input: DeleteTripInput!
    $condition: ModelTripConditionInput
  ) {
    deleteTrip(input: $input, condition: $condition) {
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

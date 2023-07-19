/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateActivityInput = {
  id?: string | null,
  dayId: string,
  startTime: string,
  endTime: string,
  name: string,
  description?: string | null,
  location: LocationInput,
  type: ActivityType,
  dayActivitiesTripId?: string | null,
  dayActivitiesDate?: string | null,
};

export type LocationInput = {
  latitude?: number | null,
  longitude?: number | null,
};

export enum ActivityType {
  FLIGHT = "FLIGHT",
  HOTEL = "HOTEL",
  MUSEUM = "MUSEUM",
  VISIT = "VISIT",
  RESTAURANT = "RESTAURANT",
  BAR = "BAR",
  CONCERT = "CONCERT",
  MEETING = "MEETING",
  THEATER = "THEATER",
  CRUISE = "CRUISE",
  OTHER = "OTHER",
}


export type ModelActivityConditionInput = {
  endTime?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  type?: ModelActivityTypeInput | null,
  and?: Array< ModelActivityConditionInput | null > | null,
  or?: Array< ModelActivityConditionInput | null > | null,
  not?: ModelActivityConditionInput | null,
  dayActivitiesTripId?: ModelIDInput | null,
  dayActivitiesDate?: ModelStringInput | null,
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

export type ModelActivityTypeInput = {
  eq?: ActivityType | null,
  ne?: ActivityType | null,
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

export type Activity = {
  __typename: "Activity",
  id: string,
  dayId: string,
  startTime: string,
  endTime: string,
  name: string,
  description?: string | null,
  location: Location,
  type: ActivityType,
  createdAt: string,
  updatedAt: string,
  dayActivitiesTripId?: string | null,
  dayActivitiesDate?: string | null,
};

export type Location = {
  __typename: "Location",
  latitude?: number | null,
  longitude?: number | null,
};

export type UpdateActivityInput = {
  id?: string | null,
  dayId: string,
  startTime: string,
  endTime?: string | null,
  name?: string | null,
  description?: string | null,
  location?: LocationInput | null,
  type?: ActivityType | null,
  dayActivitiesTripId?: string | null,
  dayActivitiesDate?: string | null,
};

export type DeleteActivityInput = {
  dayId: string,
  startTime: string,
};

export type CreateDayInput = {
  id?: string | null,
  tripId: string,
  date: string,
  tripDaysId?: string | null,
  tripDaysStartDate?: string | null,
};

export type ModelDayConditionInput = {
  and?: Array< ModelDayConditionInput | null > | null,
  or?: Array< ModelDayConditionInput | null > | null,
  not?: ModelDayConditionInput | null,
  tripDaysId?: ModelIDInput | null,
  tripDaysStartDate?: ModelStringInput | null,
};

export type Day = {
  __typename: "Day",
  id: string,
  tripId: string,
  date: string,
  activities?: ModelActivityConnection | null,
  createdAt: string,
  updatedAt: string,
  tripDaysId?: string | null,
  tripDaysStartDate?: string | null,
};

export type ModelActivityConnection = {
  __typename: "ModelActivityConnection",
  items:  Array<Activity | null >,
  nextToken?: string | null,
};

export type UpdateDayInput = {
  id?: string | null,
  tripId: string,
  date: string,
  tripDaysId?: string | null,
  tripDaysStartDate?: string | null,
};

export type DeleteDayInput = {
  tripId: string,
  date: string,
};

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
  name: string,
  destination: string,
  location: Location,
  startDate: string,
  endDate: string,
  imgUrl?: string | null,
  owner?: User | null,
  ownerId: string,
  days?: ModelDayConnection | null,
  createdAt: string,
  updatedAt: string,
  userTripsId?: string | null,
};

export type ModelDayConnection = {
  __typename: "ModelDayConnection",
  items:  Array<Day | null >,
  nextToken?: string | null,
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
  name: string,
  destination: string,
  location: LocationInput,
  startDate: string,
  endDate: string,
  imgUrl?: string | null,
  ownerId: string,
  userTripsId?: string | null,
};

export type ModelTripConditionInput = {
  name?: ModelStringInput | null,
  destination?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  imgUrl?: ModelStringInput | null,
  ownerId?: ModelIDInput | null,
  and?: Array< ModelTripConditionInput | null > | null,
  or?: Array< ModelTripConditionInput | null > | null,
  not?: ModelTripConditionInput | null,
  userTripsId?: ModelIDInput | null,
};

export type UpdateTripInput = {
  id: string,
  name?: string | null,
  destination?: string | null,
  location?: LocationInput | null,
  startDate: string,
  endDate?: string | null,
  imgUrl?: string | null,
  ownerId?: string | null,
  userTripsId?: string | null,
};

export type DeleteTripInput = {
  id: string,
  startDate: string,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelActivityFilterInput = {
  id?: ModelIDInput | null,
  dayId?: ModelIDInput | null,
  startTime?: ModelStringInput | null,
  endTime?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  type?: ModelActivityTypeInput | null,
  and?: Array< ModelActivityFilterInput | null > | null,
  or?: Array< ModelActivityFilterInput | null > | null,
  not?: ModelActivityFilterInput | null,
  dayActivitiesTripId?: ModelIDInput | null,
  dayActivitiesDate?: ModelStringInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelDayFilterInput = {
  id?: ModelIDInput | null,
  tripId?: ModelIDInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelDayFilterInput | null > | null,
  or?: Array< ModelDayFilterInput | null > | null,
  not?: ModelDayFilterInput | null,
  tripDaysId?: ModelIDInput | null,
  tripDaysStartDate?: ModelStringInput | null,
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
  userTripsId?: ModelIDInput | null,
};

export type ModelSubscriptionActivityFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  dayId?: ModelSubscriptionIDInput | null,
  startTime?: ModelSubscriptionStringInput | null,
  endTime?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionActivityFilterInput | null > | null,
  or?: Array< ModelSubscriptionActivityFilterInput | null > | null,
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

export type ModelSubscriptionDayFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  tripId?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDayFilterInput | null > | null,
  or?: Array< ModelSubscriptionDayFilterInput | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  avatarUrl?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
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

export type CreateActivityMutationVariables = {
  input: CreateActivityInput,
  condition?: ModelActivityConditionInput | null,
};

export type CreateActivityMutation = {
  createActivity?:  {
    __typename: "Activity",
    id: string,
    dayId: string,
    startTime: string,
    endTime: string,
    name: string,
    description?: string | null,
    location:  {
      __typename: "Location",
      latitude?: number | null,
      longitude?: number | null,
    },
    type: ActivityType,
    createdAt: string,
    updatedAt: string,
    dayActivitiesTripId?: string | null,
    dayActivitiesDate?: string | null,
  } | null,
};

export type UpdateActivityMutationVariables = {
  input: UpdateActivityInput,
  condition?: ModelActivityConditionInput | null,
};

export type UpdateActivityMutation = {
  updateActivity?:  {
    __typename: "Activity",
    id: string,
    dayId: string,
    startTime: string,
    endTime: string,
    name: string,
    description?: string | null,
    location:  {
      __typename: "Location",
      latitude?: number | null,
      longitude?: number | null,
    },
    type: ActivityType,
    createdAt: string,
    updatedAt: string,
    dayActivitiesTripId?: string | null,
    dayActivitiesDate?: string | null,
  } | null,
};

export type DeleteActivityMutationVariables = {
  input: DeleteActivityInput,
  condition?: ModelActivityConditionInput | null,
};

export type DeleteActivityMutation = {
  deleteActivity?:  {
    __typename: "Activity",
    id: string,
    dayId: string,
    startTime: string,
    endTime: string,
    name: string,
    description?: string | null,
    location:  {
      __typename: "Location",
      latitude?: number | null,
      longitude?: number | null,
    },
    type: ActivityType,
    createdAt: string,
    updatedAt: string,
    dayActivitiesTripId?: string | null,
    dayActivitiesDate?: string | null,
  } | null,
};

export type CreateDayMutationVariables = {
  input: CreateDayInput,
  condition?: ModelDayConditionInput | null,
};

export type CreateDayMutation = {
  createDay?:  {
    __typename: "Day",
    id: string,
    tripId: string,
    date: string,
    activities?:  {
      __typename: "ModelActivityConnection",
      items:  Array< {
        __typename: "Activity",
        id: string,
        dayId: string,
        startTime: string,
        endTime: string,
        name: string,
        description?: string | null,
        type: ActivityType,
        createdAt: string,
        updatedAt: string,
        dayActivitiesTripId?: string | null,
        dayActivitiesDate?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    tripDaysId?: string | null,
    tripDaysStartDate?: string | null,
  } | null,
};

export type UpdateDayMutationVariables = {
  input: UpdateDayInput,
  condition?: ModelDayConditionInput | null,
};

export type UpdateDayMutation = {
  updateDay?:  {
    __typename: "Day",
    id: string,
    tripId: string,
    date: string,
    activities?:  {
      __typename: "ModelActivityConnection",
      items:  Array< {
        __typename: "Activity",
        id: string,
        dayId: string,
        startTime: string,
        endTime: string,
        name: string,
        description?: string | null,
        type: ActivityType,
        createdAt: string,
        updatedAt: string,
        dayActivitiesTripId?: string | null,
        dayActivitiesDate?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    tripDaysId?: string | null,
    tripDaysStartDate?: string | null,
  } | null,
};

export type DeleteDayMutationVariables = {
  input: DeleteDayInput,
  condition?: ModelDayConditionInput | null,
};

export type DeleteDayMutation = {
  deleteDay?:  {
    __typename: "Day",
    id: string,
    tripId: string,
    date: string,
    activities?:  {
      __typename: "ModelActivityConnection",
      items:  Array< {
        __typename: "Activity",
        id: string,
        dayId: string,
        startTime: string,
        endTime: string,
        name: string,
        description?: string | null,
        type: ActivityType,
        createdAt: string,
        updatedAt: string,
        dayActivitiesTripId?: string | null,
        dayActivitiesDate?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    tripDaysId?: string | null,
    tripDaysStartDate?: string | null,
  } | null,
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
        name: string,
        destination: string,
        startDate: string,
        endDate: string,
        imgUrl?: string | null,
        ownerId: string,
        createdAt: string,
        updatedAt: string,
        userTripsId?: string | null,
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
        name: string,
        destination: string,
        startDate: string,
        endDate: string,
        imgUrl?: string | null,
        ownerId: string,
        createdAt: string,
        updatedAt: string,
        userTripsId?: string | null,
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
        name: string,
        destination: string,
        startDate: string,
        endDate: string,
        imgUrl?: string | null,
        ownerId: string,
        createdAt: string,
        updatedAt: string,
        userTripsId?: string | null,
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
    name: string,
    destination: string,
    location:  {
      __typename: "Location",
      latitude?: number | null,
      longitude?: number | null,
    },
    startDate: string,
    endDate: string,
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
    days?:  {
      __typename: "ModelDayConnection",
      items:  Array< {
        __typename: "Day",
        id: string,
        tripId: string,
        date: string,
        createdAt: string,
        updatedAt: string,
        tripDaysId?: string | null,
        tripDaysStartDate?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userTripsId?: string | null,
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
    name: string,
    destination: string,
    location:  {
      __typename: "Location",
      latitude?: number | null,
      longitude?: number | null,
    },
    startDate: string,
    endDate: string,
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
    days?:  {
      __typename: "ModelDayConnection",
      items:  Array< {
        __typename: "Day",
        id: string,
        tripId: string,
        date: string,
        createdAt: string,
        updatedAt: string,
        tripDaysId?: string | null,
        tripDaysStartDate?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userTripsId?: string | null,
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
    name: string,
    destination: string,
    location:  {
      __typename: "Location",
      latitude?: number | null,
      longitude?: number | null,
    },
    startDate: string,
    endDate: string,
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
    days?:  {
      __typename: "ModelDayConnection",
      items:  Array< {
        __typename: "Day",
        id: string,
        tripId: string,
        date: string,
        createdAt: string,
        updatedAt: string,
        tripDaysId?: string | null,
        tripDaysStartDate?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userTripsId?: string | null,
  } | null,
};

export type GetActivityQueryVariables = {
  dayId: string,
  startTime: string,
};

export type GetActivityQuery = {
  getActivity?:  {
    __typename: "Activity",
    id: string,
    dayId: string,
    startTime: string,
    endTime: string,
    name: string,
    description?: string | null,
    location:  {
      __typename: "Location",
      latitude?: number | null,
      longitude?: number | null,
    },
    type: ActivityType,
    createdAt: string,
    updatedAt: string,
    dayActivitiesTripId?: string | null,
    dayActivitiesDate?: string | null,
  } | null,
};

export type ListActivitiesQueryVariables = {
  dayId?: string | null,
  startTime?: ModelStringKeyConditionInput | null,
  filter?: ModelActivityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListActivitiesQuery = {
  listActivities?:  {
    __typename: "ModelActivityConnection",
    items:  Array< {
      __typename: "Activity",
      id: string,
      dayId: string,
      startTime: string,
      endTime: string,
      name: string,
      description?: string | null,
      location:  {
        __typename: "Location",
        latitude?: number | null,
        longitude?: number | null,
      },
      type: ActivityType,
      createdAt: string,
      updatedAt: string,
      dayActivitiesTripId?: string | null,
      dayActivitiesDate?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetDayQueryVariables = {
  tripId: string,
  date: string,
};

export type GetDayQuery = {
  getDay?:  {
    __typename: "Day",
    id: string,
    tripId: string,
    date: string,
    activities?:  {
      __typename: "ModelActivityConnection",
      items:  Array< {
        __typename: "Activity",
        id: string,
        dayId: string,
        startTime: string,
        endTime: string,
        name: string,
        description?: string | null,
        type: ActivityType,
        createdAt: string,
        updatedAt: string,
        dayActivitiesTripId?: string | null,
        dayActivitiesDate?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    tripDaysId?: string | null,
    tripDaysStartDate?: string | null,
  } | null,
};

export type ListDaysQueryVariables = {
  tripId?: string | null,
  date?: ModelStringKeyConditionInput | null,
  filter?: ModelDayFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListDaysQuery = {
  listDays?:  {
    __typename: "ModelDayConnection",
    items:  Array< {
      __typename: "Day",
      id: string,
      tripId: string,
      date: string,
      activities?:  {
        __typename: "ModelActivityConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      tripDaysId?: string | null,
      tripDaysStartDate?: string | null,
    } | null >,
    nextToken?: string | null,
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
        name: string,
        destination: string,
        startDate: string,
        endDate: string,
        imgUrl?: string | null,
        ownerId: string,
        createdAt: string,
        updatedAt: string,
        userTripsId?: string | null,
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
  startDate: string,
};

export type GetTripQuery = {
  getTrip?:  {
    __typename: "Trip",
    id: string,
    name: string,
    destination: string,
    location:  {
      __typename: "Location",
      latitude?: number | null,
      longitude?: number | null,
    },
    startDate: string,
    endDate: string,
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
    days?:  {
      __typename: "ModelDayConnection",
      items:  Array< {
        __typename: "Day",
        id: string,
        tripId: string,
        date: string,
        createdAt: string,
        updatedAt: string,
        tripDaysId?: string | null,
        tripDaysStartDate?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userTripsId?: string | null,
  } | null,
};

export type ListTripsQueryVariables = {
  id?: string | null,
  startDate?: ModelStringKeyConditionInput | null,
  filter?: ModelTripFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListTripsQuery = {
  listTrips?:  {
    __typename: "ModelTripConnection",
    items:  Array< {
      __typename: "Trip",
      id: string,
      name: string,
      destination: string,
      location:  {
        __typename: "Location",
        latitude?: number | null,
        longitude?: number | null,
      },
      startDate: string,
      endDate: string,
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
      days?:  {
        __typename: "ModelDayConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userTripsId?: string | null,
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
      name: string,
      destination: string,
      location:  {
        __typename: "Location",
        latitude?: number | null,
        longitude?: number | null,
      },
      startDate: string,
      endDate: string,
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
      days?:  {
        __typename: "ModelDayConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userTripsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateActivitySubscriptionVariables = {
  filter?: ModelSubscriptionActivityFilterInput | null,
};

export type OnCreateActivitySubscription = {
  onCreateActivity?:  {
    __typename: "Activity",
    id: string,
    dayId: string,
    startTime: string,
    endTime: string,
    name: string,
    description?: string | null,
    location:  {
      __typename: "Location",
      latitude?: number | null,
      longitude?: number | null,
    },
    type: ActivityType,
    createdAt: string,
    updatedAt: string,
    dayActivitiesTripId?: string | null,
    dayActivitiesDate?: string | null,
  } | null,
};

export type OnUpdateActivitySubscriptionVariables = {
  filter?: ModelSubscriptionActivityFilterInput | null,
};

export type OnUpdateActivitySubscription = {
  onUpdateActivity?:  {
    __typename: "Activity",
    id: string,
    dayId: string,
    startTime: string,
    endTime: string,
    name: string,
    description?: string | null,
    location:  {
      __typename: "Location",
      latitude?: number | null,
      longitude?: number | null,
    },
    type: ActivityType,
    createdAt: string,
    updatedAt: string,
    dayActivitiesTripId?: string | null,
    dayActivitiesDate?: string | null,
  } | null,
};

export type OnDeleteActivitySubscriptionVariables = {
  filter?: ModelSubscriptionActivityFilterInput | null,
};

export type OnDeleteActivitySubscription = {
  onDeleteActivity?:  {
    __typename: "Activity",
    id: string,
    dayId: string,
    startTime: string,
    endTime: string,
    name: string,
    description?: string | null,
    location:  {
      __typename: "Location",
      latitude?: number | null,
      longitude?: number | null,
    },
    type: ActivityType,
    createdAt: string,
    updatedAt: string,
    dayActivitiesTripId?: string | null,
    dayActivitiesDate?: string | null,
  } | null,
};

export type OnCreateDaySubscriptionVariables = {
  filter?: ModelSubscriptionDayFilterInput | null,
};

export type OnCreateDaySubscription = {
  onCreateDay?:  {
    __typename: "Day",
    id: string,
    tripId: string,
    date: string,
    activities?:  {
      __typename: "ModelActivityConnection",
      items:  Array< {
        __typename: "Activity",
        id: string,
        dayId: string,
        startTime: string,
        endTime: string,
        name: string,
        description?: string | null,
        type: ActivityType,
        createdAt: string,
        updatedAt: string,
        dayActivitiesTripId?: string | null,
        dayActivitiesDate?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    tripDaysId?: string | null,
    tripDaysStartDate?: string | null,
  } | null,
};

export type OnUpdateDaySubscriptionVariables = {
  filter?: ModelSubscriptionDayFilterInput | null,
};

export type OnUpdateDaySubscription = {
  onUpdateDay?:  {
    __typename: "Day",
    id: string,
    tripId: string,
    date: string,
    activities?:  {
      __typename: "ModelActivityConnection",
      items:  Array< {
        __typename: "Activity",
        id: string,
        dayId: string,
        startTime: string,
        endTime: string,
        name: string,
        description?: string | null,
        type: ActivityType,
        createdAt: string,
        updatedAt: string,
        dayActivitiesTripId?: string | null,
        dayActivitiesDate?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    tripDaysId?: string | null,
    tripDaysStartDate?: string | null,
  } | null,
};

export type OnDeleteDaySubscriptionVariables = {
  filter?: ModelSubscriptionDayFilterInput | null,
};

export type OnDeleteDaySubscription = {
  onDeleteDay?:  {
    __typename: "Day",
    id: string,
    tripId: string,
    date: string,
    activities?:  {
      __typename: "ModelActivityConnection",
      items:  Array< {
        __typename: "Activity",
        id: string,
        dayId: string,
        startTime: string,
        endTime: string,
        name: string,
        description?: string | null,
        type: ActivityType,
        createdAt: string,
        updatedAt: string,
        dayActivitiesTripId?: string | null,
        dayActivitiesDate?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    tripDaysId?: string | null,
    tripDaysStartDate?: string | null,
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
        name: string,
        destination: string,
        startDate: string,
        endDate: string,
        imgUrl?: string | null,
        ownerId: string,
        createdAt: string,
        updatedAt: string,
        userTripsId?: string | null,
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
        name: string,
        destination: string,
        startDate: string,
        endDate: string,
        imgUrl?: string | null,
        ownerId: string,
        createdAt: string,
        updatedAt: string,
        userTripsId?: string | null,
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
        name: string,
        destination: string,
        startDate: string,
        endDate: string,
        imgUrl?: string | null,
        ownerId: string,
        createdAt: string,
        updatedAt: string,
        userTripsId?: string | null,
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
    name: string,
    destination: string,
    location:  {
      __typename: "Location",
      latitude?: number | null,
      longitude?: number | null,
    },
    startDate: string,
    endDate: string,
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
    days?:  {
      __typename: "ModelDayConnection",
      items:  Array< {
        __typename: "Day",
        id: string,
        tripId: string,
        date: string,
        createdAt: string,
        updatedAt: string,
        tripDaysId?: string | null,
        tripDaysStartDate?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userTripsId?: string | null,
  } | null,
};

export type OnUpdateTripSubscriptionVariables = {
  filter?: ModelSubscriptionTripFilterInput | null,
};

export type OnUpdateTripSubscription = {
  onUpdateTrip?:  {
    __typename: "Trip",
    id: string,
    name: string,
    destination: string,
    location:  {
      __typename: "Location",
      latitude?: number | null,
      longitude?: number | null,
    },
    startDate: string,
    endDate: string,
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
    days?:  {
      __typename: "ModelDayConnection",
      items:  Array< {
        __typename: "Day",
        id: string,
        tripId: string,
        date: string,
        createdAt: string,
        updatedAt: string,
        tripDaysId?: string | null,
        tripDaysStartDate?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userTripsId?: string | null,
  } | null,
};

export type OnDeleteTripSubscriptionVariables = {
  filter?: ModelSubscriptionTripFilterInput | null,
};

export type OnDeleteTripSubscription = {
  onDeleteTrip?:  {
    __typename: "Trip",
    id: string,
    name: string,
    destination: string,
    location:  {
      __typename: "Location",
      latitude?: number | null,
      longitude?: number | null,
    },
    startDate: string,
    endDate: string,
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
    days?:  {
      __typename: "ModelDayConnection",
      items:  Array< {
        __typename: "Day",
        id: string,
        tripId: string,
        date: string,
        createdAt: string,
        updatedAt: string,
        tripDaysId?: string | null,
        tripDaysStartDate?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userTripsId?: string | null,
  } | null,
};

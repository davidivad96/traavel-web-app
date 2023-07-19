import { ModelInit, MutableModel, __modelMeta__, CompositeIdentifier, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

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
  OTHER = "OTHER"
}

type EagerLocation = {
  readonly latitude?: number | null;
  readonly longitude?: number | null;
}

type LazyLocation = {
  readonly latitude?: number | null;
  readonly longitude?: number | null;
}

export declare type Location = LazyLoading extends LazyLoadingDisabled ? EagerLocation : LazyLocation

export declare const Location: (new (init: ModelInit<Location>) => Location)

type EagerActivity = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<Activity, ['dayId', 'startTime']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly dayId: string;
  readonly startTime: string;
  readonly endTime: string;
  readonly name: string;
  readonly description?: string | null;
  readonly location: Location;
  readonly type: ActivityType | keyof typeof ActivityType;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly dayActivitiesTripId?: string | null;
  readonly dayActivitiesDate?: string | null;
}

type LazyActivity = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<Activity, ['dayId', 'startTime']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly dayId: string;
  readonly startTime: string;
  readonly endTime: string;
  readonly name: string;
  readonly description?: string | null;
  readonly location: Location;
  readonly type: ActivityType | keyof typeof ActivityType;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly dayActivitiesTripId?: string | null;
  readonly dayActivitiesDate?: string | null;
}

export declare type Activity = LazyLoading extends LazyLoadingDisabled ? EagerActivity : LazyActivity

export declare const Activity: (new (init: ModelInit<Activity>) => Activity) & {
  copyOf(source: Activity, mutator: (draft: MutableModel<Activity>) => MutableModel<Activity> | void): Activity;
}

type EagerDay = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<Day, ['tripId', 'date']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly tripId: string;
  readonly date: string;
  readonly activities?: (Activity | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly tripDaysId?: string | null;
  readonly tripDaysStartDate?: string | null;
}

type LazyDay = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<Day, ['tripId', 'date']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly tripId: string;
  readonly date: string;
  readonly activities: AsyncCollection<Activity>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly tripDaysId?: string | null;
  readonly tripDaysStartDate?: string | null;
}

export declare type Day = LazyLoading extends LazyLoadingDisabled ? EagerDay : LazyDay

export declare const Day: (new (init: ModelInit<Day>) => Day) & {
  copyOf(source: Day, mutator: (draft: MutableModel<Day>) => MutableModel<Day> | void): Day;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly name?: string | null;
  readonly avatarUrl?: string | null;
  readonly trips?: (Trip | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly name?: string | null;
  readonly avatarUrl?: string | null;
  readonly trips: AsyncCollection<Trip>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerTrip = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<Trip, ['id', 'startDate']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly destination: string;
  readonly location: Location;
  readonly startDate: string;
  readonly endDate: string;
  readonly imgUrl?: string | null;
  readonly owner?: User | null;
  readonly ownerId: string;
  readonly days?: (Day | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userTripsId?: string | null;
}

type LazyTrip = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<Trip, ['id', 'startDate']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly destination: string;
  readonly location: Location;
  readonly startDate: string;
  readonly endDate: string;
  readonly imgUrl?: string | null;
  readonly owner: AsyncItem<User | undefined>;
  readonly ownerId: string;
  readonly days: AsyncCollection<Day>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userTripsId?: string | null;
}

export declare type Trip = LazyLoading extends LazyLoadingDisabled ? EagerTrip : LazyTrip

export declare const Trip: (new (init: ModelInit<Trip>) => Trip) & {
  copyOf(source: Trip, mutator: (draft: MutableModel<Trip>) => MutableModel<Trip> | void): Trip;
}
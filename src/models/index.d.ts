import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly name?: string | null;
  readonly avatarUrl?: string | null;
  readonly plans?: (Plan | null)[] | null;
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
  readonly plans: AsyncCollection<Plan>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerPlan = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Plan, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly destination?: string | null;
  readonly startDate?: string | null;
  readonly endDate?: string | null;
  readonly owner?: User | null;
  readonly ownerId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPlan = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Plan, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly destination?: string | null;
  readonly startDate?: string | null;
  readonly endDate?: string | null;
  readonly owner: AsyncItem<User | undefined>;
  readonly ownerId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Plan = LazyLoading extends LazyLoadingDisabled ? EagerPlan : LazyPlan

export declare const Plan: (new (init: ModelInit<Plan>) => Plan) & {
  copyOf(source: Plan, mutator: (draft: MutableModel<Plan>) => MutableModel<Plan> | void): Plan;
}
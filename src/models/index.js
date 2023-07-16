// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Trip, Location } = initSchema(schema);

export {
  User,
  Trip,
  Location
};
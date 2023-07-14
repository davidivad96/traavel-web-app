// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Trip } = initSchema(schema);

export {
  User,
  Trip
};
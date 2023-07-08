// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Plan, User } = initSchema(schema);

export {
  Plan,
  User
};
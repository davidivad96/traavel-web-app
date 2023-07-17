// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ActivityType = {
  "FLIGHT": "FLIGHT",
  "HOTEL": "HOTEL",
  "MUSEUM": "MUSEUM",
  "VISIT": "VISIT",
  "RESTAURANT": "RESTAURANT",
  "BAR": "BAR",
  "CONCERT": "CONCERT",
  "MEETING": "MEETING",
  "THEATER": "THEATER",
  "CRUISE": "CRUISE",
  "OTHER": "OTHER"
};

const { Activity, Day, User, Trip, Location } = initSchema(schema);

export {
  Activity,
  Day,
  User,
  Trip,
  ActivityType,
  Location
};
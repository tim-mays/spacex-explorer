import axios from 'axios';
import { SPACEX_URI_ROOT } from './constants';
import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema
} from 'graphql';

const LaunchType = new GraphQLObjectType({
  name: 'Launch',
  fields: () => ({
    flight_number: { type: GraphQLInt },
    mission_name: { type: GraphQLString },
    launch_year: { type: GraphQLString },
    launch_date_local: { type: GraphQLString },
    launch_success: { type: GraphQLBoolean },
    rocket: { type: RocketType },
    links: { type: LinksType }
  })
});

const LinksType = new GraphQLObjectType({
  name: 'Links',
  fields: () => ({
    mission_patch_small: { type: GraphQLString },
    wikipedia: { type: GraphQLString }
  })
});

const RocketType = new GraphQLObjectType({
  name: 'Rocket',
  fields: () => ({
    rocket_id: { type: GraphQLString },
    rocket_name: { type: GraphQLString },
    rocket_type: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    launches: {
      type: new GraphQLList(LaunchType),
      resolve(parent, args) {
        return axios
          .get(`${SPACEX_URI_ROOT}/launches`)
          .then(response => response.data);
      }
    },
    launch: {
      type: LaunchType,
      args: {
        flight_number: { type: GraphQLInt }
      },
      resolve(parent, args) {
        return axios
          .get(`${SPACEX_URI_ROOT}/launches/${args.flight_number}`)
          .then(response => response.data);
      }
    },
    rockets: {
      type: new GraphQLList(RocketType),
      resolve(parent, args) {
        return axios
          .get(`${SPACEX_URI_ROOT}/rockets`)
          .then(response => response.data);
      }
    },
    rocket: {
      type: RocketType,
      args: {
        id: { type: GraphQLString }
      },
      resolve(parent, args) {
        return axios
          .get(`${SPACEX_URI_ROOT}/rockets/${args.id}`)
          .then(response => response.data);
      }
    }
  }
});

export default new GraphQLSchema({
  query: RootQuery
});

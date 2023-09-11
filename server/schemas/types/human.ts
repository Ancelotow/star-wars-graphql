import {GraphQLBoolean, GraphQLFloat, GraphQLID, GraphQLInt, GraphQLObjectType, GraphQLString} from "graphql";
import {raceType} from "./race";

const characterType = new GraphQLObjectType({
    name: 'Character',
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        mass: { type: GraphQLFloat },
        height: { type: GraphQLInt },
        isJedi: { type: GraphQLBoolean },
        birthYear: { type: GraphQLInt },
        avatarUrl: { type: GraphQLString },
        race: { type: raceType }
    },
})

export {characterType}
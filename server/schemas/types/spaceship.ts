import {GraphQLBoolean, GraphQLFloat, GraphQLID, GraphQLInt, GraphQLObjectType, GraphQLString} from "graphql";
import {raceType} from "./race";

const spaceshipType = new GraphQLObjectType({
    name: 'Spaceship',
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        mass: { type: GraphQLFloat },
        photoUrl: { type: GraphQLString },
        crewMax: { type: GraphQLInt },
        price:  { type: GraphQLFloat },
    },
})

export {spaceshipType}
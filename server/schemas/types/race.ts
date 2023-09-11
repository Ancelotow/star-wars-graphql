import {GraphQLID, GraphQLObjectType, GraphQLString} from "graphql";

const raceType = new GraphQLObjectType({
    name: 'Race',
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
    },
})

export {raceType}
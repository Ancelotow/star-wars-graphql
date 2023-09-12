import {GraphQLID, GraphQLObjectType, GraphQLString} from "graphql";
import {climatType} from "./climat";

const planetType = new GraphQLObjectType({
    name: 'Planet',
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        climat: {
            type: climatType,
            resolve: (obj) => obj.climatId,
        },
    },
})

export {planetType}
import {
    GraphQLFloat,
    GraphQLID,
    GraphQLInt,
    GraphQLObjectType,
    GraphQLString
} from "graphql";
import {characterType} from "./human";
import {getJsonData} from "../../../data/datasource";

const spaceshipType = new GraphQLObjectType({
    name: 'Spaceship',
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        mass: { type: GraphQLFloat },
        photoUrl: { type: GraphQLString },
        crewMax: { type: GraphQLInt },
        price:  { type: GraphQLFloat },
        captain: {
            type: characterType,
            resolve: (obj) => getJsonData().characters.filter((e: any) => obj.captainId == e.id)[0]
        }
    },
})

export {spaceshipType}
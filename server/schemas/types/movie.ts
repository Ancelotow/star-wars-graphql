import {
    GraphQLID,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString
} from "graphql";
import {planetType} from "./planet";
import {getJsonData} from "../../data/datasource";
import {humanType} from "./human";

const movieType = new GraphQLObjectType({
    name: 'Movie',
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        number: { type: GraphQLString },
        characters: {
            type: new GraphQLList(humanType),
            resolve: (obj) => getJsonData().characters.filter((e: any) => obj.charactersIds.includes(e.id))
        },
        planets: {
            type: new GraphQLList(planetType),
            resolve: (obj) => getJsonData().planets.filter((e: any) => obj.planetsIds.includes(e.id))
        },
    },
})

export {movieType}
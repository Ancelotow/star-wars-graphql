import {GraphQLFloat, GraphQLID, GraphQLInt, GraphQLObjectType, GraphQLString} from "graphql";
import {Character} from "../../domain/entities/character";
import {planetType} from "./planet";
import {PlanetService} from "../../domain/service/planet_service";

const planetService = new PlanetService()

const characterType = new GraphQLObjectType<Character>({
    name: 'Character',
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        mass: { type: GraphQLFloat },
        height: { type: GraphQLInt },
        avatarUrl: { type: GraphQLString },
        planetBorn: {
            type: planetType,
            resolve: (obj) => (obj.planetBornId) ? planetService.getById(obj.planetBornId) : null
        }
    },
})

export {characterType}
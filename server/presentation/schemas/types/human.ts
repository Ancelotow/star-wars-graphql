import {GraphQLBoolean, GraphQLFloat, GraphQLID, GraphQLInt, GraphQLObjectType, GraphQLString} from "graphql";
import {raceType} from "./race";
import {planetType} from "./planet";
import {getJsonData} from "../../../data/datasource";
import {Character} from "../../../domain/entities/character";
import {PlanetService} from "../../../domain/service/planet_service";

const planetService = new PlanetService()

const characterType = new GraphQLObjectType<Character>({
    name: 'Character',
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        mass: { type: GraphQLFloat },
        height: { type: GraphQLInt },
        isJedi: { type: GraphQLBoolean },
        birthYear: { type: GraphQLInt },
        avatarUrl: { type: GraphQLString },
        race: {
            type: raceType!,
            resolve: (obj) => obj.raceId,
        },
        planetBorn: {
            type: planetType!,
            resolve: (obj) =>  planetService.getById(obj.planetBornId)
        }
    },
})

export {characterType}
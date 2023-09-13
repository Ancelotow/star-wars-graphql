import {
    GraphQLFloat,
    GraphQLID,
    GraphQLInt,
    GraphQLObjectType,
    GraphQLString
} from "graphql";
import {characterType} from "./human";
import {getJsonData} from "../../../data/datasource";
import {CharacterService} from "../../../domain/service/character_service";
import {Spaceship} from "../../../domain/entities/spaceship";

const characterService = new CharacterService()

const spaceshipType = new GraphQLObjectType<Spaceship>({
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
            resolve: (obj) => characterService.getById(obj.captainId)
        }
    },
})

export {spaceshipType}
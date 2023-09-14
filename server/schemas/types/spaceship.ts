import {
    GraphQLObjectType
} from "graphql";
import {CharacterService} from "../../domain/service/character_service";
import {Spaceship} from "../../domain/entities/spaceship";
import {humanType} from "./human";

const characterService = new CharacterService()

const spaceshipType = new GraphQLObjectType<Spaceship>({
    name: 'Spaceship',
    fields: {
        captain: {
            type: humanType,
            resolve: (obj) => characterService.getById(obj.captainId)
        }
    },
})

export {spaceshipType}
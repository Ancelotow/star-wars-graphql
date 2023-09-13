import {characterType} from "./types/human";
import {GraphQLList, GraphQLObjectType} from "graphql";
import {getJsonData} from "../../data/datasource";
import {raceType} from "./types/race";
import {planetType} from "./types/planet";
import {movieType} from "./types/movie";
import {spaceshipType} from "./types/spaceship";
import {PlanetRepository} from "../../domain/repositories/planet_repository";
import {MovieRepository} from "../../domain/repositories/movie_repository";
import {SpaceshipRepository} from "../../domain/repositories/spaceship_repository";
import {CharacterService} from "../../domain/service/character_service";


const characterService = new CharacterService()
const planetRepository = new PlanetRepository()
const movieRepository = new MovieRepository()
const spaceshipRepository = new SpaceshipRepository()

export default new GraphQLObjectType({
    name: 'Query',
    fields: {
        lukeSkywalker: {
            type: characterType,
            resolve: async () => await characterService.getLukeSkywalker()
        },
        leiaOrgana: {
            type: characterType,
            resolve: () => characterService.getLeiaOrgana()
        },
        hanSolo: {
            type: characterType,
            resolve: () => characterService.getHanSolo()
        },
        characters: {
            type: new GraphQLList(characterType),
            resolve: () => characterService.getAll()
        },
        races: {
            type: new GraphQLList(raceType),
            resolve: () => getJsonData().characters.map((e: any) => e.race)
        },
        humans: {
            type: new GraphQLList(characterType),
            resolve: () => characterService.getHumans()
        },
        ewoks: {
            type: new GraphQLList(characterType),
            resolve: () => characterService.getEwoks()
        },
        droids: {
            type: new GraphQLList(characterType),
            resolve: () => characterService.getDroids()
        },
        spaceships: {
            type: new GraphQLList(spaceshipType),
            resolve: () => getJsonData().spaceships
        },
        planets: {
            type: new GraphQLList(planetType),
            resolve: () => getJsonData().planets
        },
        movies: {
            type: new GraphQLList(movieType),
            resolve: () => getJsonData().movies
        }
    }
});

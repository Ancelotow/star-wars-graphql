import {characterType} from "./types/human";
import {GraphQLList, GraphQLObjectType} from "graphql";
import {getJsonData} from "../../data/datasource";
import {raceType} from "./types/race";
import {planetType} from "./types/planet";
import {movieType} from "./types/movie";
import {spaceshipType} from "./types/spaceship";
import {CharacterService} from "../../domain/service/character_service";
import {PlanetService} from "../../domain/service/planet_service";
import {MovieService} from "../../domain/service/movie_service";
import {SpaceshipService} from "../../domain/service/spaceship_service";


const characterService = new CharacterService()
const planetService = new PlanetService()
const movieService = new MovieService()
const spaceshipService = new SpaceshipService()

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
            resolve: () => characterService.getAllRaces()
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
            resolve: () => spaceshipService.getAll()
        },
        planets: {
            type: new GraphQLList(planetType),
            resolve: () => planetService.getAll()
        },
        movies: {
            type: new GraphQLList(movieType),
            resolve: () => movieService.getAll()
        }
    }
});

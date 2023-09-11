import {characterType} from "./types/human";
import {GraphQLList, GraphQLObjectType} from "graphql";
import {getJsonData} from "../data/datasource";
import {raceType} from "./types/race";

export default new GraphQLObjectType({
    name: 'Query',
    fields: {
        lukeSkywalker: {
            type: characterType,
            resolve: () => getJsonData().characters[2]
        },
        leiaOrgana: {
            type: characterType,
            resolve: () => getJsonData().characters[0]
        },
        hanSolo: {
            type: characterType,
            resolve: () => getJsonData().characters[1]
        },
        characters: {
            type: new GraphQLList(characterType),
            resolve: () => getJsonData().characters
        },
        races: {
            type: new GraphQLList(raceType),
            resolve: () => getJsonData().characters.map((e: any) => e.race)
        },
        humans: {
            type: new GraphQLList(characterType),
            resolve: () => getJsonData().characters.filter((e: any) => e.race.id == 1)
        },
        ewoks: {
            type: new GraphQLList(characterType),
            resolve: () => getJsonData().characters.filter((e: any) => e.race.id == 3)
        },
        droids: {
            type: new GraphQLList(characterType),
            resolve: () => getJsonData().characters.filter((e: any) => e.race.id == 2)
        },
        spaceships: {
            type: new GraphQLList(characterType),
            resolve: () => getJsonData().spaceships
        }
    }
});

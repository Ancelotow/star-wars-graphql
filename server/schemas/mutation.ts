import {GraphQLObjectType} from "graphql";
import {addPlanetType} from "./mutators/add_planet";

export default new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addPlanet: addPlanetType,
    }
})
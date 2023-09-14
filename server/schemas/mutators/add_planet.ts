import {GraphQLNonNull, GraphQLString} from "graphql";
import {climatType} from "../types/climat";
import {planetType} from "../types/planet";
import {PlanetService} from "../../domain/service/planet_service";
import {Planet} from "../../domain/entities/planet";
import {mutationWithClientMutationId} from "graphql-relay";

const _service = new PlanetService()

const addPlanetType = mutationWithClientMutationId({
    name: 'AddPlanet',
    inputFields: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        climat: { type: new GraphQLNonNull(climatType) },
    },
    outputFields: {
        planet: { type: planetType, },
    },
    mutateAndGetPayload: async (input) => {
        console.log(input)
        const planet = new Planet()
        planet.climatId = input.climat
        planet.name = input.name
        const id = await _service.add(planet)
        const planetAdded = await _service.getById(id)
        return { planet: planetAdded }
    },
})

export {addPlanetType}
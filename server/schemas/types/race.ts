import {GraphQLEnumType} from "graphql";

const raceType = new GraphQLEnumType({
    name: 'Race',
    values: {
        HUMAN: { value: 1 },
        DROID: { value: 2 },
        EWOK: { value: 3 },
    },
})

export {raceType}
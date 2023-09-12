import {GraphQLEnumType} from "graphql";

const climatType = new GraphQLEnumType({
    name: 'Climat',
    values: {
        DESERT: { value: 1 },
        VOLCANIC: { value: 2 },
        TROPICAL: { value: 3 },
        URBAIN: { value: 4 },
        RAIN: { value: 5 },
    },
})

export {climatType}
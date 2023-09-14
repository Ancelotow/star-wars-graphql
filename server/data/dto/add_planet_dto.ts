import {Planet} from "../../domain/entities/planet";

class AddPlanetDto {
    name: string
    climatId: number

    constructor(planet: Planet) {
        this.name = planet.name
        this.climatId = planet.climatId
    }
}

export {AddPlanetDto}
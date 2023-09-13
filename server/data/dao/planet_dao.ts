import {Planet} from "../../domain/entities/planet";

class PlanetDao {
    id: number;
    name: string;
    climat_id: number;

    public constructor(init?:Partial<PlanetDao>) {
        Object.assign(this, init);
    }

    toEntity(): Planet {
        const planet = new Planet();
        planet.id = this.id;
        planet.name = this.name;
        planet.climatId = this.climat_id;
        return planet
    }
}

export {PlanetDao}
import {PlanetRepository} from "../repositories/planet_repository";
import {Planet} from "../entities/planet";

class PlanetService {

    private _repository = new PlanetRepository()

    getAll(): Promise<Array<Planet>> {
        return this._repository.get()
    }

    async getById(id: number): Promise<Planet> {
        const results = await this._repository.get()
        return results.filter((e: Planet) => e.id == id)[0]
    }

    async add(planet: Planet): Promise<number> {
        return this._repository.add(planet)
    }

}

export {PlanetService}
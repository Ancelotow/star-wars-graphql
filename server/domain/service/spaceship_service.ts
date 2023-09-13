import {SpaceshipRepository} from "../repositories/spaceship_repository";
import {Spaceship} from "../entities/spaceship";

class SpaceshipService {

    private _repository = new SpaceshipRepository()

    getAll(): Promise<Array<Spaceship>> {
        return this._repository.get()
    }

    async getById(id: number): Promise<Spaceship> {
        const results = await this._repository.get()
        return results.filter((e: Spaceship) => e.id == id)[0]
    }

}

export {SpaceshipService}
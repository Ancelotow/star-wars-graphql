import {PlanetDatasource} from "../../data/datasource/db/planet_datasource";
import {Planet} from "../entities/planet";
import {PlanetDao} from "../../data/dao/planet_dao";
import {AddPlanetDto} from "../../data/dto/add_planet_dto";

class PlanetRepository {

    private _dataSource = new PlanetDatasource()

    async get(): Promise<Array<Planet>> {
        const result = await this._dataSource.get()
        return result.map((e: PlanetDao) => e.toEntity())
    }

    async add(planet: Planet): Promise<number> {
        const planetDto = new AddPlanetDto(planet)
        return this._dataSource.add(planetDto)
    }

}

export {PlanetRepository}
import {PlanetDatasource} from "../../data/datasource/db/planet_datasource";
import {Planet} from "../entities/planet";
import {PlanetDao} from "../../data/dao/planet_dao";

class PlanetRepository {

    private _dataSource = new PlanetDatasource()

    async get(): Promise<Array<Planet>> {
        const result = await this._dataSource.get()
        return result.map((e: PlanetDao) => e.toEntity())
    }

}

export {PlanetRepository}
import {Spaceship} from "../entities/spaceship";
import {SpaceshipDatasource} from "../../data/datasource/db/spaceship_datasource";
import {SpaceshipDao} from "../../data/dao/spaceship_dao";

class SpaceshipRepository {

    private _dataSource = new SpaceshipDatasource()

    async get(): Promise<Array<Spaceship>> {
        const result = await this._dataSource.get()
        return result.map((e: SpaceshipDao) => e.toEntity())
    }

}

export {SpaceshipRepository}
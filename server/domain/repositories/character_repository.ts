import {Character} from "../entities/character";
import {CharacterDatasource} from "../../data/datasource/db/character_datasource";
import {CharacterDao} from "../../data/dao/character_dao";

class CharacterRepository {

    private _dataSource = new CharacterDatasource()

    async get(): Promise<Array<Character>> {
        const result = await this._dataSource.get()
        return result.map((e: CharacterDao) => e.toEntity())
    }

}

export {CharacterRepository}
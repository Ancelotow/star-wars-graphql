import {MovieDatasource} from "../../data/datasource/db/movie_datasource";
import {Movie} from "../entities/movie";
import {MovieDao} from "../../data/dao/movie_dao";

class MovieRepository {

    private _dataSource = new MovieDatasource()

    async get(): Promise<Array<Movie>> {
        const result = await this._dataSource.get()
        return result.map((e: MovieDao) => e.toEntity())
    }

}

export {MovieRepository}
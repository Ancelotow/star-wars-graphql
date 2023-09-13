import {dbClient} from "./db_service";
import {MovieDao} from "../../dao/movie_dao";
import {Query} from "ts-postgres";

class MovieDatasource {

    async get(): Promise<Array<MovieDao>> {
        const query = new Query('SELECT * FROM movie')
        const result = await dbClient.execute(query);
        let movies: Array<MovieDao> = []
        result.rows.forEach((e: any) => movies.push(
            new MovieDao({id: e[0], name: e[1], number: e[2], order: e[3]})
        ));
        return movies
    }

}

export {MovieDatasource}
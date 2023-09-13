import {MovieRepository} from "../repositories/movie_repository";
import {Movie} from "../entities/movie";

class MovieService {

    private _repository = new MovieRepository()

    getAll(): Promise<Array<Movie>> {
        return this._repository.get()
    }

    async getById(id: number): Promise<Movie> {
        const results = await this._repository.get()
        return results.filter((e: Movie) => e.id == id)[0]
    }

}

export {MovieService}

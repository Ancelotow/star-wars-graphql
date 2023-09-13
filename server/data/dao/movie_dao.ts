import {Movie} from "../../domain/entities/movie";

class MovieDao {
    id: number
    name: string
    number: number
    order: number

    public constructor(init?:Partial<MovieDao>) {
        Object.assign(this, init);
    }

    toEntity(): Movie {
        const movie = new Movie();
        movie.id = this.id;
        movie.name = this.name;
        movie.number = this.number;
        movie.order = this.order;
        return movie
    }
}

export {MovieDao}

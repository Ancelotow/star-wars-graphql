import {dbClient} from "./db_service";
import {PlanetDao} from "../../dao/planet_dao";
import {Query} from "ts-postgres";
import {AddPlanetDto} from "../../dto/add_planet_dto";

class PlanetDatasource {

    async get(): Promise<Array<PlanetDao>> {
        const query = new Query('SELECT * FROM planet')
        const result = await dbClient.execute(query);
        let planets: Array<PlanetDao> = []
        result.rows.forEach((e: any) => planets.push(
            new PlanetDao({id: e[0], name: e[1], climat_id: e[2]})
        ));
        return planets
    }

    async add(planet: AddPlanetDto): Promise<number> {
        const query = new Query(
            'INSERT INTO planet(name, climat_id) VALUES($1, $2) RETURNING id',
            [planet.name, planet.climatId]
        )
        const result = await dbClient.execute(query);
        return parseInt(result.rows[0][0].toString())
    }

}

export {PlanetDatasource}
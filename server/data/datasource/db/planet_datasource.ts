import {dbClient} from "./db_service";
import {PlanetDao} from "../../dao/planet_dao";
import {Query} from "ts-postgres";

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

}

export {PlanetDatasource}
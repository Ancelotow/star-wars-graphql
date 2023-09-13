import {dbClient} from "./db_service";
import {SpaceshipDao} from "../../dao/spaceship_dao";
import {Query} from "ts-postgres";

class SpaceshipDatasource {

    async get(): Promise<Array<SpaceshipDao>> {
        const query = new Query('SELECT * FROM spaceship')
        const result = await dbClient.execute(query);
        let ships: Array<SpaceshipDao> = []
        result.rows.forEach((e: any) => ships.push(
            new SpaceshipDao({id: e[0], name: e[1], mass: e[2],  photo_url: e[3],  crew_max: e[4],  price: e[5],  captain_id: e[6]})
        ));
        return ships
    }

}

export {SpaceshipDatasource}
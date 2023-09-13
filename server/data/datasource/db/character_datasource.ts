import {CharacterDao} from "../../dao/character_dao";
import {dbClient} from "./db_service";
import {Query} from "ts-postgres";


class CharacterDatasource {

    async get(): Promise<Array<CharacterDao>> {
        const query = new Query('SELECT * FROM character')
        const result = await dbClient.execute(query);
        let chars: Array<CharacterDao> = []
        result.rows.forEach((e: any) => chars.push(
            new CharacterDao({id: e[0], name: e[1], height: e[2], mass: e[3], is_jedi: e[4], birth_year: e[5], avatar_url: e[6], race_id: e[7], planet_born_id: e[8]})
        ));
        return chars
    }

}

export {CharacterDatasource}
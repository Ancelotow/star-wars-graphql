import {Character} from "../../domain/entities/character";

class CharacterDao {
    id: number
    name: string
    height: number
    mass: number
    is_jedi: boolean
    birth_year: number
    avatar_url: string
    race_id: number
    planet_born_id: number

    public constructor(init?:Partial<CharacterDao>) {
        Object.assign(this, init);
    }

    toEntity(): Character {
        const char = new Character();
        char.id = this.id;
        char.name = this.name;
        char.height = this.height;
        char.mass = this.mass;
        char.isJedi = this.is_jedi;
        char.birthYear = this.birth_year;
        char.avatarUrl = this.avatar_url;
        char.raceId = this.race_id;
        char.planetBornId = this.planet_born_id;
        return char
    }
}

export {CharacterDao}
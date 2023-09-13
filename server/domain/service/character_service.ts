import {CharacterRepository} from "../repositories/character_repository";
import {Character} from "../entities/character";

class CharacterService {

    private _repository = new CharacterRepository()

    async getLukeSkywalker(): Promise<Character> {
        const result = await this._repository.get()
        return result.filter((e: Character) => e.id == 3)[0]
    }

    getAll(): Promise<Array<Character>> {
        return this._repository.get()
    }

    async getLeiaOrgana(): Promise<Character> {
        const result = await this._repository.get()
        return result.filter((e: Character) => e.id == 1)[0]
    }

    async getHanSolo(): Promise<Character> {
        const result = await this._repository.get()
        return result.filter((e: Character) => e.id == 2)[0]
    }

    async getHumans(): Promise<Array<Character>> {
        const result = await this._repository.get()
        return result.filter((e: Character) => e.raceId == 1)
    }

    async getEwoks(): Promise<Array<Character>> {
        const result = await this._repository.get()
        return result.filter((e: Character) => e.raceId == 3)
    }

    async getDroids(): Promise<Array<Character>> {
        const result = await this._repository.get()
        return result.filter((e: Character) => e.raceId == 2)
    }

    async getAllRaces(): Promise<Array<number>> {
        const result = await this._repository.get()
        return result.map((e: Character) => e.raceId)
    }

    async getById(id: number): Promise<Character> {
        const result = await this._repository.get()
        return result.filter((e: Character) => e.id == id)[0]
    }

}

export {CharacterService}
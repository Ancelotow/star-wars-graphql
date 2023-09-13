import {Spaceship} from "../../domain/entities/spaceship";

class SpaceshipDao {
    id: number
    name: string
    mass: number
    photo_url: string
    crew_max: number
    price: number
    captain_id: number

    public constructor(init?:Partial<SpaceshipDao>) {
        Object.assign(this, init);
    }

    toEntity(): Spaceship {
        const ship = new Spaceship()
        ship.id = this.id
        ship.name = this.name
        ship.mass = this.mass
        ship.photoUrl = this.photo_url
        ship.crewMax = this.crew_max
        ship.price = this.price
        ship.captainId = this.captain_id
        return ship
    }
}

export {SpaceshipDao}
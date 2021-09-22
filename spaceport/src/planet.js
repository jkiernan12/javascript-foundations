class Planet {
    constructor(planet) {
        this.name = planet.name;
        this.shop = planet.shop;
        this.coordinates = planet.coordinates;
        this.currentShip;
    }

    landShip(ship) {
        this.currentShip = ship;
    }

    calculateDistance(anotherPlanet) {
        var xdiff = this.coordinates.x - anotherPlanet.coordinates.x;
        var ydiff = this.coordinates.y - anotherPlanet.coordinates.x;
        var zdiff = this.coordinates.z - anotherPlanet.coordinates.z;
        var result = Math.sqrt((xdiff ** 2) + (ydiff ** 2) + (zdiff ** 2))
        return result;
    }

    refuel(ship) {
        ship.fuel = ship.fuelCapacity;
    }

    giveClearance(planet) {
        if (!this.currentShip.fuel) {
            return `Clearance denied: Cannot fly without fuel`
        } else {
            planet.landShip(this.currentShip);
            this.currentShip.fuel = 0;
            delete this.currentShip;
            return `Clearance granted: Enjoy your trip to ${planet.name}`
        }

    }
}

module.exports = Planet;
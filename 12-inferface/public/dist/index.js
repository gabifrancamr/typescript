// Uma Interface é outra maneira de declarar um tipo para um objeto, portanto funciona de forma semelhante
let sum;
sum.name = "Sol";
sum.mass = 1.989 * (Math.pow(10, 30));
sum.age = 4000;
sum.planets = [];
// Classes podem implementar interfaces
// Nesse caso ela cria o que chamamos de contrato,
// pois obriga a classe a implementar tudo o que
// foi definido na interface
class MilkWayPlanet {
    constructor(name, mass, population) {
        this.name = name;
        this.mass = mass;
        this.population = population;
    }
    createSatellite(name) {
    }
}

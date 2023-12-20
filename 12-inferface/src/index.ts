// Uma Interface é outra maneira de declarar um tipo para um objeto, portanto funciona de forma semelhante

interface CelestialBoody {
    name: string
    mass: number
}

// Interfaces podem ser herdadas ou herdar umas às outras
interface Star extends CelestialBoody {
    age: number
    planets: Planet[]
}

interface Planet extends CelestialBoody {
    population: number
    createSatellite: (name: string) => void
}

let sum: Star

sum.name = "Sol"
sum.mass = 1.989 * (10 ** 30)
sum.age = 4000
sum.planets = []

// Aliases também podem usar herança mas com uma sintaxe um pouco diferente (e mais estranha)
type Asteroid = CelestialBoody & {
    size: number
}

// Classes podem implementar interfaces
// Nesse caso ela cria o que chamamos de contrato,
// pois obriga a classe a implementar tudo o que
// foi definido na interface

class MilkWayPlanet implements Planet {
    // Em typescript precisamos explicitar os atributos da classe dessa forma
    name: string
    mass: number
    population: number;
    
    constructor(name: string, mass: number, population:number) {
        this.name = name
        this.mass = mass
        this.population = population
    }

    createSatellite(name: string) {

    }
}

// Apesar de serem poucas, existem diferenças entre Types e Interfaces
// Uma delas é a possibilidade de adicionar mais propriedades definindo novamente a mesma interface
interface Planet {
    satellites?: string[]
}
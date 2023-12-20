const planets = [];
function addPlanet(name, coordinate, situation) {
    const planet = {
        name,
        coordinate,
        situation,
        satellites: []
    };
    planets.push(planet);
    alert(`O planeta ${name} foi adicionado com sucesso`);
}
function findPlanet(name) {
    const planet = planets.find(planet => planet.name === name);
    return planet !== null && planet !== void 0 ? planet : false;
}
function updateSituation(situation, planet) {
    const beforeSituation = planet.situation;
    planet.situation = situation;
    alert(`A situação do planeta ${planet.name} mudou de ${beforeSituation} para ${planet.situation}`);
}
function addSatellite(name, planet) {
    planet.satellites.push(name);
    alert(`O satélite ${name} foi adicionado ao planeta ${planet.name} com sucesso!`);
}
function removeSatellite(name, planet) {
    planet.satellites = planet.satellites.filter(satellite => satellite !== name);
    alert(`O satélite ${name} foi removido do planeta ${planet.name} com sucesso!`);
}
function promptValidSituation() {
    let situation;
    let validation = false;
    while (!validation) {
        const situationInput = Number(prompt(`Informe a situação do planeta:\n1 - Habitado\n2 - Habitável\n3 - Inabitável\n4 - Inexplorado`));
        switch (situationInput) {
            case 1:
                situation = "Habitado";
                validation = true;
                break;
            case 2:
                situation = "Habitável";
                validation = true;
                break;
            case 3:
                situation = "Inabitável";
                validation = true;
                break;
            case 4:
                situation = "Inexplorado";
                validation = true;
                break;
            default:
                alert("Opção inválida, retornando ao menu...");
                break;
        }
    }
    return situation;
}
function firstMenuOption() {
    const name = prompt("Qual o nome do planeta?");
    const coordinateA = Number(prompt("Qual o número da primeira coordenada?"));
    const coordinateB = Number(prompt("Qual o número da segunda coordenada?"));
    const coordinateC = Number(prompt("Qual o número da terceira coordenada?"));
    const coordinateD = Number(prompt("Qual o número da quarta coordenada?"));
    const situation = promptValidSituation();
    const confirmation = confirm(`Confirma o registro do planeta ${name}?\nCoordenadas: [${coordinateA}, ${coordinateB}, ${coordinateC}, ${coordinateD}]\nSituação: ${situation}`);
    if (confirmation) {
        addPlanet(name, [coordinateA, coordinateB, coordinateC, coordinateD], situation);
    }
    else {
        alert(`Planeta ${name} não adicionado`);
    }
}
function secondMenuOption() {
    const planetName = prompt(`Informe o nome do planeta:`);
    const planet = findPlanet(planetName);
    const situation = promptValidSituation();
    if (planet) {
        updateSituation(situation, planet);
    }
    else {
        alert(`Planeta ${planetName} não encontrado, tente novamente`);
    }
}
function thirdMenuOption() {
    const planetName = prompt("Informe o nome do planeta");
    const nameSatellite = prompt(`Informe o nome do satélite`);
    const planet = findPlanet(planetName);
    if (planet) {
        addSatellite(nameSatellite, planet);
    }
    else {
        alert(`O Planeta ${planetName} não foi encontrado, tente novamente`);
    }
}
function fourthMenuOption() {
    const planetName = prompt("Informe o nome do planeta");
    const nameSatellite = prompt(`Informe o nome do satélite`);
    const planet = findPlanet(planetName);
    if (planet) {
        removeSatellite(nameSatellite, planet);
    }
    else {
        alert(`O Planeta ${planetName} não foi encontrado, tente novamente`);
    }
}
function fifithMenuOption() {
    let list = 'Planetas: \n';
    planets.forEach(planet => {
        const [a, b, c, d] = planet.coordinate;
        list +=
            `Nome: ${planet.name}
        Coordernadas: (${a}, ${b}, ${c}, ${d})
        Situação: ${planet.situation}
        Quantidade de satélites: ${planet.satellites.length}
        Satélites: ${planet.satellites.length > 0 ? planet.satellites : "Não há satélites adicionados a esse planeta"}\n
        `;
    });
    alert(list);
}
let menu;
do {
    menu = Number(prompt(`Menu
    1 - Registrar novo planeta
    2 - Atualizar situação do planeta
    3 - Adicionar satélite ao planeta
    4 - Remover satélite do planeta
    5 - Listar todos os Planetas
    6 - Sair
    `));
    switch (menu) {
        case 1:
            firstMenuOption();
            break;
        case 2:
            secondMenuOption();
            break;
        case 3:
            thirdMenuOption();
            break;
        case 4:
            fourthMenuOption();
            break;
        case 5:
            fifithMenuOption();
            break;
        case 6:
            alert("Saindo do menu");
            break;
        default:
            alert("Opção inválida, tente novamente");
            break;
    }
} while (menu !== 6);

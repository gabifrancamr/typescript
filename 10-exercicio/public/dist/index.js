const planets = [];
function addPlanet(name, coordinates, situation) {
    planets.push({
        name,
        coordinates,
        situation,
        satellites: [],
    });
    alert(`O planeta ${name} foi registrado com sucesso!`);
}
function findPlanet(name) {
    const planet = planets.find((planet) => planet.name === name);
    return planet !== null && planet !== void 0 ? planet : false;
}
function updateSituation(situation, planet) {
    const beforeSituation = planet.situation;
    planet.situation = situation;
    alert(`A situação do planeta ${planet.name} foi atualizada de ${beforeSituation} para ${situation}`);
}
function addSatellite(name, planet) {
    planet.satellites.push(name);
    alert(`O satélite ${name} foi adicionado ao planeta ${planet.name}`);
}
function removeSatellite(name, planet) {
    planet.satellites = planet.satellites.filter((satellite) => satellite !== name);
    alert(`O satélite ${name} foi removido do planeta ${planet.name}`);
}
function promptValidSituation() {
    let situation;
    let validSituation = false;
    while (validSituation === false) {
        const situationInput = prompt(`Informe a situação do planeta:\n1 - Habitado\n2 - Habitável\n3 - Inabitável\n4 - Inexplorado`);
        switch (situationInput) {
            case "1":
                situation = "Habitado";
                validSituation = true;
                break;
            case "2":
                situation = "Habitável";
                validSituation = true;
                break;
            case "3":
                situation = "Inabitável";
                validSituation = true;
                break;
            case "4":
                situation = "Inexplorado";
                validSituation = true;
                break;
            default:
                alert("Situação Inválida!");
                break;
        }
    }
    return situation;
}
function promptValidPlanet(callback) {
    //Esta função solicita ao usuário o nome de um planeta por meio da função prompt e, em seguida, tenta encontrar esse planeta usando a função findPlanet. Se o planeta for encontrado, ela chama a função de retorno de chamada (callback) fornecida como argumento, passando o objeto do planeta encontrado como argumento para essa função de retorno.
    const planetName = prompt("Informe o nome do planeta:");
    const planet = findPlanet(planetName);
    if (planet) {
        callback(planet);
    }
    else {
        alert("Planeta não encontrado! Retornando ao menu...");
    }
}
function firstMenuOption() {
    const name = prompt("Informe o nome do planeta:");
    const coordinateA = Number(prompt('Informe a primeira coordenada:'));
    const coordinateB = Number(prompt('Informe a segunda coordenada:'));
    const coordinateC = Number(prompt('Informe a terceira coordenada:'));
    const coordinateD = Number(prompt('Informe a quarta coordenada:'));
    //Aqui a nossa função ajuda a ter um código mais organizado
    const situation = promptValidSituation();
    const confirmation = confirm(`Confirma o resgistro do planeta ${name}?
    Coordenadas: (${coordinateA}, ${coordinateB}, ${coordinateC}, ${coordinateD})
    Situação: ${situation}`);
    if (confirmation) {
        addPlanet(name, [coordinateA, coordinateB, coordinateC, coordinateD], situation);
    }
}
function secondMenuOption() {
    promptValidPlanet(planet => {
        const situation = promptValidSituation();
        updateSituation(situation, planet);
    });
}
function thirdMenuOption() {
    promptValidPlanet(planet => {
        const satellite = prompt("Informe o nome do satélite a ser adicionado");
        addSatellite(satellite, planet);
    });
}
function fourthMenuOption() {
    promptValidPlanet(planet => {
        const satellite = prompt("Informe o nome do satélite a ser removido");
        removeSatellite(satellite, planet);
    });
}
function fifithMenuOption() {
    let list = 'Planetas: \n';
    planets.forEach(planet => {
        const [a, b, c, d] = planet.coordinates;
        list += `
        Nome: ${planet.name}
        Coordenadas: (${a}, ${b}, ${c}, ${d})
        Situação: ${planet.situation}
        Quantidade satélites: ${planet.satellites.length}
        Satélites: ${planet.satellites.length > 0 ? planet.satellites : 0}
        `;
    });
    alert(list);
}
let userOption = 0;
while (userOption !== 6) {
    const menu = `Menu
    1 - Registrar novo planeta
    2 - Atualizar situação do planeta
    3 - Adicionar um satélite ao planeta
    4 - Remover um satélite do planeta
    5 - Listar todos os planetas
    6 - sair`;
    userOption = Number.parseInt(prompt(menu));
    switch (userOption) {
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
            alert("Saido do menu");
            break;
        default:
            alert("Opção inválida! Retornando ao menu principal");
            break;
    }
}

function newSpaceship() {
    var menu;
    var allSpaceships = [];
    do {
        menu = prompt("Menu\n        Voc\u00EA deseja:\n        1 - Criar uma nova nave \n        2 - Adicionar membros a nave\n        3 - Enviar nave \u00E0 miss\u00E3o\n        4 - Listar todas as novas\n        5 - Sair do menu\n        ");
        switch (menu) {
            case "1":
                var name_1 = prompt("Qual o nome da nave?");
                var pilot = prompt("Qual o nome do piloto?");
                var crewLimit = Number(prompt("Qual o tamanho máximo da tripulação?"));
                var infoSpaceship = {
                    name: name_1,
                    pilot: pilot,
                    crewLimit: crewLimit,
                    crew: [],
                    inMission: false,
                };
                allSpaceships.push(infoSpaceship);
                console.log(allSpaceships);
                break;
            case "2":
                var names = [];
                for (var i = 0; i < allSpaceships.length; i++) {
                    var item = ["".concat(i, " - ").concat(allSpaceships[i].name)];
                    names.push(item);
                }
                var idSpaceship = Number(prompt("Em qual nave voc\u00EA deseja adc tripulantes? Digite um n\u00FAmero ".concat(names)));
                if (allSpaceships[idSpaceship].crew.length < allSpaceships[idSpaceship].crewLimit) {
                    var nome = prompt("Nome do novo tripulante");
                    allSpaceships[idSpaceship].crew.push(nome);
                    alert("Tripulante adicionado com sucesso, quantidade de vagas restante para ".concat(allSpaceships[idSpaceship].name, " restante: ").concat(allSpaceships[idSpaceship].crewLimit - allSpaceships[idSpaceship].crew.length, "  "));
                }
                else {
                    alert("Tripulação da nave já cheia");
                }
                break;
            case "3":
                var namesPMissao = [];
                for (var i = 0; i < allSpaceships.length; i++) {
                    var item = ["".concat(i, " - ").concat(allSpaceships[i].name)];
                    namesPMissao.push(item);
                }
                var idSpaceshipParaMissao = Number(prompt("Qual nave deseja enviar \u00E0 miss\u00E3o? ".concat(namesPMissao)));
                allSpaceships[idSpaceshipParaMissao].inMission = true;
                alert("".concat(allSpaceships[idSpaceshipParaMissao].name, " enviada com sucesso!"));
                break;
            case "4":
                for (var i = 0; i < allSpaceships.length; i++) {
                    var spaceshipInfo = allSpaceships[i];
                    var formattedInfo = "\n                    Nave: ".concat(spaceshipInfo.name, "\n                    Piloto: ").concat(spaceshipInfo.pilot, "\n                    Tripula\u00E7\u00E3o Atual: ").concat(spaceshipInfo.crew.join(', '), "\n                    Limite de Tripula\u00E7\u00E3o: ").concat(spaceshipInfo.crewLimit, "\n                    Miss\u00E3o Ativa: ").concat(spaceshipInfo.inMission ? 'Sim' : 'Não', "\n                ");
                    alert(formattedInfo);
                }
                break;
            default:
                break;
        }
    } while (menu !== "5");
}
newSpaceship();

function newSpaceship() {
    let menu
    let allSpaceships = [] 

    do {
        menu = prompt(`Menu
        Você deseja:
        1 - Criar uma nova nave 
        2 - Adicionar membros a nave
        3 - Enviar nave à missão
        4 - Listar todas as novas
        5 - Sair do menu
        `)

        switch (menu) {
            case "1":
                const name = prompt("Qual o nome da nave?")!;
                const pilot = prompt("Qual o nome do piloto?")!;
                const crewLimit = Number(prompt("Qual o tamanho máximo da tripulação?"));
                
                const infoSpaceship = {
                    name: name,
                    pilot: pilot,
                    crewLimit: crewLimit,
                    crew: [] as string[],
                    inMission: false,
                };

                allSpaceships.push(infoSpaceship)

                console.log(allSpaceships)
                break;
            case "2":
                let names = []

                for(let i = 0; i < allSpaceships.length; i++) {
                    let item = [`${i} - ${allSpaceships[i].name}`]
                    names.push(item)
                   
                }
                const idSpaceship = Number(prompt(`Em qual nave você deseja adc tripulantes? Digite um número ${names}`))
                if(allSpaceships[idSpaceship].crew.length < allSpaceships[idSpaceship].crewLimit) {
                    const nome = prompt("Nome do novo tripulante")
                    allSpaceships[idSpaceship].crew.push(nome)
                    alert(`Tripulante adicionado com sucesso, quantidade de vagas restante para ${allSpaceships[idSpaceship].name} restante: ${allSpaceships[idSpaceship].crewLimit - allSpaceships[idSpaceship].crew.length}  `)
                } else {
                    alert("Tripulação da nave já cheia")
                } 
                break;
            case "3":
                let namesPMissao = []

                for(let i = 0; i < allSpaceships.length; i++) {
                    let item = [`${i} - ${allSpaceships[i].name}`]
                    namesPMissao.push(item)
                   
                }
                const idSpaceshipParaMissao = Number(prompt(`Qual nave deseja enviar à missão? ${namesPMissao}`))

                allSpaceships[idSpaceshipParaMissao].inMission = true

                alert(`${allSpaceships[idSpaceshipParaMissao].name} enviada com sucesso!`)

                break;
            case "4":
            
            for (let i = 0; i < allSpaceships.length; i++) {
                const spaceshipInfo = allSpaceships[i];
                const formattedInfo = `
                    Nave: ${spaceshipInfo.name}
                    Piloto: ${spaceshipInfo.pilot}
                    Tripulação Atual: ${spaceshipInfo.crew.join(', ')}
                    Limite de Tripulação: ${spaceshipInfo.crewLimit}
                    Missão Ativa: ${spaceshipInfo.inMission ? 'Sim' : 'Não'}
                `;
                alert(formattedInfo);
            }
                break;

    
            default:
                break;
        }
    } while (menu !== "5");

}

newSpaceship()


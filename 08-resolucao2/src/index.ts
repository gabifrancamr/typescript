let spaceships = [];
let menu 

function newSpaceship(name: string, pilot: string, crewLimit: number) {
  const spaceship = {
    name,
    pilot,
    crewLimit,
    crew: [],
    inMission: false,
  };

  spaceships.push(spaceship);

  alert(`${spaceship.name} salva com sucesso!`);
}

function findSpaceship(name: string) {
  let spaceship: {
    name: string;
    pilot: string;
    crewLimit: number;
    crew: string[];
    inMission: boolean;
  };

  spaceship = spaceships.find((ship) => ship.name === name);

  return spaceship;
}

function newMember(
  member: string,
  spaceship: { name: string; crewLimit: number; crew: string[] }
) {

    if (spaceship.crew.length >= spaceship.crewLimit) {
      alert(`Nave cheia, ${member} não pode ser adicionado aqui`);
    } else {
      spaceship.crew.push(member);

      alert(`${member} foi adicionado à ${spaceship.name} com sucesso`);
    }
  
}

function sendInMission(spaceship: {
  name: string;
  crew: string[];
  crewLimit: number;
  inMission: boolean;
}) {
  

    if (spaceship.inMission) {
      alert(`A nave ${spaceship.name} já está em uma missão`);
    } else if (spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)) {
      alert(`Para que ${
        spaceship.name
      } seja enviada em uma missão é necessário adicionar mais tripulantes
            Quantidade atual: ${spaceship.crew.length}
            Quantidade necessária: ${Math.floor(spaceship.crewLimit / 3)}
            `);
    } else {
      spaceship.inMission = true;
      alert(`Nave ${spaceship.name} enviada para missão com sucesso!`);
    }
  
}

function showAllSpaceships() {
  let list = '';
  spaceships.forEach(
    (spaceship: {
      name: string;
      pilot: string;
      crew: string[];
      crewLimit: number;
      inMission: boolean;
    }) => {
    list +=  `
    Nome da nave: ${spaceship.name}
    Piloto: ${spaceship.pilot}
    Em missão: ${spaceship.inMission ? "Sim" : "Não"}
    Tamanho máximo da tripulação: ${spaceship.crewLimit}
    Equipe: ${spaceship.crew.length} membros
    Membros: ${spaceship.crew}
    `;

    }
  );

  alert(list)
}

function firstOption() {
    const name = prompt(`Qual o nome da nova nave?`)
    const pilot = prompt(`Qual o nome do piloto da nave ${name}?`)
    const crewLimit = Number(prompt(`Qual o limite de membros da nave ${name}?`))

    newSpaceship(name, pilot, crewLimit)
}

function secondOption() {
    const spaceship = prompt("Em qual nave você deseja adicionar o novo membro?")
    const member = prompt(`Qual o nome do novo membro?`)

    const findSpaceshipName = findSpaceship(spaceship)

    if(findSpaceshipName) {
        newMember(member, findSpaceshipName)
    } else {
        alert(`Nave ${spaceship} não encontrada, tente novamente`)
    }
    
}

function thirdOption() {
    const spaceshipName = prompt(`Qual o nome da nave que deseja enviar para missão?`)

    const findSpaceshipName = findSpaceship(spaceshipName)

    if(findSpaceshipName) {
        sendInMission(findSpaceshipName)
    } else {
        alert(`Nave ${spaceshipName} não encontrada! Tente novamente...`)
    }
}

do {
    menu = prompt(`
    1 - Criar nova nave
    2 - Adicionar Membro
    3 - Enviar nave em uma missão 
    4 - Mostrar todas as naves
    5 - Encerrar menu
    `)

    switch (menu) {
        case "1":
            firstOption()
            break;
        case "2":
            secondOption()
            break;
        case "3":
            thirdOption()
            break;
        case "4":
            showAllSpaceships()
            break;
        case "5":
            alert(`Saindo do menu...`)
            break;
        default:
            alert(`Opção não encontrada! Tente novamente`)
            break;
    }
} while (menu !== "5")
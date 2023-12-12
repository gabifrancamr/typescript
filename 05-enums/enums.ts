//conjunto de constantes

enum Planets {
    MERCURIO = 'Mercurio',
    VENUS = 'Venus',
    TERRA = 'Terra', 
    MARTE = 'Marte'
}

Planets.TERRA

enum Roles {
    ADMIN, 
    USER
}

Roles.ADMIN

enum DiasDaSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
  }
  
  let dia: DiasDaSemana = DiasDaSemana.Quarta;
  console.log(dia); // Saída: 3, pois a enumeração começa a contar do zero

  let nomeDoDia: string = DiasDaSemana[3]; // Retorna 'Terca'
let numeroDoDia: number = DiasDaSemana.Quarta; // Retorna 4

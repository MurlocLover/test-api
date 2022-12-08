export class Medidas {
  public idMedidas?: string = '';
  public id?: string = '';
  public data?:  Date = new Date();
  public peso?: string = '';
  public pescoco?: string = '';
  public busto?: string = '';
  public bracoesquerdo?: string = '';
  public abdomen?: string = '';
  public cintura?: string = '';
  public quadril?: string = '';
  public culote?: string = '';
  public coxaesquerda?: string = '';
  public coxadireita?: string = '';
  public panturrilhaesquerda?: string = '';
  public panturrilhadireita?: string = '';


  constructor(
    idMedidas?: string,
    id?: string,
    data?:  Date,
    peso?: string,
    pescoco?: string,
    busto?: string,
    bracoesquerdo?: string,
    abdomen?: string,
    cintura?: string,
    quadril?: string,
    culote?: string,
    coxaesquerda?: string,
    coxadireita?: string,
    panturrilhaesquerda?: string,
    panturrilhadireita?: string
  )
  {
    this.idMedidas = idMedidas;
    this.id = id;
    this.data = data;
    this.peso = peso;
    this.pescoco = pescoco;
    this.busto = busto;
    this.bracoesquerdo = bracoesquerdo;
    this.abdomen = abdomen;
    this.cintura = cintura;
    this.quadril = quadril;
    this.culote = culote;
    this.coxaesquerda = coxaesquerda;
    this.coxadireita = coxadireita;
    this.panturrilhaesquerda = panturrilhaesquerda;
    this.panturrilhadireita = panturrilhadireita;
  }
}



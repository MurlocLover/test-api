export class Pessoa {
  id?: number = 0;
  idm?: number = 0;
  nome?: string = '';
  endereco?: string = '';
  dataInscricao?: Date = new Date();
  dataNascimento: Date = new Date();
  telefone?: string = '';
  email?: string = '';
  altura?: number = 0;
  peso?: number = 0;
  imc?: number = 0;
  idade?: number = 0;
  ultimaColeta?: Date = new Date();
  logadouro?: string = '';
  numero?: string = '';
  bairro?: string = '';
  municipio?: string = '';
  estado?: string = '';
  cep?: string = '';
  ddd?: string = '';
  indicacao?: string = '';
  profissao?: string = '';
  contatodeEmergencia?: string = '';
  dddContatodeEmergencia?: string = '';
  telefoneContatodeEmergencia?: string = '';



  constructor(
    id?: number,
    idm?: number,
    nome?: string,
    endereco?: string,
    dataInscricao?: Date,
    dataNascimento?: Date,
    telefone?: string,
    email?: string,
    altura?: number,
    peso?: number,
    imc?: number,
    idade?: number,
    ultimaColeta?: Date,
    logadouro?: string,
    numero?: string,
    bairro?: string,
    municipio?: string,
    estado?: string,
    cep?: string,
    ddd?: string,
    indicacao?: string,
    profissao?: string,
    contatodeEmergencia?: string,
    dddContatodeEmergencia?: string,
    telefoneContatodeEmergencia?: string) {
    this.id = id;
    this.idm = idm;
    this.nome = nome;
    this.endereco = endereco;
    this.dataInscricao = dataInscricao;
    this.dataNascimento = dataNascimento;
    this.telefone = telefone;
    this.email = email;
    this.altura = altura;
    this.peso = peso;
    this.imc = imc;
    this.idade = idade;
    this.ultimaColeta = ultimaColeta;
    this.logadouro = logadouro;
    this.numero = numero;
    this.bairro = bairro;
    this.municipio = municipio;
    this.estado = estado;
    this.cep = cep;
    this.ddd = ddd;
    this.indicacao = indicacao;
    this.profissao = profissao;
    this.contatodeEmergencia = contatodeEmergencia;
    this.dddContatodeEmergencia = dddContatodeEmergencia;
    this.telefoneContatodeEmergencia = telefoneContatodeEmergencia;
  }

  IsValidMensegemErro: String = '';

  IsValid() {
    this.IsValidMensegemErro = '';

    if ((!this.nome) || (this.nome === '')) {
      this.IsValidMensegemErro = 'O Nome Devera ser preenchido.';
    }

    if ((!this.altura) || (this.altura === 0)) {
      this.IsValidMensegemErro.length > 0 ? this.IsValidMensegemErro = this.IsValidMensegemErro + "\n" + 'a altura Devera ser preenchido.' : this.IsValidMensegemErro = 'a altura Devera ser preenchido.';
    }

    return this.IsValidMensegemErro.length > 0 ? false : true;
  }
}

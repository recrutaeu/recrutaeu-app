export default class Job {
  constructor(vaga, titulo, remuneracao, qtdVagas, localizacao, diferencial, descricao, contrato) {
    contrato = contrato;
    this.descricao = descricao;
    this.diferencial = diferencial;
    this.localizacao = localizacao;
    this.qtdVagas = qtdVagas;
    this.remuneracao = remuneracao;
    this.titulo = titulo;
    this.vaga = vaga;
  }
  toString() {
    return (
      this.vaga +
      ', ' +
      this.titulo +
      ', ' +
      this.remuneracao +
      ', ' +
      this.qtdVagas +
      ', ' +
      this.localizacao +
      ', ' +
      this.diferencial +
      ', ' +
      this.descricao +
      ', ' +
      this.contrato
    );
  }
}

// Firestore data converter
export const cityConverter = {
  toFirestore: (job) => {
    return {
      contrato: job.contrato,
      descricao: job.descricao,
      diferencial: job.diferencial,
      localizacao: job.localizacao,
      qtdVagas: job.qtdVagas,
      remuneracao: job.remuneracao,
      titulo: job.titulo,
      vaga: job.vaga,
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new City(
      data.vaga,
      data.titulo,
      data.descricao,
      data.remuneracao,
      data.qtdVagas,
      data.localizacao,
      data.diferencial,
    );
  },
};

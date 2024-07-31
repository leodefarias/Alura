import User from "./User.js"

export default class Docente extends User {
    constructor(nome, email, nascimento, role = "docente", ativo = "true") {
        super(nome, email, nascimento, role, ativo)
    }
    aprovarEstudante(estudante, curso) {
        return `Estudante ${estudante} passou no curso de ${curso}, responsável pelo ${this.nome}.`
    }
}

//const novoDocente = new Docente('Ana', 'a@a.com');
// console.log(novoDocente.aprovarEstudante('Juliana', 'JavaScript'));
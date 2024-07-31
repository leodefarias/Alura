import User from "./User.js"

export default class Admin extends User {
    constructor(nome, email, nascimento, role = "admin", ativo = "true") {
        super(nome, email, nascimento, role, ativo)
    }

    // exibirInfos() {
    //     const infos = super.exibirInfos()
    //     return `admin - ${infos}`
    // }

    criarCurso(nomeCurso, qtdVagas) {
        return `curso ${nomeCurso} criado com ${qtdVagas} vagas.`
    }
}

const novoAdmin = new Admin('Lavinia', 'la@la.com', '2024-01-01')
//console.log(novoAdmin.exibirInfos());
// console.log(novoAdmin.criarCurso('JavaScript', 20));
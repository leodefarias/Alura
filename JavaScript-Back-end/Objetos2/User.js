export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || "estudante";
        this.#ativo = ativo;
    }

    get nome() {
        return this.#nome
    }

    get email() {
        return this.#email
    }

    get nascimento() {
        return this.#nascimento
    }

    get role() {
        return this.#role
    }

    get ativo() {
        return this.#ativo
    }

    set nome(novoNome) {
        if (novoNome === ''){
            throw new Error('Nome inválido')
        } 
        this.#nome = novoNome
    }

    #montaObjeto() {
        return( {
            nome: this.#nome,
            email: this.#email,
            nascimento: this.#nascimento,
            role: this.#role,
            ativo: this.#ativo
        })
    }

//    exibirInfos() {
//        return `${this.nome}, ${this.email}`
//    }

    exibirInfos() {
        if (this.role === 'estudante') {
            return `Dados do estudante: ${this.nome}, ${this.email}`
        }
        if (this.role === 'admin') {
            return `Dados do admin: ${this.nome}, ${this.role}`
        }
        if (this.role === 'docente') {
            return `Dados do docente ${this.nome}, ${this.email}`
        }
    }

    static exibirInfosGenericas(nome, email) {
        return `${nome}, ${email}`
    }
}

const novoUser = new User('Leo', 'l@l.com', '2024-01-01');
// console.log(novoUser);
// console.log(novoUser.exibirInfos());
// 
// console.log(User.prototype.isPrototypeOf(novoUser));
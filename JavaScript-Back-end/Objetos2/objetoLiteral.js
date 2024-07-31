const user = {
    nome: 'Leo',
    email: 'l@gmail.com',
    nascimento: 2024-10-28,
    role: 'estudante',
    ativo: true, // padrão
    exibirInfos: function() {
        console.log(this.nome, this.email);
    }
}

// user.exibirInfos();

//const exibir = user.exibirInfos;
//exibir();

const exibir = function() {
    console.log(this.nome);
}

const exibirNome = exibir.bind(user);
exibirNome()
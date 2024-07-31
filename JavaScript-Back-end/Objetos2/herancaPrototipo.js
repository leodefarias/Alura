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

const admin = {
    nome: 'Sabrina',
    email: 's@gmail.com',
    nascimento: 2024-10-28,
    role: 'admin',
    ativo: true, // padrão
    criarCurso: function() {
        console.log('Curso criado');
    }
}

Object.setPrototypeOf(admin, user);
admin.criarCurso()
admin.exibirInfos()
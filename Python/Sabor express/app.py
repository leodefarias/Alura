import os

restaurantes = [{'nome':'Praça', 'categoria':'Japonesa', 'ativo':False}, {'nome':'Pizza Suprema', 'categoria':'Pizza', 'ativo':True}, {'nome':'Cantina', 'categoria':'Italiana', 'ativo':False}]

def exibir_nome_programa():
    
    print('𝒮𝒶𝒷𝑜𝓇 ℰ𝓍𝓅𝓇𝑒𝓈𝓈\n')

def exibir_opcoes():
    print('1. Cadastrar restaurante')
    print('2. Listar restaurante')
    print('3. Ativar restaurante')
    print('4. Sair\n')

def finalizar_app():
    exibir_subtitulo('Até logo!')

def voltar_menu():
    input('\nDigite qualquer tecla para voltar ao menu ')
    main()

def opcao_invalida():
    print('Opção inválida\n')
    voltar_menu()

def exibir_subtitulo(texto):
    os.system('cls')
    print(f'{texto}\n')

def cadastrar_restaurante():
    exibir_subtitulo('Cadastro para novos restaurantes')
    nome_restaurante = input('Digite o nome do seu restaurante: ')
    restaurantes.append(nome_restaurante)
    print(f'Restaurante {nome_restaurante} cadastrado com sucesso')
    voltar_menu()

def listar_restaurantes():
    exibir_subtitulo('Lista de restaurantes disponíveis')

    for restaurante in restaurantes:
        nome_restaurante = restaurante['nome']
        categoria = restaurante['categoria']
        ativo = restaurante['ativo']
        print(f'- {nome_restaurante} | {categoria} | {ativo}' )

    voltar_menu() 

def escolher_opcao():
    opçao_escolhida = int(input('Escolha uma opção: '))
    print(f'Opção escolhida: {opçao_escolhida}')


    if opçao_escolhida == 1:
        cadastrar_restaurante()
    elif opçao_escolhida == 2:
        listar_restaurantes()
    elif opçao_escolhida == 3:
        print('Ativar restaurante')
    elif opçao_escolhida == 4:
        finalizar_app()
    else:
        opcao_invalida()

def main():
    os.system('cls')
    exibir_nome_programa()
    exibir_opcoes()
    escolher_opcao()

if __name__ == '__main__':
    main()
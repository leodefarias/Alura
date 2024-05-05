from modelos.restaurante import Restaurante

restaurante_praca = Restaurante('praça', 'Gourmet')
restaurante_praca.avaliar('Gui', 10)
restaurante_praca.avaliar('Leo', 8)
restaurante_praca.avaliar('Lilica', 1)

def main():
    Restaurante.listar_restaurante()

if __name__ == '__main__':
    main()
programa {
    funcao inicio() {

        inteiro notaDePortugues, 
                notaDeMatematica, 
                notaDeGeografia, 
                notaDeHistoria,
                somaDasNotas,
                mediaDasNotas

        escreva("digite a nota de português: ")
        leia(notaDePortugues)

        escreva("digite a nota de matemática: ")
        leia(notaDeMatematica)

        escreva("digite a nota de geografia: ")
        leia(notaDeGeografia)

        escreva("digite a nota de história: ")
        leia(notaDeHistoria)

        somaDasNotas = notaDePortugues + notaDeMatematica + notaDeGeografia + notaDeHistoria

        mediaDasNotas = somaDasNotas / 4

        se(mediaDasNotas >= 7) {
            escreva("aprovado")
        } senao {
            escreva("reprovado")
        }

    }
}

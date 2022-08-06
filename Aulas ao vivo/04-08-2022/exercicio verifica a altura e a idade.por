programa {
    funcao inicio() {

        real altura
        inteiro idade

        escreva("digite a sua altura: ")
        leia(altura)

        escreva("digite a sua idade: ")
        leia(idade)

        se(altura >= 1.50 ou idade >= 21) {
            escreva("você pode entrar no brinquedo")
        } senao {
            escreva("você não pode entrar no brinquedo")
        }

    }
}

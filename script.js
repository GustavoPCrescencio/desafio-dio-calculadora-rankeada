function calcularSaldoVitorias(vitorias, derrotas) {
    const calculoVitorias = vitorias - derrotas
    let elo = ""

    switch(true) {
        case (calculoVitorias < 10):
            elo = "Ferro"
            break
        case (calculoVitorias >= 11 && calculoVitorias <= 20):
            elo = "Bronze"
            break
        case (calculoVitorias >= 21 && calculoVitorias <= 50):
            elo = "Prata"
            break
        case (calculoVitorias >= 51 && calculoVitorias <= 80):
            elo = "Ouro"
            break
        case (calculoVitorias >= 81 && calculoVitorias <= 90):
            elo = "Diamantes"
            break
        case (calculoVitorias >= 91 && calculoVitorias <= 100):
            elo = "Lendário"
            break
        case (calculoVitorias >= 101):
            elo = "Imortal"
            break
    }

    return elo
}

console.log("Elo: " + calcularSaldoVitorias(200, 1))
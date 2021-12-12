let spaceshipName = prompt("Qual o nome da nave?")
let speedShip = 0
let option = ""

menuOptions()

function menuOptions () {
option = prompt("Bem-vindo ao sistema de bordo!" + "\n1 - Acelerar a nave em 5 km/s" + "\n2 - Desacelerar a nave em 5km/s" + "\n3 - Imprimir dados de bordo" + "\n4 -Sair do sistema de navegação")

switch (option) {
    case "1":
        acceleration()
        break;
    case "2":
        slowDown()
        break
    case "3":
        showName()
        break
        case "4":
        alert("Navegação encerrada")
        break
        default:
        alert("Opção inválida! Selecione uma das opções disponíveis")
        menuOptions()
        break;
}
}

function acceleration() {
    speedShip = speedShip + 5
    alert("Acelerando para " + speedShip + "Km/s")
    menuOptions()
}

function slowDown () {
    speedShip = speedShip - 5
    if(speedShip <= 0) {
        alert("A nave parou")
    } else {
        alert("Reduzindo a velocidade para " + speedShip + "Km/s")
    }
    menuOptions()
}

function showName() {
    if(speedShip > 0) {
        alert("A nave " + spaceshipName + " está navegando a " + speedShip + "Km/s")
    } else {
        alert("A nave " + spaceshipName + " encontra-se parada atualmente")
    }
    menuOptions()
}
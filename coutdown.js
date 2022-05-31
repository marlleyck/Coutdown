const Tdias = document.querySelector('.dias')
const Thoras = document.querySelector('.horas')
const Tminutos = document.querySelector('.minutos')
const Tsegundos = document.querySelector('.segundos')


let countDate = new Date("Aug 3, 2022 00:00:00").getTime()

let x = setInterval( () => {
    let now = new Date().getTime()

    // Distancia entre a data setada e o dia de hoje
    let difference = countDate - now
    

    // Cálculo dos dias, horas, minutos e segundos
    const seconds = 1000
    const minutes = seconds * 60
    const hours = minutes * 60
    const days = hours * 24

    // Criação das variáveis e calculos
    let dia = Math.floor(difference / days)
    let horas = Math.floor((difference % days) / hours)
    let minutos = Math.floor((difference % hours) / minutes)
    let segundos = Math.floor((difference % minutes) / seconds)

    // Acrescentamento das variáveis ao HTML
    Tdias.innerHTML = dia
    Thoras.innerHTML = horas
    Tminutos.innerHTML = minutos
    Tsegundos.innerHTML = segundos


    // Condição para parar o intervalo
    if (difference < 0) {
        clearInterval(x)
    }
    
}, 1000)


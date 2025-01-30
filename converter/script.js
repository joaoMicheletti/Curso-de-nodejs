const render = (dia, horas, minutos, segundos) => {
    document.querySelector('#Dia').innerHTML = dia;
    document.querySelector('#Horas').innerHTML = horas;
    document.querySelector('#Minutos').innerHTML = minutos;
    document.querySelector('#Segundos').innerHTML = segundos;
};

const countdown = () => {
    const now = new Date();
    const targetDate = new Date(2025, 2, 16); // Note que meses começam do 0 (Janeiro é 0, Fevereiro é 1)

    const timeLeft = targetDate - now;

    const dia = Math.floor(timeLeft / (1000 * 60 * 60 * 24)); // Corrigido para calcular os dias restantes corretamente
    const horas = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Corrigido para calcular as horas restantes
    const minutos = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)); // Corrigido para calcular os minutos restantes
    const segundos = Math.floor((timeLeft % (1000 * 60)) / 1000); // Corrigido para calcular os segundos restantes

    render(dia, horas, minutos, segundos);
};

setInterval(countdown, 1000);

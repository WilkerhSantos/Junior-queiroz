
// Definindo a data final do countdown
var dataFinal = new Date('2023-07-20T00:00:00Z');

//Ano/mes/dia//

// Função para atualizar o countdown
function atualizarCountdown() {
    var agora = new Date();
    var diferenca = dataFinal - agora;

    var dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    var horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    // Atualizando os elementos HTML com os valores do countdown
    document.getElementById('dias').innerText = dias.toString().padStart(2, '00');
    document.getElementById('horas').innerText = horas.toString().padStart(2, '00');
    document.getElementById('minutos').innerText = minutos.toString().padStart(2, '00');
    document.getElementById('segundos').innerText = segundos.toString().padStart(2, '00');
}

// Atualizar o countdown inicialmente
atualizarCountdown();

// Atualizar o countdown a cada segundo
setInterval(atualizarCountdown, 1000);


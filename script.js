'use strict';

const formatarDigito = (digito) => `0${digito}`.slice(-2);

const atualizar = (tempo) => {
    const segundos = document.getElementById('seconds');
    const minutos = document.getElementById('minutes');
    const horas = document.getElementById('hours');
    const dias = document.getElementById('days');

    const qtdSegundos = tempo % 60;
    const qtdMinutos = Math.floor((tempo % (60 * 60)) / 60);
    const qtdHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
    const qtdDias = Math.floor(tempo / (60 * 60 * 24));

    segundos.textContent = formatarDigito(qtdSegundos);
    minutos.textContent = formatarDigito(qtdMinutos);
    horas.textContent = formatarDigito(qtdHoras);
    dias.textContent = formatarDigito(qtdDias);
}

const contagemRegressiva = (tempo)  => {
    const pararContagem = () => clearInterval(id);
   
    const contar = () => {
        if (tempo == 0){
            pararContagem();
        }
        atualizar (tempo);
        console.log (tempo);
        tempo--;
    }
    const id = setInterval(contar,1000);
}

const tempoRestante = () => {

    const dataReveillon = new Date ('2023-01-01 00:00:00');
    const hoje = Date.now();
    return Math.floor((dataReveillon - hoje) / 1000);
}

contagemRegressiva(tempoRestante());
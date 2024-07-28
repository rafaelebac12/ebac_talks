AOS.init();

const datadoevento = new Date("jun 29, 2024 20:00:00");
const timestampdoevento = datadoevento.getTime();

const contaashoras = setInterval(function()  {
    const agora = new Date();
    const timestampdoevento = agora.getTime();

    const distanciaateoevento = timestampdoevento - timestampatual;

    const diaemms = 1000 * 60 * 60 * 24;
    const horaemms = 1000 * 60 * 60;
    const minutoemms = 1000 * 60;

    const diasateoevento = Math.floor(distanciaateoevento / diaemms);
    const horasateoevento = Math.floor((distanciaateoevento % diaemms) / horaemms);
    const minutosateoevento = Math.floor((distanciaateoevento % horaemms) / minutoemms);
    const segundosateoevento = Math.floor((distanciaateoevento % minutoemms) / 1000);

    document.getElementById('contador').innerHTML = `${diasateoevento}d ${horasateoevento}h ${minutosateoevento}m ${segundosateoevento}s`;
}, 1000);
// Jeito 1
const data1 = new Date('1991-09-18 23:53:00');
const diaSemana1 = data1.getDay();
let diaSemanaTexto1;

switch (diaSemana1) {
    case 0:
        diaSemanaTexto1 = 'Domingo';
        break;
    case 1:
        diaSemanaTexto1 = 'Segunda';
        break;
    case 2:
        diaSemanaTexto1 = 'Terça';
        break;
    case 3:
        diaSemanaTexto1 = 'Quarta';
        break;
    case 4:
        diaSemanaTexto1 = 'Quinta';
        break;
    case 5:
        diaSemanaTexto1 = 'Sexta';
        break;
    case 6:
        diaSemanaTexto1 = 'Sábado';
        break;
    default:
        diaSemanaTexto1 = '';
        break;
}

console.log(diaSemana1, diaSemanaTexto1);

// Jeito 2
function getDiaSemanaTexto2 (diaSemana) {
    let diaSemanaTexto2;

    switch (diaSemana2) {
        case 0:
            diaSemanaTexto2 = 'Domingo';
            return diaSemanaTexto2;
        case 1:
            diaSemanaTexto2 = 'Segunda';
            return diaSemanaTexto2;
        case 2:
            diaSemanaTexto2 = 'Terça';
            return diaSemanaTexto2;
        case 3:
            diaSemanaTexto2 = 'Quarta';
            return diaSemanaTexto2;
        case 4:
            diaSemanaTexto2 = 'Quinta';
            return diaSemanaTexto2;
        case 5:
            diaSemanaTexto2 = 'Sexta';
            return diaSemanaTexto2;
        case 6:
            diaSemanaTexto2 = 'Sábado';
            return diaSemanaTexto2;
        default:
            diaSemanaTexto2 = '';
            return diaSemanaTexto2;
    }
}

const data2 = new Date('1991-09-19 23:53:00');
const diaSemana2 = data2.getDay();
const diaSemanaTexto2 = getDiaSemanaTexto2(diaSemana2);

console.log(diaSemana2, diaSemanaTexto2);

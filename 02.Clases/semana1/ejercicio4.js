const { ask } = require("../helpers/input.js");
function diffDays(actualDate,birthDate){
    const diff = actualDate - birthDate;
    const edadEnDias = Math.floor(diff/(1000*60*60*24));
    return edadEnDías;
}

function diffMount(actualDate,birthDate){
    const diff = actualDate - birthDate;
    const edadEnMeses = Math.floor(diff/1000*60*60*24*30);
    return edadEnMeses;
}

function diffYear(actualDate,birthDate){
    const diff = actualDate - birthDate;
    const edadEnAños = Math.floor(diff/1000*60*60*24*30*12);
}

async function main() {
    const actualDate = new Date();
    const birthDateDay = Number(await ask('¿Cuál es el día de tu fecha de nacimiento?'));
    const birthDateMonth =  Number (await ask('¿Cuál es el mes de tu fecha de nacimiento?'));
    const birthDateYear =  Number (await ask('¿Cuál es el año de tu fecha de nacimiento?'));

    //const brithDateDate = await ask('¿Cuál es tu fecha de nacimiento?')(formato:YYYY-MM-DD)
    const birthDate = new Date(`${birthDateYear} - ${birthDateMonth} - ${brithDateDay}`)

    console.log('Has vivido aproximadamente');
    console.log(`${diffDays(actualDate,birthDate)} días`);
    console.log(`${diffMount(actualDate,birthDate)} días`);
    console.log(`${diffYear(actualDate,birthDate)} días`);
}
main();
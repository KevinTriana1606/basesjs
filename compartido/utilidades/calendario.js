import * as calculadora from "./calculadora.js";

export const obtenerDiasDelMes = (anio, mes) => {
  const mesIndexado = calculadora.restar(mes, 1);
  return new Date(anio, calculadora.sumar(mesIndexado, 1), 0).getDate();
};

export const obtenerDiaSemana = (anio, mes, dia) => {
  return new Date(anio, calculadora.restar(mes, 1), dia).getDay();
};

export const esDomingo = (anio, mes, dia) => obtenerDiaSemana(anio, mes, dia) === 0;

export const construirEstructuraSemanal = (anio, mes) => {
  const semanas = [];
  const diasDelMes = obtenerDiasDelMes(anio, mes);
  let semanaActual = null;
  let dia = 1;
  let numeroSemana = 1;

  while (dia <= diasDelMes) {
    const diaSemana = obtenerDiaSemana(anio, mes, dia);

    if (semanaActual === null || diaSemana === 1) {
      if (semanaActual !== null) {
        semanaActual.completa = semanaActual.dias.length === 7;
        semanas.push(semanaActual);
        numeroSemana = calculadora.sumar(numeroSemana, 1);
      }
      semanaActual = { numero: numeroSemana, completa: false, dias: [] };
    }

    semanaActual.dias.push({
      dia,
      tipo: diaSemana === 0 ? "dominical" : "laborable"
    });

    if (diaSemana === 0 || dia === diasDelMes) {
      semanaActual.completa = semanaActual.dias.length === 7;
      semanas.push(semanaActual);
      semanaActual = null;
      if (dia !== diasDelMes) {
        numeroSemana = calculadora.sumar(numeroSemana, 1);
      }
    }

    dia = calculadora.sumar(dia, 1);
  }

  return semanas;
};

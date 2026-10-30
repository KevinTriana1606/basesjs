import * as calculadora from "../../compartido/utilidades/calculadora.js";

export const analizarDominicalesDescontados = (pagoDiario, clasificacion) => {
  const domingosDescontados = [];
  let cantidad = 0;

  for (const semana of clasificacion.semanas) {
    if (semana.tuvoInasistencia && semana.domingo !== null) {
      domingosDescontados.push(semana.domingo);
      cantidad = calculadora.sumar(cantidad, 1);
    }
  }

  const descuentoDominical = calculadora.multiplicar(pagoDiario, cantidad);

  return { domingosDescontados, cantidad, descuentoDominical };
};

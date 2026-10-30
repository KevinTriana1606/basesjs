import * as calculadora from "../../compartido/utilidades/calculadora.js";
import { clasificarMesPorSemanas } from "./clasificacionSemanal.js";
import { analizarDominicalesDescontados } from "./analisisDominicales.js";

export const generarLiquidacionMensual = (entidad) => {
  const pagoDiario = calculadora.multiplicar(entidad.horasPorDia, entidad.valorHora);
  const clasificacion = clasificarMesPorSemanas(entidad);

  let cantidadDomingos = 0;
  for (const semana of clasificacion.semanas) {
    if (semana.domingo !== null) {
      cantidadDomingos = calculadora.sumar(cantidadDomingos, 1);
    }
  }

  const diasRemunerados = calculadora.sumar(
    clasificacion.totalMes.diasLaborables,
    cantidadDomingos
  );
  const granTotal = calculadora.multiplicar(pagoDiario, diasRemunerados);
  const descuentoInasistencias = calculadora.multiplicar(
    pagoDiario,
    clasificacion.totalMes.diasFaltados
  );
  const analisisDominicales = analizarDominicalesDescontados(pagoDiario, clasificacion);
  const totalDescuentos = calculadora.sumar(
    descuentoInasistencias,
    analisisDominicales.descuentoDominical
  );
  const totalAPagar = calculadora.restar(granTotal, totalDescuentos);

  return {
    "Gran Total": granTotal,
    "Descuentos": totalDescuentos,
    "Total a Pagar": totalAPagar,
    desglose: {
      "Descuento por inasistencias": descuentoInasistencias,
      "Descuento dominical": analisisDominicales.descuentoDominical,
      "Domingos descontados": analisisDominicales.domingosDescontados,
      "Clasificación semanal": clasificacion
    }
  };
};

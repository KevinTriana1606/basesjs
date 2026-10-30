import { construirEstructuraSemanal } from "../../compartido/utilidades/calendario.js";
import * as calculadora from "../../compartido/utilidades/calculadora.js";

export const clasificarMesPorSemanas = (entidad) => {
  const estructura = construirEstructuraSemanal(entidad.anio, entidad.mes);
  const semanas = [];
  let totalLaborables = 0;
  let totalFaltados = 0;

  for (const semana of estructura) {
    const diasFaltados = [];
    let diasLaborables = 0;
    let cantidadFaltados = 0;

    for (const diaSemana of semana.dias) {
      if (diaSemana.tipo === "laborable") {
        diasLaborables = calculadora.sumar(diasLaborables, 1);
        if (entidad.diasInasistencia.includes(diaSemana.dia)) {
          diasFaltados.push(diaSemana.dia);
          cantidadFaltados = calculadora.sumar(cantidadFaltados, 1);
        }
      }
    }

    const diasTrabajados = calculadora.restar(diasLaborables, cantidadFaltados);
    let domingo = null;

    for (const diaSemana of semana.dias) {
      if (diaSemana.tipo === "dominical") {
        domingo = diaSemana.dia;
      }
    }

    semanas.push({
      numeroSemana: semana.numero,
      completa: semana.completa,
      diasLaborables,
      diasFaltados,
      cantidadFaltados,
      diasTrabajados,
      tuvoInasistencia: cantidadFaltados > 0,
      domingo
    });

    totalLaborables = calculadora.sumar(totalLaborables, diasLaborables);
    totalFaltados = calculadora.sumar(totalFaltados, cantidadFaltados);
  }

  const totalTrabajados = calculadora.restar(totalLaborables, totalFaltados);
  return {
    semanas,
    totalMes: {
      diasLaborables: totalLaborables,
      diasFaltados: totalFaltados,
      diasTrabajados: totalTrabajados
    }
  };
};

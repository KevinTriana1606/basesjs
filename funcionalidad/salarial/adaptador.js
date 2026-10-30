import { esNumero, esMayorQueCero, estaEnRango } from "../../compartido/utilidades/validador.js";
import { obtenerDiasDelMes, esDomingo } from "../../compartido/utilidades/calendario.js";
import {
  MINIMO_EXCLUSIVO_HORAS_DIA,
  MAXIMO_HORAS_DIA,
  ANIO_MINIMO,
  ANIO_MAXIMO
} from "./reglasLaborales.js";

export const adaptarDatosSalariales = (
  textoHorasDia,
  textoValorHora,
  textoAnio,
  textoMes,
  textoDiasInasistencia
) => {
  const horasPorDia = Number(textoHorasDia);
  if (!esNumero(horasPorDia)) {
    throw new Error(`Horas trabajadas por día inválidas: se recibió "${textoHorasDia}"`);
  }
  if (!esMayorQueCero(horasPorDia)) {
    throw new Error(`Horas trabajadas por día inválidas: el valor debe ser mayor que ${MINIMO_EXCLUSIVO_HORAS_DIA}; se recibió "${textoHorasDia}"`);
  }
  if (!estaEnRango(horasPorDia, MINIMO_EXCLUSIVO_HORAS_DIA, MAXIMO_HORAS_DIA)) {
    throw new Error(`Horas trabajadas por día inválidas: exceden el máximo de ${MAXIMO_HORAS_DIA}; se recibió "${textoHorasDia}"`);
  }

  const valorHora = Number(textoValorHora);
  if (!esNumero(valorHora)) {
    throw new Error(`Valor de la hora inválido: se recibió "${textoValorHora}"`);
  }
  if (!esMayorQueCero(valorHora)) {
    throw new Error(`Valor de la hora inválido: debe ser mayor que cero; se recibió "${textoValorHora}"`);
  }

  const anio = Number(textoAnio);
  if (!esNumero(anio)) {
    throw new Error(`Año inválido: se recibió "${textoAnio}"`);
  }
  if (!estaEnRango(anio, ANIO_MINIMO, ANIO_MAXIMO) || !Number.isInteger(anio)) {
    throw new Error(`Año inválido: debe estar entre ${ANIO_MINIMO} y ${ANIO_MAXIMO}; se recibió "${textoAnio}"`);
  }

  const mes = Number(textoMes);
  if (!esNumero(mes)) {
    throw new Error(`Mes inválido: se recibió "${textoMes}"`);
  }
  if (!estaEnRango(mes, 1, 12) || !Number.isInteger(mes)) {
    throw new Error(`Mes inválido: debe estar entre 1 y 12; se recibió "${textoMes}"`);
  }

  const diasDelMes = obtenerDiasDelMes(anio, mes);
  const diasInasistencia = [];
  const textoNormalizado = textoDiasInasistencia.trim();

  if (textoNormalizado !== "") {
    const partes = textoNormalizado.split(",");

    for (const parte of partes) {
      const textoDia = parte.trim();
      const dia = Number(textoDia);

      if (!esNumero(dia) || !Number.isInteger(dia)) {
        throw new Error(`Días de inasistencia inválidos: "${textoDia}" no es un número de día válido`);
      }
      if (!estaEnRango(dia, 1, diasDelMes)) {
        throw new Error(`Día de inasistencia inválido: debe estar entre 1 y ${diasDelMes}; se recibió "${textoDia}"`);
      }
      if (diasInasistencia.includes(dia)) {
        throw new Error(`Día de inasistencia inválido: el día ${dia} está repetido`);
      }
      if (esDomingo(anio, mes, dia)) {
        throw new Error(`Día de inasistencia inválido: el día ${dia} cae en domingo`);
      }

      diasInasistencia.push(dia);
    }
  }

  return { horasPorDia, valorHora, anio, mes, diasInasistencia };
};

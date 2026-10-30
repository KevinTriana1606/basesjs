import { preguntar } from "./nucleo/inputHandler.js";
import { adaptarDatosSalariales } from "./funcionalidad/salarial/adaptador.js";
import { generarLiquidacionMensual } from "./funcionalidad/salarial/servicio.js";
import { imprimirResultado, imprimirError } from "./compartido/renderEngine.js";

export const inicializar = () => {
  try {
    const horasPorDia = preguntar("Cuantas horas trabajas por dia?: ");
    const valorHora = preguntar("Que valor tiene tu hora de trabajo?: ");
    const anio = preguntar("En que año tuviste faltas?: ");
    const mes = preguntar("En que mes del año tuviste las faltas(1-12): ");
    const diasInasistencia = preguntar("Que días de inasistencia tuviste en el mes. que esten separados por comas (vacío si no hubo): ");

    const entidad = adaptarDatosSalariales(
      horasPorDia,
      valorHora,
      anio,
      mes,
      diasInasistencia
    );
    const liquidacion = generarLiquidacionMensual(entidad);
    imprimirResultado(liquidacion);
  } catch (error) {
    imprimirError(error);
  }
};

inicializar();


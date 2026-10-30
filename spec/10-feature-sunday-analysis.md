# 10 - Especificación: Análisis de Dominicales Descontados

## Responsabilidad y Ubicación
Módulo ubicado en el directorio de la funcionalidad salarial. Determina qué domingos del mes pierden su remuneración y cuánto se descuenta por ello. Consume la clasificación semanal de la especificación 09.

## Regla de Negocio
Un domingo se considera remunerado solo si el empleado cumplió todos los días laborables (lunes a sábado) de su semana. Si la semana tiene al menos una inasistencia, el domingo de esa semana se descuenta. La falta pierde el pago de ese día y, adicionalmente, el dominical de su semana.

Criterios por defecto:
- Solo cuentan los domingos que caen dentro del mes del periodo.
- En una semana parcial, se evalúan únicamente los días de esa semana que pertenecen al mes.
- Toda inasistencia reportada se trata como injustificada. Las inasistencias justificadas y los festivos quedan fuera de alcance.
- Una semana con varias faltas descuenta un solo domingo.

## Requerimientos
Debe producir:
- La lista de domingos descontados (número de día) y su cantidad.
- El valor del descuento dominical: pago diario multiplicado por la cantidad de domingos descontados, usando la acción de multiplicación de la Calculadora.

## Restricciones
- Prohibido usar signos matemáticos directos; todo cálculo pasa por la Calculadora.
- No invoca al Validador ni imprime en consola.
- Recibe el pago diario ya calculado por el servicio salarial (04); no lo recalcula.

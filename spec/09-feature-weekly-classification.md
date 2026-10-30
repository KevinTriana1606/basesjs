# 09 - Especificación: Clasificación de Días Trabajados por Semana

## Responsabilidad y Ubicación
Módulo ubicado en el directorio de la funcionalidad salarial. Su única responsabilidad es clasificar el mes por semanas e indicar, en cada una, cuántos días se laboraron y cuáles se faltaron. No calcula dinero.

## Datos de Entrada
Recibe la entidad limpia del adaptador, que ahora contiene: año, mes y la lista de días de inasistencia (números de día dentro del mes, posiblemente vacía). Consulta a la Utilidad de Calendario (08) para obtener la estructura semanal.

## Requerimientos
Para cada semana debe producir:
- Número de semana y si es completa o incompleta.
- Cantidad de días laborables (lunes a sábado dentro del mes).
- Lista de días en que el empleado faltó dentro de esa semana.
- Cantidad de días faltados.
- Cantidad de días trabajados: días laborables menos días faltados.
- Un indicador de si la semana tuvo al menos una inasistencia (insumo para la especificación 10).
- El día del domingo de esa semana, si cae dentro del mes.

Además debe producir los totales del mes: días laborables, días faltados y días trabajados.

## Restricciones
- Toda suma, resta o conteo aritmético se realiza con el módulo Calculadora; no se usan signos matemáticos directos.
- No invoca al módulo Validador: la coherencia de las inasistencias (dentro del mes, sin repetidos, ninguna en domingo) ya fue garantizada por el adaptador.
- No imprime nada en consola; devuelve un objeto estructurado.
- Los domingos no cuentan como días trabajados ni como días faltados.

# 12 - Especificación: Integración del Flujo y Contratos Actualizados

## Responsabilidad y Ubicación
Este documento no crea módulos nuevos: unifica las especificaciones 07 a 11 con las 00 a 06 y declara qué contratos cambian. Donde haya conflicto, prevalece este documento.

## Reglas que NO cambian
- Flujo unidireccional: gestor de entrada, adaptador, servicio, motor de presentación.
- Un único punto de entrada en la raíz y un único bloque de captura de excepciones.
- Un único punto de impresión: el motor de presentación.
- Toda matemática pasa por la Calculadora; el Validador solo se invoca en el adaptador.
- Topología de tres carpetas base (núcleo, compartido, funcionalidad); los archivos nuevos van en subdirectorios de las carpetas existentes: el Calendario en utilidades compartidas; reglas laborales, clasificación semanal y análisis dominical en la funcionalidad salarial.

## Flujo Actualizado (modifica la 06)
1. El orquestador invoca cinco veces al gestor de entrada: horas por día, valor de la hora, año, mes y días de inasistencia (lista separada por comas; vacía si no hubo).
2. Envía los cinco textos al adaptador.
3. Entrega la entidad segura al servicio salarial.
4. Envía el resultado al motor de presentación.
Cualquier excepción se intercepta en el bloque principal y se envía a la acción de error del motor.

## Adaptador (modifica la 03)
Recibe cinco textos y devuelve: horas por día, valor de la hora, año, mes y lista de días de inasistencia en formato numérico. Además de lo definido en la 07, valida con el Validador: año dentro del rango permitido, mes de uno a doce, cada inasistencia numérica, dentro de los días del mes, sin repetidos y no caída en domingo. Cada fallo lanza una excepción descriptiva que nombra el campo.

## Servicio Salarial (modifica la 04)
Orquesta, sin signos matemáticos, en este orden:
1. Pago diario: horas por día por valor de la hora (multiplicación).
2. Clasificación semanal (09).
3. Gran Total: pago diario por los días del periodo, esto es, días laborables más domingos del mes (decisión a confirmar, ver abajo).
4. Descuento por inasistencias: pago diario por días faltados (multiplicación).
5. Descuento dominical (10).
6. Total de Descuentos: suma de los dos descuentos.
7. Total a Pagar: Gran Total menos Total de Descuentos (resta).

Retorna un objeto con las tres propiedades originales (Gran Total, Descuentos, Total a Pagar), donde Descuentos es el total, más una propiedad de desglose con: descuento por inasistencias, descuento dominical, domingos descontados y la clasificación semanal.

## Motor de Presentación (modifica la 05)
Imprime las tres propiedades principales y el desglose de forma clara. La tabla semanal se entrega a la consola nativa con su método de tabla, sin serialización a texto ni inspección profunda.

## Decisiones Pendientes de Confirmar
- Que el Gran Total incluya los domingos como días remunerados (supuesto de este documento).
- Los límites numéricos por defecto de la 07 frente a la norma vigente.
- Tratar toda inasistencia como injustificada y la exclusión de festivos.
- Si se desea un tope semanal de horas.

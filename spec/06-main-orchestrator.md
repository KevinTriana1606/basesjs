# 06 - Especificación: Orquestador Principal y Punto de Entrada

## Responsabilidad y Ubicación
Este es el archivo principal ubicado en la raíz del proyecto. Es el director de la orquesta.

## Requerimientos
Debe exponer una acción de inicialización general protegida íntegramente por un único bloque de captura de excepciones.

El flujo secuencial es el siguiente:
Primero, invoca al gestor de entrada central cuatro veces consecutivas para preguntar al usuario: las horas trabajadas por día, el valor de la hora, los días totales del periodo y los días de inasistencia.
Segundo, envía estos cuatro textos al adaptador de sanitización salarial.
Tercero, toma el objeto numérico seguro devuelto por el adaptador y se lo entrega al servicio salarial.
Cuarto, recibe el resumen de liquidación calculado por el servicio y lo envía al motor de presentación para ser mostrado al usuario.

Si ocurre una violación de validación en el adaptador, el bloque de captura principal debe interceptar el error y enviarlo inmediatamente a la acción de error del motor de presentación.
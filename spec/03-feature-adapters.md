# 03 - Especificación: Adaptador de Sanitización Salarial

## Responsabilidad y Ubicación
Este documento detalla el adaptador de datos para el salario, el cual debe ubicarse dentro del directorio de la funcionalidad salarial.

## Requerimientos
El adaptador es una función pura que transforma textos crudos en datos seguros. Debe recibir cuatro textos provenientes de la entrada del usuario: las horas trabajadas por día, el valor monetario de la hora, la cantidad de días del mes laboral y la cantidad de días que el empleado faltó al trabajo.

El adaptador debe intentar convertir estos textos a números. Inmediatamente después, debe invocar al módulo Validador (creado en las utilidades compartidas) para asegurar que los cuatro valores sean numéricos y estrictamente positivos. 

Si el validador rechaza algún dato, el adaptador debe lanzar una excepción descriptiva indicando qué campo falló. Si todos los datos son aprobados, debe devolver una entidad limpia y segura que contenga estos cuatro valores en formato numérico listos para operar.
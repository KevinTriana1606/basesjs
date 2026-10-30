# 07 - Especificación: Límites de Horas Trabajadas por Día

## Responsabilidad y Ubicación
Este documento define las restricciones que debe cumplir el dato "horas trabajadas por día" antes de ser aceptado por el sistema. Los límites viven en un archivo de reglas laborales dentro del directorio de la funcionalidad salarial (todas las constantes de límites del proyecto se centralizan allí, incluidas las de las especificaciones 08 y 09). La verificación ocurre exclusivamente en el adaptador de sanitización salarial (03), que es el único lugar autorizado para invocar al módulo Validador.

## Requerimientos del Archivo de Reglas Laborales
Debe exponer, como valores constantes y parametrizables, al menos:
- El mínimo exclusivo de horas por día: cero. Es decir, el valor debe ser estrictamente mayor que cero.
- El máximo de horas por día: valor por defecto de diez (ocho ordinarias más hasta dos extras). Este valor debe poder cambiarse en un único lugar y debe contrastarse con la norma laboral vigente antes de pasar a producción.
- Los límites de año aceptados por el calendario (ver especificación 08).

Este archivo no imprime, no calcula y no valida; solo declara valores.

## Requerimientos Adicionales del Módulo Validador (extiende la especificación 01)
El Validador incorpora dos acciones nuevas, igual de puras que las existentes (solo afirman o niegan):
- Verificar si un número es estrictamente mayor que cero. Esto resuelve la diferencia entre "positivo (mayor o igual a cero)" de la especificación 01 y el "estrictamente positivo" que exige el adaptador para las horas.
- Verificar si un número está dentro de un rango, con ambos extremos incluidos.

## Requerimientos para el Adaptador
Para el campo de horas por día, el adaptador debe aplicar las verificaciones en este orden y detenerse en la primera que falle:
1. Que sea numérico.
2. Que sea estrictamente mayor que cero.
3. Que esté dentro del máximo diario permitido.

Se aceptan valores decimales (por ejemplo, siete y media). Cada fallo lanza una excepción descriptiva que nombre el campo e indique el límite violado y el valor recibido. Los mensajes se imprimen únicamente a través del motor de presentación.

## Fuera de Alcance
No se valida un tope semanal de horas en esta etapa, porque requeriría conocer los días trabajados por semana, información que se obtiene después de la sanitización (especificación 09). Queda como decisión pendiente.

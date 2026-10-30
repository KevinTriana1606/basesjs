# 04 - Especificación: Servicio de Cálculo Salarial

## Responsabilidad y Ubicación
Este servicio se ubica dentro de la carpeta de la funcionalidad salarial. Su única responsabilidad es orquestar las reglas del negocio.

## Requerimientos
El servicio salarial debe exponer una acción para generar la liquidación mensual. Recibe la entidad limpia proveniente del adaptador.

Para realizar su trabajo, el servicio tiene estrictamente prohibido usar signos matemáticos directos; debe obligatoriamente importar e invocar al módulo Calculadora.

El flujo de cálculo es el siguiente:
Primero, calcular el pago diario utilizando la acción de multiplicación de la calculadora para operar las horas trabajadas por el valor de la hora.
Segundo, calcular el Gran Total utilizando la acción de multiplicación para operar el pago diario por la cantidad de días del mes laboral.
Tercero, calcular el total de Descuentos utilizando la acción de multiplicación para operar el pago diario por los días que el empleado faltó.
Cuarto, calcular el Total a Pagar utilizando la acción de resta de la calculadora para descontar los Descuentos al Gran Total.

El servicio debe retornar un objeto estructurado que contenga exclusivamente tres resultados: el Gran Total, los Descuentos y el Total a Pagar.
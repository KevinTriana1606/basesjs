# 05 - Especificación: Motor de Presentación Único

## Responsabilidad y Ubicación
Este archivo representa la única frontera de salida de la aplicación y debe ubicarse en el directorio de recursos compartidos.

## Requerimientos
Debe exponer una acción para imprimir resultados exitosos y otra acción para imprimir mensajes de error.
El motor debe recibir el objeto resultante del servicio salarial e imprimir sus propiedades (Gran Total, Descuentos y Total a Pagar) de forma clara y amigable en la consola nativa. 

Se reitera la regla inquebrantable: Queda absolutamente prohibido usar métodos de serialización a cadenas de texto o inspección profunda. El objeto debe ser entregado al motor de consola nativo en su estado puro.
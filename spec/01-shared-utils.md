# 01 - Especificación: Utilidades Compartidas (Calculadora y Validador)

## Responsabilidad y Ubicación
Este documento detalla dos módulos independientes que deben ubicarse dentro de un subdirectorio de utilidades, dentro de la carpeta de recursos compartidos.

## Requerimientos del Módulo Validador
Se requiere crear un módulo encargado exclusivamente de evaluar datos. Debe exponer acciones para verificar si un valor es estrictamente numérico y otra acción para verificar si un número es positivo (mayor o igual a cero). Este módulo no transforma datos, solo responde afirmando o negando la validez de la información evaluada.

## Requerimientos del Módulo Calculadora
Se requiere crear un módulo matemático aislado. Debe exponer acciones individuales para realizar suma, resta, multiplicación, división y cálculo de promedios. 
Regla de oro: Ningún servicio de negocio tiene permitido realizar cálculos matemáticos por su cuenta; todos están obligados a invocar las acciones de este módulo de calculadora cuando necesiten operar con números.
# 00 - Reglas de Negocio y Arquitectura (Verdad Absoluta)

## Objetivo
El propósito de este documento es dictar la arquitectura inquebrantable para una aplicación de cálculo de sueldos por terminal. El sistema debe ser modular, basado en funcionalidades y regido por los principios de diseño de software sólido, priorizando la responsabilidad única.

## Reglas Inquebrantables
Primera regla: El flujo de datos es estrictamente unidireccional. La información ingresa por un gestor central, se purifica en un adaptador usando validadores externos, se calcula en un servicio usando una calculadora externa, y culmina en el motor de presentación.

Segunda regla: La aplicación debe tener un único punto de entrada en la raíz del proyecto. Toda la ejecución se orquesta desde allí.

Tercera regla: Se exige un único punto de impresión. Queda estrictamente prohibido emitir resultados, advertencias o errores desde cualquier archivo que no sea el motor de presentación centralizado. Solamente este archivo tiene permiso para comunicarse con la consola del sistema.

Cuarta regla: Aislamiento de utilidades. Las operaciones matemáticas y las validaciones de datos no pueden estar mezcladas con la lógica de negocio. Deben existir como herramientas independientes y genéricas que cualquier parte del sistema pueda invocar.

Quinta regla (Topología Estricta): El árbol de directorios se compone de tres carpetas base: un núcleo para las configuraciones de entrada, un directorio compartido para el motor de presentación y las utilidades genéricas, y un directorio de funcionalidades para la lógica salarial. El orquestador principal reside en la raíz.

Sexta regla (Ecosistema de Módulos Moderno): El proyecto debe configurarse de forma global para operar nativamente con el sistema de módulos de ECMAScript. Se debe instruir al entorno de ejecución para que trate todos los archivos como módulos modernos. Para la comunicación entre archivos, es obligatorio utilizar exclusivamente las declaraciones de importación y exportación modernas. Queda estrictamente prohibido el uso del sistema antiguo de módulos de CommonJS en todo el proyecto.
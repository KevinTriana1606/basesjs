# 02 - Especificación: Gestor de Entrada Central

## Responsabilidad y Ubicación
Este archivo debe ubicarse en el directorio del núcleo del proyecto.

## Requerimientos
Se requiere diseñar un módulo que actúe como envoltura y abstracción de la librería externa específica llamada "prompt-sync" para la captura de datos por consola de manera síncrona. 

Dado que todo el proyecto opera bajo el sistema de módulos de ECMAScript (establecido en las reglas de negocio), la importación de esta librería externa debe adaptarse utilizando la sintaxis de importación por defecto moderna, y su inicialización debe realizarse inmediatamente después de ser importada.

El gestor debe exponer una acción genérica para realizar preguntas al usuario y capturar su respuesta en formato de texto. Este módulo es el único autorizado en toda la aplicación para importar y utilizar dicha librería de consola, centralizando así la obtención de información y evitando que los servicios de negocio se acoplen a dependencias externas.
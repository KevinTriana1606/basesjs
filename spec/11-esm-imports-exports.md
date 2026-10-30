# 11 - Especificación: Sistema de Módulos Moderno (import / export)

## Responsabilidad y Ubicación
Este documento concreta la sexta regla de negocio (00) y lo que ya establece la especificación 02 para todos los archivos del proyecto, incluidos los creados en las especificaciones 07 a 10 y 12. Aplica a toda la aplicación sin excepción.

## Requerimientos
- El archivo de configuración del proyecto debe declarar que todo el entorno opera como módulo moderno de ECMAScript.
- La comunicación entre archivos se hace exclusivamente con declaraciones de importación y exportación modernas. Queda prohibido cualquier rastro de CommonJS: nada de la función de carga antigua ni de la asignación de exportaciones antigua.
- Toda importación de un archivo local debe incluir su extensión de archivo.
- Cada módulo expone sus acciones con exportaciones nombradas; no se mezclan estilos dentro de un mismo archivo.
- Rutas de archivo y directorio actuales: no se usan variables propias de CommonJS; si se necesitan, se derivan con las capacidades modernas del entorno.

## Gestor de Entrada Central (02)
- La librería "prompt-sync" se importa con la sintaxis de importación por defecto moderna y se inicializa inmediatamente después de importarla.
- Sigue siendo el único archivo autorizado para importar y usar esa librería.
- Debe exponer la acción de pregunta genérica que usa el orquestador para las cinco preguntas definidas en la especificación 12.

## Verificación
Ningún archivo del proyecto debe contener el sistema antiguo de módulos, y la aplicación debe arrancar sin errores de carga por extensiones faltantes o por la importación de la librería de consola.

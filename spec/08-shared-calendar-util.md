# 08 - Especificación: Utilidad de Calendario

## Responsabilidad y Ubicación
Módulo independiente y genérico que se ubica en el subdirectorio de utilidades de la carpeta de recursos compartidos, junto a la Calculadora y el Validador. No conoce nada de salarios, descuentos ni dominicales como regla de negocio: solo describe cómo está compuesto un mes calendario.

## Requerimientos
El módulo debe exponer acciones para:
- Obtener la cantidad de días de un mes dado un año y un mes (el mes se expresa de uno a doce en la interfaz pública).
- Obtener a qué día de la semana corresponde un día específico de un mes.
- Indicar si un día específico es domingo.
- Construir la estructura semanal del mes completo.

## Estructura Semanal
- Las semanas inician en lunes y terminan en domingo.
- La primera y la última semana del mes pueden quedar parciales; se conservan, recortadas a los días que pertenecen al mes, y se marcan como semana incompleta.
- Cada semana se numera de forma consecutiva comenzando en uno.
- Cada semana contiene la lista de sus días (número de día en el mes) y cada día lleva su tipo: laborable (lunes a sábado) o dominical.

## Restricciones
- Toda operación aritmética interna (conteos, desplazamientos, conversión de mes) debe invocar al módulo Calculadora; el calendario no usa signos matemáticos directos. Para obtener información de fechas puede apoyarse en las capacidades nativas del lenguaje.
- No valida datos de entrada (año y mes ya llegan saneados por el adaptador) y no usa el módulo Validador.
- No imprime nada en consola.
- Los festivos quedan fuera de alcance de este módulo.

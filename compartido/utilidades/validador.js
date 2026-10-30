export const esNumero = (valor) => typeof valor === "number" && Number.isFinite(valor);
export const esPositivo = (valor) => esNumero(valor) && valor >= 0;
export const esMayorQueCero = (valor) => esNumero(valor) && valor > 0;
export const estaEnRango = (valor, minimo, maximo) => esNumero(valor) && valor >= minimo && valor <= maximo;

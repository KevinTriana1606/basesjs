export const sumar = (a, b) => a + b;
export const restar = (a, b) => a - b;
export const multiplicar = (a, b) => a * b;
export const dividir = (a, b) => {
  if (b === 0) {
    throw new Error("No se puede dividir entre cero");
  }
  return a / b;
};
export const calcularPromedio = (valores) => {
  let total = 0;
  for (const valor of valores) {
    total = sumar(total, valor);
  }
  return dividir(total, valores.length);
};

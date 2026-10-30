export const imprimirResultado = (resultado) => {
  console.log("Liquidación mensual");
  console.log("Gran Total:", resultado["Gran Total"]);
  console.log("Descuentos:", resultado["Descuentos"]);
  console.log("Total a Pagar:", resultado["Total a Pagar"]);
  console.log("Desglose");
  console.log("Descuento por inasistencias:", resultado.desglose["Descuento por inasistencias"]);
  console.log("Descuento dominical:", resultado.desglose["Descuento dominical"]);
  console.log("Domingos descontados:", resultado.desglose["Domingos descontados"]);
  console.table(resultado.desglose["Clasificación semanal"].semanas);
};

export const imprimirError = (error) => {
  console.error(error.message);
};

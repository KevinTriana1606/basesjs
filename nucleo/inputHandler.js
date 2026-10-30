import promptSync from "prompt-sync";

const prompt = promptSync();

export const preguntar = (mensaje) => prompt(mensaje);

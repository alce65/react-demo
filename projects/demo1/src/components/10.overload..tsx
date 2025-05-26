// Sobrecarga de funciones

export function format(value: string): number;
export function format(value: number, decimals?: number): string;
export function format(
  value: string | number,
  decimals?: number,
): string | number {
  return typeof value === 'number'
    ? value.toFixed(decimals && 2)
    : Number(value.trim());
}

//

const varA: string = format(10); // '10'
const varB: number = format('23.45'); // 23.45
console.log(varA, varB);

format(2, 2); // '2.00'
// @ts-expect-error No corresponde a ninguna firma
format('2', 2); // 2

// Sobrecarga de métodos

export class Formater {
  format(value: string): number;
  format(value: number, decimals: number): string;
  format(value: string | number, decimals?: number): string | number {
    return typeof value === 'number'
      ? value.toFixed(decimals && 2)
      : Number(value.trim());
  }
}

// Ejemplo en React

// 1️⃣ Firmas de sobrecarga
function getDisplayValue(value: number, decimals: number): string;
function getDisplayValue(value: Date | string): string;

// 2️⃣ Implementación
function getDisplayValue(
  value: number | Date | string,
  decimals?: number,
): string {
  if (typeof value === 'number') {
    return value.toFixed(decimals);
  }

  if (value instanceof Date) {
    return value.toLocaleDateString();
  }

  return value.trim();
}

getDisplayValue(23, 2); // '23.00'
getDisplayValue(new Date()); // '23.00'

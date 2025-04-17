// Тип для функции с перегрузкой
// Создайте тип функции CalculateArea, который описывает функцию, вычисляющую площадь геометрической фигуры в зависимости от переданных параметров:

// Для круга – принимает один параметр (radius: number) и возвращает площадь круга (number).

// Для прямоугольника – принимает два параметра (width: number, height: number) и возвращает площадь прямоугольника (number).

// Для треугольника – принимает три параметра (a: number, b: number, c: number) и возвращает площадь по формуле Герона (number).

function calculateArea(radius: number): number;
function calculateArea(width: number, height: number): number;
function calculateArea(a: number, b: number, c: number): number;

function calculateArea(a: number, b?: number, c?: number): number {
  if (typeof c !== "undefined" && typeof b !== "undefined") {
    const s = (a + b + c) / 2;

    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
  }

  if (typeof b !== "undefined") {
    return a * b;
  }

  return Math.PI * Math.pow(a, 2);
}

const circleArea = calculateArea(50);
const squareArea = calculateArea(100, 100);
const triangleArea = calculateArea(30, 60, 90);

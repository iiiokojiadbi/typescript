// a, b и результат должны быть строго одного типа из множества: number, bigint, string

/**
 * @template {number} T
 * @param {T} a - первый параметр
 * @param {T} b - второй параметр
 * @returns {T} - результат сложения
 */
function sum(a, b) {
  return a + b;
}

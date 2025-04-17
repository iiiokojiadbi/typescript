// Поправьте описания JSDoc, чтобы корректно работали ссылки.
// Сгенерируйте документацию используя библиотеку jsdoc.

/**
 * @class
 */
class MathOperations {
  /**
   * Умножает два числа
   *
   * @param {number} a
   * @param {number} b
   * @returns {number}
   *
   * @see {@link #divide} - См метод divide для деления.
   * @see {@link #square} - См статический метод square для возведения в квадрат.
   */
  multiply(a, b) {
    return a * b;
  }

  /**
   * Делит два числа
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  divide(a, b) {
    return a / b;
  }

  /**
   * Возводит в квадрат число
   * @param {number} x
   * @returns {number}
   * @see {@link #multiply} - См метод multiply для умножения.
   */
  static square(x) {
    return x * x;
  }
}

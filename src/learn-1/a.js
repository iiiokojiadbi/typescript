/**
 * Конфиг
 * @typedef {Object} Config
 * @property {Object.<string, string>} [headers] - Опциональный словарь строковых значений
 * @property {string|object|ArrayBuffer} [body] - Опциональное тело запроса: строка, JSON-like объект или ArrayBuffer
 * @property {('json'|'text'|'document'|'buffer')} [contentType] - Опциональная строка с одним из заданных значений
 */

/**
 * Конфигурация по умолчанию для запросов
 * @type {Config}
 */
const defaultConfig = {
  headers: { Authorization: myToken },
};

function post(url, params) {}

function put(url, params) {}

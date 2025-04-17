// Тип для доступных операций
// Создайте тип Operations, который бы описывался
// уникальными символами Symbol("Read"), Symbol("Write") и Symbol("Update").

const Read = Symbol("Read");
const Write = Symbol("Write");
const Update = Symbol("Update");

type Operations = typeof Read | typeof Write | typeof Update;

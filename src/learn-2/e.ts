// Тип по строковому шаблону
// Опишите тип, который бы соответствовал шаблону ${любое целое число}${px или %}.

type ValueOfWidth = `${bigint}${"px" | "%"}`;

const px: ValueOfWidth = "100px";
const procent: ValueOfWidth = "50%";

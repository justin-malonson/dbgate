export function isTypeInteger(dataType) {
  return dataType && /int/i.test(dataType);
}

export function isTypeNumeric(dataType) {
  return dataType && /numeric|decimal/i.test(dataType);
}

export function isTypeFloat(dataType) {
  return dataType && /float|single|double/i.test(dataType);
}

export function isTypeNumber(dataType) {
  return isTypeInteger(dataType) || isTypeFloat(dataType) || isTypeNumeric(dataType);
}

export function isTypeString(dataType) {
  return dataType && /char/i.test(dataType);
}

export function isTypeLogical(dataType) {
  return dataType && /bit|boolean/i.test(dataType);
}

export function isTypeDateTime(dataType) {
  return dataType && /date|time/i.test(dataType);
}

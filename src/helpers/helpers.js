function normalizeString(string) {
  return string
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function formatValueToReal(stringValue) {
  return stringValue.toLocaleString('pt-br');
}

export { normalizeString, formatValueToReal };

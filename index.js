const currencies = require('./currencies.json');

/**
 * Get all currencies
 */
function getAll() {
  return currencies;
}

/**
 * Get a currency by ISO 4217 code
 * @param {string} code
 * @returns {object|null}
 */
function getByCode(code) {
  return currencies.find(c => c.code.toUpperCase() === code.toUpperCase()) || null;
}

/**
 * Get a currency by name (case-insensitive)
 * @param {string} name
 * @returns {object|null}
 */
function getByName(name) {
  return currencies.find(c => c.name.toLowerCase() === name.toLowerCase()) || null;
}

module.exports = {
  getAll,
  getByCode,
  getByName
};

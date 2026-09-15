/**
 * Format a number into Indian Rupee currency string (e.g. ₹350, ₹1,200)
 * @param {number|string} amount
 * @returns {string}
 */
export function formatPrice(amount) {
  if (amount === undefined || amount === null || isNaN(Number(amount))) {
    return '₹0';
  }
  const num = Number(amount);
  return '₹' + num.toLocaleString('en-IN');
}

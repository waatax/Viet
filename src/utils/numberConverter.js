// Helper for 3 digits conversion in Vietnamese with dialect awareness
const readThreeDigits = (n, isLeading = false, accent = 'north') => {
  const digits = ['không', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín'];
  const hundreds = Math.floor(n / 100);
  const tens = Math.floor((n % 100) / 10);
  const ones = n % 10;
  const zeroTensWord = accent === 'south' ? 'lẻ' : 'linh';
  
  let result = [];
  
  if (hundreds > 0 || !isLeading) {
    result.push(digits[hundreds] + ' trăm');
  }
  
  if (tens === 0 && ones > 0) {
    if (hundreds > 0 || !isLeading) {
      result.push(zeroTensWord + ' ' + (ones === 4 ? 'tư' : digits[ones]));
    } else {
      result.push(digits[ones]);
    }
  } else if (tens === 1) {
    result.push('mười' + (ones === 5 ? ' lăm' : ones > 0 ? ' ' + digits[ones] : ''));
  } else if (tens > 1) {
    let onesWord = '';
    if (ones === 1) onesWord = ' mốt';
    else if (ones === 4) onesWord = ' tư';
    else if (ones === 5) onesWord = ' lăm';
    else if (ones > 0) onesWord = ' ' + digits[ones];
    result.push(digits[tens] + ' mươi' + onesWord);
  }
  
  return result.join(' ');
};

/**
 * Comprehensive 0 - 100 Billion Vietnamese number-to-text converter
 * @param {string|number} number - The number to convert
 * @param {string} accent - The regional dialect ('north' or 'south')
 * @returns {string} Vietnamese spoken text
 */
export const numberToVietnamese = (number, accent = 'north') => {
  const n = parseInt(number, 10);
  if (isNaN(n)) return 'Chưa nhập số';
  if (n === 0) return 'Không đồng';

  const thousandWord = accent === 'south' ? 'ngàn' : 'nghìn';

  const billion = Math.floor(n / 1000000000);
  const million = Math.floor((n % 1000000000) / 1000000);
  const thousand = Math.floor((n % 1000000) / 1000);
  const remainder = n % 1000;

  let parts = [];
  let isLeading = true;

  if (billion > 0) {
    parts.push(readThreeDigits(billion, isLeading, accent) + ' tỷ');
    isLeading = false;
  }
  if (million > 0) {
    parts.push(readThreeDigits(million, isLeading, accent) + ' triệu');
    isLeading = false;
  }
  if (thousand > 0) {
    parts.push(readThreeDigits(thousand, isLeading, accent) + ' ' + thousandWord);
    isLeading = false;
  }
  if (remainder > 0) {
    parts.push(readThreeDigits(remainder, isLeading, accent));
  }

  const text = parts.join(' ').trim() + ' đồng';
  return text.charAt(0).toUpperCase() + text.slice(1);
};

/**
 * Formats a number as a VND currency string
 * @param {string|number} amount 
 * @returns {string} Formatted string, e.g. "2.500.000 ₫"
 */
export const formatVND = (amount) => {
  const n = parseInt(amount, 10);
  if (isNaN(n)) return '0 ₫';
  return new Intl.NumberFormat('vi-VN').format(n) + ' ₫';
};

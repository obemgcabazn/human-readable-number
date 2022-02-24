module.exports = function toReadable (number) {
  let string = number.toString();
  let output = '';

  const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero'];
  const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tentyes = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
  const hundred = ['hundred'];
  const thousand = ['thousand'];

  if( string.length === 4 ) {
    let first = (string[0] === '0') ? '' : units[string[0]] + ' ' + thousand;
    let second = (string[1] === '0') ? '' : units[string[1]] + ' ' + hundred;
    let third;
    let fours;
    if (string[2] === '0') {
      third = '';
      fours = units[string[3]];
    } else if (string[2] === '1') {
      third = teens[string[3]];
      fours = '';
    } else if (string[2] !== '1') {
      third = tentyes[string[2]];
      fours = units[string[3]];
    }
    output = (first + ' ' + second + ' ' + third + ' ' + fours).trim();

  } else if ( string.length === 3 ) {
    let first = (string[0] === '0') ? '' : units[string[0]] + ' ' + hundred;
    let second;
    let third;
    if (string[1] === '0') {
      second = '';
      third = units[string[2]];
    } else if (string[1] === '1') {
      second = teens[string[2]];
      third = '';
    } else if (string[1] !== '1') {
      second = tentyes[string[1]];
      third = ' ' + units[string[2]];
    };
    output = (first + ' ' + second + third).trim();

  } else if ( string.length === 2 ) {
    let first;
    let second;
    if (string[0] === '0') {
      first = '';
      second = units[string[1]];
    } else if (string[0] === '1') {
      first = teens[string[1]];
      second = '';
    } else if (string[0] !== '1') {
      first = tentyes[string[0]];
      second = units[string[1]];
    };
    output = (first + ' '  + second).trim();

  } else if ( string.length === 1 ) {
    let first = ( string[0] === '0' ) ? units[10] : units[string[0]];
    output = (first).trim();
  }
  return output;
}

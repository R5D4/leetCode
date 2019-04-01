function reverse (x) {
    let reverseStr = Math.abs(x).toString().split('');
    if ( x < 0 ) { reverseStr.push('-') };
    let num = +(reverseStr.reverse().join(''));
    if (num > 2**31 - 1 || num < -1 * 2**31) { return 0 };
    return num;
}

exports.reverse = reverse;
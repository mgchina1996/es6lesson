{
    console.log('B',0B111110111);
    console.log(0o0767);
}
{
    //用来检测传入的参数是否是一个有穷数
    console.log('15',Number.isFinite(15));
    console.log('NaN',Number.isFinite(NaN));
    console.log('1/0',Number.isFinite('true'/0));

    // 方法确定传递的值是否为NaN和其类型是 Number
    Number.isNaN();
    console.log('NaN',Number.isNaN(NaN));
    console.log('0',Number.isNaN(0));
}
{
    //是否整数
    Number.isInteger();
    console.log('15',Number.isInteger(15));
    //15.0也是true
    console.log('15.0',Number.isInteger(15.0));
    console.log('15.1',Number.isInteger(15.1));
    console.log('15',Number.isInteger('15'));
}
{
    //新增方法，表示js可以安全和精确表示的最大整数，也就是IEEE-754定义的(253 - 1)
    Number.MAX_SAFE_INTEGER === Math.pow(2, 53) - 1 // true
    Number.MAX_SAFE_INTEGER === 9007199254740991 // true
    //新增方法，表示js可以安全和精确表示的最小整数，也就是IEEE-754定义的-(253 - 1)
    Number.MIN_SAFE_INTEGER === -Number.MAX_SAFE_INTEGER // true
    Number.MIN_SAFE_INTEGER === -9007199254740991 // true
    //新增方法，返回true或false，表示在js可以安全和精确表示的范围内，也就是IEEE-754定义的-(253 - 1)到(253 - 1)
    // 所谓安全就是如果超出这范围，计算的结果就很可能不正确。
    Number.isSafeInteger
    Number.isSafeInteger('a') // false
    Number.isSafeInteger(null) // false
    Number.isSafeInteger(NaN) // false
    Number.isSafeInteger(Infinity) // false
    Number.isSafeInteger(-Infinity) // false
    Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1) // false
    Number.isSafeInteger(Number.MIN_SAFE_INTEGER) // true
    Number.isSafeInteger(1) // true
    Number.isSafeInteger(1.2) // false
    Number.isSafeInteger(Number.MAX_SAFE_INTEGER) // true
    Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1) // false
    9007199254740993 - 9007199254740995 // -4 但真实结果应该为-2
}
{
    //法会将数字的小数部分去掉，只保留整数部分。
    Math.trunc()
    console.log('4.1',Math.trunc(4.1));
    console.log('4.9',Math.trunc(4.9));
}
{
    //函数返回一个数字的符号，表示该数字是正数，负数还是零。
    Math.sign;
    //-1
    console.log('-4',Math.sign(-4));
    //0
    console.log('0',Math.sign(0));
    //1
    console.log('4',Math.sign(4));
    //1 字符串转换为number对象
    console.log('50',Math.sign('50'));
    //NaN 非数值
    console.log('foo',Math.sign('foo'));
}
{
    //函数返回任意数字的立方根.
    Math.cbrt()
    console.log('-1',Math.cbrt(-1));
    console.log('8',Math.cbrt(8));
}
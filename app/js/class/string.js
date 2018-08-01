{
    console.log('a','\u0061');
    //unicode的两个字节最大编码0xFFFF
    //大于两个字节的最大编码
    console.log('s','\u20BB7');
    //s 𠮷
    console.log('s','\u{20BB7}');
}
{
    //JavaScript内部，字符以UTF-16的格式储存，每个字符固定为2个字节。对于那些需要4个字节储存的字符（Unicode码点大于0xFFFF的字符），JavaScript会认为它们是两个字符。
    let s='𠮷';
    //es5,s的码值大于两个字节，把他处理为4个字节，计算长度时每两个字节为1个长度
    console.log('length',s.length);
    //乱码，只取两个字节
    console.log('0',s.charAt(0));
    console.log('1',s.charAt(1));
    //at0 55362
    console.log('at0',s.charCodeAt(0));
    //at1 57271
    console.log('at1',s.charCodeAt(1));
    // 上面代码中，汉字“𠮷”的码点是0x20BB7，UTF-16编码为0xD842 0xDFB7（十进制为55362 57271），需要4个字节储存。对于这种4个字节的字符，JavaScript不能正确处理，字符串长度会误判为2，而且charAt方法无法读取整个字符，charCodeAt方法只能分别返回前两个字节和后两个字节的值。

    let s1='𠮷a';
    console.log('length',s1.length);
    //ES6提供了codePointAt方法，能够正确处理4个字节储存的字符，返回一个字符的码点。
    //code0 134071
    console.log('code0',s1.codePointAt(0));
    //code0 20bb7
    console.log('code0',s1.codePointAt(0).toString(16));
    //code1 57271
    console.log('code1',s1.codePointAt(1));
    //code2 97
    console.log('code2',s1.codePointAt(2));
    //codePointAt方法的参数，是字符在字符串中的位置（从0开始）。上面代码中，JavaScript将“𠮷a”视为三个字符，codePointAt方法在第一个字符上，正确地识别了“𠮷”，返回了它的十进制码点134071（即十六进制的20BB7）。在第二个字符（即“𠮷”的后两个字节）和第三个字符“a”上，codePointAt方法的结果与charCodeAt方法相同。
    // 总之，codePointAt方法会正确返回32位的UTF-16字符的码点。对于那些两个字节储存的常规字符，它的返回结果与charCodeAt方法相同。codePointAt方法返回的是码点的十进制值，如果想要十六进制的值，可以使用toString方法转换一下。
}
{
    //ES5提供String.fromCharCode方法，用于从码点返回对应字符，但是这个方法不能识别32位的UTF-16字符（Unicode编号大于0xFFFF）。
    console.log(String.fromCharCode('0x20bb7'));
    //ES6提供了String.fromCodePoint方法，可以识别0xFFFF的字符，弥补了String.fromCharCode方法的不足。在作用上，正好与codePointAt方法相反。
    console.log(String.fromCodePoint('0x20bb7'));
    //如果String.fromCodePoint方法有多个参数，则它们会被合并成一个字符串返回。
    console.log(String.fromCodePoint(0x78, 0x1f680, 0x79) === 'x\uD83D\uDE80y');
    //注意，fromCodePoint方法定义在String对象上，而codePointAt方法定义在字符串的实例对象上。
}
{
    let  str='\u{20bb7}abc';
    for (let i=0;i<str.length;i++){
        console.log('es5',str[i]);
    }
    //这个遍历器最大的优点是可以识别大于0xFFFF的码点，传统的for循环无法识别这样的码点。
    for (let code of str){
        console.log('es6',code);
    }
}
{
    //传统上，JavaScript只有indexOf方法，可以用来确定一个字符串是否包含在另一个字符串中。ES6又提供了三种新方法。
    // includes()：返回布尔值，表示是否找到了参数字符串。
    // startsWith()：返回布尔值，表示参数字符串是否在源字符串的头部。
    // endsWith()：返回布尔值，表示参数字符串是否在源字符串的尾部。
let str="string";
console.log('includes',str.includes('r'));
console.log('startsWith',str.startsWith('str'));
console.log('endsWith',str.endsWith('ng'));
}
{
    //repeat方法返回一个新字符串，表示将原字符串重复n次。
    //参数如果是小数，会被取整。
    //如果repeat的参数是负数或者Infinity，会报错。
    //但是，如果参数是0到-1之间的小数，则等同于0，这是因为会先进行取整运算。0到-1之间的小数，取整以后等于-0，repeat视同为0。
    //参数NaN等同于0。
    //如果repeat的参数是字符串，则会先转换成数字。
    let  str='abc';
    console.log(str.repeat(2));
}
{
    //模板字符串（template string）是增强版的字符串，用反引号（`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。
   let name='list';
   let info='hello world';
   let  m=`i am ${name},${info}`;
   console.log(m);
    // 多行字符串
    console.log(`string text line 1
string text line 2`);
}
{
    //es7要引用babel-polyfill
    //ES2017 引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。
    // padStart()用于头部补全，padEnd()用于尾部补全。
    console.log('1'.padStart(2,'0'));
    console.log('1'.padEnd(2,'0'));
}
{
    //标签模板
    //“标签模板”的一个重要应用，就是过滤HTML字符串，防止用户输入恶意内容。
    //标签模板的另一个应用，就是多语言转换（国际化处理）。
    let user={
        name:'list',
        info:'hello world'
    }
    console.log(abc`i am ${user.name},${user.info}`);
    function abc(s,v1,v2) {
        console.log(s,v1,v2);
        return s+v1+v2;
    }
}
{
    //String.raw方法
    // 往往用来充当模板字符串的处理函数，返回一个斜杠都被转义（即斜杠前面再加一个斜杠）的字符串，对应于替换变量后的模板字符串。
    console.log(String.raw`Hi\n${1+2}`);
    console.log(`Hi\n${1+2}`);
}
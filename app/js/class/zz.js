{
    //es5两种方式
    let regex=new RegExp('xyz','i');
    let regex2=new  RegExp(/xyz/i);

    console.log(regex.test('xyz123'),regex2.test('xyz123'));
    //es6允许第一参数是正则表达式方式，第二个再去填写这个修饰符，后面的修饰符会覆盖正则表达式所用到的修饰符
    let  regex3=new  RegExp(/xyz/ig,'i');
    //flags的es6新加的获取这个对象的修饰符
    console.log(regex3.flags);
}
{
    let s='bbb_bb_b ';
    let a1=/b+/g;
    let a2=/b+/y;
    console.log('one',a1.exec(s),a2.exec(s));
    console.log('two',a1.exec(s),a2.exec(s));

    console.log(a1.sticky,a2.sticky);
}
{
    //输出true；不加u修饰符，那么就无法将四个字节的UTF-16编码识别为一个字符，所以就可以产生匹配。
    console.log('u-1',/^\uD83D/.test('\uD83D\uDC2A'));
    //输出false，由于"\uD83D\uDC2A"是一个四个字节的UTF-16编码，代表一个字符，所以如果正则表达式带有u修饰符，那么就能够识别它。
    console.log('u-2',/^\uD83D/u.test('\uD83D\uDC2A'));
    //使用u修饰符，正则表达式能够识别大括号{}表示的Unicode字符，否则无法识别，{61}也会被解读为量词，表示61个u字符。
    console.log('u-3',/\u{61}/.test('a'));
    console.log('u-4',/\u{61}/u.test('a'));

    console.log('\u{20BB7}');
    let s='𠮷';
    //字符串中大于两个字节加上u才能正常识别，添加u修饰符之后，点元字符就可以匹配码点大于0xFFFF的Unicode字符。
    console.log('u',/^.$/.test(s));
    console.log('u-2',/^.$/u.test(s));

    console.log('test',/𠮷{2}/.test('𠮷𠮷'));
    console.log('test-2',/𠮷{2}/u.test('𠮷𠮷'));
    //处理字符串中正则表达式中有大于两个字节长度一定要加u
    //元字符点（.）并不能匹配所有字符，是有条件的，就是小于两个字节长度的字符。换行，回车，行分隔符，段分隔符也是无法识别的

}
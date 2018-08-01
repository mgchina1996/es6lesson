{
    //函数参数默认值
    //默认值后面不能有没有默认值的变量
    function test(x,y='world') {
        console.log('默认值',x,y);
    }
    test('hello');
    test('hello','kill');
}
{
    let x='test';
    //
    function test2(x,y=x) {
        console.log('作用域',x,y);
    }
    //作用域 kill kill
   /* test2('kill');*/
    //作用域 undefined undefined
    test2();
}
{
    //rest参数
    //不确定参数，把一系列参数转换为数组
    //rest参数后不能有其他参数
    function test3(...arg) {
        for (let v of arg){
            console.log('rest',v);
        }
    }
    test3(1,2,3,4,5,6   );
}
{
    //扩展运算符
    //把数组转换为离散的值
    console.log(...[1,2,4]);
    console.log('a',...[1,2,4]);
}
{
    //箭头函数
    //函数名arrow
    //函数参数v
    //函数返回值v*2
    let arrow = v => v*2;
    //没有函数参数用()
    let arrow2=() => 5;
    console.log(arrow(3));
    console.log(arrow2());

    //如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回。
    let sum = (num1, num2) => { return num1 + num2; }
    //由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号。
    let getTempItem = id => ({ id: id, name: "Temp" });
    //箭头函数可以与变量解构结合使用。
    let full = ({ first, last }) => first + ' ' + last;
   //  等同于
    function full(person) {
        return person.first + ' ' + person.last;
    }
}

{
    //尾调用
    //存在函数式编程
    //提升性能
    function tail(x) {
        console.log('tail',x);
    }
    function fx(x) {
        return tail(x);
    }
    fx(123);
}
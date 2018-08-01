{
    //ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。
    //数组结构赋值
    //本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。
    let a,b,rest;
    [a,b,...rest]=[1,2,3,4,5,6,7,8,9,9];
    console.log(a,b,rest);
}
{
    //对象结构赋值
    let a,b;
    ({a,b}={a:1,b:4})
    console.log(a,b);
}
{
    //没有匹配会undefined
    let a,b,c,rest;
    [a,b,c=3]=[1,2];
    console.log(a,b,c);
}
{
    //变量交换
    let a=1;
    let b=2;
    [a,b]=[b,a];
    console.log(a,b);
}
{
    //
    function f() {
        return[1,2];
    }
    let a,b;
    [a,b]=f();
    console.log(a,b);
}
{
    function f() {
        return [1,2,3,4,5];
    }
    let  a,b;
    [a,,,b]=f();
    console.log(a,b);
}
{
    function f() {
        return [1,2,3,4,5];
    }
    let  a,b,c;
    [a,...b]=f();
    console.log(a,b);
}
{
    function f() {
        return [1,2,3,4,5];
    }
    let  a,b,c;
    [a,,...b]=f();
    console.log(a,b);
}
{
    //对象结构赋值
    let o={p:42,q:true};
    let {p,q}=o;
    console.log(p,q);
}
{
    //对象结构赋值
    let {p=10,q=5}={p:3};
    console.log(p,q);
}
{
    //json
    let metaData = {
        title: 'abc',
        test: [{
            title: 'test',
            desc: 'description'
        }]
    }
    let {title: esTitle, test: [{title: cnTitle}]} = metaData;
    console.log(esTitle, cnTitle);
}
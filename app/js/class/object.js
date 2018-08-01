{
    //简洁表达法
    let  o=1;
    let  k=2;

    let es5={
        o:o,
        k:k
    };

    let es6={
        o,
        k
    }

    console.log(es5);
    console.log(es6);

    let es5_method={
        hello:function () {
            console.log('hello');
        }
    };
    let es6_method={
        hello() {
            console.log('hello');
        }
    };

    console.log(es5_method.hello());
    console.log(es6_method.hello());

}
{
    //属性表达式
    let a='b';
    let es5_obj={
        a:'c',
        b:'c'
    };

    let es6_obj={
        [a]:'c'
    };
    //{a: "c", b: "c"}
    console.log(es5_obj);
    //{b: "c"}
    console.log(es6_obj);
}
{
    //新增api

    //方法判断两个值是否是相同的值。
    console.log('字符串',Object.is('abc','abc'),'abc'=='abc');
    //引用类型要指向同一对象
    console.log('数组',Object.is([],[]),[]==[]);
    // 特例
    Object.is(0, -0);            // false
    Object.is(-0, -0);           // true
    Object.is(NaN, 0/0);         // true
    Object.is(null, null);       // true

    //方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
    //Object.assign(target, ...sources)
    //target
    // 目标对象。
    // sources
    // 源对象。
    //引用类型只修改地址，而不是把所有的值修改
    //拷贝自身对象的属性，不会拷贝继承的属性，不可枚举的属性
     console.log('拷贝',Object.assign({a:'a'},{b:'b'}));

     let test={
         k:123,
         o:456
     };
     for (let [key,value] of Object.entries(test)){
         console.log([key,value]);
     }
}
{
    //扩展运算符
    //
  /*  let {a,b,...c}={a:'test',b:'kill',c:'ddd',d:'ccc'};
*/
}
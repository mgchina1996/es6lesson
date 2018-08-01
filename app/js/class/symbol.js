{
    //声明
    //每个从Symbol()返回的symbol值都是唯一的。一个symbol值能作为对象属性的标识符；
    let a1 = Symbol();
    let a2 = Symbol();

    console.log(a1 == a2);

    //使用给定的key搜索现有的symbol，如果找到则返回该symbol。
    // 否则将使用给定的key在全局symbol注册表中创建一个新的symbol。
    let  a3=Symbol.for('a3');
    let a4=Symbol.for('a3');
    console.log(a3==a4);
}

{
    //作用
    let a1=Symbol.for('abc');
    let obj={
        [a1]:'123',
        'abc':345,
        'c':456
    };
    console.log(obj);

    //let of ,for in取不到symbol相关的属性
    for (let [key,value] of Object.entries(obj)){
        console.log('let of',key,value);
        //let of abc 345
        //  let of c 456
    }

    Object.getOwnPropertySymbols(obj).forEach(function (item) {
        console.log(obj[item]);
        //123
    })

    Reflect.ownKeys(obj).forEach(function (item,u,m) {
        console.log('ownKeys',item,u,obj[item]);
    })

}
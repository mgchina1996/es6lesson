{
    //Array.of方法用于将一组值，转换为数组。
    let  arr=Array.of(3,4,7,9,11); //[3,4,7,9,11]

    console.log('arr=',arr);
    //这个方法的主要目的，是弥补数组构造函数Array()的不足。因为参数个数的不同，会导致Array()的行为有差异。
    Array() // []
    Array(3) // [, , ,]
    Array(3, 11, 8) // [3, 11, 8]
    //Array.of基本上可以用来替代Array()或new Array()，并且不存在由于参数不同而导致的重载。它的行为非常统一。
    Array.of() // []
    Array.of(undefined) // [undefined]
    Array.of(1) // [1]
    Array.of(1, 2) // [1, 2]
}
{
    let  p=document.querySelectorAll('p');
    //Array.from()方法就是将一个类数组对象或者可遍历对象转换成一个真正的数组
    //将类数组对象转换为真正数组,所谓类数组对象，最基本的要求就是具有length属性的对象
    //将Set结构的数据转换为真正的数组
    //将字符串转换为数组
    // Array.from参数是一个真正的数组
    let pArr=Array.from(p);
    console.log(pArr);
    pArr.forEach(function (item) {
        console.log(item.textContent);
    })

    //Array.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组
    console.log(Array.from([1,3,5],function (item) {
        return item*2;
    }));
}

{
    console.log('fill-7',[1,'a',undefined].fill(7));//[7, 7, 7]

    //arr.fill(value[, start[, end]])
    //用来填充数组元素的值。
    //起始索引，默认值为0。
    //终止索引，默认值为 this.length。
    console.log('fill,pos',['a','b','c'].fill(7,0,3));
}
{

    for (let index of ['1','c','ks'].keys()){
        console.log('keys',index);
    }
    //value要引用import 'babel-polyfill'
    for (let value of ['1','c','ks'].values()){
        console.log('values',value);
    }
    //不存在兼容性问题,不用引用import 'babel-polyfill'
    for (let [index,value] of ['1','c','ks'].entries()){
        console.log('values',index,value);
    }
}
{

    //用于操作当前数组自身，用来把某些个位置的元素复制并覆盖到其他位置上去。
    //target：目的起始位置。
    // start：复制源的起始位置，可以省略，可以是负数。
    // end：复制源的结束位置，可以省略，可以是负数，实际结束位置是end-1。
    console.log([1,2,3,4,5].copyWithin(0,3,5));//[4, 5, 3, 4, 5]
}

{
    //方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
    console.log([1,2,3,4,5,6].find(function (item) {
        return item>3;
    }));
    //方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。
    console.log([1,2,3,4,5,6].findIndex(function (item) {
        return item>3;
    }));
}
{
    // 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。
    //arr.includes(searchElement, fromIndex)
    console.log('number',[1,2,3,4,5,NaN].includes(1));
    console.log('number',[1,2,3,4,5,NaN].includes(NaN));
}
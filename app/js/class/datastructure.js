{
    let list=new Set();
    list.add(5);
    list.add(7);
    console.log('size',list,list.size);
}
{
    let arr=[1,2,3,4,5];
    let list=new  Set(arr);
    console.log('size',list,list.size);
}
{
    let list=new  Set();
    list.add(1);
    list.add(2);
    //set添加重复元素不会生效
    list.add(1);
    //list Set(2) {1, 2}
    console.log('list',list);

    let  arr=[1,2,3,1,2];
    let  list2=new  Set(arr);
    //unique Set(3) {1, 2, 3}
    console.log('unique',list2);
}
{
    let arr=['add','delete','clear','has'];
    let  list=new  Set(arr);

    console.log('has',list.has('add'));
    console.log('delete',list.has('delete'),list);
    list.clear();
    console.log('clear',list);
}
{
    let arr=['add','delete','clear','has'];
    let  list=new  Set(arr);

    for (let key of list.keys()){
        console.log('keys',key);
        //keys add
        //keys delete
        //keys clear
        //keys has
    }
    for (let value of list.values()){
        console.log('values',value);
        //values add
        //values delete
        //values clear
        //values has
    }
    for (let value of list){
        console.log('values',value);
        //values add
        //values delete
        //values clear
        //values has
    }
    for (let [key,value] of list.entries()){
        console.log('entries',key,value);
        //entries add add
        //entries delete delete
        //entries clear clear
        //entries has has
    }
    list.forEach(function (item) {
        console.log(item);
        //add
        //delete
        //clear
        //has
    })
}
{
    //weakset
    let weaklist=new  WeakSet();
    //weakset和set支持数据类型不一样，weakset的元素只能是对象
    //weakset中对象添加一个对象不是整个值考过来，只是地址的引用,他不会检测是否被垃圾回收掉

    let arg={};
    weaklist.add(arg);
    //没有clear方法,没有size属性,不能遍历
    console.log('weaklist',weaklist);
}

{
    //map定义方式
    let map=new  Map();
    let arr=['123'];
    //key可以是任何数据类型
    //Map 对象保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。
    map.set(arr,456);
    console.log('map',map,map.get(arr));
    //map Map(1) {Array(1) => 456} 456
}

{
    //map定义方式
    let  map=new Map([['a',123],['b',456]]);
    console.log('map args',map);
    //map args Map(2) {"a" => 123, "b" => 456}
    console.log('size',map.size);
    console.log('delete',map.delete('a'),map);
    console.log('clear',map.clear(),map);
    //遍历和set差不多
}
{
    //weakmap
    //key值只能为对象
    //没有size属性，不能使用clear，不能遍历
    let weakmap=new WeakMap();
    let o={};
    weakmap.set(o,123);
    console.log(weakmap.get(o));
}
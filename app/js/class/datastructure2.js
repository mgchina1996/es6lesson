{
    //数据结构横向对比,增,查,改,删
    let  map=new Map();
    let array=[];

    //增
    map.set('t',1);
    array.push({t:1});
    console.log('map-array',map,array);

    //查
    let map_exist=map.has('t');
    //找到第一个满足测试函数的元素并返回那个元素的值，如果找不到，则返回 undefined。
    let array_exist=array.find(item=>item.t);
    console.log('map-array',map_exist,array_exist);

    //改
    map.set('t',2);
    array.forEach(item=>item.t?item.t=2:'');
    console.log('map-array',map,array);

    //删
    map.delete('t');
    let index=array.findIndex(item=>item.t);
    array.splice(index,1);
    console.log('map-array',map,array);
}
{
    //set和array的对比
    let set=new Set();
    let array=[];

    //增
    set.add({t:1});
    array.push({t:1});
    console.log('set-array',set,array);
    //查
    let set_exist=set.has({t:1});
    let array_exist=array.find(item=>item.t);
    console.log('set-array',set_exist,array_exist);
    //改
    set.forEach(item=>item.t?item.t==2:'');
    array.forEach(item=>item.t?item.t=2:'');
    console.log('set-array',set,array);
    //删
    set.forEach(item=>item.t?set.delete(item):'');
    let index=array.findIndex(item=>item.t);
    array.splice(index,1);
    console.log('set-array',set,array);
}
{
    //map,set,object对比
     let item={t:1};
     let map=new Map();
     let set=new Set();
     let obj={};

     //增
    map.set('t',1);
    set.add(item);
    obj.t=1;
    console.log('map-set-obj',obj,map,set);

    //查
    let obj_exist='t' in obj;
    //改
    obj.t=3;
    console.log(obj);
    //删
    delete  obj.t;
    console.log(obj);   
}

{
    //修饰器
    //一个函数用来修改类的行为
}
{    //target修改的类本身
    //name修改属性名称
    //descriptor该属性的描述对象
    let readonly=function (target,name,descriptor) {
        descriptor.writable=false;
        return descriptor;
    }

    class Test{
        @readonly
        time(){
            return '2017-02-11'
        }
    }
    let test=new  Test();
  /*  test.time=function(){
        console.log('ww');
    }*/
    console.log(test.time());
}
{
    let typename=function (target,name,descriptor) {
       target.myname='hell';
    }

    @typename
    class Test{

    }
    console('类修饰符',Test.myname);
    //第三方修饰器的js库:core-decorators;npm insatall core-decorators
}
{
    let log=(type)=>{
        return function (target,name,descriptor) {
            let src_method=descriptor.value;
            descriptor.value=(...arg)=>{
                src_method.apply(target,arg);
                console.log(`log ${type}`);
            }
        }
    }
    class AD{
        @log('show')
        show(){
            console.log('ad is show');
        }
        @log('click')
        click(){
        console.log('ad is click');
    }
    }

    let ad=new AD();
    ad.show();
    ad.click();
}
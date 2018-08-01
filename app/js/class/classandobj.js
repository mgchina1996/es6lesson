{
    //ECMAScript 2015 中引入的 JavaScript 类实质上是 JavaScript 现有的基于原型的继承的语法糖。
    // 类语法不会为JavaScript引入新的面向对象的继承模型。
    //类声明和类表达式的主体都执行在严格模式下。比如，构造函数，静态方法，原型方法，getter和setter都在严格模式下执行。
}
{
    //基本定义和生成实例
    //constructor方法是一个特殊的方法，其用于创建和初始化使用class创建的一个对象。
    // 一个类只能拥有一个名为 “constructor”的特殊方法。
    class Parent{
        constructor(name='mukewang'){
            this.name=name;
        }
    }

    let v_parent=new  Parent('v');
    console.log('构造函数和实例',v_parent);
}
{
    //继承
    class Parent{
        constructor(name='mukewang'){
            this.name=name;
        }
    }
    class Child extends Parent{

    }
    console.log('继承',new Child());
}
{
    //继承传递参数
    class Parent{
        constructor(name='mukewang'){
            this.name=name;
        }
    }
    //一个构造函数可以使用 super 关键字来调用一个父类的构造函数。
    class Child extends Parent{
        constructor(name='child'){
            super(name);
            //子类调用this要放在super之后
            this.type='child';
        }
    }
    console.log('继承继承传递参数',new Child());
}
{
    //getter,setter，方法
    class Parent{
        constructor(name='mukewang'){
            this.name=name;
        }

        get longName(){
            return 'mk'+this.name;
        }

        set longName(value){
            this.name=value;
        }

        // Method
        calcArea() {
            return this.name;
        }

    }
    let v=new Parent();
    console.log('getter',v.longName);
    v.longName='hello';
    console.log('setter',v.longName);
}
{
    //静态方法
    class Parent{
        constructor(name='mukewang'){
            this.name=name;
        }
        static tell(){
            console.log('tell');
        }
    }
    Parent.tell();
}
{
     //静态属性
    class Parent{
        constructor(name='mukewang'){
            this.name=name;
        }
        static tell(){
            console.log('tell');
        }
    }
    Parent.type='test';

    console.log('静态属性',Parent,Parent.type);
}
import yargs from 'yargs';

const args = yargs

    .option('production',{
        boolean:true,
        default:false,
        describe:'min all scripts'
    })

    .option('watch',{   //控制是否监听
        boolean:true,
        default:false,
        describe:'watch all files'
    })

    .option('verbose',{//详细输出命令行日志
        boolean:true,
        default:false,
        describe:'log'
    })

    .option('sourcemaps',{
        describe:'force the creation of sroucemaps'
    })

    .option('port',{   //设置服务器端口。
        string:true,
        default:8080,
        describe:'server port'
    })

    .argv

export default args;

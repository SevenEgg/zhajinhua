//事件监听
const EventListener = function(obj){
    const Register = {};
    obj.on = function(name,methods){
        //检测有没有匹配的事件名字
        if(!Register.hasOwnProperty(name)){
            // 初始化
            Register[name] = [];
        }
        //注册方法
        Register[name].push(methods);
    };
    obj.fire = function(name){
        // 检测事件列表里有没有这个消息
        if(Register.hasOwnProperty(name)){
            // 存在则取出
            var handlerList = Register[name];
            for(let i = 0;i<handlerList.length;i++){
                let handler = handlerList[i];
                let args = [];//取出参数
                for(let j =1;j< arguments.length;j++){
                    args.push(arguments[j]);
                    handler.apply(this,args);
                }
            }
        }
    };
    obj.off = function(){

    };

    obj.destroy = function(){

    };

    return obj;
}

module.exports = EventListener;
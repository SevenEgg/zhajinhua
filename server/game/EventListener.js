//监听
const EventListner = function(obj){
    var Register = {};//注册器

    obj.on = function(name,methods){
        // 检查注册器是否存在该方法
        if(!Register.hasOwnProperty(name)){
            Register[name] = [];
        }

        Register[name].push(methods);
    };

    obj.fire = function(name){
        // 检查注册器是否存在该方法
        if(Register.hasOwnProperty(name)){
            // 取出
            var handleList = Register[name];
            for(var i = 0;i<handleList.length;i++){
                var handler = handleList[i];
                var args = [];
                for(var j = 1;j<arguments.length;j++){
                    args.push(arguments[j]);
                }

                handler.apply(this,args);
            }
        }   
    };

    // 清除指定的事件
    obj.off = function(name,methods){
        // 检查注册器存不存在
        if(Register.hasOwnProperty(name)){
            var handleList = Register[name];
            for(let i = 0;i<handleList.length;i++){
                if(handleList[i] === methods){
                    handleList.splice(i,1);
                }
            }
        }
    };
    //清空事件
    obj.removeAllListeners = function(){
        Register = {};
    }

    return obj;
}

module.exports = EventListner;
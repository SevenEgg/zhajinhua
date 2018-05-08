// const global = {};
const EventListener  = require('./EventListener');
var global = require('./global');
cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        var index = 0;
        global.socket = io("localhost:3000");
        global.EventListener = EventListener({

        });
        global.EventListener.on('login',function(uid){
            console.log("玩家id:"+uid);
            // 向服务器发送消息
            global.socket.emit('login',uid);
        });
        //接收创建玩家消息
        global.socket.on("sync_data",  (data)=> {
            console.log("sync data = " + JSON.stringify(data));
            var data = data;
            global.player = {
                uid:data.uid
            };
            // 判断索引
            // var index = 0;
            // if(global.player.uid = data.uid){
            //     index = 0;
            // }
            index = data.index;
            global.player.index = 0;
            // global.player.index = index;//位置索引
            cc.director.loadScene('game');
        });

        //其他玩家加入消息
        global.socket.on('player_join',(data) => {
            global.EventListener.fire('player_join',data);
        });

    },

    start () {
        
    }
    // update (dt) {},
});

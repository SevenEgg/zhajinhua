const Player = function(uid,socket,event){
    var that = {};
    var self = this;
    var _uid = uid;
    var _socket = socket;
    var _event = event;


    console.log('创建玩家1:'+_uid);

    //发送消息
    that.sendSyncData = function (data) {
        // console.log(abc);
        console.log("send sync data  = " + JSON.stringify(data));
        _socket.emit("sync_data", data);
    };

    const sendCreatePlayerMessage = function(data){
        // 判断是否是玩家自己
        if(data.uid !== _uid){
            console.log(JSON.stringify(data));
            _socket.emit('player_join',data);//玩家加入
        }
        
    };
    _event.on('send_create_player_message',sendCreatePlayerMessage);

    // 销毁
    that.destroy = function(){
        _event.off('send_create_player_message',sendCreatePlayerMessage);
    }
    return that;
}

module.exports = Player;
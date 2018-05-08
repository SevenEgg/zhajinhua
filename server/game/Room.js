//房间
const Player = require('./Player');
const EventListener = require('./EventListener');
const Room = function(){
    var that = {}
    var _playerList = [];//房间玩家列表
    var _event = EventListener({});//事件监听
    //创建玩家
    that.createPlayer = function(uid,socket){
        console.log('创建用户:'+uid);
        var player = Player(uid,socket,_event);
        _playerList.push(player);
        //发送同步消息
        player.sendSyncData({
            uid: uid,
            index:_playerList.length-1,
            playerList:_playerList
        });
        

        _event.fire('send_create_player_message',{
            uid:uid,
            index:_playerList.length -1
        });
    }

    //获取房间玩家数
    that.getPlayerCount = function(socket){
        return _playerList.length;
    }
    return that;
}
module.exports = Room;

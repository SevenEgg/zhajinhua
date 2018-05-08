// socketServer
var socket = require('socket.io');
var Room = require('./Room');
const SocketServer = function(server){
    var that = socket(server);
    var _roomList = [];//房间列表
    // 监听连接
    that.on("connection",function(socket){
        console.log('用户已连接');
        //玩家登录的消息
        socket.on("login",function(uid){
            console.log("玩家登录 ："+uid);
            // 如果房间为0则创建一个
            if(_roomList.length === 0){
                _roomList.push(Room());
            }
            //检测房间里的人数有没有超过6人
            if( _roomList[_roomList.length -1].getPlayerCount() > 6){
                _roomList.push(Room);//重新创建房间
            }

            //加入房间
            _roomList[_roomList.length -1].createPlayer(uid,socket);
        });

        
    });
    return that;

}

module.exports = SocketServer;
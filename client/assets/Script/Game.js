const global = require('./global');
const EventListener  = require('./EventListener');
cc.Class({
    extends: cc.Component,

    properties: {
        player_pos_list:{
            default:[],
            type:cc.Node
        },
        player:{
            default:null,
            type:cc.Prefab
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // console.log(global.player.index);
        // this.playerName.string = global.player.uid;
        var playerName = global.player.uid;
        var playerIndex = global.player.index;
        // console.log(this.playerName);
        this.createPlayer(playerName,playerIndex);

        global.EventListener.on('player_join',(data)=>{
            console.log('玩家加入:'+JSON.stringify(data));
            // 位置重置
            this.createPlayer(data.uid,data.index);
        });
    },

    start () {

    },
    createPlayer:function(name,index){
        // this.playerName.string = name;
        var player = cc.instantiate(this.player);
        this.node.addChild(player);
        // player.parent = this.node;
        player.position = this.player_pos_list[index].position;
        
        // player.getChildByName("playerLabel").init(name);
        console.log(player.getComponent("playerLabel"));
       
    }
    // update (dt) {},
});

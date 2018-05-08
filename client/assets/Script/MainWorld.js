const global = require('./global');
cc.Class({
    extends: cc.Component,

    properties: {
       editBox:{
           default:null,
           type:cc.EditBox
       }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },
    buttonOnclick:function(e,data){
        console.log('传入的数据:'+data);
        console.log('输入框数据:'+ this.editBox.string);
        // 判断填入内容是否为空
        if(this.editBox.string.length !== 0 && this.editBox.string.length !== ''){
             // 创建用户 发送给服务器
            global.EventListener.fire('login',this.editBox.string);
        }
       
    },
    // update (dt) {},
});



cc.Class({
    extends: cc.Component,

    properties: {
        bg_map:[cc.Node],
        bg_seep:0.6,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        var a;
        var aaa = this.getChildByName("slice03_03").getComponent("animation");
    this.node.on(cc.Node.EventType.TOUCH_START,function (e){
        a = e.getLocation();
        console.log(a.x+","+a.y);
        return true;
    }.bind(this),this);
    this.node.on(cc.Node.EventType.TOUCH_END,function (e) {
        var c = e.getLocation();
        var v = cc.v2(a);
        var v1 = cc.v2(v,c);
        if(v1.x<0){

        }
        return true;
    }.bind(this),this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE,function(e){
            var a = e.getDelta();
            if(a.x < 0){
                console.log(aaa.clips[0]);
            }
        }.bind(this),this);

    },


    update (dt) {

        this.bgMove(this.bg_map, this.bg_seep);

    },
    
    bgMove:function (bgList,bgseep) {
        for (var index = 0;index<bgList.length;index++){
            bgList[index].y -= bgseep;
            if (bgList[index].y <= 0 - bgList[index].height)
            {
                bgList[index].y = 640;
            }
        }

    }
});

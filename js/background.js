// 背景行为的抽象
var BgMove = function(intervalTime) {
    // 记录最后一次时间
    this.lastBgMoveTime = 0;
    this.intervalTime = intervalTime || 300;
    
}

BgMove.prototype = {
    excute: function(sprite, time) {
        if (this.lastBgMoveTime + this.intervalTime == time) {
            if(sprite.top>=sprite.height){
                sprite.top=-sprite.height;
            }
            sprite.top += sprite.speedy;
            this.lastBgMoveTime = time;
        }
    }
}

/**
 * 背景精灵的绘制
 * */
function BgSprite() {

    var cells = [{ x: 0, y: 0, w: 320, h: 568 }];
    // 实例化一个背景精灵的绘制器
    var bgPainter = new SpritesPainter('img/gameArts.png', cells);
    // 实例化一个精灵
    var bgsprite = new Sprites('背景', bgPainter, [new BgMove(3)]);
    return bgsprite;
}
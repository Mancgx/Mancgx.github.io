
//子弹的飞行动画
var BulletMove = function (intervalTime) {
    // 记录最后一次时间
    this.lastBulletMoveTime = 0;
    this.intervalBulletTime=2;
    // this.intervalTime = intervalTime || 300;

}
//在原型中构造执行方法
BulletMove.prototype = {
    excute: function (sprite, time) {
        if(sprite.top<=-sprite.height||sprite.hp==0){
            sprite.visible  =false
        }
            sprite.top -= sprite.speedy;
            this.lastBulletMoveTime = time;
        }
}

//创建子弹对象函数
/**
	
*/
function createBullet() {
    //当前子弹的初始化属性
    var option = { w: 5, h: 15, hp: 1 };
    //当前子弹的图片资源
    var cells = [
        { x: 499, y: 0, w: 5, h: 15 }
    ];
    var Bullet = new SpritesPainter('img/gameArts.png', cells);
    //创建一个子弹对象
    var bullet = new Sprites('bullet', Bullet, [new BulletMove()]);

    //初始化子弹的属性
    bullet.speedy = 10;
    bullet.width = option.w;
    bullet.height = option.h;
    bullet.hp = option.hp;

    return bullet;
}

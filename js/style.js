/*
    精灵对象的构造

@param name: 当前对象的名称
@param painter: 用于绘制当前对象的绘制器
    */
// function Sprites() {

// }
var Sprites = function (name, painter, aniArr) {
    this.name = name || '默认精灵';
    this.painter = painter;
    this.left = 0;
    this.top = 0;
    this.width = 10;
    this.height = 10;
    this.speedx = 0;
    this.speedy = 0;
    this.hp = 0;
    this.visible = true; //当前对象的可见状态
    this.aniArr = aniArr || [];
    this.animatingState = false; //当前对象正在处于哪个动画状态
}
Sprites.prototype = {
    // 对象 的绘制方法
    paint: function (ctx) {

        this.painter.paint(this, ctx);
    },
    update: function (time) {
        for (var i in this.aniArr) {
            this.aniArr[i].excute(this, time);
        }
    },
    advance: function (ctx) {
        this.painter.advance(this, ctx);
    }
}

/** 
 * 精灵的绘制器（描边，填充，图像的绘制）
 * */

var SpritesPainter = function (url, cells) {

    this.img = new Image(); //图片对象
    this.img.src = url; //图片资源的路径
    this.cells = cells || [];
    this.cellIndex = 0; //当前绘图对象所要绘制的图片的信息 
}

SpritesPainter.prototype = {
    // 更新图片的方法
    advance: function (sprite) {
        if (this.cellIndex < this.cells.length) {
            this.cellIndex++;
        }
        if (this.cellIndex == this.cells.length - 1) {
            sprite.visible = false;
        }
    },
    // 图像的绘制方法
    paint: function (sprite, ctx) {
        if (this.img.complete) {
            // 
            var cell = this.cells[this.cellIndex];
            ctx.drawImage(this.img, cell.x, cell.y, cell.w, cell.h, sprite.left, sprite.top, sprite.width, sprite.height);
        }
    }
}
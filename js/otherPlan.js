function getRandom(min,max) {
    return Math.round(Math.random() * (max - min) + min);
}

var EnemyFly = function(){
    this.lastEnemyTime=0;
}
EnemyFly.prototype={
    excute:function(sprite,time){
        sprite.top+=sprite.speedy;
    }
}


//创建敌方飞机
CreateEnemy = function (name) {
    var cells = [];
    var configInfo;

    if (name == 's') {
        //实例化小飞机
         cells = [
            { x: 80, y: 655, w: 35, h: 30 },//正常飞行
            { x: 45, y: 655, w: 35, h: 30 },
            { x: 418, y: 731, w: 40, h: 30 },
            { x: 473, y: 723, w: 40, h: 50 }];
        //小飞机配置信息
        configInfo = { x: getRandom(0,canvas.width-35), y: -30, w: 35, h: 30, hp: 10, speedx: 0, speedy: 4 };
    } else if (name == 'm') {
        //实例化中型飞机
        //中飞机的信息
         cells = [
            { x: 0, y: 569, w: 46, h: 60 },//正常飞行
            { x: 432, y: 413, w: 46, h: 61 },
            { x: 432, y: 538, w: 46, h: 63 },
            { x: 432, y: 599, w: 46, h: 58 },
            { x: 432, y: 478, w: 46, h: 59 }
        ];
        //中飞机配置信息
        configInfo = { x:getRandom(0,canvas.width-46), y: -60, w: 46, h: 60, hp: 50, speedx: 0, speedy: 2 };
    } else if (name == 'b') {
        //实例化大型飞机
         cells = [
            { x: 110, y: 736, w: 110, h: 170 },//正常飞行
            { x: 221, y: 857, w: 110, h: 170 },
            { x: 310, y: 680, w: 110, h: 170 },
            { x: 0, y: 754, w: 110, h: 170 },
            { x: 322, y: 340, w: 110, h: 170 },
            { x: 322, y: 170, w: 110, h: 170 },
            { x: 322, y: 340, w: 110, h: 170 },
            { x: 322, y: 510, w: 110, h: 170 },
            { x: 322, y: 0, w: 110, h: 170 }
        ];
        //大飞机配置信息
        configInfo = { x:getRandom(0,canvas.width-110), y: -170, w: 110, h: 170, hp: 200, speedx: 0, speedy: 1 };
    }
    
    var enemyPainter = new SpritesPainter('img/gameArts.png', cells);;
    var emenyPlan = new Sprites('敌方飞机', enemyPainter, [new EnemyFly()]);
    //初始化位置信息
    emenyPlan.hp = configInfo.hp;
    emenyPlan.left = configInfo.x;
    emenyPlan.top = configInfo.y;
    emenyPlan.width = configInfo.w;
    emenyPlan.height = configInfo.h;
    emenyPlan.speedx = configInfo.speedx;
    emenyPlan.speedy = configInfo.speedy;


    return emenyPlan;
}
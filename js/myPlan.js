//创建我方飞机
function CreateMyPlan(){
        var cells = [
            { x: 432, y: 0, w: 66, h: 82 },
            { x: 432, y: 82, w: 66, h: 84 },
            { x: 432, y: 164, w: 66, h: 84 },
            { x: 432, y: 246, w: 66, h: 84 },
            // { x: 432, y: 328, w: 66, h: 84 }
        ] 
    //我方飞机的位置
    pain = {hp:100,w:66,h:84};
    var myPlanpainter = new SpritesPainter('img/gameArts.png',cells);
    var myplan = new Sprites('我方飞机',myPlanpainter,[]);
    myplan.hp = pain.hp;
    myplan.top = 450;
    myplan.left = 147;
    myplan.width = pain.w;
    myplan.height = pain.h;
    myplan.hp=pain.hp;
    return myplan;
}

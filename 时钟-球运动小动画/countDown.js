/**
 * 匀加速运动
 * s = v0 + 1/2*a*t;
 * v=v0+at;
 * a=(v-v0)/t
 * a越大，降落越快
 * vy为负，则会上抛
 */

var can;
var ctx;
var cWidth = 1024;
var cHeight = 768;
var r = 8;
var mTop = 60;
var mLeft = 30;//距离画布的左边
// 时间
var endTime = new Date(2018, 11, 18, 19,50,30);
var nowTime  = 0;
//动画小球
var balls = [];
var colors = ['#33b5e5','#0099cc', '#aa66cc', '#9933cc', '#99cc00',
             '#669900','#ffbb33', '#ff8800', '#ff4444', '#cc0000'];

window.onload = function(){
    cWidth = document.body.clientWidth;
    hHeight = document.body.clientHeight;

    mLeft = Math.round(cWidth/10);
    r = Math.round(cWidth * 4/5 /108) -1;
    mTop = Math.round(cHeight/5);

    can = document.getElementById('canvas');
    ctx = can.getContext('2d');


    can.width = cWidth;
    can.height = cHeight;
    nowTime = new Date();
    
    setInterval(function(){
        render(ctx);//绘制
        update(ctx);//数据改变
    }, 50);
}
function update(ctx){
    var nextTime = new Date();
    var nextHour = getCurrentHour(nextTime);
    var nextMinute = getCurrentMinute(nextTime);
    var nextSecond = getCurrentSeconds(nextTime);

    var hour = getCurrentHour(nowTime);
    var minute = getCurrentMinute(nowTime);
    var second = getCurrentSeconds(nowTime);

    if (parseInt(hour / 10) != parseInt(nextHour / 10)){
        addBalls(mLeft, mTop, parseInt(nextHour / 10), ctx);
    }
    if (parseInt(hour % 10) != parseInt(nextHour % 10)) {
        addBalls(mLeft + 15 * (r + 1), mTop, parseInt(hnextHourour % 10), ctx);
    }
    if (parseInt(minute / 10) != parseInt(nextMinute / 10)) {
        addBalls(mLeft + 39 * (r + 1), mTop, parseInt(nextMinute / 10), ctx);
    }
    if (parseInt(minute % 10) != parseInt(nextMinute % 10)) {
        addBalls(mLeft + 54 * (r + 1), mTop, parseInt(nextMinute % 10), ctx);
    }
    if (parseInt(second / 10) != parseInt(nextSecond / 10)) {
        addBalls(mLeft + 78 * (r + 1), mTop, parseInt(nextSecond / 10), ctx);
    }
    if (parseInt(second % 10) != parseInt(nextSecond % 10)) {
        addBalls(mLeft + 93 * (r + 1), mTop, parseInt(nextSecond % 10), ctx);
    }
    updateBalls();
    nowTime = nextTime;
    
}
function updateBalls(){
    for(let i = 0 ; i < balls.length; i++){
        balls[i].x += balls[i].vx;
        balls[i].y += balls[i].vy;
        balls[i].vy += balls[i].g;

        if (balls[i].y >= cHeight -r){
            balls[i].y = balls[i].y - r;
            balls[i].vy = -balls[i].vy * 0.75;
        }
    }
    var cnt = 0;
    var temp = [];
    for (let i = 0; i < balls.length; i++) {
        if (balls[i].x + r > 0 && balls[i].x - r < cWidth) {
            //balls[cnt++] = balls[i];
            temp[cnt++] = balls[i];
        }
    }
    //balls = temp;
    console.log(cnt);
    // while (balls.length > Math.min(300, cnt)) {
    //     balls.pop();
    // }
}
function addBalls(x, y, num, ctx){
    var matrix = digit[num];//拿到渲染的数字矩阵
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            //画点阵里的球
            if (matrix[i][j] === 1) {
                var aBall = {
                    x: x + j * 2 * (r + 1) + (r + 1),
                    y: y + i * 2 * (r + 1) + (r + 1),
                    g: 1.5 + Math.random(),//[1.5, 2.5]
                    vx: Math.pow(-1, Math.ceil(Math.random() *1000))*4,//[1,1000]->[-1,1]->[-4,4]
                    vy: -5, //往上抛的效果
                    color: colors[Math.floor( Math.random() * colors.length)]
                }
                balls.push(aBall);
            }
        }
    }
}
function render(ctx){
    var hour = getCurrentHour(nowTime);
    var minute = getCurrentMinute(nowTime);
    var second = getCurrentSeconds(nowTime);

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.fillStyle = "rgb(0, 102, 153)";
    renderDigit(mLeft, mTop, parseInt(hour/10) , ctx);
    //1 * 7 * 2 * (r + 1) + (r + 1)=15(r+1)
    renderDigit(mLeft + 15 * (r + 1), mTop, parseInt(hour % 10) , ctx);
    renderDigit(mLeft + 30 * (r + 1), mTop, 10 , ctx);
    renderDigit(mLeft + 39 * (r + 1), mTop, parseInt(minute / 10) , ctx);
    renderDigit(mLeft + 54 * (r + 1), mTop, parseInt(minute % 10) , ctx);
    renderDigit(mLeft + 69 * (r + 1), mTop, 10, ctx);
    renderDigit(mLeft + 78 * (r + 1), mTop, parseInt(second / 10), ctx);
    renderDigit(mLeft + 93 * (r + 1), mTop, parseInt(second % 10), ctx);

    //绘制动画小球
    for (let i = 0; i < balls.length; i++) {
        ctx.fillStyle = balls[i].color;
        ctx.beginPath();
        ctx.arc(balls[i].x, balls[i].y, r, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
    }
}
function renderDigit(x, y, num, ctx){

    var matrix = digit[num];//拿到渲染的数字矩阵
    var ballX;
    var ballY;

    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[i].length; j++){
            //画点阵里的球
            if (matrix[i][j] === 1){
                //球的中心位置
                ballX = x + j * 2 * (r + 1) + (r + 1);
                ballY = y + i * 2 * (r + 1) + (r + 1);
                //画球
                ctx.beginPath();
                ctx.arc(ballX, ballY, r, 0, 2 * Math.PI);
                ctx.closePath();
                ctx.fill();
            }
        }
    }
}
function getCurrentHour(time) {
    return time.getHours();
}
function getCurrentMinute(time) {
    return time.getMinutes()
}
function getCurrentSeconds(time) {
    return time.getSeconds()
}
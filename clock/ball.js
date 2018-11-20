
var can;
var ctx;
var cWidth = 1024;
var cHeight = 768;

var ball = {x: 500, y: 100, r: 20, color: '#005588', g: 2, vx: -4, vy: -10}
window.onload = function(){
    can = document.getElementById('canvas');
    ctx = can.getContext('2d');
    can.width = cWidth;
    can.height = cHeight;

    setInterval(function(){
        render(ctx);
        update(ctx);
    }, 50);
}
function render(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = ball.color;

    ctx.beginPath();
    ctx.arc( ball.x, ball.y, ball.r, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();

}
function update(ctx){
    ball.x += ball.vx;
    ball.y += ball.vy;
    ball.vy += ball.g; 
    //碰撞检测
    if (ball.y  >= ctx.canvas.height - ball.r){
        ball.y = ctx.canvas.height - ball.r;
        ball.vy = - ball.vy * 0.5;//0.5表示阻力
    }
}
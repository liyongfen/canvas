const Koa = require('koa');
const static = require('koa-static');
const path = require('path');

const app = new Koa();
const staticPath = './filter';

app.use(static(path.join(__dirname, staticPath)));
app.use(async (ctx)=>{
    ctx.body = 'hello word';
});
app.listen(3000);

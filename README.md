## 直线绘制

属性
```
ctx.lineWith = 5;
ctx.strokeStyle = 'red';
ctx.lineCap = 'butt';//round,square,线段的帽子
ctx.lineJoin = 'miter';// 线条与线条相交的时候呈现的形态，miter尖角(default) ,bevel平角, round圆角
ctx.miterLimit = 20;//尖角的高度限制
```

方法
```
ctx.moveTo(x, y);
ctx.line(x, y);

ctx.beginPath();//重新绘制，清空掉之前的起始点，并非要成对出现，
ctx.closePath();

ctx.stroke();//画笔
```

渐变
```
线性渐变
var grd = ctx.createLinearGradient(xstart, ystart, xend, yend)
grd.addColorStop(stop, color)
ctx.fillStyle = grd;

镜像渐变
var grd = ctx.createRadialGradient(x0, y0, r0, x1, y1, r1)//第一个圆的圆点坐标和半径（x0, y0, r0）和第二个圆的圆点坐标和半径（x1, y1, r1）
grd.addColorStop(stop, color)
var back = ctx.createPattern(canvas/img/video, repeat-style);

//fillStyle/strokeStyle = color/gradient/image/canvas/video/

```
## 填充
```
ctx.fillStyle = 'red';
ctx.fill();
```
## 绘制矩形
```
ctx.rect(x,y , w, h);//还需要使用，ctx.stroke()
ctx.fillRect(x, y, w, h);//绘制填充矩形
ctx.strokeRect();//绘制空心矩形
```
## 曲线绘制
绘制圆
```
ctx.arc(x, y, r, beginAngle, endAngle, counterclockwise)// 默认顺时针 counterclockwise(逆时针) = false 

```

(x1, y1)是一个控制点，绘制相切于两条直线并半径为r的曲线，切点不一定是起始点或者终点
```
ctx.moveTo(x0, y0);
ctx.arcTo(x1, y1, x2, y2, r);
```

二次贝塞尔曲线，(x0, y0)起始点，(x1, y1)是控制点， (x2, y2)结束点
```
ctx.moveTo(x0, y0);
ctx.quadraticCurveTo(x1, y1, x2, y2);
```

三次贝塞尔曲线，(x1,y1)与(x2,y2)都是控制点，(x0,y0)和(x1,y1)构成线段，(x2,y2)和(x3,y3)构成线段，曲线相切于两个线段
```
ctx.moveTo(x0, y0);
ctx.bezierCurveTo(x1, y1, x2, y2, x3, y3)
```
## 文本绘制
文本样式
font 
默认值："20px sans-serif"
例：
```
ctx.font = "bold 100px Arial";
font-style 
font-variant 
font-weight 
font-size 
font-family
```

文本对齐
```
ctx.textAlign = "left" //center right
ctx.textBaseline = "top" //moddle bottom ideographic
```

文本内容
```
ctx.fillText('测试test', x, y, [maxlen]);
```

文本度量
```
ctx.measureText(string).width  //高度还没有
```
## 图形转换
```
ctx.translate(x, y); 平移
ctx.rolate(deg ); 旋转
ctx.scale(x,y);//放大

ctx.transform(a,b,c,d,e,f)
ctx.setTransform(a,b,c,d,e,f)
        
//a水平缩放，b水平倾斜
//c垂直缩放，d垂直倾斜
//e水平位移，f垂直位移
```

## 图像绘制
```
ctx.drawImage(image/canvas, dx, dy)
ctx.drawImage(image/canvas, dx, dy, dw, dh)
ctx.drawImage(image/canvas, sx, sy, sw,sh, dx, dy, dw, dh)
//d代表画在画布上的位置和宽高，s代表源图片的位置和宽高

获取图像素
context.getImageData(x, y, w, h)
context.putImageData(iamgeData, dx, dy, dirtyX, dirtyY, dirtyW, dirtyH)
context.createImageData(w,h)

//第i个像素，
//r=pixelData[4*i+0];
//g=pixelData[4*i+1];
//b=pixelData[4*i+2];
//a=pixelData[4*i+3]
```
## 其他
```
ctx.save();
ctx.restore();//成对出现, 不影响外界的状态
```

阴影
```
ctx.shadowColor = "gray"
ctx.shadowOffsetX = 20 //可为负值
ctx.shadowOffsetY = 20 //可为负值
ctx.shadowBlur = 5
```

全局透明度
```
ctx.globalAlpha = 1//[0,1]
ctx.globalCompositeOperation = 'source-over'  //destination-over...
```

剪辑区域
```
ctx.clip()
```

非零环绕原则：路径方向重要性

清除画布
```
ctx.clearRect(x, y, w, h)
```

判断是否在区域内
```
ctx.isPointPath(x, y);
```

## 兼容解决
explorecanvas 兼容IE6,7,8等浏览器的兼容性问题
https://code.google.com/p/explorecanvas/

## canvas图形库
canvasplus https://code.google.com/p/canvasplus/
artisan js http://artisanjs.com/
rgraph https://roopons.com.au/wp-content/plugins/viral-options/js/rgraph/





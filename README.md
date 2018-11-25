

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

#其他

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
ctx.isPointPath(x, y);


explorecanvas 兼容IE6,7,8等浏览器的兼容性问题
https://code.google.com/p/explorecanvas/

canvas图形库
canvasplus https://code.google.com/p/canvasplus/
artisan js http://artisanjs.com/
rgraph https://roopons.com.au/wp-content/plugins/viral-options/js/rgraph/





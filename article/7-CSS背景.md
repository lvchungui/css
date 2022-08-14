# <center>7 CSS 背景

## 7.1 背景颜色

- 属性名：background-color（bgc）
- 属性值：关键字、rgb表示法、rgba表示法、十六进制......
- 注意点：
  - 背景颜色默认值是透明： rgba(0,0,0,0) 、transparent，我们也可以手动指定背景颜色为透明色`background-color:transparent;`
  - 背景颜色不会影响盒子大小，并且还能看清盒子的大小和位置，一般在布局中会习惯先给盒子设置背景颜色

## 7.2 背景图片

- 属性名：background-image（bgi）
- 属性值：`background-image: url(图片的路径);`
- 注意点：
  - 背景图片中url中可以省略引号
  - 背景图片默认是在水平和垂直方向平铺的
  - 背景图片仅仅是指给盒子起到装饰效果，类似于背景颜色，是不能撑开盒子的

## 7.3 背景平铺

- 属性名：background-repeat（bgr）
- 属性值：

|   取值    |             效果             |
| :-------: | :--------------------------: |
|  repeat   | (默认值)水平和垂直方向都平铺 |
| no-repeat |            不平铺            |
| repeat-x  |    沿着水平方向(x轴)平铺     |
| repeat-y  |    沿着垂直方向(y轴）平铺    |



## 7.4 背景位置

- 属性名：background-position（bgp）

    ~~~css
    background-position: x y;
    ~~~


- 参数代表的意思是：x 坐标和 y 坐标。 可以使用 方位名词 或者 精确单位 
- 注意点：
  - 参数是方位名词
    - 如果指定的两个值都是方位名词，则两个值前后顺序无关，比如 left top 和 top left 效果一致
    - 如果只指定了一个方位名词，另一个值省略，则第二个值默认居中对齐
  - 参数是精确单位
    - 如果参数值是精确坐标，那么第一个肯定是 x 坐标，第二个一定是 y 坐标
    - 如果只指定一个数值，那该数值一定是 x 坐标，另一个默认垂直居中
  - 参数是混合单位
     - 如果指定的两个值是精确单位和方位名词混合使用，则第一个值是 x 坐标，第二个值是 y 坐标


## 7.5 背景图像固定（背景附着）

- background-attachment 属性设置背景图像是否固定或者随着页面的其余部分滚动
- background-attachment 后期可以制作视差滚动的效果

    ~~~css
    background-attachment : scroll / fixed;
    ~~~


- 属性值：
  - scroll：背景图像是随对象内容滚动
  - fixed：背景图像固定


## 7.6 背景相关属性连写

- 属性名：background（bg）
- 属性值：单个属性值的合写，取值之间以空格隔开
- 书写顺序：背景颜色 背景图片地址 背景平铺 背景图像滚动 背景图片位置

    ~~~css
    background: red url(image.jpg) repeat-y fixed top ;
    ~~~


- 省略问题：
  - 可以按照需求省略
  - 特殊情况：在pc端，如果盒子大小和背景图片大小一样，此时可以直接写 background：url()



# <center>13 CSS样式补充

## 13.1 精灵图

- 场景：项目中将多张小图片，合并成一张大图片，这张大图片称之为精灵图
- 优点：减少服务器发送次数，减轻服务器的压力，提高页面加载速度
- 例如：需要在网页中展示8张小图片
  - 8张小图片分别发送 → 发送8次
  - 合成一张精灵图发送 → 发送1次

![图 1](../images/1e8489b2b4f0edaf90d830f24a2014f02b10cd912c9ddaab8e1263de8da4a030.png)  


- 精灵图的使用步骤
  1. 创建一个盒子
  2. 通过PxCook量取小图片大小，将小图片的宽高设置给盒子
  3. 将精灵图设置为盒子的背景图片
  4. 通过PxCook测量小图片左上角坐标，分别取负值设置给盒子的background-position：x y


~~~css
span {
    display: inline-block;
    width: 18px;
    height: 24px;
    background-color: pink;
    background-image: url(./images/taobao.png);
    /* 背景图位置属性: 改变背景图的位置 */
    /* 水平方向位置  垂直方向的位置 */
    /* 想要向左侧移动图片, 位置取负数;  */
    background-position: -3px 0;
}
b {
    display: block;
    width: 25px;
    height: 21px;
    background-color: green;
    background-image: url(./images/taobao.png);
    background-position: 0 -90px;
}
~~~

## 13.2 背景图片大小

- 作用：设置背景图片的大小，
- 语法：background-size：宽度 高度；
- 取值：

|  取值   |                           场景                           |
| :-----: | :------------------------------------------------------: |
| 数字+px |                      简单方便，常用                      |
| 百分比  |              相对于当前盒子自身的宽高百分比              |
| contain |    包含，将背景图片等比例缩放，直到不会超出盒子的最大    |
|  cover  | 覆盖，将背景图片等比例缩放，直到刚好填满整个盒子没有空白 |


~~~css
.box {
    width: 400px;
    height:300px;
    background-color: pink;
    background-image: url(./images/1.jpg);
    background-repeat: no-repeat;
    /* background-size: 300px; */
    /* background-size: 50%; */

    /* 如果图的宽或高与盒子的尺寸相同了, 另一个方向停止缩放 -- 导致盒子可能有留白 */
    background-size: contain;
    
    /* 保证宽或高和盒子尺寸完全相同 , 导致图片显示不全 */
    background-size: cover;

    /* 工作中, 图的比例和盒子的比例都是相同的, contain 和cover效果完全相同; */
}
~~~

- background连写拓展：`background: color image repeat position/size;`


## 13.3 文字阴影

- 作用：给文字添加阴影效果，吸引用户注意
- 属性名：text-shadow
- 取值：

|   参数   |            作用            |
| :------: | :------------------------: |
| h-shadow | 必须，水平偏移量。允许负值 |
| v-shadow | 必须，垂直偏移量。允许负值 |
|   blur   |        可选，模糊度        |
|  color   |       可选，阴影颜色       |


- 拓展：阴影可以叠加设置，每组阴影取值之间以逗号隔开


## 13.4 盒子阴影

- 作用：给盒子添加阴影效果，吸引用户注意，体现页面的制作细节
- 属性名：box-shadow
- 取值：

|   参数   |            作用            |
| :------: | :------------------------: |
| h-shadow | 必须，水平偏移量。允许负值 |
| v-shadow | 必须，垂直偏移量。允许负值 |
|   blur   |        可选，模糊度        |
|  spread  |       可选，阴影扩大       |
|  color   |       可选，阴影颜色       |
|  inset   |  可选，将阴影改为内部阴影  |

~~~css
.box {
    width: 200px;
    height: 200px;
    background-color: pink;

    box-shadow: 5px 10px 20px 10px green inset;

    /* 注意: 外阴影, 不能添加outset, 添加了会导致属性报错 */
    /* box-shadow: 5px 10px 20px 10px green outset; */
}
~~~


## 13.5 过渡

- 作用：让元素的样式慢慢的变化，常配合hover使用，增强网页交互体验
- 属性名：transition
- 常见取值：

|    参数    |                               取值                               |
| :--------: | :--------------------------------------------------------------: |
| 过渡的属性 | all:所有能过渡的属性都过渡、(具体属性名如: width:只有width有过渡 |
| 过渡的时长 |                            数字+s(秒)                            |


- 注意点：
  - 过渡需要：默认状态 和 hover状态样式不同，才能有过渡效果
  - transition属性给需要过渡的元素本身加
  - transition属性设置在不同状态中，效果不同的
     - 给默认状态设置，鼠标移入移出都有过渡效果
     - 给hover状态设置，鼠标移入有过渡效果，移出没有过渡效果


~~~css
 /* 过渡配合hover使用, 谁变化谁加过渡属性 */
.box {
    width: 200px;
    height: 200px;
    background-color: pink;
    /* 宽度200, 悬停的时候宽度600, 花费1秒钟 */
    /* transition: width 1s, background-color 2s; */

    /* 如果变化的属性多, 直接写all,表示所有 */
    transition: all 1s;
}

.box:hover {
    width: 600px;
    background-color: red;
}
~~~

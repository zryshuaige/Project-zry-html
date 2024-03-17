function write_title()
{

    // 获取 Canvas 元素
var canvas = document.getElementById('title');
var ctx = canvas.getContext('2d');

// 创建线性渐变
var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0); // 定义渐变的起点和终点坐标

// 添加颜色断点
gradient.addColorStop(0, 'green');    // 起始颜色为红色
gradient.addColorStop(1, 'blue');  // 终点颜色为白色

// 设置文本样式
ctx.font = "30px Arial";
ctx.fillStyle = gradient;

// 绘制渐变文本
ctx.fillText("ZRYのstart", 50,50);
}

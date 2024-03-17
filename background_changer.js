function Set_background()
{
  // 设置背景图片大小以覆盖整个body  
document.body.style.backgroundSize = "cover";  
  
// 设置背景图片不重复  
document.body.style.backgroundRepeat = "no-repeat";  
  
// 设置背景图片位置居中  
document.body.style.backgroundPosition = "center center";
}



function moveButton(direction) {  
  const leftButton = document.querySelector('.background_left');  
  const rightButton = document.querySelector('.background_right');  
  const containerWidth = document.querySelector('.container_background_changer').offsetWidth;  
  
  if (direction === 'left') {  
    leftButton.style.transform = 'translateX(-' + containerWidth + 'px)';  
    rightButton.style.transform = 'translateX(0)';  
    document.body.style.backgroundImage = "url('../Project zry网站/images/蒙德风光.jpg')";
  } else {  
    leftButton.style.transform = 'translateX(0)';  
    rightButton.style.transform = 'translateX(' + containerWidth + 'px)';  
    document.body.style.backgroundImage = "url('../Project zry网站/images/鸣神大社.png')"; 
  }  
  Set_background();
}  

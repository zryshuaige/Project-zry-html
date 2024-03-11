function draw()
{
   document.write("1");
   var canvas= document.getElementById("1");
   var context = canvas.getContext("2d");
   context.moveTo(0,0);
   context.lineTo(150,150);
   context.moveTo(0,150);
   context.lineTo(150,0);
   context.stroke();
   document.write("1");
   alert("worked")
}


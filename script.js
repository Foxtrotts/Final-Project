/*
    var canvas = document.getElementById('shapes'),
context = canvas.getContext('2d');

make_base();

function make_base()
{
  base_image = new Image();
  base_image.src = 'pictures/test1.png';
  base_image.onload = function(){
    context.drawImage(base_image, 0, 0, 999, 50);
    context.drawImage(base_image, 0, 0,);
  }
}
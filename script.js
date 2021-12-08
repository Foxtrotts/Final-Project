

/*window.onload = function () {
    var img = new Image();
    img.src = 'pictures/triangles.png';
        img.onload = function () {
            fill_canvas(img);
        }
            function fill_canvas(img) {
                var canvas = document.getElementById('shapes');
                var ctx = canvas.getContext('2d');
                canvas.width = img.width;
                canvas.height = img.height;
    
                ctx.drawImage(img, 0, 0);
        }
    }
     */

    var canvas = document.getElementById('shapes'),
context = canvas.getContext('2d');

make_base();

function make_base()
{
  base_image = new Image();
  base_image.src = 'pictures/triangles.png';
  base_image.onload = function(){
    context.drawImage(base_image, 0, 0,);
    context.drawImage(base_image, 50, 0,);
  }
}
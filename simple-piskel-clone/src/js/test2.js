const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

var plot = function(x, y) { //кисточка - ставит пиксель своего цвета
    if(isFinite(x) && isFinite(y)){
        setPixel(x,y, plot.color);
    }
};
 
function setPixel (x,y,c) { //ставит пиксель цвета с
    var p=ctx.createImageData(1,1);
    p.data[0]=c.r;
    p.data[1]=c.g;
    p.data[2]=c.b;
    p.data[3]=c.a;
    var data = ctx.getImageData(x, y, 1,1).data;
    if(data[3] <= p.data[3]) //сравниваем прозрачность
    ctx.putImageData(p,x,y);
}
 
export function drawLine(x1, y1, x2, y2, color) {
    if(color)  {
        plot.color = color;
    } else {
        plot.color = {r:0,g:0,b:0,a:255}; //цвет по умолчанию - черный
    }
    var deltaX = Math.abs(x2 - x1);
    var deltaY = Math.abs(y2 - y1);
    var signX = x1 < x2 ? 1 : -1;
    var signY = y1 < y2 ? 1 : -1;
    //
    var error = deltaX - deltaY;
    //
    plot(x2, y2);
    while(x1 != x2 || y1 != y2) 
   {
        plot(x1, y1);
        var error2 = error * 2;
        //
        if(error2 > -deltaY) 
        {
            error -= deltaY;
            x1 += signX;
        }
        if(error2 < deltaX) 
        {
            error += deltaX;
            y1 += signY;
        }
    }
}
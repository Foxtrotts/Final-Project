

function drawtriangle(x,y,angle) {
    let rotatedpoint = rotatepoint(0,0,angle)
    let firstpointX = x+rotatedpoint[0];
    let firstpointY = y+rotatedpoint[1];
    rotatedpoint = rotatepoint(100,0,angle)
    let secondpointX = x+rotatedpoint[0]
    let secondpointY = y+rotatedpoint[1]
    rotatedpoint = rotatepoint(50,100*sin(pi/3),angle)
    let thirdpointX = x+rotatedpoint[0]
    let thirdpointY = y+rotatedpoint[1]
    context.beginPath();
    context.moveTo(firstPointX, firstpointY);
    context.lineTo(secondpointX, secondpointY);
    context.lineTo(thirdpointX, thirdpointY - height);
    context.closePath()
}

function rotatepoint(x,y,angle) {
    let newX = x*cos(angle)-y*sin(angle);
    let newY = x*sin(angle)-y*cos(angle);
    return [newX,newY];
}
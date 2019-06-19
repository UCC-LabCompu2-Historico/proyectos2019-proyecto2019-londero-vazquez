function factoreo() {


    var a = Number(document.getElementById("a").value);
    var b = Number(document.getElementById("b").value);
    var c = Number(document.getElementById("c").value);
    var d= (b*b)-(4*a*c);

    if (d==0)
    { var x1=-b/2*a;
      var x2=-b/2*a;}

    else

    if(d>0)
    {   x1= -b+Math.sqrt(d)/2*a;
        x2= -b-Math.sqrt(d)/2*a;}

    else
    { var x= -b/2*a;
        var compleja= Math.sqrt((-1)*d)/2*a;
        x1=x+compleja+"i";
        x2=x-compleja+"i";}

    var raiz= "(x-("+x1+"))"+"(x-("+x2+"))" ;
    document.getElementById("x12").value = raiz ;

     a = Number(document.getElementById("a1").value);
     b = Number(document.getElementById("b1").value);
     c = Number(document.getElementById("c1").value);
     d= (b*b)-(4*a*c);

    if (d==0)
    { x1=-b/2*a;
      x2=-b/2*a;}

    else

    if(d>0)
    {   x1= -b+Math.sqrt(d)/2*a;
        x2= -b-Math.sqrt(d)/2*a;}

    else
    { var x= -b/2*a;
        var compleja= Math.sqrt((-1)*d)/2*a;
        x1=x+compleja+"i";
        x2=x-compleja+"i";}

    var raiz= "(x-("+x1+"))"+"(x-("+x2+"))" ;
    document.getElementById("1x12").value = raiz ;



}

function dibujarCuad(){

    var canvas = document.getElementById("Canvas");
    var ctx = canvas.getContext("2d");

    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle="#ff5400";
    ctx.lineWidth=0.5;

    ctx.beginPath();

    for(var i=10; i< canvas.width; i=i+10)
    {
        ctx.moveTo(i,0);
        ctx.lineTo(i,canvas.height);
    }

    for(var i=10; i<canvas.height; i=i+10)
    {
        ctx.moveTo(0,i);
        ctx.lineTo(canvas.width,i);
    }

    ctx.stroke();
    ctx.closePath();






}

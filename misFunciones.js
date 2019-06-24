/**<font></font>
 * Calculo de raices del polinomio<font></font>
 * @method factoreo<font></font>
 * @param Parámetro a<font></font>
 * @param Parámetro b<font></font>
 * @param Parámetro c<font></font>
 * @return x1,x2,x12<font></font>
 */

function factoreo() {


    var a = Number(document.getElementById("a").value);
    var b = Number(document.getElementById("b").value);
    var c = Number(document.getElementById("c").value);

    var d= (b*b)-(4*a*c);

    if (d==0)
    {   var x1= -b/2*a;
        var x2= -b/2*a;}

    else

    if(d>0)
    {   x1= -b+Math.sqrt(d)/2*a;
        x2= -b-Math.sqrt(d)/2*a;}

    else
    {   var x= -b/2*a;
        var compleja= Math.sqrt((-1)*d)/2*a;
        x1=x+compleja+"i";
        x2=x-compleja+"i";}

    x1= Math.round(x1);
    x2= Math.round(x2);

    var raiz= "(x-("+x1+"))"+"(x-("+x2+"))" ;
    document.getElementById("x12").value = raiz ;
    document.getElementById("x1").value = x1 ;
    document.getElementById("x2").value = x2 ;


}


/**<font></font>
 * Dibuja el cuadriculado y el eje de coordenadas<font></font>
 * @method dibujarCuad<font></font>
 */


function dibujarCuad(){

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");


    ctx.clearRect(0,0,canvas.width,canvas.height);


    ctx.beginPath();

    for(var i=20; i< canvas.width; i=i+20)
    {
        ctx.moveTo(i,0);
        ctx.lineTo(i,canvas.height);
        ctx.strokeStyle="#999999";
        ctx.stroke();
    }

    for( i=20; i<canvas.height; i=i+20)
    {
        ctx.moveTo(0,i);
        ctx.lineTo(canvas.width,i);
        ctx.strokeStyle="#999999";
        ctx.stroke();
    }


    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.strokeStyle="#000000";

    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);

    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);

    ctx.stroke();
    ctx.closePath();

}

/**<font></font>
 * Calculo de vertices y puntos de la funcion<font></font>
 * @method cuadratica<font></font>
 * @param Parámetro a<font></font>
 * @param Parámetro b<font></font>
 * @param Parámetro c<font></font>
 * @param Parámetro x1<font></font>
 * @param Parámetro x2<font></font>
 */
function cuadratica(a,b,c,x1,x2) {

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");


    var vx= -b/2*a;
    var vy=Number(a*vx*vx)+Number(b*vx)+Number(c);

    document.getElementById("vx").value = vx;
    document.getElementById("vy").value = vy;

    drawfx(vx,vy);//dibujar vertice
    //drawfx(x1,0);//dibujar raices
    //drawfx(x2,0);

   /* for (var x = -canvas.width; x < canvas.width; x = x +0.1) {
        var y = a*Math.pow(x, 2)+b*x+c;
        drawfx(x, y);
    }*/
}

/**<font></font>
 * La funcion te grafica el punto ubicado en la coordenada x e y que fue pasado como parametro<font></font>
 * @method drawfx<font></font>
 * @param Parámetro x<font></font>
 * @param Parámetro y<font></font>
 */

function drawfx(x,y){

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#e9000b";
    ctx.fillStyle= "#e9000b";

    if(x==0 && y==0)
    {x=x+400;
     y=y+200;}
    else
        if(x>0 && y>0)
        { x=x+420;
            y=y+220;}

        else

        {   x=(x+420)-(x*2);
            y=(y+220)-(y*2);}

    ctx.beginPath();
    ctx.arc(x, y, 3, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

}


/**<font></font>
 * Blanquea el canvas para dibujar una nueva funcion<font></font>
 * @method borrar<font></font>
 */

function borrar() {

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

}




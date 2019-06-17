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
             {x1= -b+Math.sqrt(d)/2*a;
              x2= -b-Math.sqrt(d)/2*a;}

             else
             { var x= -b/2*a;
               var compleja= Math.sqrt((-1)*d)/2*a;
               x1=x+compleja;
               x2=x-compleja;}

        var raiz= x1;
            document.getElementById("x12").value =  raiz ;



}

function dibujarCuad(){

    var canvas = document.getElementById("Canvas");
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "rgb(251,255,255)";
    ctx.beginPath();

   ctx.rect(5,5,30,60);
   ctx.rect(60,20,60,30);
   ctx.rect(100,70,30,60);
   ctx.rect(200,30,60,30);
   ctx.rect(200,70,30,60);
   ctx.stroke();
   ctx.fill();
   ctx.closePath();


     ctx.fillStyle= "#000000";
     ctx.beginPath();
     ctx.moveTo(5,35);
     ctx.lineTo(35,35);

    ctx.closePath();
    ctx.fill();


}

var dom=document.getElementById('clock.vue');
var ctx=dom.getContext('2d');
var width=ctx.canvas.width;
var height=ctx.canvas.height;
var r=width/2;

//设置时钟边框
function setBorder(){
    ctx.save();
    ctx.translate(r,r)
    ctx.beginPath();
    ctx.lineWidth=10;
    ctx.arc(0,0,r-5,0,2*Math.PI,false);
    ctx.stroke();

    var hourNumbers=[3,4,5,6,7,8,9,10,11,12,1,2];
    ctx.font='18px Arial';
    ctx.textAlign='center';
    ctx.textBaseline='middle';
    hourNumbers.forEach(function(number,i){
        var rad=2*Math.PI/12*i;
        var x=Math.cos(rad)*(r-30);
        var y=Math.sin(rad)*(r-30);
        ctx.fillText(number,x,y);

    });
    for(var i=0;i<60;i++){
        var rad=2*Math.PI/60*i;
        var x=Math.cos(rad)*(r-18);
        var y=Math.sin(rad)*(r-18);
        ctx.beginPath();
        if(i%5==0){
            ctx.fillStyle='#000';
            ctx.arc(x,y,2,0,2*Math.PI,false);
        }else{
            ctx.fillStyle='#ccc';
            ctx.arc(x,y,2,0,2*Math.PI,false);
        }
        ctx.fill();
    }
}

//设置时
function setHour(hour,minute){
    ctx.save();
    ctx.beginPath();
    var rad=2*Math.PI/12*hour;
    var mrad=2*Math.PI/12/60*minute;
    ctx.rotate(rad+mrad);
    ctx.lineWidth=6;
    ctx.lineCap='round';
    ctx.moveTo(0,10);
    ctx.lineTo(0,-r/2);
    ctx.stroke();
    ctx.restore();
}

//设置分
function setMinute(minute){
    ctx.save();
    ctx.beginPath();
    var rad=2*Math.PI/60*minute;
    ctx.rotate(rad);
    ctx.lineWidth=3;
    ctx.lineCap='round';
    ctx.moveTo(0,10);
    ctx.lineTo(0,-r+30);
    ctx.stroke();
    ctx.restore();
}

//设置秒
function setSecond(second){
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle='#c14543';
    var rad=2*Math.PI/60*second;
    ctx.rotate(rad);
    ctx.moveTo(-2,20);
    ctx.lineTo(2,20);
    ctx.lineTo(1,-r+18);
    ctx.lineTo(-1,-r+18);
    ctx.fill();
    ctx.restore();
}

//设置时间点
function setDot(){
    ctx.beginPath();
    ctx.fillStyle="#fff";
    ctx.arc(0,0,3,0,2*Math.PI,false);
    ctx.fill();
}

function setClock(){
    ctx.clearRect(0,0,width,height);
    var nowDate =new Date();
    var hour=nowDate.getHours();
    var minute=nowDate.getMinutes();
    var second=nowDate.getSeconds();
    setBorder();
    setHour(hour,minute);
    setMinute(minute);
    setSecond(second);
    setDot();
    ctx.restore();
}
//设置时钟
setClock();
//每秒调用一次
setInterval(setClock,1000);
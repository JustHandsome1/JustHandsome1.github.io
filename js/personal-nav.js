// console.log('nav!');
function navInit(){
    e = document.getElementById('nav');
    e = e.getElementsByTagName('li');
    for(var i=0;i<e.length;i++){
        e[i].setAttribute('onclick',
        'navLineMove('+String(200*i+255)+'),\
        chgWall('+String(i+1)+')');
    }
}


//nav移小条动
function navLineMove(x){
    e=document.getElementById('navLine');
    e.style.setProperty('left',String(x)+'px');
}
//写入css文件
// function chgStyle(i){
//     e=document.getElementById('mainStyle');
//     e.href = '../css/personal-wall'+String(i)+'.css';
// }

//wall内容替换
function chgWall(wallNum){
    e = document.getElementsByClassName('wall');
    for(var i=0;i<e.length;i++){
        if(i<wallNum-1){
            e[i].style.setProperty('top','0');
            e[i].style.setProperty('left','0');
            e[i].style.setProperty('width','0');
            e[i].style.setProperty('height','0');
            chgScale(e[i],0);
            // e[i].style.setProperty('height','0');
            // e[i].style.setProperty('width','0');
        }else if(i==wallNum-1){
            e[i].style.setProperty('top','0');
            e[i].style.setProperty('left','0');
            e[i].style.setProperty('width','100%');
            e[i].style.setProperty('height','100%');
            chgScale(e[i],1);
        }else{
            e[i].style.setProperty('top','100%');
            e[i].style.setProperty('left','100%');
            e[i].style.setProperty('width','0');
            e[i].style.setProperty('height','0');
            chgScale(e[i],0);
        }
    }
}
function chgScale(e,size){
    e.style.setProperty('transform','scale('+String(size)+')');
    e.style.setProperty('-moz-transform','scale('+String(size)+')');
    e.style.setProperty('-webkit-transform','scale('+String(size)+')');
    e.style.setProperty('-o-transform','scale('+String(size)+')');
    e.style.setProperty('-ms-transform','scale('+String(size)+')');
}

//nav的页面滚动
function navToY(y){
    var currentPosition;
    currentPosition=document.documentElement.scrollTop || document.body.scrollTop;
    // console.log(currentPosition);
    if(currentPosition<y){
        toY(y);
    }
}
//页面滚动
function toY(y){
    var currentPosition,timer;
    var wholeTime = 60;
    currentPosition=document.documentElement.scrollTop || document.body.scrollTop;
    // console.log(currentPosition);
    var speed=Math.abs(/*parseInt*/((y-currentPosition)/wholeTime));
    // console.log(speed);
    timer=setInterval(function(){
        currentPosition=document.documentElement.scrollTop || document.body.scrollTop;
        if(currentPosition>y+speed){
            currentPosition-=speed;
            window.scrollTo(0,currentPosition);
        }else if(currentPosition<y-speed){
            currentPosition+=speed;
            window.scrollTo(0,currentPosition);
        }else{
            // console.log('over');
            window.scrollTo(0,y);
            clearInterval(timer);
        }
    },1);
}
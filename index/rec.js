function recLeftClick(){
    e = document.getElementById('riInner');
    var leftDis = parseInt(e.style.left.slice(0,-2));
    if(leftDis>-1000){
        e.style.left='0px';
    }
    else{
        e.style.left=String(leftDis+1000)+'px';
    }
    endOfSide();
}
function recRightClick(){
    e = document.getElementById('riInner');
    var length = parseInt(e.style.width);
    var leftDis = parseInt(e.style.left.slice(0,-2));
    var rightDis = length-1000+leftDis;
    if(rightDis<1000){
        e.style.left=String(1000-length)+'px';
    }
    else{
        e.style.left=String(leftDis-1000)+'px';
    }
    endOfSide();
}

//判断是否到达两端，并改变两端按钮显示
function endOfSide(){
    e = document.getElementById('riInner');
    var length = parseInt(e.style.width);
    var leftDis = parseInt(e.style.left.slice(0,-2));
    if(e.style.left=='0px'){
        document.getElementById('recLeft').style.setProperty('background-image','url(../imgs/icons/left5.png)');
    }else{
        document.getElementById('recLeft').style.setProperty('background-image','url(../imgs/icons/left3.png)');
    }
    if(e.style.left==String(1000-length)+'px'){
        document.getElementById('recRight').style.setProperty('background-image','url(../imgs/icons/right5.png)');
    }else{
        document.getElementById('recRight').style.setProperty('background-image','url(../imgs/icons/right3.png)');
    }
}
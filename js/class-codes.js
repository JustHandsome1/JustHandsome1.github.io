var codePos=0;
function readCode(){
    var e=document.getElementById('codes');
    var pos = document.documentElement.scrollTop || document.body.scrollTop;
    codePos = parseInt((pos+50)/100);
    // console.log(codePos);
    e.style.setProperty('display','none');

    window.scrollTo(0,0);
}


//获取元素相对窗口的纵坐标
function getYpos(e){
    var offset=e.offsetTop;
    if(e.offsetParent!=null) offset+=getYpos(e.offsetParent);
    return offset;
}
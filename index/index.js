// +++++++++++++++++++value++++++++++++++++++++
// -------------------index--------------------
var menu;//div#menu
var menuEles;//div#menu a
var banner;//div#banner
var bannerText;//div#bannerText
var bannerTextLis;//div#bannerText li
var clsNav;//div#clsNav
var cnBtns;//div#clsNav a
var clsZones;//div.clsZone
var clsZoneY = [];//div.clsZone Y
// -----------------timeCirle------------------
var scrollPosition;//滚动条位置（px）
var timer;//计时器（ms）
var topDiv;//div#top
var searchInput;//li.search input
var banners = ['banner1','banner2','banner3','banner4','banner5'];
var changer;//banner的计时器
// -------------------banner--------------------
var isBannerHovered=false;

window.onload = function(){
    // console.log(itemInfo['music'][0]['name']);
    //++++++++++++++++++++value++++++++++++++++++++
    // -------------------index--------------------
    menu = document.getElementById('menu');
    menuEles = menu.getElementsByTagName('a');
    banner = document.getElementById('banner');
    bannerText = document.getElementById('bannerText');
    bannerTextLis = bannerText.getElementsByClassName('bannerTextLi');
    clsNav = document.getElementById('clsNav');
    cnBtns = clsNav.getElementsByTagName('a');
    clsZones = document.getElementsByClassName('clsZone');
    for(var i=0;i<clsZones.length;i++){
        clsZoneY.push(getYpos(clsZones[i]));
    }
    // -----------------timeCirle-------------------
    scrollPosition = 0;
    timer = 0;
    topDiv = document.getElementById('top');
    searchInput = topDiv.getElementsByTagName('input');
    // +++++++++++++++++++++++++++++++++++++++++++++

    // =====================init====================
    //给分类导航加上浮动小条的移动事件
    for(var i=0;i<cnBtns.length;i++){
        var x = String(20+i*100);
        //console.log(x);
        cnBtns[i].setAttribute('onclick',"cnClick(this,"+x+",40)");
        //console.log(cnBtns[i].onclick);
    }
    for(var i=0;i<bannerTextLis.length;i++){
        var func = "clickBanner(this,'"+String(i+1)+"')";
        // console.log(x);
        bannerTextLis[i].setAttribute('onclick',func);
        bannerTextLis[i].setAttribute('onmouseout','outBanner()');
        // console.log(bannerTextLis[i].onclick);
    }
    //----------menu---------
    menuEles[0].setAttribute('onclick','toY(0)')
    menuEles[0].setAttribute('onmouseover','topHover(this)');
    menuEles[0].setAttribute('onmouseout','topOut(this)');
    for(var i=1;i<menuEles.length;i++){
        var targetY = String(clsZoneY[i-1]-150);
        // console.log(targetY);
        menuEles[i].setAttribute('onclick','toY('+targetY+')');
        menuEles[i].innerHTML=classes[i-1];
    }
    //_________rec________
    recInnit();
    //-------clsZone------
    czInit();
    weeklyRankInit();
    clsImgInit();
    // console.log('here');
    // =============================================
    setInterval(timeLuancher1,30);
    changer = setInterval(autoChg,5000);//banner自动轮播
}



//修改目标id到目标标签
function chgId(idName,e){
    var last=document.getElementById(idName);
    if(last)last.setAttribute('id','');
    e.id=idName;
}
//创建指定二长度的维数组,返回长l宽w的二维数组；
function creatList(l,w){
    var list = new Array(l);
    for(var i=0;i<l;i++){
        list[i]=new Array(w);
    }
    return list;
}
//一个计算时间差值的语法示例
function dTime(){
    var date1=new Date();
    var date2=new Date();
    var date3=date2.getTime()-date1.getTime()  //时间差的毫秒数
}
//元素向右移动到xpx，向下移动到ypx
function eMove(e,x,y){
    e.style.setProperty('top',y+'px');
    e.style.setProperty('left',x+'px');
}
//页面滚动至指定高度
function toY(y){
    var currentPosition,timer;
    var wholeTime = 80;
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
//获取元素相对窗口的纵坐标
function getYpos(e){
    var offset=e.offsetTop;
    if(e.offsetParent!=null) offset+=getYpos(e.offsetParent);
    return offset;
}
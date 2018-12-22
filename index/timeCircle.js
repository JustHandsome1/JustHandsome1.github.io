function timeLuancher1(){
    changeTopOpacity();
    changeMenuY();
    changeMenuByY();
    //console.log('滚动条位置：'+scrollPosition);
}

//banner自动切换
function autoChg(){
    // console.log('chang!');
    var e = document.getElementById("banner");
    var tmpbg = e.style.backgroundImage;
    // console.log('total:'+tmpbg);
    tmpbg = tmpbg.slice(21,-6);
    // console.log(tmpbg);
    while(tmpbg!=banners[0])banners.push(banners.shift());
    e.style.setProperty('background-image','url(../imgs/banners/'+banners[1]+'.jpg)');
    var num = parseInt(banners[1].substring(6));
    // console.log(num);
    var presentTextLi = document.getElementsByClassName("bannerTextLi")[num-1];
    chgId("chosenBannerText",presentTextLi);
}
//侧边导航选中变化
function changeMenuByY(){
    getScrollTop();
    var topDis = 500;
    if(scrollPosition<clsZoneY[0]-topDis){
        var last=document.getElementsByClassName('currentY')[0];
        if(last)last.classList.remove('currentY');
    }else if(scrollPosition>=clsZoneY[0]-topDis&&scrollPosition<clsZoneY[1]-topDis){
        chgClass('currentY',document.getElementById('firstLink'));
    }else if(scrollPosition>=clsZoneY[1]-topDis&&scrollPosition<clsZoneY[2]-topDis){
        chgClass('currentY',document.getElementById('secondLink'));
    }else if(scrollPosition>=clsZoneY[2]-topDis&&scrollPosition<clsZoneY[3]-topDis){
        chgClass('currentY',document.getElementById('thirdLink'));
    }else if(scrollPosition>=clsZoneY[3]-topDis&&scrollPosition<clsZoneY[4]-topDis){
        chgClass('currentY',document.getElementById('fourthLink'));
    }else if(scrollPosition>=clsZoneY[4]-topDis&&scrollPosition<clsZoneY[5]-topDis){
        chgClass('currentY',document.getElementById('fifthLink'));
    }else if(scrollPosition>=clsZoneY[5]-topDis&&scrollPosition<clsZoneY[6]-topDis){
        chgClass('currentY',document.getElementById('sixthLink'));
    }else if(scrollPosition>=clsZoneY[6]-topDis&&scrollPosition<clsZoneY[7]-topDis){
        chgClass('currentY',document.getElementById('seventhLink'));
    }else if(scrollPosition>=clsZoneY[7]-topDis){
        chgClass('currentY',document.getElementById('eighthLink'));
    }
}
//修改目标class到目标标签
function chgClass(clsName,e){
    var last=document.getElementsByClassName(clsName)[0];
    if(last)last.classList.remove(clsName);
    e.classList.add(clsName);
}
//侧边导航位置变化
function changeMenuY(){
    getScrollTop();
    if(scrollPosition<400){
        var y = String((400-scrollPosition)/2+300);
        menu.style.setProperty('top',y+'px');

    }else{
        menu.style.setProperty('top','300px');
    }
}
//顶部全站导航透明度变化
function changeTopOpacity(){
    getScrollTop();
    if(scrollPosition<400){
        topDiv.style.setProperty('background-color','#ffffffbb');
        searchInput[0].style.setProperty('background','rgba(255,255,255,0.9)');
    }else{
        topDiv.style.setProperty('background-color','#ffffffff');
        searchInput[0].style.setProperty('background','rgba(200,200,200,0.4)');
    }
}
//获取滚动条位置
function getScrollTop(){
    var scrollTop=0;
    if(document.documentElement&&document.documentElement.scrollTop){
    scrollTop=document.documentElement.scrollTop;
    }else if(document.body){
    scrollTop=document.body.scrollTop;
    }
    scrollPosition = scrollTop;
    return scrollTop;
}
//测试函数
function timeSum(){
    t++;
    console.log(t);
}

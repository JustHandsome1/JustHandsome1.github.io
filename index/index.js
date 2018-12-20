window.onload = function(){
    // ++++++++++++++++++++value++++++++++++++++++++
    var menu = document.getElementById('menu');
    var menuEles = menu.getElementsByTagName('a');
    var banner = document.getElementById('banner');
    var bannerText = document.getElementById('bannerText');
    var bannerTextLis = bannerText.getElementsByClassName('bannerTextLi');
    var clsNav = document.getElementById('clsNav');
    var cnBtns = clsNav.getElementsByTagName('a');
    // +++++++++++++++++++++++++++++++++++++++++++++

    // ++++++++++++++++++++init+++++++++++++++++++++
    //给分类导航加上浮动小条的移动事件
    console.log(bannerTextLis);
    for(var i=0;i<cnBtns.length;i++){
        var x= String(20+i*100);
        //console.log(x);
        cnBtns[i].setAttribute('onclick',"cnClick(this,"+x+",40)");
        //console.log(cnBtns[i].onclick);
    }
    for(var i=0;i<bannerTextLis.length;i++){
        var func = "chgBanner(this,'"+String(i+1)+"')";
        // console.log(x);
        bannerTextLis[i].setAttribute('onclick',func);
        // console.log(bannerTextLis[i].onclick);
    }
    // +++++++++++++++++++++++++++++++++++++++++++++
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
//元素向右移动xpx，向下移动ypx
function eMove(e,x,y){
    e.style.setProperty('top',y+'px');
    e.style.setProperty('left',x+'px');
}
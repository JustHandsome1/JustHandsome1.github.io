//给分类选择添加图片
function addImageToChose(){
    var e=document.getElementsByClassName('bigCls');
    for(var i=0;i<e.length;i++){
        // console.log(e[i]);
        e[i].style.setProperty('background-image','url(../imgs/class/bigImg/'+classEng[i]+'a.jpg)');
    }
    e = document.getElementsByClassName('secIcon');
    var secName = ['all','ych','yyh','xxxc','yyj']
    for(var i=0;i<secClses[0].length+1;i++){
        // console.log(e[i]);
        e[i].style.setProperty('background-image','url(../imgs/class/secClass/music/'+secName[i]+'.png)');
    }
}

//给大分类添加点击事件和鼠标悬停事件
var choseBox = document.getElementById('choseBox');
function bigClsInit(){
    var e=document.getElementsByClassName('bigCls');
    for(var i=0;i<e.length;i++){
        // console.log(e[i]);
        e[i].setAttribute('onclick',
        'eMove(choseBox,'+String(172*i+9)+',45),\
        chgCls(this,'+String(i)+'),\
        switchCard("'+classEng[i]+'")\
        ');
        // console.log(e[i]);
    }
    e=document.getElementsByClassName('clsMask');
    // for(var i=0;i<e.length;i++){
    //     e[i].setAttribute('onmouseover',
    //     'chsOpacity(this,0)');
    //     e[i].setAttribute('onmouseout',
    //     'chsOpacity(this,1)');
    //     console.log(e[i]);
    // }
}
var lastI = 0;
var bigClsMask = document.getElementsByClassName('clsMask')
function chgCls(self,thisI){
    var e=document.getElementById('choseBox');
    var lastCls = bigClsMask[lastI];
    lastCls.setAttribute('id','');
    e.innerHTML = self.getElementsByClassName('clsMask')[0].innerHTML;
    self.getElementsByClassName('clsMask')[0].setAttribute('id','chosenCls');
    lastI = thisI;
    // console.log(lastI);
}
function chsOpacity(e,x){
    e.style.opacity = String(x);
}
//给小分类也加上
var secLine = document.getElementById('secLine');
function secClsInit(){
    var e=document.getElementsByClassName('secImg');
    for(var i=0;i<e.length;i++){
        // console.log(e[i]);
        e[i].setAttribute('onclick','eMove(secLine,'+String(210*i+25)+',135)');
    }
}

function eMove(e,x,y){
    e.style.setProperty('top',y+'px');
    e.style.setProperty('left',x+'px');
}




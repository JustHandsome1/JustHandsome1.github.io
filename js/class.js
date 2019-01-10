window.onload = function(){
    //class.js
    putCard(maxSize);
    secClsChoseInit('music')
    addImageToChose();
    //class-cardWriter.js
    writeCard('music');
    //class-chose.js
    bigClsInit();
    secClsInit();
    //class-card.js
    cardBtnInit();

    chgTransition(0);
    readCode();
    turnToCls(codePos);
    setChgTransition();
};


//转换到第几类
function turnToCls(x){
    eMove(choseBox,172*x+9,45);
    chgCls(document.getElementsByClassName('bigCls')[x],x);
    secClsChoseWriter(classEng[x]);
    switchCard(classEng[x]);
    findCards(classEng[x],"all");
}

//修改各类转换类别时的transition
function chgTransition(x){
    var e=document.getElementById('choseBox');
    e.style.transition = 'all '+String(x)+'s';
    e=document.getElementsByClassName('clsMask');
    for(var i=0;i<e.length;i++){
        e[i].style.transition = 'all '+String(x)+'s';
    }
    e=document.getElementsByClassName('secImg');
    for(var i=0;i<e.length;i++){
        e[i].style.transition = 'all '+String(x)+'s';
    }
    e=document.getElementById('secClsChose');
    e.style.transition = 'all '+String(x)+'s';
}

function setChgTransition(){
    setTimeout(() => {
        var e=document.getElementById('choseBox');
        e.style.transition = 'all 0.8s';
        e=document.getElementsByClassName('clsMask');
        for(var i=0;i<e.length;i++){
            e[i].style.transition = 'all 0.3s';
        }
        e=document.getElementsByClassName('secImg');
        for(var i=0;i<e.length;i++){
            e[i].style.transition = 'all 0.3s';
        }
        e=document.getElementById('secClsChose');
        e.style.transition = 'all 0.6s';
    },10);
}
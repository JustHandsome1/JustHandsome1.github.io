//鼠标悬停
function homeOver(){
    var e = document.getElementById('homeList');
    topAppear(e);
    if(homeTimer)clearTimeout(homeTimer);
}
function socialOver(){
    var e = document.getElementById('socialList');
    topAppear(e);
    if(socialTimer)clearTimeout(socialTimer);
}
function personalOver(){
    var e = document.getElementById('personalList');
    topAppear(e);
    if(personalTimer)clearTimeout(personalTimer);
}
function homeListOver(){
    if(homeTimer)clearTimeout(homeTimer);
}
function socialListOver(){
    if(socialTimer)clearTimeout(socialTimer);
}
function personalListOver(){
    if(personalTimer)clearTimeout(personalTimer);
}
//鼠标移除
var homeTimer;
var socialTimer;
var personalTimer;
function homeOut(){
    var e = document.getElementById('homeList');
        homeTimer = setTimeout(function(){
            topDisappear(e);
        },20);
}
function socialOut(){
    var e = document.getElementById('socialList');
        socialTimer = setTimeout(function(){
            topDisappear(e);
        },20);
}
function personalOut(){
    var e = document.getElementById('personalList');
        personalTimer = setTimeout(function(){
            topDisappear(e);
        },20);
}


//下拉菜单出现消失
function topAppear(e){
    e.style.setProperty('display','block');
    // var top = parseInt(e.style.getAttribute('top').slice(0,-2));
    setTimeout(function(){
        e.style.setProperty('top','50px');
        e.style.setProperty('opacity','1');
    },1);
}
function topDisappear(e){
    e.style.setProperty('top','65px');
    e.style.setProperty('opacity','0');
    setTimeout(function(){
        e.style.setProperty('display','none');
    },500);
}
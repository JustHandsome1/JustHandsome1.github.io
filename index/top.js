//鼠标悬停
function homeOver(){
    var e = document.getElementById('homeList');
    if(homeTimer)clearTimeout(homeTimer);
    topAppear(e);
}
function socialOver(){
    var e = document.getElementById('socialList');
    if(socialTimer)clearTimeout(socialTimer);
    topAppear(e);
}
function personalOver(){
    var e = document.getElementById('personalList');
    if(personalTimer)clearTimeout(personalTimer);
    topAppear(e);
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
        topHomeDisappear(e);
    },100);
}
function socialOut(){
    var e = document.getElementById('socialList');
    socialTimer = setTimeout(function(){
        topSocialDisappear(e);
    },100);
}
function personalOut(){
    var e = document.getElementById('personalList');
    personalTimer = setTimeout(function(){
        topPersonalDisappear(e);
    },100);
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
function topHomeDisappear(e){
    e.style.setProperty('top','65px');
    e.style.setProperty('opacity','0');
    homeTimer = setTimeout(function(){
        e.style.setProperty('display','none');
    },500);
}
function topSocialDisappear(e){
    e.style.setProperty('top','65px');
    e.style.setProperty('opacity','0');
    socialTimer = setTimeout(function(){
        e.style.setProperty('display','none');
    },500);
}
function topPersonalDisappear(e){
    e.style.setProperty('top','65px');
    e.style.setProperty('opacity','0');
    personalTimer = setTimeout(function(){
        e.style.setProperty('display','none');
    },500);
}
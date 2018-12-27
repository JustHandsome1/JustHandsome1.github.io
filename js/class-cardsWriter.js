//
function writeCard(clsName){
    var e = document.getElementsByClassName('cardInner');
    for(var i=0;i<e.length;i++){
        e[i].innerHTML = '\
        <div class="cPic"></div>\
        <div class="cName"></div>\
        <div class="cLocation"></div>\
        <div class="cDate"></div>\
        <div class="cTime"></div>\
        <div class="cHeart"></div>\
        <div class="cSchedule"></div>\
        ';
    }

    switchCard(clsName);
}

//
function switchCard(clsName){
    var e = document.getElementsByClassName('cardInner');
    var tmpDiv;
    for(var i=0;i<e.length;i++){
        tmpDiv = e[i].getElementsByClassName('cPic')[0];
        tmpDiv.style.setProperty('background-image','url('+itemInfo[clsName][i]['src']+')');
        tmpDiv = e[i].getElementsByClassName('cName')[0];
        tmpDiv.innerHTML = itemInfo[clsName][i]['name'];
        tmpDiv = e[i].getElementsByClassName('cLocation')[0];
        tmpDiv.innerHTML = itemInfo[clsName][i]['location'];
        tmpDiv = e[i].getElementsByClassName('cDate')[0];
        tmpDiv.innerHTML = itemInfo[clsName][i]['date'];
        tmpDiv = e[i].getElementsByClassName('cTime')[0];
        tmpDiv.innerHTML = itemInfo[clsName][i]['time'];
        tmpDiv = e[i].getElementsByClassName('cHeart')[0];
        tmpDiv.style.setProperty('background-image','url(../imgs/icons/heart1.png)');
        tmpDiv = e[i].getElementsByClassName('cSchedule')[0];
        tmpDiv.style.setProperty('background-image','url(../imgs/icons/schedule1.png)');
    }
}


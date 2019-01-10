var cardsNum = 0 ;//卡片数量
var maxSize = 8;//定义异步加载的数据数量
function findCards(clsName,secName){
    cardsNum = 0;

    var e = document.getElementsByClassName('card');
    //如果是all，就全部显示。
    // console.log(secName=='all');
    if(secName=='all'){
        for(var i=0;i<e.length;i++){
            cardsNum+=1;
            e[i].style.setProperty('display','block');
        }
        return -1;
    }

    for(var i=0;i<e.length;i++){
        if(itemInfo[clsName][i]['kind']==secName){
            cardsNum+=1;
            e[i].style.setProperty('display','block');
            // console.log('sdsda');
        }else{
            e[i].style.setProperty('display','none');
        }
    }
    // console.log(cardsNum);
}




//写几个card
function putCard(num){
    var e=document.getElementById('cards');
    var cardsInner = e.innerHTML;
    for(var i=0;i<num;i++){
        cardsInner+='\
        <div class="card">\
            <div class="cardInner">\
            </div>\
        </div>\
        '
    }
    e.innerHTML = cardsInner;
}

//给卡片写上div
function writeCard(clsName){
    var e = document.getElementsByClassName('cardInner');
    for(var i=0;i<e.length;i++){
        e[i].innerHTML = '\
        <div class="cPic"></div>\
        <div class="cName"></div>\
        <div class="cLocation"></div>\
        <div class="cHeart"></div>\
        <div class="cSchedule"></div>\
        <div class="cDate"></div>\
        <div class="cTime"></div>\
        ';
    }

    switchCard(clsName);
}

//切换卡片内容
function switchCard(clsName){
    var e = document.getElementsByClassName('cardInner');
    var tmpDiv;
    for(var i=0;i<e.length;i++){
        tmpDiv = e[i].getElementsByClassName('cPic')[0];
        tmpDiv.style.setProperty('background-image','url('+itemInfo[clsName][i]['src']+')');
        tmpDiv = e[i].getElementsByClassName('cName')[0];
        writeInner(tmpDiv,itemInfo[clsName][i]['name']);
        tmpDiv.setAttribute('onclick','jumpItem("'+clsName+'",'+String(i)+')')
        tmpDiv = e[i].getElementsByClassName('cLocation')[0];
        writeInner(tmpDiv,itemInfo[clsName][i]['location']);
        tmpDiv = e[i].getElementsByClassName('cDate')[0];
        writeInner(tmpDiv,itemInfo[clsName][i]['date']);
        tmpDiv = e[i].getElementsByClassName('cTime')[0];
        writeInner(tmpDiv,itemInfo[clsName][i]['time']);
        tmpDiv = e[i].getElementsByClassName('cHeart')[0];
        tmpDiv.style.setProperty('background-image','url(../imgs/icons/heart1.png)');
        tmpDiv = e[i].getElementsByClassName('cSchedule')[0];
        tmpDiv.style.setProperty('background-image','url(../imgs/icons/schedule1.png)');
    }
}

function writeInner(e,str){
    if(str){
        e.innerHTML = str;
    }else{
        e.innerHTML = '';
    }
}


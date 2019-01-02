// console.log('mainWriter!');
function innerWriter(){
    wishWriter();
    pageWriter();
    calendarWriter();
    frdWriter();
    fpageWriter();
}

//=====================心愿墙=====================
function wishWriter(page){
    var e=document.getElementsByClassName('wishImg');
    for(var i=0;i<e.length;i++){
        e[i].style.backgroundImage = 'url('+itemInfo['music'][i]['src']+')';
    }
    e=document.getElementsByClassName('wishTitle');
    for(var i=0;i<e.length;i++){
        e[i].innerHTML = itemInfo['music'][i]['name'];
    }
}
function pageWriter(){
    var e = document.getElementsByClassName('wishPageNum');
    for(var i=0;i<e.length;i++){
        e[i].innerHTML=String(i+1);
        e[i].setAttribute('onclick','chgPage(this)');
    }
}
function chgPage(self){
    var e = document.getElementsByClassName('wishPageNum');
    for(var i=0;i<e.length;i++){
        e[i].style.setProperty('color','');
    }
    self.style.setProperty('color','#2facb1');
    e = document.getElementById('wishPage');
    e.style.setProperty('left',String(-parseInt(self.innerHTML)*860+860)+'px');
}


//====================我的行程====================
var date = new Date();
var presentYear = date.getFullYear();
var presentMonth = date.getMonth()+1;
var presentDate = date.getDate();
var presentDay = date.getDay();
var isLeap = isLeapYear(presentYear);
var maxDay = MaxDayOfDate(presentMonth,presentYear);
function calendarWriter(){
    document.getElementById('thisMonth').innerHTML = String(presentMonth)+"&nbsp;&nbsp;月";
    document.getElementById('thisYear').innerHTML = String(presentYear);
    var e = document.getElementById('dates');
    for(var i=0;i<42;i++){
        e.innerHTML = e.innerHTML+
        '<div class="date"></div>';
    }
    var fdw = getFirstDayWeek();
    e = document.getElementsByClassName('date')[fdw+presentDate-1];
    e.setAttribute('id','today');
    creatCalendar(fdw);


    //假装加两个活动
    e = document.getElementsByClassName('date')[13];
    e.setAttribute('id','activity1');
    e.innerHTML = '贰佰没有五</br>演唱会';
    e = document.getElementsByClassName('date')[23];
    e.setAttribute('id','activity2');
    e.innerHTML = 'Bigb</br>十周年展览';
}
function getFirstDayWeek(){
    var firstDayWeek = 0;
    firstDayWeek = presentDate+7-presentDay;
    firstDayWeek = firstDayWeek%7;
    firstDayWeek = 8-firstDayWeek;
    return firstDayWeek;
}
function creatCalendar(fdw){
    var e = document.getElementsByClassName('date');
    // console.log(firstDayWeek);
    for(var i=0;i<e.length;i++){
        if(i<fdw){
            e[i].innerHTML = '&nbsp;';
        }else if(i>=maxDay+fdw){
            e[i].innerHTML = '&nbsp;';
        }else{
            e[i].innerHTML = String(i+1-fdw);
        }
    }
    for(var i=0;i<42-maxDay-fdw;i++){
        e[e.length-1].className = '';
    }
    for(var i=0;i<fdw;i++){
        e[0].className = '';
    }
}

function isLeapYear(year){
    var cond1 = year % 4 == 0;
    var cond2 = year % 100 != 0;
    var cond3 = year % 400 ==0;
    var cond = cond1 && cond2 || cond3;
    if(cond) {
        return true;
    } else {
        return false;
    }
}

function MaxDayOfDate(month,year)  {
    if(month==1||month==3||month==5||month==7||month==8||month==10||month==12){
        var num = 31;
    }else if(month==2){
        if(isLeapYear(year)){
            var num = 29;
        }else{
            var num = 28;
        }
    }else{
        var num = 30;
    }
    return num;  
}  

//====================我的好友====================
function frdWriter(page){
    var e=document.getElementsByClassName('frdImg');
    for(var i=0;i<e.length;i++){
        e[i].style.backgroundImage = 'url('+itemInfo['music'][i]['src']+')';
    }
    e=document.getElementsByClassName('frdTitle');
    for(var i=0;i<e.length;i++){
        e[i].innerHTML = itemInfo['music'][i]['name'];
    }
}
function fpageWriter(){
    var e = document.getElementsByClassName('frdPageNum');
    for(var i=0;i<e.length;i++){
        e[i].innerHTML=String(i+1);
        e[i].setAttribute('onclick','fchgPage(this)');
    }
}
function fchgPage(self){
    var e = document.getElementsByClassName('frdPageNum');
    for(var i=0;i<e.length;i++){
        e[i].style.setProperty('color','');
    }
    self.style.setProperty('color','#2facb1');
    e = document.getElementById('frdPage');
    e.style.setProperty('left',String(-parseInt(self.innerHTML)*860+860)+'px');
}



//====================我的足迹====================
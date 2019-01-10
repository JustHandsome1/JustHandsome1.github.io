// tags
var tags = ['鹿先森乐队', '东野圭吾 舞台剧', 'Xmax 音乐节',
    '李荣浩演唱会', '哥本哈根 话剧', 'CBA篮球联赛 北京',
    '《放牛班的春天》', '重温1990', '维斯安德森',
    'Bigbang 10周年', '西方绘画500年', '维也纳莫扎特乐团',
    'IDO 29届 漫展', '奥黛丽·赫本', '小野丽莎',
    '周日一起画线描', '最后一头战象', '第三届华语影评大赛',
    '春节序曲', '贰佰没有五'];

function writeTags(num) {
    var tmpTags = [];
    for (var i = 0; i < num; i++) {
        tmpTags.push(tags[Math.floor(Math.random() * tags.length)]);
    }
    var e = document.getElementById('tagList');
    e.innerHTML = '';
    for (var i = 0; i < num; i++) {
        e.innerHTML = e.innerHTML + '\
        <div class="aTag" style="left:0px">'+ '# ' + tmpTags[i] + '</div>'
    }
    e = document.getElementsByClassName('aTag');
    for (var i = 0; i < num; i++) {
        e[i].style.fontSize = String(Math.floor(Math.random() * 8 + 10)) + 'px';
        if (i % 2 == 1) {
            e[i].style.paddingLeft = String(Math.floor(Math.random() * 4 + 2) * 20) + 'px';
        } else {
            e[i].style.paddingLeft = String(Math.floor(Math.random() * 4 + 5) * 20) + 'px';
        }
    }
}
var tagTimer;
function chgTags(num) {
    tagTo10(330, 0);
    setTimeout(() => {
        var tmpTags = [];
        for (var i = 0; i < num; i++) {
            tmpTags.push(tags[Math.floor(Math.random() * tags.length)]);
        }
        var e = document.getElementsByClassName('aTag');
        for (var i = 0; i < num; i++) {
            e[i].innerHTML = '# ' + tmpTags[i];
            e[i].style.fontSize = String(Math.floor(Math.random() * 8 + 12)) + 'px';
            if (i % 2 == 1) {
                e[i].style.paddingLeft = String(Math.floor(Math.random() * 4 + 2) * 20) + 'px';
            } else {
                e[i].style.paddingLeft = String(Math.floor(Math.random() * 4 + 5) * 20) + 'px';
            }
        }
    }, 700);
    tagTo10(0, 800);
}

function tagTo10(num, startTime) {
    var delayTime = 50;
    var e = document.getElementsByClassName('aTag');
    setTimeout(function () {
        e[0].style.setProperty('left', String(num) + 'px');
    }, 0 * delayTime + startTime);
    setTimeout(function () {
        e[1].style.setProperty('left', String(num) + 'px');
    }, 1 * delayTime + startTime);
    setTimeout(function () {
        e[2].style.setProperty('left', String(num) + 'px');
    }, 2 * delayTime + startTime);
    setTimeout(function () {
        e[3].style.setProperty('left', String(num) + 'px');
    }, 3 * delayTime + startTime);
    setTimeout(function () {
        e[4].style.setProperty('left', String(num) + 'px');
    }, 4 * delayTime + startTime);
    setTimeout(function () {
        e[5].style.setProperty('left', String(num) + 'px');
    }, 5 * delayTime + startTime);
    setTimeout(function () {
        e[6].style.setProperty('left', String(num) + 'px');
    }, 6 * delayTime + startTime);
    setTimeout(function () {
        e[7].style.setProperty('left', String(num) + 'px');
    }, 7 * delayTime + startTime);
    setTimeout(function () {
        e[8].style.setProperty('left', String(num) + 'px');
    }, 8 * delayTime + startTime);
    setTimeout(function () {
        e[9].style.setProperty('left', String(num) + 'px');
    }, 9 * delayTime + startTime);
}
//wechat

var wechats = [
    ['博物馆展览信息','../imgs/wechat/1.jpg'],
    ['博物馆|看展览','../imgs/wechat/2.jpg'],
    ['豆瓣音乐','../imgs/wechat/3.jpg'],
    ['果酱音乐','../imgs/wechat/4.jpg'],
    ['深焦DeepFocus','../imgs/wechat/5.jpg'],
    ['虹膜','../imgs/wechat/6.jpg'],
]
var wechatLength = 0;

function writeWechat(){
    wechatLength = wechats.length*90;
    var e=document.getElementById('wechats');
    for(var i=0;i<wechats.length;i++){
        e.innerHTML+='\
        <div class="aWechat">\
            <div class="wechatNum">'+String(i+1)+'</div>\
            <div class="wechatImg" style="background-image:url('+wechats[i][1]+')"></div>\
            <div class="wechatName">'+wechats[i][0]+'</div>\
        </div>\
        '
    }
}
function seeAllWechats(self){
    var e=document.getElementById('wechats');
    if(e.style.height==String(wechatLength)+'px'){
        e.style.setProperty('height','360px');
        self.innerHTML = '查&nbsp;看&nbsp;全&nbsp;部';
    }else{
        e.style.setProperty('height',wechatLength+'px');
        self.innerHTML = '收&nbsp;起';
    }
}



//places

var places = [
    ['故宫博物院','../imgs/place/1.png'],
    ['奥林匹克森林公园','../imgs/place/2.png'],
    ['北京动物园','../imgs/place/3.png'],
    ['798艺术区','../imgs/place/4.png'],
    ['北京欢乐谷','../imgs/place/5.png'],
    ['军事博物馆','../imgs/place/6.png'],
    ['圆明园','../imgs/place/7.png'],
    ['颐和园','../imgs/place/8.png'],
]
var placesLength = 0;

function writePlace(){
    placesLength = places.length*90;
    var e=document.getElementById('placeList');
    for(var i=0;i<places.length;i++){
        e.innerHTML+='\
        <div class="aPlace">\
            <div class="placeNum">'+String(i+1)+'</div>\
            <div class="placeImg" style="background-image:url('+places[i][1]+')"></div>\
            <div class="placeName">'+places[i][0]+'</div>\
        </div>\
        '
    }
}
function seeAllPlaces(self){
    var e=document.getElementById('placeList');
    if(e.style.height==String(placesLength)+'px'){
        e.style.setProperty('height','360px');
        self.innerHTML = '查&nbsp;看&nbsp;全&nbsp;部';
    }else{
        e.style.setProperty('height',placesLength+'px');
        self.innerHTML = '收&nbsp;起';
    }
}


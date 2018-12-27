function czInit() {
    for (var i = 0; i < classEng.length; i++) {
        czWriter(classEng[i], classes[i + 1], secClses[i]);
    }
}
function weeklyRankInit() {
    weeklyRankWriter('music', musicRank);
    weeklyRankWriter('drama', dramaRank);
    weeklyRankWriter('exhibition', exhibitionRank);
    weeklyRankWriter('movie', movieRank);
    weeklyRankWriter('match', matchRank);
    weeklyRankWriter('lecture', lectureRank);
    weeklyRankWriter('other', otherRank);
}
function clsImgInit() {
    for (var i = 0; i < classEng.length; i++) {
        clsImgWriter(classEng[i]);
        smallOverInit(classEng[i]);
    }
}


//clsZone内容填写
function czInfoWriter(clsName){

}
//clsZone填写
function czWriter(clsName, clsCN, classes) {
    var e = document.getElementById(clsName);
    var tmpe;
    e.innerHTML = '\
        <div class="czTop">\
        </div>\
        <div class="czLine"></div>\
        <div class="czInner">\
        </div>\
        <div class="czList">\
        </div>\
        ';
    writeClsTop(clsName, clsCN, classes)
    tmpe = e.getElementsByClassName("czInner")[0];
    tmpe.innerHTML = '\
        <div class="czBig"><div class="bigMask">李荣浩<br/>“年少有为”北京演唱会<br/>2019.05.18</div></div>\
        <div class="czSmall">\
            <div class="czSmall1"><div class="smallMask"></div></div>\
            <div class="czSmall2"><div class="smallMask"></div></div>\
            <div class="czSmall3"><div class="smallMask"></div></div>\
            <div class="czSmall4"><div class="smallMask"></div></div>\
        </div>\
        ';
    // console.log(e.innerHTML);
    tmpe = e.getElementsByClassName("czList")[0];
    tmpe.innerHTML = '\
        <div class="rankTitle">&nbsp;&nbsp;&nbsp;&nbsp;本周排行</div>\
        <ul class="weeklyRank">\
            <li><div>1</div><a>1</a></li>\
            <li><div>2</div><a>2</a></li>\
            <li><div>3</div><a>3</a></li>\
            <li><div>4</div><a>4</a></li>\
            <li><div>5</div><a>5</a></li>\
            <li><div>6</div><a>6</a></li>\
            <li><div>7</div><a>7</a></li>\
        </ul>\
        ';
}
function writeClsTop(clsName, clsCN, classes) {
    var e = document.getElementById(clsName);
    var tmpe;
    tmpe = e.getElementsByClassName('czTop')[0];
    // console.log(tmpe);
    var clsifyInner = '\
        <ul class=clsify>\
        <li class="clsHead"><a>&nbsp;\
            <div class="clsLogo"></div>\
            <div class="clsName">'+ clsCN + '</div>\
            <div class="right"></div>\
        </a></li>\
        ';
    for (var i = 0; i < classes.length; i++) {
        clsifyInner = clsifyInner + '\
            <li><a>'+ classes[i] + '</a></li>\
            ';
    }
    clsifyInner = clsifyInner + '\
        <li class="clsMore"><a>更多...</a></li>\
        </ul>\
        ';
    tmpe.innerHTML = clsifyInner;
    // console.log(tmpe.innerHTML);
}
//小图片鼠标悬停
function smallOverInit(clsName) {
    var e = document.getElementById(clsName);
    e = e.getElementsByClassName('czSmall')[0];
    for (var i = 0; i < 4; i++) {
        var tmpDiv = e.getElementsByClassName('czSmall' + String(i + 1))[0];
        // console.log(tmpDiv);
        tmpDiv.setAttribute('onmouseover', 'smallOver(this)');
        // console.log(tmpDiv.style.backgroundImage);
    }
}
function smallOver(self) {
    var img = self.style.backgroundImage;
    var name = img.slice(13, -7);
    name = name.substring((name.length + 1) / 2)
    var big = document.getElementById(name).getElementsByClassName('czBig')[0];
    big.style.setProperty('background-image', img)
    // console.log(big);
}
//填写图片内容
function clsImgWriter(clsName) {
    var e = document.getElementById(clsName);
    var tmpDiv = e.getElementsByClassName('clsLogo')[0];
    tmpDiv.style.setProperty('background-image', 'url(../imgs/icons/' + clsName + '1.png)');
    tmpDiv = e.getElementsByClassName('czBig')[0];
    tmpDiv.style.setProperty('background-image', 'url(../imgs/' + clsName + '/' + clsName + '1.jpg)');
    e = e.getElementsByClassName('czSmall')[0];
    for (var i = 1; i <= 4; i++) {
        tmpDiv = e.getElementsByClassName('czSmall' + String(i))[0];
        // console.log(tmpDiv);
        tmpDiv.style.setProperty('background-image', 'url(../imgs/' + clsName + '/' + clsName + String(i) + '.jpg)');
        // console.log(tmpDiv.style.backgroundImage);
        tmpDiv = tmpDiv.getElementsByTagName('div')[0];
        tmpDiv.innerHTML = '李荣浩“年少有为”巡回演唱会';
        // console.log(tmpDiv);
    }
}
//填写本周排行内容
function weeklyRankWriter(className, clsList) {
    var e = document.getElementById(className);
    e = e.getElementsByClassName('weeklyRank')[0];
    e = e.getElementsByTagName('a');
    // console.log(e[0]);
    if (e.length < clsList.length) {
        var length = e.length;
    } else {
        var length = clsList.length;
    }
    for (var i = 0; i < length; i++) {
        e[i].innerHTML = clsList[i];
    }
}



var musicRank = [
    '2018北京圣诞节平安夜重磅活动-超模DJ荧光派对',
    'Blue Note Beijing BNBJO NEW YEAR’S EVE CELEBRATION',
    '「看见李健」巡回演唱会',
    '鹿先森乐队首个体育馆演唱会',
    '贰佰没有伍演唱会',
    '2018北京最"暖"圣诞演唱会-《致爱情》',
    '国家大剧院制作老舍话剧《西望长安》'
]
var dramaRank = [
	'法语经典音乐剧《摇滚莫扎特》',
    '法语音乐剧《罗密欧与朱丽叶》',
    '开心麻花2019爆笑贺岁舞台剧',
    '国家大剧院制作威廉·莎士比亚话剧《李尔王》',
    '舞台剧《大话西游之大圣娶亲》',
    '孟京辉经典戏剧作品《恋爱的犀牛》',
    '国家大剧院2019年新年音乐会'
]
var otherRank = [
	'2018北京圣诞节平安夜重磅活动-超模DJ荧光派对',
    'Blue Note Beijing BNBJO NEW YEAR’S EVE CELEBRATION',
    '「看见李健」巡回演唱会',
    '鹿先森乐队首个体育馆演唱会',
    '贰佰没有伍演唱会',
    '2018北京最"暖"圣诞演唱会-《致爱情》',
    '国家大剧院2019年新年音乐会'
]
var exhibitionRank = [
	'2018北京圣诞节平安夜重磅活动-超模DJ荧光派对',
    'Blue Note Beijing BNBJO NEW YEAR’S EVE CELEBRATION',
    '「看见李健」巡回演唱会',
    '鹿先森乐队首个体育馆演唱会',
    '贰佰没有伍演唱会',
    '2018北京最"暖"圣诞演唱会-《致爱情》',
    '国家大剧院2019年新年音乐会'
]
var movieRank = [
	'2018北京圣诞节平安夜重磅活动-超模DJ荧光派对',
    'Blue Note Beijing BNBJO NEW YEAR’S EVE CELEBRATION',
    '「看见李健」巡回演唱会',
    '鹿先森乐队首个体育馆演唱会',
    '贰佰没有伍演唱会',
    '2018北京最"暖"圣诞演唱会-《致爱情》',
    '国家大剧院2019年新年音乐会'
]
var lectureRank = [
	'2018北京圣诞节平安夜重磅活动-超模DJ荧光派对',
    'Blue Note Beijing BNBJO NEW YEAR’S EVE CELEBRATION',
    '「看见李健」巡回演唱会',
    '鹿先森乐队首个体育馆演唱会',
    '贰佰没有伍演唱会',
    '2018北京最"暖"圣诞演唱会-《致爱情》',
    '国家大剧院2019年新年音乐会'
]
var matchRank = [
	'2018北京圣诞节平安夜重磅活动-超模DJ荧光派对',
    'Blue Note Beijing BNBJO NEW YEAR’S EVE CELEBRATION',
    '「看见李健」巡回演唱会',
    '鹿先森乐队首个体育馆演唱会',
    '贰佰没有伍演唱会',
    '2018北京最"暖"圣诞演唱会-《致爱情》',
    '国家大剧院2019年新年音乐会'
]



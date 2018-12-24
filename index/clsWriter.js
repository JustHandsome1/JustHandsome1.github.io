function czInit(){
    for(var i=0;i<classEng.length;i++){
        czWriter(classEng[i],classes[i+1],secClses[i]);
    }
}
function weeklyRankInit(){
    weeklyRankWriter('music',musicRank);
    weeklyRankWriter('drama',dramaRank);
}
function clsImgInit(){
    for(var i=0;i<classEng.length;i++){
        clsImgWriter(classEng[i]);
        smallOverInit(classEng[i]);
    }
}



//clsZone填写
function czWriter(clsName,clsCN,classes){
    var e = document.getElementById(clsName);
    var tmpe;
    e.innerHTML='\
        <div class="czTop">\
        </div>\
        <div class="czLine"></div>\
        <div class="czInner">\
        </div>\
        <div class="czList">\
        </div>\
        ';
    writeClsTop(clsName,clsCN,classes)
    tmpe = e.getElementsByClassName("czInner")[0];
    tmpe.innerHTML='\
        <div class="czBig"></div>\
        <div class="czSmall">\
            <div class="czSmall1"></div>\
            <div class="czSmall2"></div>\
            <div class="czSmall3"></div>\
            <div class="czSmall4"></div>\
        </div>\
        ';
    // console.log(e.innerHTML);
    tmpe = e.getElementsByClassName("czList")[0];
    tmpe.innerHTML='\
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
function writeClsTop(clsName,clsCN,classes){
    var e = document.getElementById(clsName);
    var tmpe;
    tmpe = e.getElementsByClassName('czTop')[0];
    // console.log(tmpe);
    var clsifyInner = '\
        <ul class=clsify>\
        <li class="clsHead"><a>&nbsp;\
            <div class="clsLogo"></div>\
            <div class="clsName">'+clsCN+'</div>\
            <div class="right"></div>\
        </a></li>\
        ';
    for(var i=0;i<classes.length;i++){
        clsifyInner = clsifyInner+'\
            <li><a>'+classes[i]+'</a></li>\
            ';
    }
    clsifyInner = clsifyInner+'\
        <li class="clsMore"><a>更多...</a></li>\
        </ul>\
        ';
    tmpe.innerHTML = clsifyInner;
    // console.log(tmpe.innerHTML);
}
//小图片鼠标悬停
function smallOverInit(clsName){
    var e = document.getElementById(clsName);
    e = e.getElementsByClassName('czSmall')[0];
    for(var i=0;i<4;i++){
        var tmpDiv = e.getElementsByClassName('czSmall'+String(i+1))[0];
        // console.log(tmpDiv);
        tmpDiv.setAttribute('onmouseover','smallOver(this)');
        // console.log(tmpDiv.style.backgroundImage);
    }
}
function smallOver(self){
    var img = self.style.backgroundImage;
    var name = img.slice(13,-7);
    name = name.substring((name.length+1)/2)
    var big = document.getElementById(name).getElementsByClassName('czBig')[0];
    big.style.setProperty('background-image',img)
    // console.log(big);
}
//填写图片内容
function clsImgWriter(clsName){
    var e = document.getElementById(clsName);
    var tmpDiv = e.getElementsByClassName('clsLogo')[0];
    tmpDiv.style.setProperty('background-image','url(../imgs/icons/'+clsName+'1.png)');
    tmpDiv = e.getElementsByClassName('czBig')[0];
    tmpDiv.style.setProperty('background-image','url(../imgs/'+clsName+'/'+clsName+'1.jpg)');
    e = e.getElementsByClassName('czSmall')[0];
    for(var i=1;i<=4;i++){
        tmpDiv = e.getElementsByClassName('czSmall'+String(i))[0];
        // console.log(tmpDiv);
        tmpDiv.style.setProperty('background-image','url(../imgs/'+clsName+'/'+clsName+String(i)+'.jpg)');
        // console.log(tmpDiv.style.backgroundImage);
    }
}
//填写本周排行内容
function weeklyRankWriter(className,clsList){
    var e = document.getElementById(className);
    e = e.getElementsByClassName('weeklyRank')[0];
    e = e.getElementsByTagName('a');
    // console.log(e[0]);
    if(e.length<clsList.length){
        var length = e.length;
    }else{
        var length = clsList.length;
    }
    for(var i=0;i<length;i++){
        e[i].innerHTML=clsList[i];
    }
}




var secClses = [
    ['演唱会','音乐节','小型现场','音乐会'],
    ['歌舞剧','话剧','戏曲','儿童剧'],
    ['热映','发布会'],
    ['艺术','动漫','科技'],
    ['体育','电子竞技'],
    ['人文','科学'],
    ['公益','课程','签售会','发布会']
]
var musicRank = [
    '【哦漏】POP/STARS（毁歌翻唱',
    'ブラッククリスマス / After the Rain',
    '【大提琴】LOSER✖️米津玄师 全程高燃！',
    '【凹凸世界全员曲】绝境之刃【豪华人声本家】',
    '【YUKIri×ゆう十】我爱你-夏目友人帐ED',
    '【三无】Nightglow',
    '【祖娅纳惜·FRE】TH讠NK【人声本家/踏云'
]
var dramaRank = [
    '英国TNT剧院原版莎翁经典话剧《罗密欧与朱丽叶》',
    '东野圭吾悬疑舞台剧《回廊亭杀人事件》',
    '西方绘画500年，穿越大西洋的艺术',
    '鹿先森乐队"华年"2018全国巡演北京站',
    'IDO29第29届中国（北京）动漫游戏嘉年华',
    '孟京辉经典戏剧作品《恋爱的犀牛》',
    '流光永恒——奥黛丽?赫本展',
    '蘑菇空间文艺电影之夜：韦斯·安德森导演作品精选放映'
]

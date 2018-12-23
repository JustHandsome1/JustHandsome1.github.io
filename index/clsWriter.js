function weeklyRankInit(){
    weeklyRankWriter('music',musicRank);
}
function clsImgInit(){
    clsImgWriter('music');
    clsImgWriter('drama');
    clsImgWriter('movie');
    clsImgWriter('exhibition');
    clsImgWriter('match');
    clsImgWriter('lecture');
    clsImgWriter('other');
}
//填写clsZone的HTML框架
function czWriter(){

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
    // console.log(clsName+' image init start!'+String(i));
        tmpDiv = e.getElementsByTagName('div')[i-1];
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
        var length = e.length();
    }else{
        var length = clsList.length;
    }
    for(var i=0;i<length;i++){
        e[i].innerHTML=clsList[i];
    }
}

var musicRank = [
    '【哦漏】POP/STARS（毁歌翻唱',
    'ブラッククリスマス / After the Rain（',
    '【大提琴】LOSER✖️米津玄师 全程高燃！',
    '【凹凸世界全员曲】绝境之刃【豪华人声本家】',
    '【YUKIri×ゆう十】我爱你-夏目友人帐ED',
    '【三无】Nightglow',
    '【祖娅纳惜·FRE】TH讠NK【人声本家/踏云'
]

function czInit() {
    for (var i = 0; i < classEng.length; i++) {
        czWriter(classEng[i], classes[i + 1], secClses[i]);
    }
    addLinkTOCls();//给分类的名称和icon加上链接
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
        ';
    writeClsTop(clsName, clsCN, classes)
    tmpe = e.getElementsByClassName("czInner")[0];
    var itemClsStr = "'"+clsName+"'";
    tmpe.innerHTML = '\
        <div class="czBig" onclick="jumpItem('+itemClsStr+',0)"><div class="bigMask"></div></div>\
        <div class="czSmall">\
            <div class="czSmall1" onclick="jumpItem('+itemClsStr+',1)"><div class="smallMask"></div></div>\
            <div class="czSmall2" onclick="jumpItem('+itemClsStr+',2)"><div class="smallMask"></div></div>\
            <div class="czSmall3" onclick="jumpItem('+itemClsStr+',3)"><div class="smallMask"></div></div>\
            <div class="czSmall4" onclick="jumpItem('+itemClsStr+',4)"><div class="smallMask"></div></div>\
        </div>\
        ';
}
function writeClsTop(clsName, clsCN, classes) {
    var e = document.getElementById(clsName);
    var tmpe;
    tmpe = e.getElementsByClassName('czTop')[0];
    // console.log(tmpe);
    var clsifyInner = '\
        <ul class=clsify>\
        <li class="clsHead">\
            <div class="clsLogo"></div>\
            <div class="clsName">'+ clsCN + '</div>\
            <div class="right"></div>\
        </li>\
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
//给每个大标题和icon加上链接
function addLinkTOCls(){
    var codes=['zero','one','two','three','five','six'];
    var e1=document.getElementsByClassName("clsLogo");
    var e2=document.getElementsByClassName("clsName");
    for(var i=0;i<e1.length;i++){
        e1[i].setAttribute('onclick','jump("../class/class.html#'+codes[i]+'",0)')
        e2[i].setAttribute('onclick','jump("../class/class.html#'+codes[i]+'",0)')
    }
}



//小图片鼠标悬停
function smallOverInit(clsName) {
    var e = document.getElementById(clsName);
    e = e.getElementsByClassName('czSmall')[0];
    for (var i = 0; i < 4; i++) {
        var tmpDiv = e.getElementsByClassName('czSmall' + String(i + 1))[0];
        // console.log(tmpDiv);
        // tmpDiv.setAttribute('onmouseover', 'smallOver(this)');
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
    tmpDiv.style.setProperty('background-image', 'url(../imgs/icons/' + clsName + '.png)');
    tmpDiv = e.getElementsByClassName('czBig')[0];
    tmpDiv.style.setProperty('background-image', 'url(' + itemInfo[clsName][0]['src'] + ')');
    tmpDiv = e.getElementsByClassName('bigMask')[0];
    tmpDiv.innerHTML = itemInfo[clsName][0]['name'] + '</br>' + itemInfo[clsName][0]['date'];
    e = e.getElementsByClassName('czSmall')[0];
    for (var i = 1; i <= 4; i++) {
        tmpDiv = e.getElementsByClassName('czSmall' + String(i))[0];
        // console.log(tmpDiv);
        tmpDiv.style.setProperty('background-image', 'url(' + itemInfo[clsName][i]['src'] + ')');
        // console.log(tmpDiv.style.backgroundImage);
        tmpDiv = tmpDiv.getElementsByTagName('div')[0];
        tmpDiv.innerHTML = itemInfo[clsName][i]['name'] ;
        // console.log(tmpDiv);
    }
}
//填写本周排行内容
function weeklyRankWriter(className, clsList) {

}




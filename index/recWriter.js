function recInnit(){
    recWriter();
    riInnerWriter();
    recImgInfoWriter();
    setRacLength();
}



//设定推荐条长度
var racLenght;
//框架Writer
function recWriter(){
    var e = document.getElementById('rec');
    e.innerHTML = '\
        <div id="recTitle">\
            <img id="lHot" src="../imgs/icons/hot2.png">\
            <div>热&nbsp;门&nbsp;推&nbsp;荐</div>\
            <img id="rHot" src="../imgs/icons/hot2.png">\
        </div>\
        <div id="recInner">\
            <div id="recLeft" onclick="recLeftClick()"></div>\
            <div id="recItems">\
                <div id="riInner" style="left:0px">\
                    <div class="ri" id="ri1">\
                        <div class="riImg"></div>\
                        <div class="riInfo"></div>\
                    </div>\
                </div>\
            </div>\
            <div id="recRight" onclick="recRightClick()"></div>\
        </div>\
        '
}
function setRacLength(){
    var e = document.getElementById('riInner');
    racLenght = 250*recInfo.length;
    e.style.setProperty('width',String(racLenght)+'px');
    // console.log(e);
}
//填入热门推荐的内容
function riInnerWriter(){
    var e = document.getElementById('riInner');
    var inner='';
    for(var i=0;i<recInfo.length;i++){
        inner = inner + '\
            <div class="ri" id="ri'+String(i+1)+'">\
                <div class="riImg"></div>\
                <div class="riInfo"></div>\
            </div>\
            '
    }
    e.innerHTML = inner;
}
function recImgInfoWriter(){
    var e = document.getElementsByClassName('riImg');
    for(var i=0;i<e.length;i++){
        e[i].style.setProperty('background-image','url(../imgs/rec/rec'+String(i+1)+'.jpg)');
    }
    e = document.getElementsByClassName('riInfo');
    for(var i=0;i<e.length;i++){
        e[i].innerHTML = recInfo[i];
    }
}


var recInfo = [
    '英国TNT剧院原版《罗密欧与朱丽叶》',
    '东野圭吾悬疑舞台剧《回廊亭杀人事件》',
    '西方绘画500年，穿越大西洋的艺术',
    '鹿先森乐队"华年"2018全国巡演北京站',
    'IDO29第29届中国（北京）动漫游戏嘉年华',
    '孟京辉经典戏剧作品《恋爱的犀牛》',
    '流光永恒——奥黛丽·赫本展',
    '韦斯·安德森导演作品精选放映',
    '英国TNT剧院原版《罗密欧与朱丽叶》',
    '东野圭吾悬疑舞台剧《回廊亭杀人事件》',
    '西方绘画500年，穿越大西洋的艺术'
]
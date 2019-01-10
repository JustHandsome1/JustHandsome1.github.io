window.onload = function () {
    // writeItem('music', 0);
}

//写入信息
function writeItem(clsName, num) {
    var clsPos = classEng.indexOf(clsName);
    var e = document.getElementsByTagName('title');
    e[0].innerHTML = e[0].innerHTML + itemInfo[clsName][num]['name'].split('<br/>').join(' ');
    //面包屑导航
    e = document.getElementById('clsIcon');
    e.style.setProperty('background-image',
        'url(../imgs/icons/' + clsName + '.png)');
    e.setAttribute('onclick',
        'jump("../class/class.html#' + clsCode[clsPos] + '",0)');
    e = document.getElementById('clsName');
    e.innerHTML = classes[clsPos + 1];
    e.setAttribute('onclick',
        'jump("../class/class.html#' + clsCode[clsPos] + '",0)');
    e = document.getElementById('secCls');
    e.innerHTML = itemInfo[clsName][num]['kind'];
    e.setAttribute('onclick',
        'jump("../class/class.html#' + clsCode[clsPos] + '",0)');
    //infoBox
    e = document.getElementById('infoImg');
    e.style.setProperty('background-image', 'url(../imgs/' + clsName + '/' + clsName + String(num) + '.jpg)');
    e = document.getElementById('infoName');
    e.innerHTML = itemInfo[clsName][num]['name'];
    e = document.getElementById('infoTime');
    writeInner(e, itemInfo[clsName][num]['date'])
    if (itemInfo[clsName][num]['time']) e.innerHTML = e.innerHTML + ' &nbsp; &nbsp; ' + itemInfo[clsName][num]['time'];
    e = document.getElementById('infoLocation');
    writeInner(e, itemInfo[clsName][num]['location'])
    e = document.getElementById('infoFee');
    writeInner(e, itemInfo[clsName][num]['fee'] + '元');
    e = document.getElementById('infoLike');
    e.setAttribute('onclick', 'like(this)');
    e = document.getElementById('infoSch');
    e.setAttribute('onclick', 'data(this)');
    //map
    e = document.getElementById('mapBox');
    e.innerHTML = '<iframe src="../map/map' + clsName + String(num) + '.html" frameBorder="0" width="340" scrolling="no" height="440"></iframe> ';
    //inroduce
    var introduceInner = '';
    if (thirdInfo[clsName][num]) {
        for (var i = 0; i < thirdInfo[clsName][num].length; i++) {
            if (i % 2 == 0) {
                introduceInner = introduceInner + '\
            <p class="introduceP">'+ thirdInfo[clsName][num][i] + '</p>';
            } else {
                introduceInner = introduceInner + '\
        <img class="introduceImg" src="'+ thirdInfo[clsName][num][i] + '"></p>'
            }
        }
    } else {
        introduceInner = '<p class="introduceP">暂无活动详细信息</p>';
    }
    e = document.getElementById('introduce');
    e.innerHTML = introduceInner;
    //team
    var teamNum = (Math.floor(Math.random() * 5 + 1));
    e = document.getElementById('team');
    for (var i = 0; i < teamNum; i++) {
        e.innerHTML = e.innerHTML + '\
        <div class="aTeam">\
            <div class="friends">\
                <div class="aFrd" style="left:0px"></div>\
                <div class="aFrd" style="left:25px"></div>\
                <div class="aFrd" style="left:50px"></div>\
                <div class="members"></div>\
            </div>\
            <div class="teamInfo">\
                <div class="teamName"></div>\
                <div class="teamTime"></div>\
            </div>\
            <div class="joinBtn">加&nbsp;入</div>\
        </div>'
    }
    e = document.getElementsByClassName('aFrd');
    for (var i = 0; i < e.length; i++) {
        var tmpFrdNum = (Math.floor(Math.random() * 8));//生成0-7的随机整数
        // console.log(frds['friend'][tmpFrdNum]['src']);
        e[i].style.setProperty('background-image', 'url("' + frds['friend'][tmpFrdNum]['src'] + '")');
        e[i].setAttribute('title', frds['friend'][tmpFrdNum]['name']);
    }
    e = document.getElementsByClassName('members');
    for (var i = 0; i < e.length; i++) {
        e[i].innerHTML = '已加入' + String(Math.floor(Math.random() * 50 + 5)) + '人';
    }
    e = document.getElementsByClassName('teamName');
    for (var i = 0; i < e.length; i++) {
        e[i].innerHTML = itemInfo[clsName][num]['name'];
    }
    e = document.getElementsByClassName('teamTime');
    for (var i = 0; i < e.length; i++) {
        e[i].innerHTML = itemInfo[clsName][num]['date'];
    }
    
    //comment
    var cmtNum = (Math.floor(Math.random() * 5 + 1));
    e = document.getElementById('comment');
    for (var i = 0; i < cmtNum; i++) {
        e.innerHTML = e.innerHTML + '\
        <div class="cmtCardBox">\
            <div class="cmtCard" >\
                <div class="clip" src="../imgs/icons/clip.png"></div>\
                <div class="cmtLeft">\
                    <div class="cmtHead"></div>\
                    <div class="cmtName"></div>\
                    <div class="cmtUnivercity">北京邮电大学</div>\
                </div>\
                <div class="cmtMid">\
                    <div class="cmtInner">\
                    </div>\
                    <input class="cmtInput" type="text" placeholder="评论" />\
                    <div class="cmtGood" onclick="good(this)" style="background-image:url(../imgs/icons/good1.png)"><div class="goodNum">123</div></div>\
                    <div class="cmtBad" onclick="bad(this)" style="background-image:url(../imgs/icons/bad1.png)"><div class="badNum">321</div></div>\
                </div>\
                <div class="cmtRight">\
                    <div class="cmtImg"></div>\
                    <div class="cmtItem">name</div>\
                </div>\
            </div>\
        </div >\
        '
    }

    e = document.getElementsByClassName('cmtLeft');
    for (var i = 0; i < e.length; i++) {
        var tmpFrdNum = (Math.floor(Math.random() * 8));//生成0-7的随机整数
        // console.log(frds['friend'][tmpFrdNum]['src']);
        e[i].getElementsByClassName('cmtHead')[0].style.setProperty('background-image', 'url("' + frds['friend'][tmpFrdNum]['src'] + '")');
        e[i].getElementsByClassName('cmtName')[0].innerHTML = frds['friend'][tmpFrdNum]['name'];
    }
    e = document.getElementsByClassName('cmtInner');
    for (var i = 0; i < e.length; i++) {
        e[i].innerHTML = comments[Math.floor(Math.random() * comments.length)];
    }
    e = document.getElementsByClassName('cmtImg');
    for (var i = 0; i < e.length; i++) {
        e[i].style.setProperty('background-image', 'url(../imgs/' + clsName + '/' + clsName + String(num) + '.jpg)');
    }
    e = document.getElementsByClassName('cmtItem');
    for (var i = 0; i < e.length; i++) {
        e[i].innerHTML = itemInfo[clsName][num]['name'];
    }
    e = document.getElementsByClassName('goodNum');
    for (var i = 0; i < e.length; i++) {
        e[i].innerHTML = String(Math.floor(Math.random() * 500 + 20));
    }
    e = document.getElementsByClassName('badNum');
    for (var i = 0; i < e.length; i++) {
        e[i].innerHTML = String(Math.floor(Math.random() * 500 + 20));
    }
}


//对class整体写入
function classWrite(e, att, value) {
    for (var i = 0; i < e.length; i++) {
        e[i].style.setProperty(att, value);
    }
}
//判断是否有对应信息并写入innerHTML
function writeInner(e, str) {
    if (str) {
        e.innerHTML = str;
    } else {
        e.innerHTML = '暂无信息';
    }
}

function like(self) {
    // console.log('click heart!')
    if (self.style.backgroundImage == 'url("../imgs/icons/heart1.png")') {
        self.style.backgroundImage = 'url("../imgs/icons/heart2.png")';
    } else {
        self.style.backgroundImage = 'url("../imgs/icons/heart1.png")';
    }
    // console.log(self.style.backgroundImage);
}
function data(self) {
    // console.log('click heart!')
    if (self.style.backgroundImage == 'url("../imgs/icons/schedule1.png")') {
        self.style.backgroundImage = 'url("../imgs/icons/schedule2.png")';
    } else {
        self.style.backgroundImage = 'url("../imgs/icons/schedule1.png")';
    }
    // console.log(self.style.backgroundImage);
}


function good(self) {
    // console.log('click heart!')
    if (self.style.backgroundImage == 'url("../imgs/icons/good1.png")') {
        self.style.backgroundImage = 'url("../imgs/icons/good2.png")';
        self.getElementsByClassName('goodNum')[0].innerHTML =
            String(parseInt(self.getElementsByClassName('goodNum')[0].innerHTML) + 1);
    } else {
        self.style.backgroundImage = 'url("../imgs/icons/good1.png")';
        self.getElementsByClassName('goodNum')[0].innerHTML =
            String(parseInt(self.getElementsByClassName('goodNum')[0].innerHTML) - 1);
    }
    // console.log(self.style.backgroundImage);
}
function bad(self) {
    // console.log('click heart!')
    if (self.style.backgroundImage == 'url("../imgs/icons/bad1.png")') {
        self.style.backgroundImage = 'url("../imgs/icons/bad2.png")';
        self.getElementsByClassName('badNum')[0].innerHTML =
            String(parseInt(self.getElementsByClassName('badNum')[0].innerHTML) + 1);
    } else {
        self.style.backgroundImage = 'url("../imgs/icons/bad1.png")';
        self.getElementsByClassName('badNum')[0].innerHTML =
            String(parseInt(self.getElementsByClassName('badNum')[0].innerHTML) - 1);
    }
    // console.log(self.style.backgroundImage);
}



var comments = [
    '说一段神话,\
    话说那么一家,\
    这家夫妻俩,\
    生了一个怪娃娃,\
    扎着俩冲天鬃,\
    光这俩小脚丫,\
    踩着俩风火轮,\
    乾坤圈手中拿,\
    混天绫护着她,\
    轩辕箭满弓拉,\
    两个眼睛是照妖镜,\
    双腿是追风马,\
    乾坤圈伴着他,\
    上天下海本事大,\
    三头六臂现威力,\
    千征百战斗魔法,\
    要问他的名子叫什么,\
    哪吒 哪吒 小哪吒~',
    '北邮，啊北邮，岁岁桃李吐芳华，国脉所系的事业，遍布于，苍茫天下。',
    '北邮，啊北邮，队队鸿雁又出发，传邮万里的使命，神圣在，海角天涯。',
    '小手一打就是漂漂亮亮的十五个字',
    '葫芦娃葫芦娃\
    一根藤上七朵花\
    风吹雨打都不怕\
    啦啦啦啦\
    叮当咚咚当当\
    葫芦娃\
    叮当咚咚当当\
    本领大\
    啦啦啦啦\
    葫芦娃葫芦娃\
    本领大\
    葫芦娃葫芦娃\
    一根藤上七朵花\
    风吹雨打都不怕\
    啦啦啦啦\
    叮当咚咚当当\
    葫芦娃\
    叮当咚咚当当\
    本领大\
    啦啦啦啦\
    葫芦娃葫芦娃\
    本领大\
    啦啦啦啦啦啦啦啦啦啦\
    啦啦啦啦啦啦啦啦啦啦'
]
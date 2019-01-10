//变换二级分类
function secClsChoseWriter(clsName){
    var e = document.getElementById('secClsChose');
    var funcValue = "'"+clsName+"','all'";
    var secClsInner='\
    <div class="secImg" onclick="findCards('+funcValue+')">\
        <div class="secIcon"></div>\
        <div class="secName">\
        全部&nbsp;&nbsp;\
        </div>\
    </div>\
    ';
    for(var i=0;i<secClsesD[clsName].length;i++){
        var fullName = secClsesD[clsName][i];
        for(var x=0;x<4-secClsesD[clsName][i].length;x++){
            fullName +='&nbsp;'
        }
        funcValue = "'"+clsName+"','"+secClsesD[clsName][i]+"'";
        secClsInner+='\
        <div class="secImg" onclick="findCards('+funcValue+')">\
            <div class="secIcon"></div>\
            <div class="secName">'+
            fullName
            +'</div>\
        </div>\
        ';
    }
    secClsInner+='\
    <div id="secLine" style="left:25px"></div>';
    //过渡一下
    e.style.opacity = '1';
    e.style.opacity = '0';
    e.style.width = String(secClsesD[clsName].length*210+210)+'px';
    setTimeout(() => {
        e.innerHTML = secClsInner;
        chgSecImg(clsName);
        secClsInit();
        //重新找一下secLine
        secLine = document.getElementById('secLine');
        e.style.opacity = '1';;
    }, 400);

}


//给二级分类加上小icon
var secImgName = {
    'music':['all','ych','yyh','xxxc','yyj'],
    'drama':['all','gwj', 'hj', 'xq', 'etj'],
    'movie':['all','ry', 'fbh'],
    'exhibition':['all','ys', 'dm', 'kj'],
    'match':['all','ty', 'dzjj'],
    'lecture':['all','rw', 'kx'],
    'other':['all','gy', 'kc', 'qsh', 'qt']
}
function chgSecImg(clsName){
    var e=document.getElementsByClassName('secIcon');
    for(var i=0;i<secClsesD[clsName].length+1;i++){
        // console.log(e[i]);
        e[i].style.setProperty('background-image','url(../imgs/class/secClass/'+clsName+'/'+secImgName[clsName][i]+'.png)');
    }
}



//页面加载的时候的二级分类填写
function secClsChoseInit(clsName){
    var e = document.getElementById('secClsChose');
    var funcValue = "'"+clsName+"','all'";
    var secClsInner='\
    <div class="secImg" onclick="findCards('+funcValue+')">\
        <div class="secIcon"></div>\
        <div class="secName">\
        全部&nbsp;&nbsp;\
        </div>\
    </div>\
    ';
    for(var i=0;i<secClsesD[clsName].length;i++){
        var fullName = secClsesD[clsName][i];
        for(var x=0;x<4-secClsesD[clsName][i].length;x++){
            fullName +='&nbsp;'
        }
        funcValue = "'"+clsName+"','"+secClsesD[clsName][i]+"'";
        secClsInner+='\
        <div class="secImg" onclick="findCards('+funcValue+')">\
            <div class="secIcon"></div>\
            <div class="secName">'+
            fullName
            +'</div>\
        </div>\
        ';
    }
    secClsInner+='\
    <div id="secLine" style="left:25px"></div>';
    //过渡一下
    e.style.width = String(secClsesD[clsName].length*210+210)+'px';
    e.innerHTML = secClsInner;
    chgSecImg(clsName);
    secClsInit();
    //重新找一下secLine
    secLine = document.getElementById('secLine');
}
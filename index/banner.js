function clickBanner(self,num){
    var e=document.getElementById("chosenBannerText");
    chgId(e.id,self);
    e=document.getElementById('banner');
    e.style.setProperty('background-image','url(../imgs/banners/banner'+num+'.jpg)');
    clearInterval(changer);
    isBannerHovered = true;
}
function outBanner(){
    if(isBannerHovered)changer = setInterval(autoChg,5000);
    isBannerHovered = false;
}
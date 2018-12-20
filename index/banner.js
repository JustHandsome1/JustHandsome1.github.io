function chgBanner(self,num){
    var e=document.getElementById("chosenBannerText");
    e.id='';
    self.id='chosenBannerText';

    e=document.getElementById('banner');
    e.style.setProperty('background-image','url(../imgs/banners/banner'+num+'.jpg)');
}
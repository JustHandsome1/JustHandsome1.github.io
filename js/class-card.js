function cardBtnInit(){
    var e = document.getElementsByClassName('cHeart');
    for(var i=0;i<e.length;i++){
        e[i].setAttribute('onclick','like(this)');
    };
    e = document.getElementsByClassName('cSchedule');
    for(var i=0;i<e.length;i++){
        e[i].setAttribute('onclick','data(this)');
    };
}






function like(self){
    // console.log('click heart!')
    if(self.style.backgroundImage == 'url("../imgs/icons/heart1.png")'){
        self.style.backgroundImage = 'url("../imgs/icons/heart2.png")';
    }else{
        self.style.backgroundImage = 'url("../imgs/icons/heart1.png")';
    }
    // console.log(self.style.backgroundImage);
}
function data(self){
    // console.log('click heart!')
    if(self.style.backgroundImage == 'url("../imgs/icons/schedule1.png")'){
        self.style.backgroundImage = 'url("../imgs/icons/schedule2.png")';
    }else{
        self.style.backgroundImage = 'url("../imgs/icons/schedule1.png")';
    }
    // console.log(self.style.backgroundImage);
}
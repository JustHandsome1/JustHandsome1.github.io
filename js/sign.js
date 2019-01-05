window.onload = function(){

}



function toSignUp(){
    var e=document.getElementById('left');
    e.style.setProperty('top','-100%');
    e=document.getElementById('right');
    e.style.setProperty('top','0');
}

function toSignIn(){
    var e=document.getElementById('left');
    e.style.setProperty('top','0');
    e=document.getElementById('right');
    e.style.setProperty('top','-100%');
}

function start(){
    setTimeout(() => {
        window.location.href="../index/index.html"; 
    }, 1000);   
}
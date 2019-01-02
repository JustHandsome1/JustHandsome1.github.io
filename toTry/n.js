console.log("Hello, world!");
var time = 0;
var timer = setInterval(() => {
    time++;
    console.log(time + " seconds have passed."+`${1+2}`);
    if(time>=10)clearInterval(timer);
}, 1000);

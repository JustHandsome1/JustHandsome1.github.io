function cnLineMove(x,y){
    // var ee=ev||window.event;//获取事件
    // var ele=ee.target||e.srcElement;//获取触发事件的元素
    var e = document.getElementById('cnLine');
    eMove(e,x,y);
}

function cnClick(self,x,y){
    cnLineMove(x,y);

    var e=document.getElementById('chosenClass');
    e.id = '';
    self.id = 'chosenClass';
}
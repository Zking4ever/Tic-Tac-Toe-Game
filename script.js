var box =document.getElementsByTagName('span');
var h1 = document.getElementById('turn');
var counter=1;//two differentiate between players depending on the no evenness or oddness
for(var i=0;i<box.length;i++){
    box[i].addEventListener('click',function(){
        if(this.id ==""){
        if(counter%2!=0){
            //odd
            this.id ="one";
            this.innerHTML ="X";
            h1.innerHTML ="Player two goes";
        }else{
            //even
            this.id ="two";
            this.innerHTML ="O";
            h1.innerHTML ="Player one goes";
        }
    }else{
        alert('choose empty box');
    }
       horizontal();
        vertical();
        diagonal();
        counter++;
    });
}
function horizontal(){

    for(var i=0;i<7;i+=3){
        if(box[i].id=="one" && box[i+1].id=="one" && box[i+2].id=="one")
        {
            alert('player 1 wins');
            remove();
        }
        if(box[i].id=="two" && box[i+1].id=="two" && box[i+2].id=="two")
        {
                alert('player 2 wins');
                remove();
        }
    }
}
function vertical(){
    for(var i=0;i<3;i++){
        if(box[i].id=="one" && box[i+3].id=="one" && box[i+6].id=="one")
            {
                alert('player 1 wins');
                remove();
            }
            if(box[i].id=="two" && box[i+3].id=="two" && box[i+6].id=="two")
            {
                    alert('player 2 wins');
                    remove();
            }
    }
}
function diagonal(){
    let i=0;
    if(box[i].id=="one" && box[i+4].id=="one" && box[i+8].id=="one")
        {
            alert('player 1 wins');
            remove();
    }
    if(box[i].id=="two" && box[i+4].id=="two" && box[i+8].id=="two")
        {
                alert('player 2 wins');
                remove();
    }
        i=2; 
     if(box[i].id=="one" && box[i+2].id=="one" && box[i+4].id=="one")
    {
                alert('player 1 wins');
                remove();
     }   
    if(box[i].id=="two" && box[i+2].id=="two" && box[i+4].id=="two")
        {
                alert('player 2 wins');
                remove();
        }
}
function remove(){
    for(var i=0;i<box.length;i++){
        box[i].removeAttribute('id');
        h1.innerHTML ="Player one starts";
        box[i].innerHTML ="";
        counter=1;
    }
}
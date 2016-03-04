
firstPlayerGo=true;
secondPlayerGo=false;
//variable of

$(".button").click(function(){


  if (firstPlayerGo===true && secondPlayerGo===false){
    $(this).text("X");
    $(this).addClass("xclaimed")
    firstPlayerGo=false;
    secondPlayerGo=true;
    var X=(this.id)
    console.log("X chose "+this.id)
    console.log(this)
  }
  else if(firstPlayerGo===false && secondPlayerGo===true){
    $(this).text("O")
    $(this).addClass("oclaimed")
    firstPlayerGo=true;
    secondPlayerGo=false;
    var O = (this.id)
    console.log("O chose "+this.id)
    console.log(this)
  }

});






//call function:
// });

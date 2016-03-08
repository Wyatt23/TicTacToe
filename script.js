
firstPlayerGo=true;
secondPlayerGo=false;
//variable of

$(".button").click(function(){
  // AM: You could rewrite the below line as if( firstPlayerGo && !secondPlayerGo ){ ...
  // AM: Makes things a little shorter!
  if (firstPlayerGo===true && secondPlayerGo===false){
    // $(this).text("X");
    // AM: You don't have a condition that will prevent a square from being overridden if there is already an X or O in it.
    // AM: Let me know if you would like help implementing that.
    $(this).addClass("xclaimed")
    // AM: If you end up refactoring this if-else statement in the way I suggest at the bottom of this document...
    // AM: ...it might benefit you to rewrite `firstPlayerGo = false` as `firstPlayerGo = !firstPlayerGo`.
    // AM: Why might I suggest that? Can talk about this during a 1:1!
    firstPlayerGo=false;
    secondPlayerGo=true;
    var X=(this.id)
    console.log("X chose "+this.id)
    console.log(this)
  }
  // AM: else if( !firstPlayerGo && secondPlayerGo ){ ...
  else if(firstPlayerGo===false && secondPlayerGo===true){
    // $(this).text("O")
    $(this).addClass("oclaimed")
    firstPlayerGo=true;
    secondPlayerGo=false;
    var O = (this.id)
    console.log("O chose "+this.id)
    console.log(this)
  }
  // AM: The above `if` and `else if` statements look pretty similar, with the except of a few items.
  // AM: Perhaps you could condense this code into a single function, and use arguments to represent the values that differ between the two code blocks.

});






//call function:
// });

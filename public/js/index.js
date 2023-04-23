console.log("2ds");
var auto = document.getElementsByClassName('.memory__section');
console.log(auto);

var memoryUpperID;
  var memoryLowerID;
  var correctPairs=0;
  var resetButtonContainer= document.querySelector(".container__reset");
  var count1;
  var count2;
  $(".container__reset").hide();
  var upperCardsContainer = document.querySelector(".cards--upper");
  var lowerCardsContainer = document.querySelector(".cards--lower");
  var upperCards = upperCardsContainer.querySelectorAll(".card__container");
  var lowerCards = lowerCardsContainer.querySelectorAll(".card__container");
  
  $(".cards--upper .card__container ").click(function(){
      if($(this).hasClass('disabled')) {
      event.preventDefault(); // prevent default behavior of click event
    } else{
      count1=0;
      memoryUpperID=$(this).attr("id");
      for(let i = 0; i<upperCards.length; i++){
          if(upperCards[i].classList.contains("rotate-flip") ){
              count1++;
          }
          if(upperCards[i].classList.contains("rotate-flip") && upperCards[i].querySelector(".facedown__wrapper").classList.contains("card--correct")){
              count1--;
          }
          if(count1==2){
              count1=1;
          }
      }
      //Disable other cards while one is active (count==1)
  
      if(count1==0 && !this.classList.contains("rotate-flip") ){
         disableUnactive(upperCards, $(this).attr("id"));
          $(this).toggleClass("rotate-flip");
          if(memoryLowerID===memoryUpperID){
              $(this).find(".facedown__wrapper").toggleClass("card--correct");
              $(this).find(".memory__upside--upper").prop("disabled", true);
              $(this).find(".shape__checkmark").fadeToggle();
              $(".cards--lower").find("#"+memoryLowerID).find(".facedown__wrapper").toggleClass("card--correct");
              $(".cards--lower").find("#"+memoryLowerID).find(".memory__upside--lower").prop("disabled", true);
              $(".cards--lower").find("#"+memoryLowerID).find(".shape__checkmark").fadeToggle();
              correctPairs++;
              enableBothUnactive();
              if(correctPairs==upperCards.length){
                $(".container__reset").fadeToggle();
                correctPairs=0;
              }
              return;
          }       /* else if(count1+count2==0){
              setTimeout(()=> {
                       $(this).removeClass("rotate-flip");
                       for(let i=0; i<upperCards.length; i++){
                          if(i!=$(this).attr("id")){
                              if(upperCards[memoryLowerID].querySelector(".facedown__wrapper").classList.contains("card--correct"))
                          upperCards[i].classList.remove("rotate-flip");
                          }
                       }
              } ,3000);
              enableBothUnactive();
          } */
      }
  
      //If you want select another card instead you can flip back the first one
      if(count1==1 && this.classList.contains("rotate-flip")){
          enableUnactive(upperCards);
          $(this).toggleClass("rotate-flip");
          //enableUnactive(upperCards, $(this).attr("id"), ".memory__facedown--upper");
          memoryUpperID=Math.floor(Math.random() * (100000-1));
          return;
      }
    }
  })
  
  
  $(".cards--lower .card__container ").click(function(){
      if ($(this).hasClass('disabled')) {
      event.preventDefault(); // prevent default behavior of click event
      } else{
      memoryLowerID=$(this).attr("id");
      count2=0;
      for(let i = 0; i<lowerCards.length; i++){
          if(lowerCards[i].classList.contains("rotate-flip")){
              count2++;
          }
          if(lowerCards[i].classList.contains("rotate-flip") && lowerCards[i].querySelector(".facedown__wrapper").classList.contains("card--correct")){
          count2--;
          }
          if(count2==2){
          count2=1;
          }
  
      }
  
      //Disable other cards while one is active (count==1)
  
  
      if(count2==0 && !this.classList.contains("rotate-flip") ){
         disableUnactive(lowerCards, $(this).attr("id"));
          $(this).toggleClass("rotate-flip");
          if(memoryLowerID===memoryUpperID){
              $(this).find(".facedown__wrapper").toggleClass("card--correct");
              $(this).find(".memory__upside--upper").prop("disabled", true);
              $(this).find(".shape__checkmark").fadeToggle();
              $(".cards--upper").find("#"+memoryUpperID).find(".facedown__wrapper").toggleClass("card--correct");
              $(".cards--upper").find("#"+memoryUpperID).find(".memory__upside--upper").prop("disabled", true);
              $(".cards--upper").find("#"+memoryUpperID).find(".shape__checkmark").fadeToggle();
              correctPairs++;
              enableBothUnactive();
              if(correctPairs==lowerCards.length){
                   $(".container__reset").fadeToggle();
                   correctPairs=0;
              }
              return;
          }
          /*else if(count1+count2==0){
              setTimeout(()=> {
                       $(this).removeClass("rotate-flip");
                       for(let i=0; i<upperCards.length; i++){
                          if(i!=$(this).attr("id")){
                          upperCards[i].classList.remove("rotate-flip");
                          }
                       }
              } ,3000);
              enableBothUnactive();
          }*/
      }
  
      //If you want select another card instead you can flip back the first one
      if(count2==1 && this.classList.contains("rotate-flip") ){
          enableUnactive(lowerCards);
          $(this).toggleClass("rotate-flip");
          //enableUnactive(lowerCards,$(this).attr("id"),".memory__facedown--lower");
          memoryLowerID=Math.floor(Math.random() * (100000-1));
          return;
      }
    }
  })

  $(".container__reset button").click(function(){
   resetGame();
  })
  
  function disableUnactive(cardField, currentID){
      for(let i=0; i<cardField.length; i++){
          if(cardField[i].id!=currentID){
              cardField[i].classList.add("disabled");
          }
      }
  }
  
  function enableUnactive(cardArray){
      for(let i=0; i<cardArray.length; i++){
              cardArray[i].classList.remove("disabled");
      }
  }
  
  function enableBothUnactive(){
      for(let i=0; i<upperCards.length; i++){
              upperCards[i].classList.remove("disabled");
              lowerCards[i].classList.remove("disabled");
      }
  }

  function removeClasses(){
    enableBothUnactive();
    for(let i=0; i<upperCards.length; i++){
      $(".cards--lower").find("#"+(i+1)).removeClass("rotate-flip")
      $(".cards--upper").find("#"+(i+1)).removeClass("rotate-flip")
      $(".cards--lower").find("#"+(i+1)).find(".facedown__wrapper").toggleClass("card--correct")
      $(".cards--upper").find("#"+(i+1)).find(".facedown__wrapper").toggleClass("card--correct")
      $(".cards--lower").find("#"+(i+1)).find(".memory__upside--lower").prop("disabled", false);
      $(".cards--upper").find("#"+(i+1)).find(".memory__upside--upper").prop("disabled", false);
      $(".cards--lower").find("#"+(i+1)).find(".shape__checkmark").fadeToggle();
      $(".cards--upper").find("#"+(i+1)).find(".shape__checkmark").fadeToggle();
      memoryUpperID=Math.floor(Math.random() * (100000-1));
      memoryLowerID=Math.floor(Math.random() * (100000-1));
    }
  }

  function resetGame(){

  removeClasses();
  //Delay is needed for showing flipping the cards back (reset back)
  setTimeout(function() {
  var upperCardsArray = Array.from(upperCards);
  var lowerCardsArray = Array.from(lowerCards);
  upperCardsArray.sort(function() { return 0.5 - Math.random(); });
  lowerCardsArray.sort(function() { return 0.5 - Math.random(); });
  for (var i = 0; i < upperCards.length; i++) {
    upperCardsContainer.appendChild(upperCardsArray[i]);
    lowerCardsContainer.appendChild(lowerCardsArray[i]);
  }
  $(".container__reset").fadeToggle();
  }, 500);
  }

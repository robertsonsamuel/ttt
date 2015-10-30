// and iffy imideatly invocket funtion
(function app(){
  'use strict';


  let documentReady = () =>{
    let lastMark;
    
    $('.box').on('click.mark',(event) => {

    let $e = $(event.target);

    if ($e.data('clicked')){
      return;
    }

    // if(lastMark === "X"){
    //   lastMark ="O";
    // }else{
    //   lastMark = "X";
    // }

    // lastMark = () ? if true : if false
    lastMark = (lastMark === 'X') ? 'O' : 'X'; 

    $e.text(lastMark);
    
    $e.off('clicked',true);
    });
  };

  $(documentReady);

 
})();
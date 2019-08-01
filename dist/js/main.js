"use strict";

document.addEventListener('DOMContentLoaded', function(){

    let pop_up = document.querySelector(".pop-up");

    //Appearance after 3 seconds
    function appear() {

        setTimeout(function() {
            pop_up.classList.toggle('visible');
            console.log('pop-up is visible');
        }, 3000);        
    }

    appear();

    //Close pop-up
    pop_up.addEventListener('click', function(e){
        let el = e.target;
        if (el.classList.contains("close") || el.classList.contains("pop-up") || el.classList.contains("pop-up__btn")) 
            {
                console.log("Element click");
                pop_up.classList.toggle('visible');
            }
    });
    document.addEventListener('keydown', function (e) {
        if (e.keyCode == 27) // press ESC
            {
                pop_up.classList.toggle('visible');
                console.log("ESC pressed");                
            }
      });
      
    

}); //DOMContentLoaded
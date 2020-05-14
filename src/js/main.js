$(document).ready(function () {
    $('i.fa-bars').click(function() { 
       $(this).toggleClass('fa-times');
       $('.respmenu ul').toggleClass('active');
    }); // end click
    
}); //end doc ready

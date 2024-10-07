$(document).ready(function(){
    $('.navbar a i.toggle').click(function(){
        $(this).toggleClass('fa-times')
        $('#header .navbar .navitems').toggleClass('open');
    });  
});
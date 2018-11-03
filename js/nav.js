$(document).ready(function(){
    
    $(".see").click(function(){
        $("nav").css("display","block");
        $("nav").animate({opacity:1}, '500');
    });
    
    $(".closebtn").click(function(){
        $("nav").animate({opacity:0}, '500');
        $("nav").css("display","none");
    });
    
});

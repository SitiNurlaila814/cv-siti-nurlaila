$(document).ready(function(){

// Toggle menu
$(".hamburger").click(function(){
    $(".menu").slideToggle();
});

// Load page function
function loadPage(page){
    $("#content").fadeOut(200,function(){
        $(this).load(page+".html",function(){
            $(this).fadeIn(200);
        });
    });
}

// Menu click
$(".menu a").click(function(){
    $(".menu a").removeClass("active");
    $(this).addClass("active");
    let page=$(this).data("page");
    loadPage(page);
    $(".menu").slideUp();
});

// Default load
loadPage("home");

});


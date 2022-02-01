$(function(){
    $(".en").on("click" , function(){
        $("html").attr("dir" , "ltr") ; 
        $("html").attr("lang" , "en") ; 
    }) ; 
    $(".ar").on("click" , function(){
        $("html").attr("dir" , "rtl") ; 
        $("html").attr("lang" , "ar") ; 
    }) ;
})
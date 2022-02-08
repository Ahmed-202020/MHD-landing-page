$(function(){
    $(".en").on("click" , function(){
        $("html").attr("dir" , "ltr") ; 
        $("html").attr("lang" , "en") ; 
    }) ; 
    $(".ar").on("click" , function(){
        $("html").attr("dir" , "rtl") ; 
        $("html").attr("lang" , "ar") ; 
    }) ;

    $('.owl-carousel').owlCarousel({
        loop: true,
        rtl:true,
        margin: 15,
        nav: true,
        responsive: {
            0: {
                items: 1 , 
                loop: true,
            },
            600: {
                items: 2 , 
                loop: true,
            },
            1000: {
                items: 6 , 
                loop: true,
            },
        }
    })
})

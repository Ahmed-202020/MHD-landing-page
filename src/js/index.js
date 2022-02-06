$(function(){
    $(".en").on("click" , function(){
        $("html").attr("dir" , "ltr") ; 
        $("html").attr("lang" , "en") ; 
    }) ; 
    $(".ar").on("click" , function(){
        $("html").attr("dir" , "rtl") ; 
        $("html").attr("lang" , "ar") ; 
    }) ;
    // $(".clients").owlCarousel({
    //     items : 10 , 
    //     margin : 10 , 
    //     // loop : true , 
    //     autoplay : true , 
    //     autoplayTimeout : 2000 , 
    //     autoplayHoverPause : true ,
    //     responsive: {
    //         0:{
    //             items:1 , 
    //             // nav : false  , 
    //             loop : true , 
    //         },
    //         600:{
    //             items:2 , 
    //             // nav : false , 
    //             // loop : true , 
    //         },
    //         1000:{
    //             items:3 , 
    //             // nav : false ,
    //             // loop : true , 
    //         }
            
    //     }
    // }) ;
    var arrow = document.getElementsByClassName("custom-btn") ; 
    var client = document.getElementsByClassName("client") ; 
    var r = 0 ; 

    arrow[0].onclick = () => {
        r++ ; 
        for(var i  of client ){
            if(r== 0){i.style.left = "0px" ; }
            if(r == 1){i.style.left = "-100px" ; }
            if(r == 2){i.style.left = "-200px" ; }
            if(r == 3){i.style.left = "-300px" ; }
            if(r == 4){i.style.left = "-400px" ; }
            if(r == 5){i.style.left = "-500px" ; }
            if(r == 6){i.style.left = "-600px" ; }
            if(r == 7){i.style.left = "-700px" ; }
            if(r == 8){i.style.left = "-800px" ; }
            if(r == 9){i.style.left = "-900px" ; }
            if(r >9){r=9 ; } 
        }
    }    

    arrow[1].onclick = () => {
        r-- ; 
        for(var i  of client ){
            if(r== 0){i.style.left = "0px" ; }
            if(r == 1){i.style.left = "-100px" ; }
            if(r == 2){i.style.left = "-200px" ; }
            if(r == 3){i.style.left = "-300px" ; }
            if(r == 4){i.style.left = "-400px" ; }
            if(r == 5){i.style.left = "-500px" ; }
            if(r == 6){i.style.left = "-600px" ; }
            if(r == 7){i.style.left = "-700px" ; }
            if(r == 8){i.style.left = "-800px" ; }
            if(r == 9){i.style.left = "-900px" ; }
            if(r < 0){r=0 ; }
        }
    }    
})


// var arrow = document.getElementsByClassName("custom-btn") ; 
// var client = document.getElementsByClassName("client") ; 
// var r = 0 ; 

// arrow[0].onclick = () => {
//     r++ ; 
//     for(var i  of client ){
//         if(r== 0){i.style.left = "0px" ; }
//         if(r == 1){i.style.left = "-100px" ; }
//         if(r == 2){i.style.left = "-200px" ; }
//         if(r == 3){i.style.left = "-300px" ; }
//         if(r == 4){i.style.left = "-400px" ; }
//         if(r == 5){i.style.left = "-500px" ; }
//         if(r == 6){i.style.left = "-600px" ; }
//         if(r == 7){i.style.left = "-700px" ; }
//         if(r == 8){i.style.left = "-800px" ; }
//         if(r == 9){i.style.left = "-900px" ; }
//         if(r >9){r=9 ; } 
//     }
// }    

// arrow[1].onclick = () => {
//     r-- ; 
//     for(var i  of client ){
//         if(r== 0){i.style.left = "0px" ; }
//         if(r == 1){i.style.left = "-100px" ; }
//         if(r == 2){i.style.left = "-200px" ; }
//         if(r == 3){i.style.left = "-300px" ; }
//         if(r == 4){i.style.left = "-400px" ; }
//         if(r == 5){i.style.left = "-500px" ; }
//         if(r == 6){i.style.left = "-600px" ; }
//         if(r == 7){i.style.left = "-700px" ; }
//         if(r == 8){i.style.left = "-800px" ; }
//         if(r == 9){i.style.left = "-900px" ; }
//         if(r < 0){r=0 ; }
//     }
// }    

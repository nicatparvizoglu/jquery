$(".accBtn").click(function(){
    $(".panel").slideUp();
    $(this).next().stop().slideToggle(300)
})

$(".tabBtn").click(function(){
    $(".tab-panel").removeClass("active")
    $(".tab-panel[tbPervin='tab"+$(this).index()+"']").addClass("active")



    // for(var tb of $(".tab-panel")){
    //     var tabindex=$(tb).index()
    //     if($(this).index()==tabindex){
    //         $(tb).addClass("active")
    
    //     }
    // }
   
})
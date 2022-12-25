//alert("imported");
$(function(){
    var finish=false;
    $("#main")
    .contextmenu(function(e){
       e.preventDefault();
       if($(".hiddenHint").length==0){
            if($(".letter").hasClass("hold")){
                $(".letter").removeClass("hold");
                $(".letter").addClass("free");
                $(".letter").css("background","none");
            }
            let word=$("#currentWord").text();
            switch(word){
                case "HAL":
                    if($('.hal.show').length==3){
                        $('.hal.show').addClass("flash")
                        .on("animationend", function(){$('.hal.show').removeClass('flash');});
                        $("#currentWord").addClass("horizontal-shake");
                    }
                    else if($(".hal").hasClass("hidden")){
                        $(".hal").removeClass("hidden");
                        $(".hal").addClass("show");
                    }
                    break;
                case "HALA":
                    if($('.hala.show').length==4){
                        $('.hala.show').addClass("flash")
                        .on("animationend", function(){$('.hala.show').removeClass('flash');});
                        $("#currentWord").addClass("horizontal-shake");
                    }
                    else if($(".hala").hasClass("hidden")){
                        $(".hala").removeClass("hidden");
                        $(".hala").addClass("show");
                    }
                    break;
                case "HALKA":
                    if($('.halka.show').length==5){
                        $('.halka.show').addClass("flash")
                        .on("animationend", function(){$('.halka.show').removeClass('flash');});
                        $("#currentWord").addClass("horizontal-shake");
                    }
                    else if($(".halka").hasClass("hidden")){
                        $(".halka").removeClass("hidden");
                        $(".halka").addClass("show");
                    }
                    break;
                case "AHLAK":
                    if($('.ahlak.show').length==5){
                        $('.ahlak.show').addClass("flash")
                        .on("animationend", function(){$('.ahlak.show').removeClass('flash');});
                        $("#currentWord").addClass("horizontal-shake");
                    }
                    else if($(".ahlak").hasClass("hidden")){
                        $(".ahlak").removeClass("hidden");
                        $(".ahlak").addClass("show");
                    }
                    break;
                case "HALK":
                    if($('.halk.show').length==4){
                        $('.halk.show').addClass("flash")
                        .on("animationend", function(){$('.halk.show').removeClass('flash');});
                        $("#currentWord").addClass("horizontal-shake");
                    }
                    else if($(".halk").hasClass("hidden")){
                        $(".halk").removeClass("hidden");
                        $(".halk").addClass("show");
                    }
                    break;    
                case "HAK":
                    if($('.hak.show').length==3){
                        $('.hak.show').addClass("flash")
                        .on("animationend", function(){$('.hak.show').removeClass('flash');});
                        $("#currentWord").addClass("horizontal-shake");
                    }
                    else if($(".hak").hasClass("hidden")){
                        $(".hak").removeClass("hidden");
                        $(".hak").addClass("show");
                    }
                    break;
                default: 
                    $("#currentWord").addClass("horizontal-shake");
                break;
            }
            if($(".show").length==19){
                $("#currentWord").fadeOut(function(){
                    $(this).text("TEBRİKLER!!");
                    $(".letter").off('click');
                    $("#hint").off('click');
                    $(".shuffle").off('click');
                    $(".show").addClass("infiniteflash");
                }).fadeIn(1000);
            }else{
                $("#currentWord").fadeOut(500);
            }
        }    
    })
    $("#currentWord")
    .on("animationend" , function(){
        $("#currentWord").removeClass("horizontal-shake");
    })
    $(".letter")
    .click(function(){
        if($(".hiddenHint").length==0){
            if($("#currentWord").css("display")=="none"){
                $(this).removeClass("free");
                $(this).addClass("hold");
                $(this).css("background-color", "rgba(255, 108, 230, 0.5)") ;
                let word=$(this).text();
                $("#currentWord").text(word);
                $("#currentWord").css("visibility","visible");
                $("#currentWord").fadeIn(0);
            }
            else{
                if($(this).hasClass("free")){
                    $(this).removeClass("free");
                    $(this).addClass("hold");
                    $(this).css("background-color", "rgba(255, 108, 230, 0.5)") ;
                    let word=$(this).text();
                    $("#currentWord").append(word);
                    $("#currentWord").css("visibility","visible");
                }else{
                    $(this).css("background-color", "rgba(255, 108, 230, 0.5)") ;
                    $(this).addClass("vertical-shake")
                        .on("animationend", function(){
                            $(this).removeClass('vertical-shake');
                        });
                }
            }
        }
    })
    .mouseenter(function(){
        if($(this).hasClass("free")){
            $(this).css("background-color", "rgba(0, 136, 255, 0.514)") ;
        }else{
            $(this).css("background-color", "rgba(255, 108, 230, 0.5)") ;
        }
    })
    .mouseleave(function(){
        if($(this).hasClass("free")){
            $(this).css("background","none");
        }else{
            $(this).css("background-color", "rgba(255, 108, 230, 0.5)") ;
        }  
    })

    $(".shuffle")
    .click(function(){
        if($(".hold").length==0){
            let arr=["H","A","L","A","K"];
            arr.sort(() => Math.random() - 0.5);
            $("#one").text(arr[0]);
            $("#two").text(arr[1]);
            $("#three").text(arr[2]);
            $("#four").text(arr[3]);
            $("#five").text(arr[4]);
        }else{
            $(this).addClass('horizontal-shake');
        }
    })
    .on("animationend", function(){
        $(this).removeClass('horizontal-shake');
    });

    $("#hint").click(function(){
        if($(".hold").length==0){
            $('.hidden').toggleClass("hiddenHint");
        }else{
            $("#hint").addClass("vertical-shake")
            .on("animationend", function(){
                $(this).removeClass('vertical-shake');
            });
        ;
        }
    })
    
})
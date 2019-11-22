$(document).ready(function(){   
    var intv = setInterval(function(){ nextAni(); }, 2950);
    function nextAni(){
        $(".banFrame").not(":animated").animate({"margin-left":"-1200px"}, 800, function(){
            $(".banFrame li").eq(0).appendTo($(".banFrame"));
            $(".banFrame").css("margin-left", "0px");
            $(".numBtn li").eq(0).appendTo($(".numBtn"));
            $(".numBtn li").eq(0).addClass("on");
            $(".numBtn li").not(":first-child").removeClass("on");
        });
    }
    function prevAni(){
        $(".banFrame li").eq(2).prependTo($(".banFrame"));
        $(".banFrame").css("margin-left", "-1200px");
        $(".banFrame").not(":animated").animate({"margin-left":"0px"}, 800);
        $(".numBtn li").eq(2).prependTo($(".numBtn"));
        $(".numBtn li").eq(0).addClass("on");
        $(".numBtn li").not(":first-child").removeClass("on");
    }
    $(".nextBtn").click(function(){
        clearInterval(intv);
        nextAni();
        intv = setInterval(function(){ nextAni(); }, 2950);
    });
    $(".prevBtn").click(function(){
        clearInterval(intv);
        prevAni();
        intv = setInterval(function(){ nextAni(); }, 2950);
    });
    $(".numBtn li").click(function(){
        clearInterval(intv);
        var idx = $(this).index()-1;
        for(var i=0;i<idx;i++){
            $(".banFrame li").eq(0).appendTo($(".banFrame"));
            $(".numBtn li").eq(0).appendTo($(".numBtn"));
        }
        nextAni();
        intv = setInterval(function(){ nextAni(); }, 2950);
    });
    $(".popOpenBtn").click(function(){
        $(".popBox").fadeIn(500); 
    });
    $(".closeBtn").click(function(){
        $(".popBox").fadeOut(500); 
    });
    $("#family").change(function(){
        var openVal = $(this).val();
        if(!openVal){
            return false;
        } else {
            window.open(openVal,"child", "width=screen.width, height=screen.height, top=0, left=0");
        } 
    });
});
$(document).ready(function(){
    var intv = setInterval(function() { nextAni(); }, 2800);
    function nextAni() {
        $(".ban_fr").not(":animated").animate({"margin-top":"-300px"}, 800, function(){
            $(".ban_fr li").eq(0).appendTo($(".ban_fr"));
            $(".ban_fr").css("margin-top", "0px");
        });
    }
    function prevAni(){
        $(".ban_fr li").eq(2).prependTo($(".ban_fr"));
        $(".ban_fr").css("margin-top", "-300px");
        $(".ban_fr").not(":animated").animate({"margin-top":"0px"}, 800);
    }
    $(".next_btn").click(function(){
        clearInterval(intv);
        nextAni();
        intv = setInterval(function() { nextAni(); }, 2800);
    });
    $(".prev_btn").click(function(){
        clearInterval(intv);
        prevAni();
        intv = setInterval(function() { nextAni(); }, 2800);
    });
    $(".pop_open_btn").click(function(){
       $(".pop_box").fadeIn(); 
    });
    $(".close_btn").click(function(){
       $(".pop_box").fadeOut(); 
    });

    $("#family").change(function(){
        var sr = $(this).val();
        if(!sr){
            return false;
        } else {    
            var win = window.open(sr, 'popSite', 'width=' + screen.width);
        }    
    });
});
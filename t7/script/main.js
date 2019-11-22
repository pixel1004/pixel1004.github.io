$(document).ready(function(){
    var intv = setInterval(function() { nextAni(); }, 2800);
    function nextAni() {
        $(".ban_fr").not(":animated").animate({"margin-top":"-300px"}, 800, function(){
            $(".ban_fr li").eq(0).appendTo($(".ban_fr"));
            $(".ban_fr").css("margin-top", "0px");
            $(".num_fr li").eq(0).appendTo($(".num_fr"));
            $(".num_fr li").eq(0).addClass("on");
            $(".num_fr li").not(":first-child").removeClass("on");
        });
    }
    function prevAni(){
        $(".ban_fr li").eq(2).prependTo($(".ban_fr"));
        $(".ban_fr").css("margin-top", "-300px");
        $(".ban_fr").not(":animated").animate({"margin-top":"0px"}, 800);
        $(".num_fr li").eq(2).prependTo($(".num_fr"));       
        $(".num_fr li").eq(0).addClass("on");
        $(".num_fr li").not(":first-child").removeClass("on");
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

    $(".num_fr li").click(function(){
        clearInterval(intv);        
        var idx = $(this).index() - 1;
        for(var i=0; i<idx;i++){
            $(".ban_fr li").eq(0).appendTo($(".ban_fr"));
            $(".num_fr li").eq(0).appendTo($(".num_fr"));
        }
        nextAni();
        intv = setInterval(function() { nextAni(); }, 2800);
    });

    $(".pop_open_btn").click(function(){
       $(".pop_box").addClass("on"); 
    });
    $(".close_btn").click(function(){
       $(".pop_box").removeClass("on"); 
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
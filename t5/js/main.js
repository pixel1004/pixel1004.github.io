$(document).ready(function(){
    $(".opener").click(function(){ //.opener를 클릭하면
       $("#tar").fadeIn();   //#tar를 보이게 한다.
    });
    $(".close").click(function(){ //.close를 클릭하면
       $("#tar").fadeOut();   //#tar를 숨긴다.
    });

    var intv=setInterval(function(){ nextAni(); }, 2900);

    //함수는 정의부로는 실행되지 않으며, 호출시에만 실행
    function nextAni(){ //nextAni()함수 : 다음 이미지 모션 정의
        $(".img_box").not(":animated").animate({"margin-left":"-1200px"}, 800, function(){
            $(".img_box li").eq(0).appendTo($(".img_box"));
            $(".img_box").css("margin-left", "0px");
        });
    }
    function prevAni(){
        $(".img_box li").eq(2).prependTo($(".img_box"));
        $(".img_box").css("margin-left", "-1200px");
        $(".img_box").not(":animated").animate({"margin-left":"0px"}, 800);
    }
    $(".left_btn").click(function(){
        clearInterval(intv);
        nextAni(); 
        intv=setInterval(function(){ nextAni(); }, 2900);
    });
    $(".right_btn").click(function(){
        clearInterval(intv);
        prevAni(); 
        intv=setInterval(function(){ nextAni(); }, 2900);
    });
    $(".tb_btn_box button").click(function(){
        var tar_idx = $(this).index();
        $(".tb_btn_box button").removeClass("on");
        $(this).addClass("on");
        $(".tb_con_box .tb_con").removeClass("on");
        $(".tb_con_box .tb_con").eq(tar_idx).addClass("on");
    });
});    
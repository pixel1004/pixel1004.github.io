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
        $(".img_box li").eq(0).appendTo($(".img_box"));
        $(".img_box li").eq(0).addClass("on");
        $(".img_box li").not(":first-child").removeClass("on");
    }
    function prevAni(){
        $(".img_box li").eq(2).prependTo($(".img_box"));
        $(".img_box li").eq(0).addClass("on");
        $(".img_box li").not(":first-child").removeClass("on");
    }
    $(".right_btn").click(function(){
        clearInterval(intv);
        nextAni(); 
        intv=setInterval(function(){ nextAni(); }, 2900);
    });
    $(".left_btn").click(function(){
        clearInterval(intv);
        prevAni(); 
        intv=setInterval(function(){ nextAni(); }, 2900);
    });
});    
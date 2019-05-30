$(document).ready(function(){
    var intv = setInterval(function() { nextAni(); }, 2800);
    
    function nextAni(){ //nextAni()함수 : 다음 이미지 모션 정의
        $(".ban_frame li").eq(0).appendTo($(".ban_frame"));
        $(".ban_frame li").eq(0).addClass("on");
        $(".ban_frame li").not(":first-child").removeClass("on");
    }
    function prevAni(){
        $(".ban_frame li").eq(2).prependTo($(".ban_frame"));
        $(".ban_frame li").eq(0).addClass("on");
        $(".ban_frame li").not(":first-child").removeClass("on");
    }
    
    $(".pop_open_btn").click(function(){
       $(".pop_box").fadeIn(); 
    });
    $(".close_btn").click(function(){
       $(".pop_box").fadeOut(); 
    });
});
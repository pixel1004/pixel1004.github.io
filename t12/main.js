$(document).ready(function(){
    var intv=setInterval(function(){ nextAni(); }, 2900);

    //함수는 정의부로는 실행되지 않으며, 호출시에만 실행
    function nextAni(){ //nextAni()함수 : 다음 이미지 모션 정의
        $(".img_box").not(":animated").animate({"margin-left":"-800px"}, 500, function() { 
			$(".img_box li").eq(0).appendTo($(".img_box"));
        	$(".img_box li").eq(0).addClass("on");
        	$(".img_box li").not(":first-child").removeClass("on");
			$(".img_box").css("margin-left", "0px");
		});
    }
    function prevAni(){
        $(".img_box li").eq(2).prependTo($(".img_box"));
		$(".img_box").css("margin-left", "-800px");
 		$(".img_box").not(":animated").animate({"margin-left":"0px"}, 500);
        $(".img_box li").eq(0).addClass("on");
        $(".img_box li").not(":first-child").removeClass("on");
    }
    $(".next").click(function(){
        clearInterval(intv);
        nextAni(); 
        intv=setInterval(function(){ nextAni(); }, 2900);
    });
    $(".prev").click(function(){
        clearInterval(intv);
        prevAni(); 
        intv=setInterval(function(){ nextAni(); }, 2900);
    });
    $("#family").change(function(){
        var th = $(this).val();
        if(!th){
            return false;
        } else {
            window.open(th, "child", "width=screen.width, height=screen.height, top=0, left=0");
        }
    });
});    
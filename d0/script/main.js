$(document).ready(function(){//문서가 준비되면 실행
   //setInterval(반복함수 ) 2.9초마다 ani()라는 함수 실행
    var intv = setInterval(function(){ ani();  }, 2900);
    function ani() {
       //.ban의  margin:0에서 margin-left":"-1200px"으로 0.8초동안 이동해라
       $(".ban").animate({"margin-left":"-1200px"}, 800, 
          function(){ 
           //0번째(첫이미지)는  .ban의 마지막으로 
            $(".ban li").eq(0).appendTo($(".ban")); 
           //원래 마진이 0으로 설정(안그러면 3번이미지가 보여지므로)
            $(".ban").css("margin-left","0px");
       });
    }
});
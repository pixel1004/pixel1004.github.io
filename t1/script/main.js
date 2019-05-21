//문서가 준비되면 실행
$(document).ready(function(){
    //2.9초마다 ani() 함수를 실행
    var intv = setInterval(function(){ ani();  }, 2900);
    function ani() {
       //.ban 상단 마진을 -300으로 0.8초 동안 이동하는 애니메이션 실행
       $(".ban").animate({"margin-top":"-300px"}, 800, 
          function(){  //애니메이션 실행 후에 동작 내용
            //첫 이미지를 마지막으로
            $(".ban li").eq(0).appendTo($(".ban"));  
            //원래 상단 마진인 0으로 설정(안그러면 세 번째 이미지가 보여지므로)
            $(".ban").css("margin-top","0px");
       });
    }
});
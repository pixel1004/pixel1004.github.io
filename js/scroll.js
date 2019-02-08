$(function(){
    $('html,body').animate({scrollTop:'0'});//제일 상단페이지부터 시작하게 실행.초기값 :0
    
    $('a.menu1,a.menu_btn1').on('click',function(){
       $('html,body').animate({scrollTop:'0'},1000);
        $('a').removeClass('select1');
        $('a.menu_btn1').addClass('select1');
        $('a').removeClass('select');
        $('a.menu1').addClass('select');
        return false;
    });
    
    $('a.menu2,a.menu_btn2').on('click',function(){
       $('html,body').animate({
           scrollTop:$('#menu2').offset().top
       },1000);
        $('a').removeClass('select1');
        $('a.menu_btn2').addClass('select1');
        $('a').removeClass('select');
        $('a.menu2').addClass('select');
        return false; 
    });
    $('a.menu3,a.menu_btn3').on('click',function(){
       $('html,body').animate({
           scrollTop:$('#menu3').offset().top
       },1000);
        $('a').removeClass('select1');
        $('a.menu_btn3').addClass('select1');
        $('a').removeClass('select');
        $('a.menu3').addClass('select');
        return false;  
    });
    
    $('a.menu4,a.menu_btn4').on('click',function(){
        $('html,body').animate({
           scrollTop:$('#menu4').offset().top
       },1000);
        $('a').removeClass('select1');
        $('a.menu_btn4').addClass('select1');
        $('a').removeClass('select');
        $('a.menu4').addClass('select');
        return false; 
    });
    
    
    
    
});
//animate(),scrollTop(),offset(),addClass(),removeClass(),return false
//scrollTop():요소를 스크롤할 경우에 해당되는 요소가 세로방향으로 얼마나 스크롤 되었는지 확인하는 메소드
//offset():제이쿼리 객체에 포함된 요소의 웹페이지상에 있는 위치를 얻는 메소드
//offset().top-->웹페이지 상단에서부터의 거리.offset().left:웹페이지 왼쪽 가장자리로부터의 거리
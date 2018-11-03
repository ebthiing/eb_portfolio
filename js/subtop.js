$(document).ready(function(){
    
    $("html,body").stop().animate({"scrollTop":0},1000, 'easeOutQuad');
    //변수 ht에 브라우저의 높이값을 저장
    var ht = $(window).height();	
    //브라우저의 높이값을 #subTop의 높이값으로 지정
    $("#subTop").height(ht);

    //브라우저가 리사이즈 될 때마다 브라우저와 section의 높이값을 갱신
    $(window).on("resize",function(){
        var ht = $(window).height();	
        $("#subTop").height(ht);
    });	
    
    $(".con").on("mousemove",function(e){		

        //변수 posX에 마우스 커서의 x축 위치 저장
        var posX= e.pageX;
        //변수 posY에 마우스 커서의 y축 위치 저장
        var posY= e.pageY;

        $(".move1").css({'right':6-(posX/1000)+'%' , 'top':12-(posY/1000)+'%' }); //나누는 값이 작아질수록 움직임이 커짐
        $(".move2").css({'left':0-(posX/1000)+'%' , 'top':70-(posY/1000)+'%' });
        $(".move3").css({'right':6-(posX/1000)+'%' , 'top':12-(posY/1000)+'%' }); //나누는 값이 작아질수록 움직임이 커짐
        $(".move4").css({'left':0-(posX/1000)+'%' , 'top':70-(posY/1000)+'%' });
        $(".move5").css({'right':10-(posX/3000)+'%' , 'top':10-(posY/3000)+'%' }); //나누는 값이 작아질수록 움직임이 커짐
        $(".move6").css({'right':5-(posX/900)+'%' , 'top':18-(posY/900)+'%' });
        $(".move7").css({'left':5-(posX/1000)+'%' , 'top':75-(posY/1000)+'%' }); //나누는 값이 작아질수록 움직임이 커짐
        $(".move8").css({'left':3-(posX/1000)+'%' , 'top':12-(posY/1000)+'%' });
        $(".move9").css({'right':5-(posX/1000)+'%' , 'top':75-(posY/1000)+'%' });
        
        
    });
    
    $("#subTop").on("mousewheel",function(event,delta){    

        //마우스 휠을 내렸을때	
        if (delta < 0) {  
            $('html, body').animate({
                scrollTop: $('#subCon').offset().top
            }, 1000).clearQueue();
        }
    });
    

    $(window).on("scroll",function(){ 

        //변수 ht에 현재 브라우저의 높이값 저장
        //var ht = $(window).height();

        //변수 scroll에 현재 문서가 스크롤된 거리 저장
        var scroll = $(window).scrollTop();
       
        //console.log(scroll);

        if(scroll>=700){
            $('a.prev').css('opacity', '1');
            $('a.next').css('opacity', '1');
            $('#logo a').css('color','#333');
            $('.see').css('color','#333');
        }if(scroll<700){
            $('a.prev').css('opacity', '0');
            $('a.next').css('opacity', '0');
            $('#logo a').css('color','');
            $('.see').css('color','');
        }
    }); 



});
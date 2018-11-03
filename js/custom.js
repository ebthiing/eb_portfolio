$(document).ready(function(){
    $("body").css({overflow:'hidden'}).bind('touchmove', function(e){e.preventDefault()});
    
    $("html,body").stop().animate({"scrollTop":0},1000, 'easeOutQuad');
    //변수 ht에 브라우저의 높이값을 저장
    var ht = $(window).height();	
    //브라우저의 높이값을 section의 높이값으로 지정
    $("section").height(ht);

    //브라우저가 리사이즈 될 때마다 브라우저와 section의 높이값을 갱신
    $(window).on("resize",function(){
        var ht = $(window).height();	
        $("section").height(ht);
    });	

    var i=0;
    
    //메뉴 버튼 클릭시
    $("#page li").on("click",function(e){
        e.preventDefault();
        //변수 ht에 브라우저의 높이값 저장
        var ht = $(window).height();

        //변수 i에 현재 클릭한 li의 순서값을 저장
        i = $(this).index(); // 0 1 2 3 4 5

        //브라우저의 높이값*박스의 순서값은 현재 박스의 스크롤 위치값과 동일
        var nowTop = i*ht;			

        //해당 스크롤 위치값으로 문서를 이동
        $("html,body").stop().animate({"scrollTop":nowTop},1000, 'easeOutQuad');      
    });
    
    $('.arrow .b1').click(function(){
        
        var ht= $(window).height();
       
        if(i>0){
            i--;  
            var up=(i)*ht;
        
            $("html,body").stop().animate({"scrollTop":up},1000, 'easeOutQuad');
           
        }
    });
    
    $('.arrow .b2').click(function(){
        
        var ht= $(window).height();

        if(i<5){
            i++;  
            var down=(i)*ht;

            $("html,body").stop().animate({"scrollTop":down},1000, 'easeOutQuad');
        }
    });
    

    $(window).on("scroll",function(){	

        //변수 ht에 현재 브라우저의 높이값 저장
        var ht = $(window).height();

        //변수 scroll에 현재 문서가 스크롤된 거리 저장
        var scroll = $(window).scrollTop();
        
        if(scroll==0){
            $('.arrow .b1').css('opacity',.5);
        }else{
            $('.arrow .b1').css('opacity',1);
        }
        
        if(scroll>ht*4){
            $('.arrow .b2').css('opacity',.5);
        }else{
            $('.arrow .b2').css('opacity',1);
        }
         

        for(var i=0; i<6;i++){
            if(scroll>=ht*i && scroll< ht*(i+1)){
                $("#page li").removeClass();
                $("#page li").eq(i).addClass("on");
            };
        } 
    });
    
    //section위에서 마우스 휠을 움직이면
    $("section").on("mousewheel",function(event,delta){    


        //delta: 양수값(휠을 올렸을때)/ 음수값(휠을 내렸을때)

        //마우스 휠을 올렸을때	
        if (delta > 0) {  
            
            //변수 prev에 현재 휠을 움직인 section에서 이전 section의 offset().top위치 저장
            var prev = $(this).prev().offset().top;  //this(section)의 바로 이전 태그를 .prev()메소드로 잡는다.
            //.offset().top : 위에서부터의 높이를 계산
            //문서 전체를 prev에 저장된 위치로 이동
            $("html,body").stop().animate({"scrollTop":prev},1000, 'easeOutQuad');
            
            if(i>0) i--;

            //마우스 휠을 내렸을때	 
        }else if (delta < 0) {  
            
            //변수 next에 현재 휠을 움직인 section에서 다음 section의 offset().top위치 저장
            var next = $(this).next().offset().top;
            //문서 전체를 next에 저장된 위치로 이동
            $("html,body").stop().animate({"scrollTop":next},1000, 'easeOutQuad'); 

            if(i<5) i++; 

        }  

    });
   
    
});



// PRELOADER

//===============================================================



$(window).on('load', function () {

    var $preloader = $('#page-preloader'),

        $spinner   = $preloader.find('.spinner');

    $spinner.fadeOut();

    $preloader.delay(100).fadeOut('slow');

	

	



});









jQuery(document).ready(function(){

	

$('.str0').css('stroke','red');

// ALIGN

//===============================================================	

var height_va, width_ha; var workheight; 

Align();

$(window).on('resize load ready', Align);

function Align(){

// vertical align

//===============================================================

$(".main-menu, .resolution, .align-v, .align-all").each(function(){

	height_va = '-'+$(this).outerHeight()/2+'px';

	$(this).css({ top:'50%', marginTop:height_va});

	});

// horisontal align

//===============================================================	

$(".resolution, .align-h, .align-all, #ravslider ol li").each(function(){

	width_ha = $(this).innerWidth()/2;

	$(this).css({ left:'50%', marginLeft:'-'+width_ha+'px'});

	});

	

$(".menu-vis").removeClass('menu-vis-mobile');

}









// SLIDER

//===============================================================

var slideNum = 0, slideTime, slidesnumb, slideactive, eventindex;

var slider = $('#ravslider');

var slides = $('#ravslider ol'); 

var slidespages = $('#ravslider ul');

var hwSlideSpeed = 900;

var hwTimeOut = 6000;

var hwNeedLinks = true;



    slides.hide().eq(0).show();

    slideCount = slides.size();

    var animSlide = function(arrow){

        clearTimeout(slideTime);

        slides.eq(slideNum).fadeOut(hwSlideSpeed);

        if(arrow == "next"){

            if(slideNum == (slideCount-1)){slideNum=0;}

            else{slideNum++}

            }

        else if(arrow == "prew")

        {

            if(slideNum == 0){slideNum=slideCount-1;}

            else{slideNum-=1}

        }

        else{

            slideNum = arrow;

            }

        slides.eq(slideNum).fadeIn(hwSlideSpeed, rotator).each(Align);

        $(".control-slide a.active").removeClass("active");

        $('.control-slide a').eq(slideNum).addClass('active');

        }

if(hwNeedLinks){

var $linkArrow = $('<div class="arrows-nav align-h"><a class="prew" href="#"></a><a class="next" href="#"></a></div>')

    .prependTo('#ravslider');      

    $('.next').click(function(){

        animSlide("next");

		Align();

 		return false;

        })

    $('.prew').click(function(){

        animSlide("prew");	

		Align();

		return false;

        })

}

    var $adderSpan = '';

    slides.each(function(index) {

            $adderSpan += '<li class="control-slide" role='+index+'><a href="#" title=""></a></li>';

        });

    slidespages.html($adderSpan)

    $(".control-slide:first a").addClass("active");

     

    $('.control-slide').click(function(){

    var goToNum = parseFloat($(this).attr('role'));

    animSlide(goToNum);

	return false;

    });

    var pause = false;

    var rotator = function(){

    if(!pause){slideTime = setTimeout(function(){animSlide('next')}, hwTimeOut);}

            }

    slider.hover(    

        function(){clearTimeout(slideTime); pause = true;},

        function(){pause = false; rotator();

        });

    rotator();	

	







$(".btn-menu-vis").click(function(){

	$(".menu-vis").toggleClass('menu-vis-mobile');

	$(".calc-header .languages").toggleClass('languages-vis-l');

	$(".btn-calc-body").toggleClass('btn-calc-body-mob');

	return false;



});







// UP

//===============================================================

$('.btn-footer-scroll-top').click(function() {  

    $('body,html').animate({scrollTop:0},800);  

    return false;  

  }); 









// BUTTONS SUBMIT TEST

//===============================================================

$('.btn-mail-submit').click(function() {  

    $('.window-pop-up').fadeIn(300).children('.window-frame').animate({top:'40%'},300);  

    return false;  

  }); 





$('.btn-close').click(function() {  

    $(this).parents('.window-pop-up').children('.window-frame').animate({top:'35%'},300).parent('.window-pop-up').fadeOut(300);  

    return false;  

  }); 





$(document).click(function(event) {

   // if ($(event.target).closest(".window-frame").length) return;

    $(".window-pop-up").children('.window-frame').animate({top:'35%'},300).parent('.window-pop-up').fadeOut(300);

   // event.stopPropagation();

});







// ВЫДЕЛЕНИЕ

//===============================================================

function preventSelection(element){

  var preventSelection = false;



  function addHandler(element, event, handler){

    if (element.attachEvent) 

      element.attachEvent('on' + event, handler);

    else 

      if (element.addEventListener) 

        element.addEventListener(event, handler, false);

  }

  function removeSelection(){

    if (window.getSelection) { window.getSelection().removeAllRanges(); }

    else if (document.selection && document.selection.clear)

      document.selection.clear();

  }

  function killCtrlA(event){

    var event = event || window.event;

    var sender = event.target || event.srcElement;



    if (sender.tagName.match(/INPUT|TEXTAREA/i))

      return;



    var key = event.keyCode || event.which;

    if (event.ctrlKey && key == 'A'.charCodeAt(0))  // 'A'.charCodeAt(0) можно заменить на 65

    {

      removeSelection();



      if (event.preventDefault) 

        event.preventDefault();

      else

        event.returnValue = false;

    }

  }



  // не даем выделять текст мышкой

  addHandler(element, 'mousemove', function(){

    if(preventSelection)

      removeSelection();

  });

  addHandler(element, 'mousedown', function(event){

    var event = event || window.event;

    var sender = event.target || event.srcElement;

    preventSelection = !sender.tagName.match(/INPUT|TEXTAREA/i);

  });



  // борем dblclick

  // если вешать функцию не на событие dblclick, можно избежать

  // временное выделение текста в некоторых браузерах

  addHandler(element, 'mouseup', function(){

    if (preventSelection)

      removeSelection();

    preventSelection = false;

  });



  // борем ctrl+A

  // скорей всего это и не надо, к тому же есть подозрение

  // что в случае все же такой необходимости функцию нужно 

  // вешать один раз и на document, а не на элемент

  addHandler(element, 'keydown', killCtrlA);

  addHandler(element, 'keyup', killCtrlA);

}



























window.addEventListener('DOMContentLoaded', function() {
				new QueryLoader2(document.querySelector("body"), {
					barColor: "#fff",
					//backgroundColor: "#ff007e",
					percentage: true,
					fadeOutTime:300,
					barHeight: 1,
					minimumTime: 10,
					fadeOutTime: 30,
					onProgress: function() {
						var wow = new WOW(
							  {
								boxClass:     'wow',      // animated element css class (default is wow)
								animateClass: 'animated', // animation css class (default is animated)
								mobile:       false,       // trigger animations on mobile devices (default is true)
							  });
						wow.init();
						
						
						$('.bg-anim').imagefit({
							valign : 'middle'
						});
						
						$('.bg-anim').delay(200).animate({ opacity: 1.0},1200);
						$('.video_mask').delay(100).animate({ opacity: 1.0,},300);
						}
					
						
						
				});
				
			});
		
        	preventSelection(document);




			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
			
			  ga('create', 'UA-67536718-1', 'auto');
			  ga('send', 'pageview');




}); // end 



// IMAGE FIT

//===============================================================

$(window).load(function() {

	$('.bg-anim').imagefit({

		valign : 'middle'

	});

	//$('.image-100').imagefit();

	});

	

$( window ).resize(function() {

  	$('.bg-anim').imagefit({

 	valign : 'middle'

 	});

});
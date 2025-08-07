'use strict';

//headerFix
  var scrollTop =0;  
  headerFix();
  
   $(window).on('scroll' ,function (){
      headerFix();
   });  
  function headerFix() {
     scrollTop = $(document).scrollTop();   
    $('header').addClass('on');
    $('.logoimg').attr("src", 'asset2019/img/logo2.png');
    $('div.fast').addClass('on');
    $('div.fastM').addClass('on');
    $('.goTop').addClass('on');
    if (scrollTop < 150) {
        $('header').removeClass('on');
        $('.logoimg').attr("src", 'asset2019/img/logo.png');
        $('section.hana').removeClass('on');
        $('div.fast').removeClass('on');
        $('div.fastM').removeClass('on');
        $('.goTop').removeClass('on');
    }
  }  

//gnb 밑줄
$(function() {
    setGnb();
    function setGnb() {
        $('.gnb li > a').on('mouseenter focus', function() {
            var offsetLeft = $(this).position().left;
            var width = $(this).width();
            $('span.bar').css({'left': offsetLeft + 'px', 'width': width + 'px', 'opacity': 1});
        });
        $('.gnb li > a').on('mouseleave', function() {
            $('span.bar').css({'left': 0, 'width': 0, 'opacity': 0});
        });
    }
});

//scroll 이벤트
	$(function() {
		var scrollTop = 0;
		scrollTop = $(document).scrollTop();
		ani('section.hana, section.portfolio .list ,section.sevice .title ,section.sevice .iconBox, section.sevice .tech, section.sevice .location, section.vision .hanaIcon, section.history .inner .box.a, section.marketing .inner > ul li, section.digital .inner, section.app ul, section.solutionB .box, article.tabInner > div , section.hochiminh , section.hochiminh ul li, section.hochiminhB, section.hochiminhC, section.hochiminhC ul li');

		$(window).on('scroll resize', function() {
			scrollTop = $(document).scrollTop();
            ani('section.hana, section.portfolio .list ,section.sevice .title ,section.sevice .iconBox, section.sevice .tech, section.sevice .location, section.vision .hanaIcon, section.history .inner .box.a, section.marketing .inner > ul li, section.digital .inner, section.app ul, section.solutionB .box, article.tabInner > div , section.hochiminh , section.hochiminh ul li, section.hochiminhB, section.hochiminhC, section.hochiminhC ul li');
		});

		function ani(selector) {
				$(selector).each(function() {
						var $selector = $(this);
						var minShow = $selector.offset().top - $(window).height();
						var maxShow = $selector.offset().top + $selector.outerHeight();
				        //$selector.removeClass('down on up');
						if (scrollTop < minShow) {
								$selector.addClass('down');
						} else if (scrollTop > maxShow) {
								$selector.addClass('up');
						} else {
								$selector.addClass('on');
						}
				});
		}
	});

//count
$(function() {
    scrollCounting('ul.counting li .a', 37, 1000);     
	scrollCounting('.count.b', 1, 1000);
	scrollCounting('.count.c', 3, 1000);
    scrollCounting('.count.d', 1, 1000);

    function scrollCounting(selector, step, duration) {
        $(selector).each(function() {
            var scrollTop = $(document).scrollTop();
            var $selector = $(this);
            var target = Number($selector.text());
            var numNow = 0;
            var numNowComma = '';
            var countStep = step;
            var timerSpeed = Math.round(duration / (target / countStep));
            var isCounting = false;

            checkVisibility();

            $(window).on('scroll resize', function() {
                scrollTop = $(document).scrollTop();
                checkVisibility();
            });

            function checkVisibility() {
                var minShow = $selector.offset().top - $(window).height();
                var maxShow = $selector.offset().top + $selector.outerHeight();
                if (scrollTop >= minShow && scrollTop <= maxShow) {
                    if (isCounting === false) {
                        isCounting = true;
                        addNumber();
                    }
                } else {
                    numNow = 0;
                }
            }

            function addNumber() {
                numNow += countStep;
                if (numNow >= target) {
                    numNow = target;
                    numNowComma = numNow.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    $selector.text(numNowComma);
                    isCounting = true;
                } else {
                    numNowComma = numNow.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    $selector.text(numNowComma);
                    setTimeout(function() {addNumber();}, timerSpeed);
                }
            }
        });
    }
});

//sideBar
$(function() {
    setGnb();
    function setGnb() {
        $('aside.sideBar .open').on('click', function() {
				$('div.fast aside.sideBar .open').find('p').text(function(i, text){
					 return text === "열기" ? "닫기" : "열기";
				})
            $(this).toggleClass('on');
            $('aside.sideBar').toggleClass('on');
        });
        $('aside.sideBar .close, section').on('click', function() {
			$('aside.sideBar .open').removeClass('on');
            $('div.fast aside.sideBar .open').find('p').text('열기');
            $('aside.sideBar').removeClass('on');
			$('.fastVeiwInner').slideUp(100);
        });
    }
});
//sideBar CheckBox
$(function() {
    checkBox();
    function checkBox() {
        // 진입시 상태를 체크하여 표시
        $('input[type=checkbox]').each(function() {
            if ($(this).prop('checked') === true) {
                $(this).next().find('span.check').addClass('on');
            } else {
                $(this).next().find('span.check').addClass('off');
            }
        });

        // 변화시 상태 반영
        $('input[type=checkbox]').on('change', function() {
            $('input[type=checkbox]').each(function() {
                $(this).next().find('span.check').removeClass('on off');
                if ($(this).prop('checked') === true) {
                    $(this).next().find('span.check').addClass('on');
                } else {
                    $(this).next().find('span.check').addClass('off');
                }
            });
        });
    }
});


//모바일gnb open
$(function() {
    moGnb();
    function moGnb() {
        $('header .moGnb').on('click', function() {
            $('nav.mo').addClass('on');
            $('nav.mo .gnb li a').removeClass('on');
            $('body').addClass('on');
        });
        $('nav.mo .close').on('click', function() {
            $('nav.mo').removeClass('on');
            $('body').removeClass('on');
        });
        $('section').on('click', function() {
            $('nav.mo').removeClass('on');
            $('body').removeClass('on');
        });
    }
});

//company History 이벤트
$(function() {
    $('section.history .inner .year li  a').on('click', function(){
       var index = $('section.history .inner .year li  a').index($(this));
       $('section.history .inner .box').removeClass('on');
       $('section.history .inner .box:eq(' + index + ')').addClass('on');
       $('section.history .inner .year li  a').removeClass('on');   
       $(this).addClass('on');       
    });
});

//컴퍼니 스크롤이동 이벤트

$(function() {            
    $('.topCont .scroll li a').on('click', function() {
        var index = $('.topCont .scroll li a').index($(this));
        var top = $('section:eq(' + (index + 2) + ') ').offset().top;
        $('html, body').animate( { scrollTop : (top - 80) }, 400 );  
    });     
});  

//서비스 스크롤이동 이벤트
$(function() {            
    $('.topScroll .scroll li a:eq(0), .topScroll .scroll li a:eq(1), .topScroll .scroll li a:eq(2)').on('click', function() {
        var top = $('section:eq(2)').offset().top;
        $('html, body').animate( { scrollTop : (top + 30) }, 400 );  
    });
    $('.topScroll .scroll li a:eq(3)').on('click', function() {
        var top = $('section:eq(3)').offset().top;
        $('html, body').animate( { scrollTop : (top - 80) }, 400 );  
    }); 
    $('.topScroll .scroll li a:eq(4)').on('click', function() {
        var top = $('section:eq(4)').offset().top;
        $('html, body').animate( { scrollTop : (top - 80) }, 400 );  
    });  
    $('.topScroll .scroll li a:eq(5)').on('click', function() {
        var top = $('section:eq(5)').offset().top;
        $('html, body').animate( { scrollTop : (top - 80) }, 400 );  
    });  
});  

//위로가기
$(function() { 
	$( '.goTop' ).click( function() {
		$( 'html, body' ).animate( { scrollTop : 0 }, 300 );
		return false;
	});
});

//컨택자세히보기 팝업창
$(function() {
    $('section.contact .form-box .inner > div.bottomBox a').on('click', function(){
        var index = $('section.contact .form-box .inner > div.bottomBox a').index($(this));
        $('.veiwInner:eq(' + index + ')').slideToggle(300);
    });
});

//사이드바세히보기 팝업창
$(function() {
    $('aside.sideBar .view').on('click', function(){
        $('.fastVeiwInner').slideToggle(150);
    });
});

//포트폴리오 텝메뉴
$(function() {
    $('article.tabMenu ul li a').on('click', function(){
        $('article.tabMenu ul li a').removeClass('on');
		$('this').addClass('on');
    });
});

//하나애드 호치민영상
$(function() {
    $('section.hochiminh ul li .video').on('click', function(){
        var index = $('section.hochiminh ul li .video').index($(this));
		$('.videoBox .inVideo video').slideUp(0);
        $('.videoBox .inVideo video:eq(' + index + ')').slideToggle(300);
        $('.videoBox').slideDown(250);
    });
	$('.videoBox .close').on('click', function(){
		$('.videoBox').slideUp(0);
    });
});
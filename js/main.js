$(function () {
  AOS.init();
  // *헤더 마우스 오버시, 메뉴 
  $('header').hover(function () {
    //마우스오버
    $('header').addClass('white');
  }, function () {
    //마우스땠을때,
    var curr = $(window).scrollTop();
    if (curr == 0) {
      $('header').removeClass('white');
    }
  })


  $(window).scroll(function () {
    var curr = $(window).scrollTop();
    if (curr > 0) {
      $('header').addClass('white');
    } else {
      $('header').removeClass('white');
    }
  });

  $('.gnb>li').hover(function () {
    $(this).find('.sub_wrap').addClass('show');
  }, function () {
    $('.gnb .sub_wrap').removeClass('show');
  })


  $('.all_btn').click(function () {
    $(this).toggleClass('on');
    $('header').toggleClass('active');
    $('.all_menu').slideToggle();
  })

  // 메인비주얼







  $('.close').click(function (e) { //이벤트
    e.preventDefault(); //링크이동막기
    // $('.menu').animate({left:0},500)
    $('.top_info').toggleClass('on')
  })

  $('.close a').click(function () {
    $(this).toggleClass('on');
  })

  $('.title_box').click(function (e) { //이벤트
    e.preventDefault(); //링크이동막기
    // $('.menu').animate({left:0},500)
    $('.bottom_info').toggleClass('on')
  })

  //하단 모션
  var guage = gsap.to('.bar', 10, {
    width: 100 + '%',
    ease: 'none',
    onComplete: function () {
      mainSlide.slideNext();
    }
  })
  guage.pause();


  var mainSlide = new Swiper(".main_swiper", {
    loop: true,
    parallax: true, //시차적용
    speed: 1300,

    navigation: {
      nextEl: ".main_swiper .next",
      prevEl: ".main_swiper .prev",
    },
    on: {
      init: function () { //초기세팅
        // this.activeIndex();
        // alert(this.realIndex); //고유인덱스
        total = $('.sc_visual .swiper-slide').length - 2;
        $('.sc_visual .curr').text(this.realIndex + 1);
        $('.sc_visual .total').text(total);
        guage.play();
      },
      slideChange: function () {
        $('.sc_visual .curr').text(this.realIndex + 1);
        guage.restart(); //재시작
      }
    }
  });

  //일시 정지 재생
  $('.main_swiper .state').click(function(e){
    e.preventDefault();

    if($('.state .pause').hasClass('on')  ){
      guage.pause();
      $('.state .pause').removeClass('on')
      $('.state .play').addClass('on')

    }else {
      guage.resume();
      $('.state .pause').addClass('on')
      $('.state .play').removeClass('on')

    }
  })

 

  //사업소개

  $('.sc_business li').mouseover(function(){
    var idx = $(this).index()+1; //태그의 순서가져온거
    $('.sc_business .wrap').removeClass('bg01 bg02 bg03 bg04').addClass('bg0'+idx);
    $(this).addClass('on').siblings().removeClass('on')
  })

  //분양안내
  var swiper = new Swiper(".info_swiper", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      prevEl: ".sc_info .prev",
      nextEl: ".sc_info .next",
    },
  });


  //   $('.gnb .dept').click(function (e) {
  //     e.preventDefault();
  //     if ($(this).siblings('.sub_wrap').hasClass('active')) { //열려있는경우
  //         $('.gnb .sub_wrap').removeClass('active');
  //         $('.gnb .dept').removeClass('on')
  //     } else { //첫클릭
  //         $('.sub_wrap').removeClass('active');
  //         $(this).siblings('.sub_wrap').addClass('active')
  //         $('.gnb .dept').removeClass('on')
  //         $(this).addClass('on')
  //     }
  // });
  //       $('.close').click(function(e){ //이벤트
  //         e.preventDefault(); //링크이동막기
  //         // $('.menu').animate({left:0},500)
  //         $('.top_info').addClass('on')
  //       })
  //       $('.close').click(function(e){
  //         e.preventDefault();
  //         // $('.menu').animate({left:-100+'%'},500)
  //         $('.top_info').removeClass('on')
  //       })
  //     var swiper = new Swiper(".main_swiper", {
  //         autoplay: {
  //           delay: 3000,
  //         },
  //         loop: true,
  //         on: {
  //           init:function(){//초기세팅
  //             // this.activeIndex();
  //             // alert(this.realIndex); //고유인덱스
  //             total = $('.sc_visual .swiper-slide').length -2;
  //             $('.sc_visual .curr').text(this.realIndex+1);
  //             $('.sc_visual .total').text(total);
  //           },
  //           slideChange:function(){
  //             $('.sc_visual .curr').text(this.realIndex+1);
  //           }
  //         }
  //     });
  //     $('.main_swiper .pause').click(function(e){
  //       e.preventDefault();
  //       $(this).hide();
  //       $('.main_swiper .play').css({display:'block'});
  //       sc_visual.autoplay.stop();
  //   }) 
  //   $('.play').click(function(e){
  //       e.preventDefault();
  //       $(this).hide();
  //       $('.pause').css({display:'block'});
  //       sc_visual.autoplay.start();
  //   }) 

      var swiper = new Swiper(".sc_info .info_swiper", {
          loop: true,
          slidesPerView: 3,
          spaceBetween: 30,
          navigation: {
            prevEl: ".sc_info .prev",
            nextEl: ".sc_info .next",
          },
        });
        var swiper = new Swiper(".perfor .perslide", {
          loop: true,
          slidesPerView: 3,
          spaceBetween: 30,
          navigation: {
            nextEl: ".perfor .next",
            prevEl: ".perfor .prev",
          },
        });

        $('.site .family').click(function (e) {
          e.preventDefault();
      
          if ($(this).siblings('.sub').hasClass('active')) { //열려있는경우
              $('.site .sub').removeClass('active');
          } else { //첫클릭
              $('.site .sub').removeClass('active');
              $(this).siblings('.sub').addClass('active')
         }
        })
})

$(function(){
  /* Slick Slider - Welcome */
  $('.slideshow').slick({
    infinite: true, // 무한반복
    dots: false, // 동그라미 네비게이션 사용안함
    autoplay: true, // 자동 재생
    autoplaySpeed: 2000, // 자동 재생 시 머무는 시간
    fade: true, // 크로스 페이드 트랜지션
    speed: 1000, // 자동 재생 트랜지션 시간
    pauseOnHover: false // 마우스 오버될 때 멈춤 사용안함
  });
  /* Slick.JS : Review, Guide */
$('.review-slider,.mockup-slider').slick({
  infinite: true, // 무한반복
  dots: true, // 동그라미 네비게이션 사용안함
  autoplay: true, // 자동 재생
  autoplaySpeed: 2000, // 자동 재생 시 머무는 시간
});
  /* TypeIt - Welcome */
$('#typing').typeIt({
	strings: ["Business strategy.", "Innovation Plan.", "Creative Idea."], // 타이핑 텍스트 입력
	speed: 100, // 알파벳 타이핑 속도
	autoStart: true, // 자동 재생 사용
	breakLines: false, // 줄 바꿈 사용안함
});
 /* Wow Scroll Reveal Animation */
 wow = new WOW({
  boxClass: 'wow',
  offset: 150, //나타날시간을 픽셀로(150픽셀나올떄 시작되게)
  mobile: false
})
wow.init();

/* Mobile trigger */
$('.trigger').click(function(){
  $(this).toggleClass('active')
  $('.gnb').toggleClass('active')
})
$('.gnb a,section').click(function(){
  $('.gnb,.trigger').removeClass('active')
})
/* Section- FAQ acordian */
$('.faq-desc').eq(0).show()
$('.faq-title').click(function(){
  $(this).next().stop().slideDown()
  $(this).parent().siblings().children('.faq-desc').stop().slideUp()
  $(this).parent().addClass('active')
  $(this).parent().siblings().removeClass('active')
})
/* Section-Guide : Video Modal */
$('.open-modal').click(function(){
  $('.video-modal').fadeIn()
  $('body').addClass('active')
})
$('.close-modal').click(function(){
  $('.video-modal').fadeOut()
  $('body').removeClass('active')
})
})
/* goto-top button, header.active scroll */
$(window).scroll(function(){
  if($(window).scrollTop()>50){
    $('.btn-top, header').addClass('active')
  }
  else{
    $('.btn-top, header').removeClass('active')
  }
})//end
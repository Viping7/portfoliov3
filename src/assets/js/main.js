$(document).ready(function() {
    $('.experience .nav-link').click(function(){
        const top = $(this).position().top
        $('.tab-selector').css({top:top});
    })
    $(window).on( "scroll", function() {
        const top = $(".dummy-banner").next().position().top;
        const scrollTop = $(window).scrollTop();
        let opacity =  ((top/2) -scrollTop)/1000;
        let transform = `translateY(${(1-opacity) * -300}px)`

        if(scrollTop === 0){
            opacity = 1
            transform =`translateY(0px)`
        }
        $('.banner').css({opacity:opacity,transform:transform})
        const projectTop = $('.projects').position().top;
        // const projectEnd = $('.other-projects').position().top;
        const projectEnd = $('#splitbit').offset().top + 500;
        if(scrollTop >= projectTop-20){
            $('.navbar').addClass('sticky-top')
        }else{
            $('.navbar').removeClass('sticky-top')
        }
        if(scrollTop<=projectEnd){
            $('.navbar').fadeIn()
        }else{
            $('.navbar').fadeOut()
        }
      });
});
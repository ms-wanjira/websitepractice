$(window).scroll(function(){
    parallax();
})

function parallax() {

    var wscroll = $(window).scrollTop();

    $(' .parallax--bg').css('background-position' , 'center' + (wscroll *0.75)+ 'px')

    $(' .parallax--box'). css('top', -5+(wscroll*0.007)+'em')


}
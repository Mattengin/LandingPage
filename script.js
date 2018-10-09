// $('.back').mousemove(function(e){
//     var moveX = (e.pageX * 1/120);
//     var moveY = (e.pageY * 1/120);
//     $(this).css('background-position', moveX + 'px ' + moveY + 'px ')
// })

$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('nav').addClass('black');
    } else{
        $('nav').removeClass('black');
    }
})
$('$nav-a').on('click', function() {

    var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 60;

    $('body,html').animate({
        scrollTop: scrollPoint
    }, 500);

    return false;

})

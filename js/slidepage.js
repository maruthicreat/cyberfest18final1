

//fullpage.initialize('#fullpage');

$(document).ready(function() {
    $('#fullpage').fullpage({
        sectionSelector: '.section',
        navigation: true,
        slidesNavigation: true,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5','page6','page7']
    });
});

var $header_top = $('.header-top');

$header_top.find('a').on('click', function() {
    $(this).parent().toggleClass('open-menu');
});


$('.hidenav,#fullpage').click(function () {
    $('#topnavbar').removeClass('open-menu');
});

$('')

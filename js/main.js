var $thumbs=$('.thumbnails');
var $lightboximg = $('.lightbox-img');
var $lb = $('.lightbox');
var $btnClose =$('.btn-close');

var $toggle = $('.toggle');
var $nav = $('.nav');

var $alien = $('.alien');


$thumbs.on('click','a', function(e) {
    e.preventDefault();
    var big = $(this).attr('href');
    $lightboximg.attr('src',big);
    $lb.attr('data-state', 'visible');
});

$btnClose.on('click', function() {
     $lb.attr('data-state', 'hidden');
});

$toggle.on('click', function () {
    $nav.slideToggle();
});

$alien.waypoint(function () {
    $alien.toggleClass('js-active');
}, {offset: '50%'});

$('.nav').localScroll({
    target: 'body'
});

$('.arrow').localScroll({
    target: 'body'
});
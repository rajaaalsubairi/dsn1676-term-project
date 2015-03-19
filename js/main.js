var $thumbs=$('.thumbnails');
var $lightboximg = $('.lightbox-img');
var $lb = $('.lightbox');
var $btnClose =$('.btn-close');

var $toggle = $('.toggle');
var $nav = $('.nav');

$thumbs.on('click','a', function(e) {
    e.preventDefault();
    var big = $(this).attr('href');
    $lightboximg.attr('src',big);
    $lb.attr('data-state', 'visible');
});

$btnClose.on('click', function() {
     $lb.attr('data-state', 'hidden');
});

$toggle.on('click', function() {
    $nav.slideToggle();
});
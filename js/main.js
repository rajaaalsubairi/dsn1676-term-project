var $thumbs=$('.thumbnails');
var $lightboximg = $('.lightbox-img');
var $lb = $('.lightbox');
var $btnClose =$('.btn-close');

$thumbs.on('click','a', function(e) {
    e.preventDefault();
    var big = $(this).attr('href');
    $lightboximg.attr('src',big);
    $lb.attr('data-state', 'visible');
});

$btnClose.on('click', function() {
     $lb.attr('data-state', 'hidden');
});
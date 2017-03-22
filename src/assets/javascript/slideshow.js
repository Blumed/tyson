var $block = $('.block');
$block.hover(function () {
	var $isActive = $(this);
	$isActive.toggleClass('is-active');
    console.log('on');
});

if ($('.is-active')) {
    	var slideShow = setInterval(function () {
		$('.block.is-active').each(function () {
			var $cur = $(this).find('.current').removeClass('current');
			var $next = $cur.next().length ? $cur.next() : $(this).children().eq(0);
			$next.addClass('current');
		});
	}, 100);
}


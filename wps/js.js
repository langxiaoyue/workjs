

$(function () {

	//轮播器初始化
	$('#banner img').css('display', 'none');
	$('#banner img').eq(0).css('display', 'block');
	$('#banner ul li').eq(0).css('color', '#333');
	$('#banner strong').html($('#banner img').eq(0).attr('alt'));
	
	//轮播器计数器
	var banner_index = 1;
	
	//自动轮播器
	var banner_timer = setInterval(banner_fn, 3000);
	
	//手动轮播器
	$('#banner ul li').hover(function () {
		clearInterval(banner_timer);
		banner(this);
	}, function () {
		banner_index = $(this).index() + 1;
		banner_timer = setInterval(banner_fn, 3000);
	});
	$('#banner img').hover(function () {
		clearInterval(banner_timer);
		banner(this);
	}, function () {
		banner_index = $(this).index() + 1;
		banner_timer = setInterval(banner_fn, 3000);
	});
	
	function banner(obj) {
		$('#banner img').css('display', 'none');
		$('#banner img').eq($(obj).index()).css('display', 'block');
		$('#banner ul li').css('color', '#999');
		$(obj).css('color', '#333');
		$('#banner strong').html($('#banner img').eq($(obj).index()).attr('alt'));
	}
	
	function banner_fn() {
		if (banner_index >= $('#banner ul li').length()) banner_index = 0;
		banner($('#banner ul li').eq(banner_index).first());
		banner_index++;
	}
	
	
});













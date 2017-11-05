	
	

$(document).ready(function(){ 
	var slideNow = 1;
	var slideCount = $('#slidewrapper').children().length;
	var translateWidth = 0;
	var slideInterval = 3000;
	var navBtnId = 0;
	var switchInterval = setInterval(nextSlide,slideInterval);
	var nb = 1;
	$('#nav_btn'+nb).css({"background-color":"rgba(0,0,0, 1.0)"});
	$('#viewport').hover(function(){
		clearInterval(switchInterval);
		}, function(){
		switchInterval = setInterval(nextSlide,slideInterval);
		}
	);

	$('#next-btn').click(function(){
		nextSlide();
	});

	$('#prev-btn').click(function(){
		prevSlide();
	});
	function nextSlide () {
	if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount)
		{
			$("#slidewrapper").css({"transform":"translate(0, 0)"});
			$('.slide-nav-btn').css({"background-color":"rgba(0,0,0, 0.2)"});
			nb = (slideNow-slideCount)+1;
			$('#nav_btn'+nb).css({"background-color":"rgba(0,0,0, 1.0)"});
			slideNow = 1;
		}
		else {
			translateWidth = -$('#viewport').width() * (slideNow);
			$("#slidewrapper").css({
				"transform":"translate(" + translateWidth + "px, 0)",
				"-webkit-transform":"translate(" + translateWidth + "px, 0)",
				"-ms-transform":"translate(" + translateWidth + "px, 0)"
				});
			$('.slide-nav-btn').css({"background-color":"rgba(0,0,0, 0.2)"});
			nb = slideNow+1;
			$('#nav_btn'+nb).css({"background-color":"rgba(0,0,0, 1.0)"});
			slideNow++;
		}
	}

	function prevSlide () {
		if(slideNow == 1 || slideNow <=0 || slideNow > slideCount) {
			translateWidth = -$('#viewport').width() * (slideCount - 1);
			$('#slidewrapper').css({
				"transform":"translate(" + translateWidth + "px, 0)",
				"-webkit-transform":"translate(" + translateWidth + "px, 0)",
				"-ms-transform":"translate(" + translateWidth + "px, 0)"
			});
			$('.slide-nav-btn').css({"background-color":"rgba(0,0,0, 0.2)"});
			nb = (slideNow+slideCount)-1;
			$('#nav_btn'+nb).css({"background-color":"rgba(0,0,0, 1.0)"});
			slideNow = slideCount;
		}
		else {
			translateWidth = -$('#viewport').width() * (slideNow - 2);
			$('#slidewrapper').css({
				"transform":"translate(" + translateWidth + "px, 0)",
				"-webkit-transform":"translate(" + translateWidth + "px, 0)",
				"-ms-transform":"translate(" + translateWidth + "px, 0)"
			});
			$('.slide-nav-btn').css({"background-color":"rgba(0,0,0, 0.2)"});
			nb =  slideNow-1;
			$('#nav_btn'+nb).css({"background-color":"rgba(0,0,0, 1.0)"});
			slideNow--;
		}
	}

	$('.slide-nav-btn').click(function(){
		navBtnId = $(this).index();
		nb = navBtnId;
		nb = nb + 1;
		if(navBtnId + 1 != slideNow) {
			translateWidth = -$('#viewport').width() * (navBtnId);
			$('#slidewrapper').css({
				"transform":"translate(" + translateWidth + "px, 0)",
				"-webkit-transform":"translate(" + translateWidth + "px, 0)",
				"-ms-transform":"translate(" + translateWidth + "px, 0)"
			});
			$('.slide-nav-btn').css({"background-color":"rgba(0,0,0, 0.2)"});
			$(this).css({"background-color":"rgba(0,0,0, 1.0)"});
			slideNow = navBtnId+1;
		}
	});
});
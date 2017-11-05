$(document).ready(function(){
			$("#menu").on("click","a", function(event){
				// Отменяем стандартную обработку нажатия по ссылке
				event.preventDefault();
				// Забираем идентификатор блока с утрибута href
				var id = $(this).attr("href");
				//узнаем высоту от начала страницы до блока на который ссылается якорь
				var top = $(id).offset().top;
				//анимируем переход на расстояние - top за 1500 мс
	  			$('body,html').animate({scrollTop: top}, 750);
			});
			$(".on_top").on("click", "a", function(event){
				// Отменяем стандартную обработку нажатия по ссылке
				event.preventDefault();
				// Забираем идентификатор блока с утрибута href
				var id = $(this).attr("href");
				// var id = "#main";
				//узнаем высоту от начала страницы до блока на который ссылается якорь
				var top = $(id).offset().top;
				//анимируем переход на расстояние - top за 1500 мс
	  			$('body,html').animate({scrollTop: top}, 750);
			});
			$("#logo").on("click", "a", function(event){
				// Отменяем стандартную обработку нажатия по ссылке
				event.preventDefault();
				// Забираем идентификатор блока с утрибута href
				var id = $(this).attr("href");
				// var id = "#main";
				//узнаем высоту от начала страницы до блока на который ссылается якорь
				var top = $(id).offset().top;
				//анимируем переход на расстояние - top за 1500 мс
	  			$('body,html').animate({scrollTop: top}, 750);
			});
		});
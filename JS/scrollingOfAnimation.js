
var isScrolling = false;

document.addEventListener("scroll", throttleScroll, false);

 function throttleScroll(e) {
      if (isScrolling == false) {
        window.requestAnimationFrame(function() {
          scrolling(e);
          isScrolling = false;
        });
      }
      isScrolling = true;
    }

    document.addEventListener("DOMContentLoaded", scrolling, false);

    var listItems = document.querySelectorAll("#technical_block-3 ul li");
    var listItems2 = document.querySelectorAll(".block-4 p"); //Абзацы блока 4
    var h2inblock_2 = document.querySelector("#h2inblock_2"); //Заголовок h2 блока 2
    var h2inblock_3 = document.querySelector("#h2inblock_3"); //Заголовок h2 блока 3
    var h3inblock_3 = document.querySelector("#h3inblock_3"); //Заголовок h3 блока 3
    var par_in_block_3 = document.querySelector("#par_in_block_3"); //Абзац блока 3
    var block_for_slider = document.querySelector("#block-for-slider"); //Слайдер блока 3
    var button_block_3 = document.querySelector("#button_block-3"); //Кнопка "Купить" блока 3
    var h2inblock_4 = document.querySelector("#h2inblock_4"); //Заголовок h2 блока 4
    var img1_block_4 = document.querySelector("#img1_block_4"); //Изображение 1 блока 4
    var img2_block_4 = document.querySelector("#img2_block_4"); //Изображение 2 блока 4
    var img3_block_4 = document.querySelector("#img3_block_4"); //Изображение 3 блока 4
    var podpis1_block_4 = document.querySelector("#podpis1_block_4"); //Подпись под фото 1 блока 4
    var podpis2_block_4 = document.querySelector("#podpis2_block_4"); //Подпись под фото 1 блока 4
    var podpis3_block_4 = document.querySelector("#podpis3_block_4"); //Подпись под фото 1 блока 4
    var on_top = document.querySelector(".on_top"); // кнопка "Наверх"
    var mine_h1 = document.querySelector(".header h1"); // Заголовок h1 первого блока
    var mine_h2 = document.querySelector(".header h2"); // Заголовок h2 первого блока
    var mine_img = document.querySelector(".left-side img"); // Изображение первого блока
    var order = document.querySelector(".form_order"); // Форма заказа первого блока
    var mine_bottom_text = document.querySelector(".bottom_text"); // Текст внизу первого блока
    var last_h1 = document.querySelector(".header.second h1"); // Заголовок h1 последнего блока
    var last_h2 = document.querySelector(".header.second h2"); // Заголовок h2 последнего блока
    var last_img = document.querySelector(".left-side.second img"); // Изображение последнего блока
    var order_last = document.querySelector(".form_order.second"); // Форма заказа последнего блока
  
    function scrolling(e)
    {
    	// Анимация заголовка h1 блока 1

    	if(isFullyVisible(mine_h1))
    	{
    		mine_h1.classList.add("header_h1");
    	}
    	else {
    		 document.body.classList.remove("header_h1");
    	}

    	// Анимация заголовка h2 блока 1

    	if(isFullyVisible(mine_h2))
    	{
    		mine_h2.classList.add("header_h2");
    	}
    	else {
    		 document.body.classList.remove("header_h2");
    	}

    	// Анимация изображения блока 1

    	if(isFullyVisible(mine_img))
    	{
    		mine_img.classList.add("left-side_img");
    	}
    	else {
    		 document.body.classList.remove("left-side_img");
    	}

    	// Анимация формы заказа блока 1

    	if(isPartiallyVisible(order))
    	{
    		order.classList.add("form_order_anim");
    	}
    	else {
    		 document.body.classList.remove("form_order_anim");
    	}

    	// Анимация текста внизу блока 1

    	if(isPartiallyVisible(mine_bottom_text))
    	{
    		mine_bottom_text.classList.add("bottom_text_anim");
    	}
    	else {
    		 document.body.classList.remove("bottom_text_anim");
    	}

    	// Анимация заголовка блока 2

    	if(isFullyVisible(h2inblock_2))
    	{
    		h2inblock_2.classList.add("h2block-2");
    	}
    	else {
    		 document.body.classList.remove("h2block-2");
    	}
    	// Анимация заголовков блока 3

    	if(isFullyVisible(h2inblock_3))
    	{
    		h2inblock_3.classList.add("h2block-3");
    	}
    	else {
    		 document.body.classList.remove("h2block-3");
    	}

		if(isFullyVisible(h3inblock_3))
	    	{
	    		h3inblock_3.classList.add("h3block-3");
	    	}
	    	else {
	    		 document.body.classList.remove("h3block-3");
	    	}
	    	
	    //  Анимация левого абзаца блока 3

	 	if(isPartiallyVisible(par_in_block_3))
	    	{
	    		par_in_block_3.classList.add("par_block-3");
	    	}
	    	else {
	    		 document.body.classList.remove("par_block-3");
	    	}

    	// Анимация слайдера блока 3

		if(isPartiallyVisible(block_for_slider))
			{
				block_for_slider.classList.add("block_for_slider");
			}
			else {
				 document.body.classList.remove("block_for_slider");
			}
		// Анимация списка технических характеристик блока 3

		for (var i = 0; i < listItems.length; i++) {
	        var listItem = listItems[i];
	 		
	    	if (isFullyVisible(listItem)) {

		         listItem.classList.add("technical_block_3");
		        }
		       //  else {
		       //    listItem.classList.remove("technical_block_3");
	        // }
    	}

    	// Анимация кнопки "Купить" блока 3
    	if(isFullyVisible(button_block_3))
	    	{
	    		button_block_3.classList.add("button_block_3");
	    	}
	    	else {
	    		 document.body.classList.remove("button_block_3");
	    	}

    	// Анимация заголовка блока 4

	    if(isFullyVisible(h2inblock_4))
	    	{
	    		h2inblock_4.classList.add("h2block-4");
	    	}
	    	else {
	    		 document.body.classList.remove("h2block-4");
	    	}
	    // Анимация кнопки "Купить" блока 4

	    if(isFullyVisible(h2inblock_5))
	    	{
	    		h2inblock_5.classList.add("h2block-5");
	    	}
	    	else {
	    		 document.body.classList.remove("h2block-5");
	    	}
	    	// Анимация 1-й фотографии блока 4

	    if(isFullyVisible(img1_block_4))
	    	{
	    		img1_block_4.classList.add("img1_block-4");
	    	}
	    	else {
	    		 document.body.classList.remove("img1_block-4");
	    	}
	    	// Анимация 2-й фотографии блока 4

	    if(isFullyVisible(img2_block_4))
	    	{
	    		img2_block_4.classList.add("img2_block-4");
	    	}
	    	else {
	    		 document.body.classList.remove("img2_block-4");
	    	}
	    	// Анимация 3-й фотографии блока 4

	    if(isFullyVisible(img3_block_4))
	    	{
	    		img3_block_4.classList.add("img3_block-4");
	    	}
	    	else {
	    		 document.body.classList.remove("img3_block-4");
	    	}
	    	
	    	// Анимация абзацев блока 4

		for (var i = 0; i < listItems2.length; i++) {
	        var listItem = listItems2[i];
	 		
	    	if (isPartiallyVisible(listItem)) {

		         listItem.classList.add("pars_block-4");
		        }
		       //  else {
		       //    listItem.classList.remove("pars_block-4");
	        // }
    	}

    		// Анимация 1-й фотографии блока 4

	    if(isFullyVisible(podpis1_block_4))
	    	{
	    		podpis1_block_4.classList.add("podpis1_block-4");
	    	}
	    	else {
	    		 document.body.classList.remove("podpis1_block-4");
	    	}

	    	// Анимация 2-й фотографии блока 4

	    if(isFullyVisible(podpis2_block_4))
	    	{
	    		podpis2_block_4.classList.add("podpis2_block-4");
	    	}
	    	else {
	    		 document.body.classList.remove("podpis2_block-4");
	    	}
	    	// Анимация 3-й фотографии блока 4

	    if(isFullyVisible(podpis3_block_4))
	    	{
	    		podpis3_block_4.classList.add("podpis3_block-4");
	    	}
	    	else {
	    		 document.body.classList.remove("podpis3_block-4");
	    	}
	    	
	    	// Анимация заголовка h1 блока 6

    	if(isFullyVisible(last_h1))
	    	{
	    		last_h1.classList.add("header_h1");
	    	}
	    	else {
	    		 document.body.classList.remove("header_h1");
	    	}
		// Анимация заголовка h2 блока 6

    	if(isFullyVisible(last_h2))
	    	{
	    		last_h2.classList.add("header_h2");
	    	}
	    	else {
	    		 document.body.classList.remove("header_h2");
	    	}

    	// Анимация изображения блока 6

    	if(isFullyVisible(last_img))
	    	{
	    		last_img.classList.add("left-side_img");
	    	}
	    	else {
	    		 document.body.classList.remove("left-side_img");
	    	}

    	// Анимация формы заказа блока 6

    	if(isPartiallyVisible(order_last))
	    	{
	    		order_last.classList.add("form_order_anim");
	    	}
	    	else {
	    		 document.body.classList.remove("form_order_anim");
	    	}
	    	// if (button_on_top(on_top)) on_top.classList(".active");
	    
    }

    

    function isFullyVisible(el)
    {
    	var elementBoundary = el.getBoundingClientRect();
    	var top = elementBoundary.top;
    	var bottom = elementBoundary.bottom;
    	return ((top >= 0)&&(window.innerHeight >= bottom));
    }

	function isPartiallyVisible(el) {
      var elementBoundary = el.getBoundingClientRect();
 
      var top = elementBoundary.top;
      var bottom = elementBoundary.bottom;
      var height = elementBoundary.height;
 
      return ((top + height >= 0) && (height + window.innerHeight >= bottom));
    }

    function button_on_top (but) {
    	var button = but.getBoundingClientRect();
    	var top = button.top;
    	return ( window.innerHeight - 100 > top);
    }
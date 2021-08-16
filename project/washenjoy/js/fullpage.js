$(function(){
			
		var timeStart = 0;
		
		function wheely(e){
			var y = e.originalEvent.deltaY;
			var timeStop = new Date().getTime();
			var timeDiff = timeStop - timeStart;
			
			if(timeDiff > 200){
				if(y > 0){
					nextSlide();
				}
				if(y < 0){
					prevSlide();
				}
			}
			timeStart = timeStop;
		}
		
		function prevSlide(){
			if($('.active').is(':first-child')){
				if(!$('#mainSection').hasClass('dragging')){
					$('.section:first-child').addClass('bounce');
					$("#pager li").removeClass("on").eq(i).addClass("on");
					
					
					setTimeout(function(){
						$('.section:first-child').removeClass('bounce');
					},300);
				}
			}else if($('.active').is(':last-child')){
				$('#footer.active').removeClass("active").addClass("que").prev().removeClass('prev, que').addClass('active');
				console.log(true);
			}else{
				$('.active').removeClass('active').addClass('que').prev().removeClass('prev').addClass('active');
				var i = $(".section.active").index();
				$("#pager ul li").removeClass("on").eq(i).addClass("on");
			}
		}
		
		function nextSlide(){
			if($('.active').is(":last-child")){
				if(!$('#mainSection').hasClass('dragging')){
					$('.section:last-child').addClass("bounce");
					
					setTimeout(function(){
						$(".section:last-child").removeClass("bounce");
					},300);
				}
			}else if($(".section.active").next().attr("id")=="footer"){
				$('.active').removeClass("prev").addClass('active').next().removeClass("que").addClass("active");
			}else{
				$('.active').removeClass("active").addClass('prev').next().removeClass("que").addClass("active");
				var i = $(".section.active").index();
				$("#pager ul li").removeClass("on").eq(i).addClass("on");
			}
		}
		
		function hotkeys(e)  {
			if (e.keyCode == 38) {
				prevSlide();
			}
			if (e.keyCode == 40){
				e.preventDefault();
				nextSlide();
			}
		}
		
		var dragDist=0;
		var startPoint = 0;
		function dragStart(e) {
			e.preventDefault();
			
			if (e.type == 'touchstart'){
				
				$(document).off('mousedown' , dragStart);
				
				startPoint = e.originalEvent.touches[0].pageY;
				
			}else {
				startPoint = e.pageY;
			}
			dragDist = 0;
			$(document).on('touchmove mousemove',dragMove);
		}
		
		
		function dragMove(e){
			if(e.type == 'touchmove'){
				var movePoint = e.originalEvent.touches[0].pageY;
			}else{
				var movePoint = e.pageY;
			}
			dragDist = (movePoint - startPoint) / $('#mainSection').height() * 100;
			$("#mainSection").addClass("dragging");
			$(".section, .section_inner_wrap").css({
				transition:'0ms'
			});
			
		
			if (dragDist < 0) {
				
				$('.active .section_inner_wrap').css({
					opacity: 1 + (dragDist / 200)
				});
				$(".active").css({
					transform:'translate3d(0,' + (dragDist / 2) + '%,0)'
				}).next().css({
					transform: 'translate3d(0,' + (100 + dragDist) + '%,0)'
				});
			}
			
			if (dragDist > 0){
				$('.active').css({
					transform: 'translate3d(0,'+ dragDist + '%,0)'
				}).prev().css({
					animation: 'none',
					transform: 'translate3d(0,' + (-50 + dragDist / 2) + '%,0)'
				}).find('.section_inner_wrap').css({
					opacity: 0.5 + (dragDist / 200)
				});
			}
		}
		function dragEnd() {
		$(document).off('touchmove mousemove', dragMove);
		$('.section, .section_inner_wrap').removeAttr('style');
		if (dragDist > 20) {
		  prevSlide();
		}
		if (dragDist < -20) {
		  nextSlide();
		}

		setTimeout(function() {
		  $('#mainSection').removeClass('dragging');
			}, 800);
		}
		



		$("#pager li").click(function(){
		var i = $(this).index();

		$(".section").removeClass("prev").removeClass("que").removeClass("active");
		$(".section:lt("+i+")").addClass("prev");
		$(".section:gt("+i+")").addClass("que");
		$(".section").eq(i).addClass("active");
		$("#pager li").removeClass("on").eq(i).addClass("on");
		});
		
		
		
		$(document).on('wheel', wheely);
		$(document).on('keydown', hotkeys);
		$(document).on('touchstart mousedown', dragStart);
		$(document).on('touchend mouseup', dragEnd);	
		
		
		
		
});
























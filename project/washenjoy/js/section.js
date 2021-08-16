$(function(){
		
		
		var m = 0;
		var main_slide;
		
		
		top_slide();
		function top_slide(){
			main_slide = setInterval(function(){
						
						m++;
						
						if(m==4){
							m=0;
						}
						
						$("#m_slide article").stop().fadeOut(1200);
						$("#m_slide article").eq(m).stop().fadeIn(1200);
					$(".pager li").removeClass("on").eq(m).addClass("on");
						
			},5000);	
		}	
		$(".pager li").click(function(){
			m = $(this).index();
			
			$("#m_slide article").stop().fadeOut(1200);
			$("#m_slide article").eq(m).stop().fadeIn(1200);
			
			$(".pager li").removeClass("on");
			$(this).addClass("on");
		
		});
		$(".pager li").mouseover(function(){
			clearInterval(main_slide);			
		});
		$(".pager li").mouseleave(function(){
			top_slide();		
		});
		
		
		
		
		
		/*******   fulldown   *******/
		
		$(".nav li").mouseover(function(){
			var i = $(this).index();
			
			$(".nav li").removeClass("on").eq(i).addClass("on");
			
			$(".fulldown .full_center .full").css("display","none");
			$(".fulldown .full_center .full").eq(i).css("display","block");
		});
		
		$(".nav").mouseleave(function(){
			$(".nav li").removeClass("on");
		});
		
		$(".fulldown .full_center .full").mouseover(function(){
			var k = $(this).index();
			$(".nav li").removeClass("on").eq(k).addClass("on");
		});
		
		$(".fulldown .full_center .full").mouseleave(function(){
			$(".nav li").removeClass("on");
		});
		
		
		/********   popup_btn   *******/
		
		$(".popup_btn > span").click(function(){
			$(".popup_btn > span").css("display","none");
			$(".popup_btn > i").css("display","block");
			$(".popup_box").fadeIn(400);
		});
		
		$(".popup_btn > i").click(function(){
			$(".popup_btn > i").css("display","none");
			$(".popup_btn > span").css("display","block");
			$(".popup_box").fadeOut(400);
		});
	
	
		
		/******** service_news_slider  **********/
		
		var n = 0;
		
		setInterval(function(){
			
			n++;
			
			if(n==5){
				n=0;
			}
			
			
			$(".news").stop().fadeOut(1000);
			$(".news").eq(n).stop().fadeIn(1000);
			
		},5000);
		
		$(".news_next span").click(function(){
			
			n++;
			
			if(n>5){
				n=0;
			}
			
			$(".news").eq(n).fadeIn(800);
			$(".news").eq(n-1).fadeOut(800);
			
		});
		
		$(".news_prev span").click(function(){
			
			n--;
			
			if(n>0){
				n=5;
			}
			
			$(".news").eq(n).fadeIn(800);
			$(".news").eq(n+1).fadeOut(800);
			
		});
		
		/********service banner ******/
		
		var i = 0;
		var contentRepeat;
		
		timer();
		function timer(){
			contentRepeat = setInterval(function(){
			
				
				i++;
				
				if(i==10){
					i=0;
				}
			
				$(".content").stop().fadeOut(800);
				$(".content").eq(i).stop().fadeIn(800);
				
				
				$(".banner_pager li").removeClass("on").eq(i).addClass("on");
		
			},4000);
		
		}
		
		$(".banner_pager li").click(function(){
			i = $(this).index();
			
			$(".content").stop().fadeOut(800);
			$(".content").eq(i).stop().fadeIn(800);
			
			$(".banner_pager li").removeClass("on");
			$(this).addClass("on");
			
		});
		$(".banner_slider").mouseover(function(){
			clearInterval(contentRepeat);
		});
		$(".banner_slider").mouseleave(function(){
			timer();
		});
		
		
		/* shop_info_slider */
		
		var clone = $(".shop_info_slider .shop_imgs li:lt(2)").clone();
		$(".shop_info_slider .shop_imgs").append(clone);
		
		var s = 0;
		
		var shopRepeat;
		
		shop_slider();
		function shop_slider(){
			shopRepeat = setInterval(function(){
				
				if(s==5){
					s=0;
					$(".shop_imgs").css("margin-left",0);
				}
				
				s++;
				
				$(".shop_imgs").stop().animate({
					"margin-left":-s*50+"%"
				},600);
				
			},3000);
		
		}
		
		$(".shop_next").click(function(){
			
			if(s==5){
				s=0;
				$(".shop_imgs").css("margin-left",0);
			}
			
			s++;
			
			$(".shop_imgs").stop().animate({
				"margin-left":-s*50+"%"
			},600);
		});
		$(".shop_prev").click(function(){
			
			if(s==0){
				s=5;
				$(".shop_imgs").css("margin-left",-s*50+"%");
			}
			
			s--;
			
			$(".shop_imgs").stop().animate({
				"margin-left":-s*50+"%"
			},600);
		});
		$(".s_btn").mouseover(function(){
			clearInterval(shopRepeat);			
		});
		$(".s_btn").mouseleave(function(){
			shop_slider();		
		});
		
		/* equip_slide */
		
		var eq = 0;
		
		var eqRepeat;
		
		$(".equip_slide_pager li").click(function(){
				var e =$(this).index();
			
				$(".es_1").stop().animate({
					"margin-left":-e*100+"%"
				},800);
			
				$(".equip_slide_pager li").removeClass("on");
				$(this).addClass("on");
			
		});
		
		$(".equip_slide_pager_2 li").click(function(){
				var e =$(this).index();
			
				$(".es_2").stop().animate({
					"margin-left":-e*100+"%"
				},800);
			
				$(".equip_slide_pager_2 li").removeClass("on");
				$(this).addClass("on");
			
		});
		
		$(".equip_slide_pager_3 li").click(function(){
				var e =$(this).index();
			
				$(".es_3").stop().animate({
					"margin-left":-e*100+"%"
				},800);
			
				$(".equip_slide_pager_3 li").removeClass("on");
				$(this).addClass("on");
			
		});
		
		var act = 0;
		$(".active_next").click(function(){
			
			act++;
			if(act == 3){
				act=0;
			}
			$(".equip_slide").css("display","none");
			$(".equip_slide").eq(act).css("display","block");
			
		});
		
		
		
		/* active_slide */
		
		
		var a = 0;
		
		$(".active_next").click(function(){

			a++;
			if(a==3){
				a=0;
			}

			$(".active_left_info").fadeOut(600);
			$(".active_left_info").eq(a).fadeIn(600);
			
		});
		$(".active_prev").click(function(){

			
			if(a==0){
				a=3;
			}
			a--;
			
			$(".active_left_info").fadeOut(600);
			$(".active_left_info").eq(a).fadeIn(600);
			
		});
		
		
		/* las365_slider */
		
		var las_clone = $(".las365_slide li").eq(0).clone();
			$(".las365_slide").append(las_clone);
			
		var l = 0;
		
		var las;
		
		$(".las_next").click(function(){
			
			l++;
			
			if(l==5){
				$(".las365_slide").stop().animate({
					"margin-left":-l*100+"%"
				},800,function(){
					$(".las365_slide").css("margin-left",0);
				});
				l=0;
			}else{
				$(".las365_slide").stop().animate({
					"margin-left":-l*100+"%"
				},800);
			}
		});
		
		$(".las_prev").click(function(){
			
			if(l==0){
				l=5;
				$(".las365_slide").css("margin-left",0);
			}
			
			l--;
			
			$(".las365_slide").stop().animate({
				"margin-left":-l*100+"%"
			},800);
			
		});
		
		las_slide();
		function las_slide(){
			las = setInterval(function(){
			
				if(l==5){
					l=0;
					$(".las365_slide").css("margin-left",0);
				}
				
				l++;
				
				$(".las365_slide").stop().animate({
					"margin-left":-l*100+"%"
				},800);
				
			},5000);
			
		}
		
		$(".las365_slide").mouseover(function(){
			clearInterval(las);
		});
		$(".las365_slide").mouseleave(function(){
			las_slide();
		});
		$(".las_np").mouseover(function(){
			clearInterval(las);
		});
		$(".las_np").mouseleave(function(){
			las_slide();
		});

		
		/*sns_slide*/
		
		var sns_clone = $(".sns_slide li:lt(3)").clone();
		$(".sns_slide").append(sns_clone);
		
		var sns = 0;
		
		var snsRepeat;
		
		sns_slider();
		function sns_slider(){
			snsRepeat = setInterval(function(){
				
				if(sns==6){
					sns=0;
					$(".sns_slide").css("margin-left",0);
				}
				
				sns++;
				
				$(".sns_slide").stop().animate({
					"margin-left":-sns*50+"%"
				},600);
				
			},3000);
		
		}
		
		$(".sns_next").click(function(){
			
			if(sns==6){
				sns=0;
				$(".sns_slide").css("margin-left",0);
			}
			
			sns++;
			
			$(".sns_slide").stop().animate({
				"margin-left":-sns*50+"%"
			},600);
		});
		$(".sns_prev").click(function(){
			
			if(sns==0){
				sns=6;
				$(".sns_slide").css("margin-left",-s*50+"%");
			}
			
			sns--;
			
			$(".sns_slide").stop().animate({
				"margin-left":-sns*50+"%"
			},600);
		});
		$(".sns_np").mouseover(function(){
			clearInterval(snsRepeat);			
		});
		$(".sns_np").mouseleave(function(){
			sns_slider();		
		});
		
		
		/* tip_left_ slider */
		
		var tip_clone = $(".tip_left_slide > li").eq(0).clone();
		$(".tip_left_slide").append(tip_clone);
		var t = 0;
		var tip_repeat;
		
		tip();
		function tip(){
			tip_repeat = setInterval(function(){
				
				if(t==5){
					t=0;
					$(".tip_left_slide").css("margin-left",0);
				}
				
				t++;
				
				$(".tip_left_slide").stop().animate({
					"margin-left":-t*100+"%"
				},800);
				
				
			},4000);
			
		};
		
		$(".tip_next").click(function(){
			
			if(t==5){
				t=0;
				$(".tip_left_slide").css("margin-left",0);
			}
				
			t++;
			
			$(".tip_left_slide").stop().animate({
					"margin-left":-t*100+"%"
			},800);
			
		});
		$(".tip_prev").click(function(){
			
			if(t==0){
				t=5;
				$(".tip_left_slide").css("margin-left",-t*100+"%");
			}
				
			t--;
			
			$(".tip_left_slide").stop().animate({
					"margin-left":-t*100+"%"
			},800);
			
		});
		$(".tip_np",".tip_left_slide").mouseover(function(){
			clearInterval(tip_repeat);			
		});
		$("tip_np",".tip_left_slide").mouseleave(function(){
			tip();		
		});
		
		
		
		/* tip_right_ slide */
		
		var tr_clone = $(".tip_right_slide .tip_img:lt(3)").clone();
		$(".tip_right_slide").append(tr_clone);
		
		var tr = 0;
		
		var tr_repeat;
		
		tr_slide();
		
		function tr_slide(){
			
			tr_repeat = setInterval(function(){
				var move = 400/12;
			
				
				if(tr==9){
					tr=0;
					$(".tip_right_slide").css("margin-left",0);
				}
				
				tr++;
				
				$(".tip_right_slide").stop().animate({
					"margin-left":-tr*move+"%"
				},600);
				
				
				
			},3000);
			
		};
		
		$(".tr_next").click(function(){
			
			tr++;
			
			if(tr==56){
				$(".tip_right_slide").stop().animate({
					"margin-left":-tr*33.33+"%"
				},600, function(){
					$(".tip_right_slide").css("margin-left",0);
				});
				tr=0;
				
			}else{
				$(".tip_right_slide").stop().animate({
					"margin-left":-tr*33.33+"%"	
				},600);
				
			}
			
			return false;
		});
		$(".tr_prev").click(function(){
			
			
			
			if(tr==0){
				
				tr==56;
				$(".tip_right_slide").css("margin-left",0);
			}
			
			tr--;
			
			$(".tip_right_slide").stop().animate({
				"margin-left":-tr*33.33+"%"
			},600);
			
				return false;
		});
			
		$(".tr_np").mouseover(function(){
			clearInterval(tr_repeat);			
		});
		$(".tr_np").mouseleave(function(){
			tr_slide();		
		});
		$(".tip_right_slide").mouseover(function(){
			clearInterval(tr_repeat);			
		});
		$(".tip_right_slide").mouseleave(function(){
			tr_slide();		
		});
			
			
		
		
		
		
		


		
		
});

























define(['jquery'],function($){
	return {
		lunbo:(function(){
			var $banner=$(".banner .lunbotu");
			var $ulbox=$(".lunbo");
			var $img=$("ul.lunbo li");
			var $circle=$(".lunbo-nav li");
			// console.log($circle.get(0).tagName);
			function Lunbo(){
				$img.eq(0).clone().appendTo($ulbox);
				$img.eq($img.size()-1).clone().prependTo($ulbox);
				this.onew=$("ul.lunbo li").eq(1).width();
				$ulbox.css({
					width:this.onew*$("ul.lunbo li").size(),
					left:-this.onew
				});
				this.num=null;
				this.timer=null;
				this.init();
				// console.log($ulbox.css("width"))
			}
			Lunbo.prototype={
				init:function(){
					this.bannerhover();
					this.circlehover();
					this.autoplay();
				},
				bannerhover:function(){
					var that=this;
					$banner.hover(function(){
						clearInterval(that.timer);
					},function(){
						that.autoplay()
					})
				},
				circlehover:function(){
					var that=this;
					$circle.on("mouseover",function(){
						that.num=$(this).index();
						$(this).addClass("orange").siblings($circle).removeClass("orange");
						$ulbox.stop(true).animate({left:-($(this).index()+1)*that.onew})
					})
				},
				autoplay:function(){
					var that=this;
					this.timer=setInterval(function(){
						that.num++;
						if(that.num==$circle.size()){
							$ulbox.stop(true).animate({left:-(that.num+1)*that.onew},function(){
								$(this).css("left",-that.onew)
							});
							that.num=0;
						}
						$circle.eq(that.num).addClass("orange").siblings($circle).removeClass("orange");
						$ulbox.animate({left:-(that.num+1)*that.onew})
					},2000)
				}

			}
			var lunbo=new Lunbo;
		})(),

		must_green:(function(){
			var $must_list=$(".youxuan_list ul li");
			$must_list.hover(function(){
				$(this).find(".add-cart").show().animate({bottom:"15px"},200)
			},function(){
				$(this).find(".add-cart").hide().animate({bottom:"-10px"},200)
			})
		})(),

		goods_green:(function(){
			var $must_list=$(".main .bottom .m ul li");
			$must_list.hover(function(){
				$(this).find(".add-cart").show().animate({bottom:"0px"},200)
			},function(){
				$(this).find(".add-cart").hide().animate({bottom:"-20px"},200)
			})
		})(),

		tuijian_green:(function(){
			var $tuijan_list=$(".tuijian ul li");
			$tuijan_list.hover(function(){
				$(this).find(".add-cart").show().animate({bottom:"0px"},200)
			},function(){
				$(this).find(".add-cart").hide().animate({bottom:"-24px"},200)
			})
		})(),

		daojishi:(function(){

			var $time_box=$(".jishi .have-b")
			var shijian=setInterval(function(){
				var $d=new Date();
				var $future=new Date(2018,6,13,00,00,00);
				var $cha=($future-$d)/1000;
				var $shia=parseInt($cha%86400/3600/10);
				var $shib=parseInt($cha%86400/3600%10);
				var $fena=parseInt($cha%3600/60/10);
				var $fenb=parseInt($cha%3600/60%10);
				var $sa=parseInt($cha%60/10);
				var $sb=parseInt($cha%60%10);
		
				$time_box.eq(0).html($shia)
				$time_box.eq(1).html($shib)
				$time_box.eq(2).html($fena)
				$time_box.eq(3).html($fenb)
				$time_box.eq(4).html($sa)
				$time_box.eq(5).html($sb)
			},1000)
			
		})(),

		shaidan:(function(){
			var $liebiao=$(".footer .notes .middle .liebiao");
			var $shaidan=$(".footer .notes .middle .gundong");
			var $one_height=$(".footer .notes .middle .gundong").eq(1).innerHeight();
			var $num=null;
			var $timer=setInterval(function(){
				$num+=2;
				if($num>=$shaidan.size()-1){
					$num=0;
				}
				$liebiao.animate({bottom:-$one_height*$num},1000);
			},3000)
		})(),

		cart_show:(function(){
			var $cart=$(".cang .cart");
			var $cart_logo=$(".louti ul a.cart");
			$cart_logo.hover(function(){
				$cart.show().animate({left:0})
			},function(){
				$cart.hide().animate({left:450})

			})

		})(),
		
		to_top:(function(){
			var $cart_logo=$(".louti ul a.go-top");
			$cart_logo.on("click",function(){
				$("html,body").animate({
					scrollTop:0
				},500)
			})

		})(),

		search:(function(){
			// var $search=$(".header-middle .search input");
			// var $Ul=$(".header-middle .search div.sousuo");
			// function hehe(data){
			// 	var $arr=data.s;
			// 	var $html="<ul>";
			// 	for(var i=0;i<arr.length;i++){
			// 		$html+=`<li><a href="https://www.baidu.com/s?ie=utf-8&f=3&rsv_bp=1&rsv_idx=1&tn=baidu&wd=${arr[i]}">${arr[i]}</a></li>`
			// 	}
			// 	$html="</ul>"
			// 	$Ul.innerHTML=html;
			// }
			// $search.oninput=function(){
			// 	var script=document.createElement('script');
			// 	script.type="text/javascript";
			// 	script.src="https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+this.value+"&sid=1421_21114_26350_20930&req=2&cb=hehe";
			// 	document.body.appendChild(script);
			// }


			var baidu=document.querySelector(".header-middle .search input");
			var oUl=document.querySelector(".header-middle .search div.sousuo ul");
			// function hehe(data){
			// 	//var arr=data.s;
			// 	//console.log(data);
			// 	// console.log(typeof data);
			// 	var html="";
			// 	// for(var i=0;i<arr.length;i++){
			// 	// 	html+=`<li><a href="https://www.baidu.com/s?ie=utf-8&f=3&rsv_bp=1&rsv_idx=1&tn=baidu&wd=${arr[i]}">${arr[i]}</a></li>`
			// 	// }
			// 	// oUl.innerHTML=html;
			// }

			// baidu.oninput=function(){
			// 	var script=document.createElement('script');
			// 	script.type="text/javascript";
			// 	script.src="https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+this.value+"&sid=1421_21114_26350_20930&req=2&cb=hehe";
			// 	document.body.appendChild(script);
			// 	console.log(script);
			// }
		})(),

		user:(function(){
			
			if(getcookie("name")){
				$("div.login").hide();
				$("div.master").show().find("span").html(getcookie("name"));
				$(".header-top div.hongkuai").hide();
			}
			$("div.master").find("a").on("click",function(){
				$("div.login").show();
				$("div.master").hide();
				$(".header-top div.hongkuai").show();

			})

		})(),

		
	}
})





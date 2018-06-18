define(['jquery'],function($){
	return {
		lunbo:(function(){
			var $goods_ul=$(".tuijian ul.goods_ul");
			var $li_pic=$(".tuijian ul.goods_ul li");
		    var $onew=$(".tuijian ul.goods_ul li").outerWidth(true);
		    var $circle=$(".tuijian ul.nav li");
		    var $left=$(".tuijian a.left")
		    var $right=$(".tuijian a.right")

		    // console.log($li_pic.size())
		    // console.log($onew)

		    function Lunbo(){
		        $goods_ul.css({
		            width:($li_pic.size())*$onew
		        });
		        this.num=null;
		        this.init();
		    }
		    Lunbo.prototype={
		    	init:function(){
					this.circleclick();
			    	this.rightclick();
			    	this.leftclick();

		    	},
		    	circleclick:function(){
		    		var that=this;
		    		$circle.on("click",function(){
		    			that.num=$(this).index();
		    			$(this).addClass("green").siblings($circle).removeClass("green");
		    			$goods_ul.animate({left:-($onew*4)*($(this).index())});
		    		})
		    	},
		    	rightclick:function(){
		    		var that=this;
		    		$right.on("click",function(){
		    			that.num++;
		    			if(that.num>=($li_pic.size()/4)){
		    				that.num=0;
		    				$goods_ul.css("left",$onew*4)
		    			}
		    			$circle.eq(that.num).addClass("green").siblings($circle).removeClass("green");
		    			$goods_ul.stop(true).animate({left:-($onew*4)*that.num});

		    		})
		    	},
		    	leftclick:function(){
		    		var that=this;
		    		$left.on("click",function(){
		    			that.num--;
		    			if(that.num<0){
		    				that.num=parseInt($li_pic.size()/4);
		    				$goods_ul.css("left",-($onew*4)*that.num)
		    			}
		    			$circle.eq(that.num).addClass("green").siblings($circle).removeClass("green");
		    			$goods_ul.stop(true).animate({left:-($onew*4)*that.num});

		    		})
		    	}
		    	
		    }

		    var lunbo=new Lunbo;
		})()
	}
})
;(function($){
	var $price=$("div.buy div.price strong");
	var $number=$("div.buy div.choose input");
	var $jia=$("div.buy div.choose a.jia");
	var $jian=$("div.buy div.choose a.jian");
	var $addcart=$("div.buy div.choose div.add a");

	var $jiage=$price.html();
	var $num=$number.val();

	//选择购买数量
	$jia.on("click",function(){
		$num++;
		$number.val($num)

	})
	$jian.on("click",function(){
		$num--;
		if($num<=0){
			$num=0
		}
		$number.val($num)
	})

	// 存储cookie
	var idarr = [];
	var numarr = [];
	function getcookievalue(){
		if(getCookie('goodsid')){
			idarr=getCookie('goodsid').split(',');
		}
		
		if(getCookie('goodsnum')){
			numarr=getCookie('goodsnum').split(',');
		}
	} 

	$addcart.on('click', function() {
		var id = $(this).parents('div.item').find('.sglass').attr('id');//当前按钮对应图片的sid
		getcookievalue();//获取商品的id和数量,放到对应的数组中,利用数组进行匹配
		if ($.inArray(id, idarr) != -1) {//当前的sid是否存在cookie中       存在
			//将之前的数据和当前存的数据相加，存放cookie里面
			if(getCookie('goodsnum')==''){
				var num=parseInt($number.val());
				numarr[$.inArray(id,idarr)]=num;
				addCookie('goodsnum', numarr.toString(), 7);//修改后的结果
				idarr[$.inArray(id,idarr)]=id;//将当前id添加到对应的位置。
				addCookie('goodsid', idarr.toString(), 7);//将整个数组添加到cookie
			}else{
				//走这里代码已经存在cookie,数量累加，取出cookie的数量+当前的输入的数量
				var num=parseInt(numarr[$.inArray(id,idarr)])+parseInt($number.val());
				numarr[$.inArray(id,idarr)]=num;
				addCookie('goodsnum', numarr.toString(), 7);//修改后的结果
			}
			
		}else{//不存在
			idarr.push(id);//将当前id添加到数组里面。
			addCookie('goodsid', idarr.toString(), 7);//将整个数组添加到cookie
			numarr.push($number.val());//存放输入的数量
			addCookie('goodsnum', numarr.toString(), 7);
		}
	});


	
})(jQuery)
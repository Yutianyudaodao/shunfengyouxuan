define(["jquery"],function($){
	return {
		addlist:(function(){
			var $div=$('div.goods-list');
			var $goodpic=$(".goods-list .good a.img img");
			var $title=$(".goods-list .good a.title");
			var $price=$(".goods-list .good div.price strong");
			var $xiaoji=$(".goods-list .good div.xiaoji strong");
			var $xing=$(".goods-list .good a.shoucang");
			var $del=$(".goods-list .good a.del");

			var $number=$(".goods-list .good div.num input")
			var $jia=$(".goods-list .good div.num a.jia")
			var $jian=$(".goods-list .good div.num a.jian")





			function createcart(id, num) {//sid：图片的编号  num:商品的数量
			    
			    $.ajax({
			        url: '../../json/cart.json',
			        dataType: 'json'
			    }).done(function(data) {

			        for (var i = 0; i < data.length; i++) {
			        	// console.log(num);
			            if (id == data[i].id) {
			            	// console.log(id)
			            	// console.log(num)
			                var $clone = $('.good:hidden').clone(true);
			                
			                $clone.find('a.img').find('img').attr('src', data[i].url.split(",")[0]);
			                $clone.find('a.img').find('img').attr('id', data[i].id);
			                $clone.find('a.title').html(data[i].title);
			                $clone.find('div.price').find('strong').html(data[i].price);
			                $clone.find('div.num').find('input').val(num);
			                
			                var $dj1 = parseFloat($clone.find('div.price strong').html());
			                $clone.find('div.xiaoji strong').html(($dj1 * num).toFixed(2));
			                $clone.css('display', 'block');
			                $clone.appendTo($div)
			                // kong();//购物车是否为空
			                totalprice();//总价和总数
			            }
			        }
			    });
			}

			//选择购买数量
			var $num=$number.val();
			$jia.on("click",function(){
				$num++;
				var $dj=$(this).parents(".good").find("div.price").find("strong").html();
				$(this).parent().find("input").prop("value",$num);
				$(this).parents(".good").find("div.xiaoji strong").html($dj*$num);
				totalprice();
			})
			$jian.on("click",function(){
				$num--;
				if($num<=0){
					$num=0
				}
				var $dj=$(this).parents(".good").find("div.price").find("strong").html();
				$(this).parent().find("input").prop("value",$num);
				$(this).parents(".good").find("div.xiaoji strong").html($dj*$num);
				totalprice();
			})
		
			//推荐列表区
			var $addcart=$(".tuijian ul.goods_ul div.add_cart")
			var idarr = [];
			var numarr = [];
			function cookieToArray(){
				if(getCookie('goodsid')){
					idarr=getCookie('goodsid').split(',');
				}
				if(getCookie('goodsnum')){
					numarr=getCookie('goodsnum').split(',');
				}
			}

			$('.tuijian ul.goods_ul').on('click', 'div.add_cart', function() {
				var id = $(this).parents('a.image').find('img').attr('id');
				//当前按钮对应图片的sid
				cookieToArray();//获取cookie值，放到对应的数组中
				
				if ($.inArray(id, idarr) != -1) {//存在，数量加1
					$('.good:visible').each(function() {//遍历可视的商品列表
			            if (id == $(this).find('img').attr('id')) {//添加购物车按钮的索引和购物车中商品列表的索引一致
			                var $num = $(this).find('div.num input').val();//获取数量的值
			                $num++;//数量累加
			                $(this).find('div.num input').val($num);//将数量赋值回去
			                //计算价格
			                var $dj = parseFloat($(this).find('div.price strong').html());//获取当前的单价
			                $(this).find('div.xiaoji strong').html(($dj * $num).toFixed(2));//计算商品总价

			                //存储数量到cookie里面。通过编号找数量
			                numarr[$.inArray(id, idarr)] = $num;//将数量存储到对应的cookie存放数量的数组中
			                addCookie('goodsnum', numarr.toString(), 7);//添加购物车
			                totalprice();
			            }
			        });
				}else{//当前商品列表没有进入购物车，创建商品列表
					idarr.push(id);//将当前id添加到数组里面。
			        addCookie('goodsid', idarr.toString(), 7);//将整个数组添加到cookie
			        numarr.push(1);//走这里数量都是1.
			        addCookie('goodsnum', numarr.toString(), 7);
			        createcart(id, 1);
			        // totalprice();
				}
			});


			//加载时页面中存有cookie值
			// if (getCookie('goodsid') && getCookie('goodsnum')) {

			//     var $id_arr = getCookie('goodsid').split(',');//存放sid数组
			//     var $num_arr = getCookie('goodsnum').split(',');//存放数量数组
			//     for (var $i = 0; $i < $id_arr.length; $i++) {
			        
			//         $.ajax({
			//         	async:false,
			// 	        type:"get",
			// 	        url:"http://localhost/jumei/php/details.php",
			// 	        data:{
			// 	            id:$id_arr[$i]
			// 	        }
			// 	    }).done(function(d){
			// 	    	console.log(d);
			// 	    	// console.log(JSON.parse(d).tuijian);
			// 	    	var $tuijian_data=JSON.parse(d).tuijian;
			// 	        var $id=$tuijian_data[0].id;
			// 	        var $title_con=$tuijian_data[0].title;
			// 	        var $price_con=$tuijian_data[0].price;
			// 	        var $url=$tuijian_data[0].url.split(",")[0];
			// 	        var $content=$div.html()

			// 	        // console.log($id)
		 //                var $clone = $('.good:hidden').clone(true);
		 //                $clone.find('a.img').find('img').attr('src', $url);
		 //                $clone.find('a.img').find('img').attr('id', $id);
		 //                $clone.find('a.title').html($title_con);
		 //                $clone.find('div.price').find('strong').html($price_con);
		 //                $clone.find('div.num').find('input').val($num_arr[$i]);

		 //                var $num = $num_arr[$i];
		 //                $clone.find('div.xiaoji strong').html(($price_con * $num).toFixed(2));
		 //                $clone.css('display', 'block');
		 //                $div.append($clone);


			// 	    });

			//     }
			// }


		    //加载时页面中存有cookie值
		    if (getCookie('goodsid') && getCookie('goodsnum')) {
			    var s = getCookie('goodsid').split(',');//存放sid数组
			    var n = getCookie('goodsnum').split(',');//存放数量数组
			    // console.log(s)
			    // console.log(n)
			    for (var i = 0; i < s.length; i++) {
			        createcart(s[i], n[i]);//遍历创建商品列表
			    }
			}

			



			//4.商品列表(cookie)不存在，购物车为空
			kong();
			function kong() {
			    if (getCookie('goodsid')) {//cookie存在，有商品，购物车不再为空
			        $('.none').hide();
			    } else {
			        $('.have_goods').show();
			    }
			}


			//5.每个商品的总价已经通过创建时求得了。求所有商品的总价和总的商品的个数
			function totalprice() {//计算总价
			    var total = 0;//总的价格
			    $('.good:visible').each(function() {//可视的商品列表进行遍历，循环叠加
			        if ($(this).find('input:checkbox').is(':checked')) {//商品的复选框是选中的
			            total += parseFloat($(this).find('div.xiaoji strong').html());
			        }
			    });
			    //赋值
			    $('span.cartPrice').html('￥' + total.toFixed(2));
			}

			//直接输入改变数量
			// $number.on('input', function() {
			// 	alert(1)
			//     var $reg = /^\d+$/g; //只能输入数字
			//     var $value = parseInt($(this).val());
			//     if ($reg.test($value)) {
			//         if ($value >= 99) {//限定范围
			//             $(this).val(99);
			//         } else if ($value <= 0) {
			//             $(this).val(1);
			//         } else {
			//             $(this).val($value);
			//         }
			//     } else {
			//         $(this).val(1);
			//     }
			//     $("div.xiaoji strong").html(singlegoodsprice($(this)));//改变后的价格
			//     totalprice();
			//     setcookie($(this));
			// });

			//7.计算数量改变后单个商品的价格
			// function singlegoodsprice(row) { //row:当前元素
			//     var $dj = parseFloat(row.parents('.good').find('div.price').find('strong').html());
			//     var $cnum = parseInt(row.parents('.good').find('div.num input').val());
			//     return ($dj * $cnum).toFixed(2);
			// }

			//9.将改变后的数量的值存放到cookie
			// function setcookie(obj) { //obj:当前操作的对象
			//     cookieToArray();
			//     var $index = obj.parents('.goods-item').find('img').attr('sid');
			//     numarr[sidarr.indexOf($index)] = obj.parents('.goods-item').find('.quantity-form input').val();
			//     addCookie('cartnum', numarr.toString(), 7);
			// }

			//全选
			$('div.quanxuan input').on('change', function() {
			    $('.good:visible').find('input:checkbox').prop('checked', $(this).prop('checked'));
			    $('div.quanxuan input').prop('checked', $(this).prop('checked'));
			    totalprice();//求和
			});

			var $inputchecked = $('.good:visible').find('input:checkbox');//获取委托元素
			$div.on('change', $inputchecked, function() {
			    var $inputs = $('.good:visible').find('input:checkbox'); //放内部
			    if ($('.good:visible').find('input:checked').length == $inputs.size()) {
			        $('div.quanxuan input').prop('checked', true);
			    } else {
			        $('div.quanxuan input').prop('checked', false);
			    }
			    totalprice();
			});


			//10.删除
			//删除cookie的函数
			function delgoodslist(id, idarr) {//sid：当前的sid，sidarr:cookie的sid的值
			    var index = -1;
			    for (var i = 0; i < idarr.length; i++) {
			        if (id == idarr[i]) {
			            index = i;
			        }
			    }
			    idarr.splice(index, 1);//删除数组对应的值
			    numarr.splice(index, 1);//删除数组对应的值
			    addCookie('goodsid', idarr.toString(), 7);//添加cookie
			    addCookie('goodsnum', numarr.toString(), 7);
			}

			//删除单个商品的函数(委托)
			$div.on('click', 'div.good a.del', function(ev) {
			    cookieToArray(); //转数组
			   
			   	$(this).first().parents('.good').remove();
			   
			    delgoodslist($(this).first().parents('.good').find('img').attr('id'), idarr);
			    totalprice();
			});


			//删除全部商品的函数
			$('.zongji .cha input.reset').on('click', function() {
			    $('.good:visible').each(function() {
			        if ($(this).find('input:checkbox').is(':checked')) {
			            $(this).remove();
			            delgoodslist($(this).find('img').attr('id'), idarr);
			        }
			    });
			    totalprice();
			});

			//推荐的绿块
			var $tuijan_list=$(".tuijian .goods_ul li");
			$tuijan_list.hover(function(){
				$(this).find("a.image .add_cart").show().animate({bottom:"0px"},200)
			},function(){
				$(this).find("a.image .add_cart").hide().animate({bottom:"-20px"},200)
			})
			



		})()
	}
})


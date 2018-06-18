;(function($){

	//验证码：
	var $ma=$("div.yanzhengma span.yanzhengma");
	var $arr=[];
	for(var i=48;i<57;i++){
		$arr.push(String.fromCharCode(i))
	}
	for(var j=97;j<122;j++){
		$arr.push(String.fromCharCode(j))
	}
	// console.log($arr);
	
	$ma.on("click",function(){
		var $str='';
		for(var i=0;i<4;i++){
			var $num=parseInt(Math.random()*$arr.length);
			if($num>9){
				if(Math.random()>0.5){
					$str+=$arr[$num].toUpperCase();
				}else{
					$str+=$arr[$num];
				}
			}else{
				$str+=$arr[$num];
			}
		}
		console.log($str);
		$(this).html($str);
	})
			
		
	//注册验证
	var $zhuangtai=$("span.zhuangtai");
	var $tishi=$("span.tishi");
	var $username=$("form ul li.name input");
	var $password=$("form ul li.password input");
	var $reword=$("form ul li.reword input");
	var $yanzheng=$("form ul li.yanzheng input");
	var $submit=$(".submit input");
	var $form=$("form");

	var $namelock=false;
	var $passlock=false;
	var $rewordlock=false;
	var $yanzhenglock=false;
	// alert($zhuangtai.get(0).tagName);

	$username.on("focus",function(){
		$tishi.eq(0).html("");
		$zhuangtai.eq(0).html("");
	}).on("blur",function(){
		var reg=/^([\u4e00-\u9fa5]|\w){3,15}$/;
		var word=$username.val();
		if(word!=""){
			if(reg.test(word)){
				$zhuangtai.eq(0).html("√").css("color","orange");
				
				$.ajax({
					type:"post",
					url:"../../php/registor.php",
					data:{
						checkname:word
					}
				}).done(function(d){
					if(!d){
						$zhuangtai.eq(0).html("√").css("color","orange");
						$namelock=true;
					}else{
						$tishi.eq(0).html("该用户名已存在，请直接登录").css("color","red");
					}
				});

			
			}else{
				$tishi.eq(0).html("格式有误").css("color","red")
			}
		}else{
			$tishi.eq(0).html("用户名不能为空").css("color","red")
		}
	})

	$password.on("focus",function(){
		$tishi.eq(1).html("");
		$zhuangtai.eq(1).html("");
	}).on("blur",function(){
		var reg=/^\w{6,}$/;
		var word=$password.val();
		if(word!=""){
			if(reg.test(word)){
				$zhuangtai.eq(1).html("√").css("color","orange")
				$passlock=true;
			}else{
				$tishi.eq(1).html("格式有误").css("color","red")
			}
		}else{
			$tishi.eq(1).html("密码不能为空").css("color","red")
		}
	})

	$reword.on("focus",function(){
		$tishi.eq(2).html("");
		$zhuangtai.eq(2).html("");
	}).on("blur",function(){
		var reg=/^\w{6,}$/;
		var word=$reword.val();
		if(word!=""){
			if(reg.test(word)){
				if(word==$password.val()){
					$zhuangtai.eq(2).html("√").css("color","orange");
					$rewordlock=true;
				}else{
					$tishi.eq(2).html("输入有误").css("color","red")
				}
			}else{
				$tishi.eq(2).html("输入有误").css("color","red")
			}
		}else{
			$tishi.eq(2).html("匹配不能为空").css("color","red")
		}
	})

	$yanzheng.on("focus",function(){
		$tishi.eq(3).html("");
		$zhuangtai.eq(3).html("");
	}).on("blur",function(){
		var word=$yanzheng.val();
		// alert($ma.html());
		if(word!=""){
			if(word==$ma.html()){
				$zhuangtai.eq(3).html("√").css("color","orange")
				$yanzhenglock=true;
			}else{
				$tishi.eq(3).html("输入有误").css("color","red")
			}
		}else{
			$tishi.eq(3).html("验证码不能为空").css("color","red")
		}
	})
	

	$form.on("submit",function(){
		if(!$namelock || !$passlock || !$rewordlock || !$emailock){
			return false;
		}
	})
})(jQuery)


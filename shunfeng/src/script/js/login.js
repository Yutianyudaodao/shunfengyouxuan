;(function(){
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


	var $username=$("form div.username input");
    var $password=$("form div.password input");
    var $yanzheng=$("form div.yanzhengma input");
    var $submit=$("form input.submit");
    var $zhuangtai=$("em.right");
    var $tishi=$("div.tishi");
    var $yanzhenglock=false;
    var $zhucelock=false;

    $yanzheng.on("focus",function(){
		$zhuangtai.eq(2).html("");
	}).on("blur",function(){
		var word=$yanzheng.val();
		// alert($ma.html());
		if(word!=""){
			if(word==$ma.html()){
				$yanzhenglock=true;
			}else{
				$zhuangtai.eq(2).html("验证码错误").css("color","red");
			}
		}else{

		}
	})

	$("div.username input").on("focus",function(){
		$tishi.html("");
	})
	$("div.password input").on("focus",function(){
		$tishi.html("");
	})

    $submit.on("click",function(){

    	if($username.val()!="" && $password.val()!=""){
    		
    		$.ajax({
        		type:"post",
        		url:"../../../php/login.php",
        		data:{
        			username:$username.val(),
        			password:$password.val()
        		}
        	}).done(function(d){
        		if(!d){
        			$tishi.html("用户名或密码不正确");
        		}else{
        			location.href="index.html";
        			setcookie("name",$username.val(),7);
        			$zhucelock=true;
        		}
        	})

        	if(!$yanzhenglock || !$zhucelock){
	    		return false;
	    	}


    	}else{
    		$tishi.html("用户名或密码不能为空");
    		if(!$yanzhenglock || !$zhucelock){
	    		return false;
	    	}
    	}
    	
    })

    // $("form").on("submit",function(){
    	
    // })
})()

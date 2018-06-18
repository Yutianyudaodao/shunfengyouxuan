<?php 
	require "connect.php";
	header('content-type:text/html;charset=utf-8');
	header("Access-Control-Allow-Origin: *");


	//判断用户名是否存在
	if(isset($_POST["checkname"]) || isset($_POST["submit"])){
		$name=@$_POST["checkname"];
	}else{
		exit("非法操作");
	}


	$result=mysql_query("select * from login where username='$name'");
	if(mysql_fetch_array($result)){
		echo true;
	}else{
		echo false;
	}

	
	//将信息提交到数据库
	if(isset($_POST["submit"])){
		$username=$_POST["username"];
		$password=sha1($_POST["password"]);

		$query="insert login values(default,'$username','$password')";
		mysql_query($query);
		header('location:../src/html/login.html');		
	}




 ?>
<?php 
	header("content_type:text/html;charset=utf-8");
	header("Access-Control-Allow-Origin: *");
	require "connect.php";

	if(isset($_POST["username"])){
		$username=$_POST["username"];
		$password=sha1($_POST["password"]);
	}else{
		exit("非法操作");
	}

	$result=mysql_query("select * from login where username='$username' and password='$password'");
	if(mysql_fetch_array($result)){
		echo true;
	}else{
		echo false;
	}


	
 ?>
<?php  
	header("content_type:text/html;charset=utf-8");
	define("SEAVER","localhost");
	define("USERNAME","root");
	define("PASSWORD","");

	$conn=@mysql_connect(SEAVER,USERNAME,"");
	if(!$conn){
		die("数据库连接失败".mysql_error());
	}

	mysql_select_db("shunfeng");
	mysql_query("SET NAMES UTF8");
?>
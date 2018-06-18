<?php 
	require "connect.php";
	header('content-type:text/html;charset=utf-8');
	header("Access-Control-Allow-Origin: *");


	if(isset($_GET["id"])){
		$id=@$_GET["id"];
	}else{
		exit("非法操作");
	}

	$mustbuy=mysql_query("select * from youxuanbimai where id='$id'");
	$mustbuy_inf=array();
	for($i=0;$i<mysql_num_rows($mustbuy);$i++){
		$mustbuy_inf[$i]=mysql_fetch_array($mustbuy,MYSQLI_ASSOC);
	}
	
	
	$tuijian=mysql_query("select * from tuijian where id='$id'");
	$tuijian_inf=array();
	for($i=0;$i<mysql_num_rows($tuijian);$i++){
		$tuijian_inf[$i]=mysql_fetch_array($tuijian,MYSQLI_ASSOC);
	}

	class indexdata{

	}
	$index=new indexdata();
	$index->bimai=$mustbuy_inf;
	$index->tuijian=$tuijian_inf;

	echo json_encode($index);

 ?>
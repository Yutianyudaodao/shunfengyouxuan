<?php 
	// header("content-type:text/html;charset=utf-8;")//为什么这个不能加？？
	header("Access-Control-Allow-Origin: *");
	
	$conn=mysql_connect("localhost","root","");
	mysql_select_db("shunfeng");
	mysql_query("SET NAMES UTF8");

	
	//banner图的数据输出
	$bigbanner=mysql_query("select * from lunbotu");
	$bigbanner_pic=array();
	for($i=0;$i<mysql_num_rows($bigbanner);$i++){
		$bigbanner_pic[$i]=mysql_fetch_array($bigbanner,MYSQLI_ASSOC);
	}

	//banner侧边图的数据输出
	$bannerce=mysql_query("select * from banner_ce");
	$bannerce_pic=array();
	for($i=0;$i<mysql_num_rows($bannerce);$i++){
		$bannerce_pic[$i]=mysql_fetch_array($bannerce,MYSQLI_ASSOC);
	}

	//优选必买
	$mustbuy=mysql_query("select * from youxuanbimai");
	$mustbuy_inf=array();
	for($i=0;$i<mysql_num_rows($mustbuy);$i++){
		$mustbuy_inf[$i]=mysql_fetch_array($mustbuy,MYSQLI_ASSOC);
	}

	//限时抢购
	$time=mysql_query("select * from xianshiqiaogou");
	$time_inf=array();
	for($i=0;$i<mysql_num_rows($time);$i++){
		$time_inf[$i]=mysql_fetch_array($time,MYSQLI_ASSOC);
	}

	//商品分类
	$goods=mysql_query("select * from goods");
	$goods_inf=array();
	for($i=0;$i<mysql_num_rows($goods);$i++){
		$goods_inf[$i]=mysql_fetch_array($goods,MYSQLI_ASSOC);
	}

	//分类title
	$title_img=mysql_query("select * from title_img");
	$title_img_inf=array();
	for($i=0;$i<mysql_num_rows($goods);$i++){
		$title_img_inf[$i]=mysql_fetch_array($title_img,MYSQLI_ASSOC);
	}

	//主图
	$zhutu=mysql_query("select * from zhutu");
	$zhutu_inf=array();
	for($i=0;$i<mysql_num_rows($zhutu);$i++){
		$zhutu_inf[$i]=mysql_fetch_array($zhutu,MYSQLI_ASSOC);
	}

	//侧边图
	$cebiantu=mysql_query("select * from cebiantu");
	$cebiantu_inf=array();
	for($i=0;$i<mysql_num_rows($cebiantu);$i++){
		$cebiantu_inf[$i]=mysql_fetch_array($cebiantu,MYSQLI_ASSOC);
	}

	//推荐图
	$tuijian=mysql_query("select * from tuijian");
	$tuijian_inf=array();
	for($i=0;$i<mysql_num_rows($tuijian);$i++){
		$tuijian_inf[$i]=mysql_fetch_array($tuijian,MYSQLI_ASSOC);
	}

	//热门
	$remen=mysql_query("select * from remen");
	$remen_inf=array();
	for($i=0;$i<mysql_num_rows($remen);$i++){
		$remen_inf[$i]=mysql_fetch_array($remen,MYSQLI_ASSOC);
	}

	class indexdata{

	}
	$index=new indexdata();
	$index->lunbo=$bigbanner_pic;
	$index->lunbo_ce=$bannerce_pic;
	$index->bimai=$mustbuy_inf;
	$index->time=$time_inf;
	$index->goods=$goods_inf;
	$index->zhutu=$zhutu_inf;
	$index->title_img=$title_img_inf;
	$index->ce_img=$cebiantu_inf;
	$index->tuijian=$tuijian_inf;
	$index->remen=$remen_inf;

	echo json_encode($index);

?>
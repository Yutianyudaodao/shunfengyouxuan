<?php 
	header('content-type:text/html;charset=utf-8');
// 
	$content=file_get_contents("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=啊&sid=1421_21114_26350_20930&req=2&cb=hehe");
	// $content=file_get_contents("http://www.kuitao8.com/api/joke");
	echo json_encode($content)
 ?>
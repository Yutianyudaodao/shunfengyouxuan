require.config({
	baseUrl:"../script/lib/",
	paths:{
		"jquery":"../script/lib/jquery.min.js",
		"jqcookie":"http://apps.bdimg.com/libs/jquery.cookie/1.4.1/jquery.cookie",
	}
})

require(["../script/js/cart.js","../script/js/cart_lunbo.js"]);
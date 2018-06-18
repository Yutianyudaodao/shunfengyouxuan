// http://www.sfbest.com/productlist/keysearch?callback=define
// http://www.sfbest.com/productlist/keysearch?q=li&callback=define

// define(["https://suggest.taobao.com/sug?code=utf-8&q=%E4%BC%9E&_ksTS=1528289521986_394&callback=define"],function(d){
// 	console.log(d)
// })

define(["http://www.sfbest.com/productlist/keysearch?q=li&callback=define"],function(d){
	console.log(typeof d)
})
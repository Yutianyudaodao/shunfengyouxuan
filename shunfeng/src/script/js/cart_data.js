;(function($){
	var $goods_ul=$(".tuijian ul.goods_ul");

	$.getJSON("../../php/index_data.php", function(data) {

		$html = '';
        $(data["tuijian"]).each(function(i){
            $html+=`<li>
                        <a href="javascript:;" class="image">
                            <img src="${this.url}" alt="" id="${this.id}">
                            <div class="add_cart">加入购物车</div>
                        </a>
                        <div class="title">${this.title}</div>
                        <div class="price"><span>￥</span><strong>${this.price}</strong></div>
                    </li>`;
        })
        $content=$goods_ul.html();
        $goods_ul.html($content+$html);   
	})


    
})(jQuery)
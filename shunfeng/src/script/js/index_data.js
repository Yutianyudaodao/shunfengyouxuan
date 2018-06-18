;(function($){
    var $luno_ul=$(".banner .lunbotu");
    var $luno_right=$(".banner .banner-right");
    var $youxuan_list=$(".main-1 .youxuan_list");
    var $time_list=$(".main-2 .bottom");
    var $zhutu_list=$(".main .bottom .l .image");
    var $title_img=$(".main .head");
    var $goods_list=$(".main .bottom .m");
    var $ce_img=$(".main .r .bottom");
    var $tuijian=$(".tuijianliebiao ul");
    var $remen=$(".footer .notes .middle .liebiao");
    
 
    $.getJSON("../../php/index_data.php", function(data) {

        //轮播图
        $html = '<ul class="lunbo clear">';
        $(data["lunbo"]).each(function(i){
            $html+=`<li>
                        <a href="javascript:;" target="_blank">
                            <img src="${this.url}" alt="">
                        </a>
                    </li>`;
        })
        $html+='</ul>';
        $content=$luno_ul.html();
        $luno_ul.html($content+$html);

        //轮播图侧图
        $html = '';
        $(data["lunbo_ce"]).each(function(i){
            $html+=`<a href="#"><img src="${this.url}" alt=""></a>`;
        })
        $content=$luno_right.html();
        $luno_right.html($content+$html);


        //优选必买
        $html = '<ul class="clear">';
        $(data["bimai"]).each(function(i){
            if(i==0){
                var $arr=(data["bimai"][i].url).split(",");
                // console.log($arr[1]);
                $html+=`<li> 
                        <h4><a href="javascript:;"> ${this.title}</a></h4>
                        <p> ${this.price}</p>
                        <a href="#" class="image">
                            <img src="${$arr[0]}" id="${i+1}"/>
                        </a>
                        <div class="add-cart">加入购物车</div>
                    </li>`;
            }else if(i==1){
                var $arr=(data["bimai"][i].url).split(",");
                // console.log($arr[1]);
                $html+=`<li> 
                        <h4><a href="javascript:;"> ${this.title}</a></h4>
                        <p> ${this.price}</p>
                        <a href="#" class="image">
                            <img src="${$arr[0]}" id="${i+1}"/>
                        </a>
                        <div class="add-cart">加入购物车</div>
                    </li>`;
            }else{
                $html+=`<li> 
                        <h4><a href="javascript:;"> ${this.title}</a></h4>
                        <p> ${this.price}</p>
                        <a href="#" class="image">
                            <img src=" ${this.url} "  id="${i+1}"/>
                        </a>
                        <div class="add-cart">加入购物车</div>
                    </li>`;
            }
            
        })
        $html+='</ul>';
        $content=$youxuan_list.html();
        $youxuan_list.html($content+$html);

        //限时抢购
        $html = '<ul>';
        $(data["time"]).each(function(i){
            $html+=`<li> 
                        <a href="#" class="img"><img src=" ${this.url}" alt=""></a>
                        <div class="info">
                            <p class="title"><a href="#"> ${this.title}</a></p>
                            <p class="price">${this.price}</p>
                            <p class="huiyuanjia">会员价<span> ${this.price_huiyuan}</span></p>
                            <p class="qiang"><a href="#">抢购</a></p>
                        </div>
                    </li>`;
        })
        $html+='</ul>';
        $content=$time_list.html();
        $time_list.html($content+$html);

        //商品分类
        $html = '<ul class="clear">';
        $(data["goods"]).each(function(i){
            $html+=`<li> 
                        <a href="#" class="image">
                            <img src="${this.url}" alt="">
                            <div class="add-cart">加入购物车</div>
                        </a>
                        <div class="title">${this.title}</div>
                        <div class="price">${this.price}</div>
                    </li>`;
        })
        $html+='</ul>';
        $content=$goods_list.html();
        $goods_list.html($content+$html);


        //主图
        $(data["zhutu"]).each(function(i){
            $html = '';
            $html+=`<img src="${this.url}" alt="">`;
            $zhutu_list.eq(i).html($html)
        })
        

        //title-img
        $(data["title_img"]).each(function(i){
            $html = '';
            $html+=`<a href="#">
                        <img src="${this.url}" alt="">
                    </a>`;
            $title_img.eq(i).html($html)
        })

        //ce-img
        $(data["ce_img"]).each(function(i){
            $html = '';
            $html+=`<a href="#" class="image">
                        <img src="${this.url}" alt="">
                    </a>
                    <a href="#" class="jiantou"></a>`;
            $ce_img.eq(i).html($html)
        })

        //推荐
        $html = '';
        $(data["tuijian"]).each(function(i){
            $html+=`<li>
                        <a href="#" class="image">
                            <img src="${this.url}" alt="">
                            <div class="add-cart">加入购物车</div>
                        </a>
                        <div class="title">${this.title}</div>
                        <div class="price">${this.price}</div>
                    </li>`;
        })
        $content=$tuijian.html();
        $tuijian.html($content+$html);

        //热门晒单
        $html = '';
        $(data["remen"]).each(function(i){
            $html+=`<div class="gundong clear">
                        <a href="#" class="tupian left">
                            <img src="${this.url}" alt="">
                        </a>
                        <div class="info left">
                            <p class="orange"><a href="#">${this.title_1}</a></p>
                            <p class="grey"><a href="#">${this.title_2}</a></p>
                        </div>
                    </div>`;
        })
        $html+='';
        $content=$remen.html();
        $remen.html($content+$html);
        
 })
})(jQuery)
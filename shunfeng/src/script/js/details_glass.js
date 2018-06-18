(function($){
    var $navul=$("div.tu-nav ul");
    var $navli=$("div.tu-nav ul li");
    var $navlimg=$("div.tu-nav ul li img");
    var $top=$("a.shang");
    var $bottom=$("a.xia");
    // var $title=$("div.producteInfo div.buy h3")
    // var $price=$("div.producteInfo div.buy strong.num")

    var $spic=$("div.spic");
    var $sg=$(".sglass");
    var $bpic=$("img.bpic");
    var $bg=$(".bglass");


    //拼数据
    $id=location.search.split("?")[1].split("=")[1];
    // console.log($id);

    $.ajax({
        type:"get",
        url:"../../php/details.php",
        data:{
            id:$id
        }
    }).done(function(d){
        var $bimai_data=JSON.parse(d).bimai;
        // console.log(d)
        var $id=$bimai_data[0].id;
        var $title=$bimai_data[0].title;
        var $price=$bimai_data[0].price;
        var $arr=$bimai_data[0].url.split(",");
        // console.log($title);
        // console.log($pricr);
        // console.log($arr);
        $sg.attr("id",$id)
        $("div.producteInfo div.buy h3").html($title);
        $("div.producteInfo div.buy strong.num").html($price);

        $navlimg.each(function(index,value){
            // console.log(index);
            // console.log($(value).attr("src"));
            $(value).attr("src",$arr[index]);
            $spic.find("img").attr("src",$arr[0]);
            $bpic.attr("src",$arr[0]);
        })

    });

    // $sg.on("click",function(){
    //     alert($(this).attr("id"))
    // })
    

    //放大镜
    class Glass{
        constructor(){
            this.num=5;
            this.oneh=$navli.eq(0).outerHeight(true);
            //计算比例

            this.scale=(parseInt($bpic.css("width")))/(parseInt($spic.css("width")));
            //小放大镜赋值
            // console.log($spic.get(0).tagName)
            // console.log($spic.css("width"))
            // console.log(this.scale)
            $sg.css({
                "width":parseInt($bg.css("width"))/this.scale,
                "height":parseInt($bg.css("height"))/this.scale
            })
            //导航条附宽度
            $navul.css("height",this.oneh*$navli.size())
            this.init();
        }
        init(){
            this.handhover();
            this.handmove();
            this.topclick();
            this.bottomclick();
            this.navlihover();
        }
        handhover(){
            $spic.hover(function(){
                $sg.show();
                $bg.show();
            },function(){
                $sg.hide();
                $bg.hide();
            })
        }
        handmove(){
            var that=this;
            $spic.on("mousemove",function(ev){
                var $l=ev.pageX-$(this).offset().left-$sg.width()/2;
                var $t=ev.pageY-$(this).offset().top-$sg.height()/2;
                if($l<=0){
                    $l=0;
                }else if($l>=$(this).width()-$sg.width()){
                    $l=$(this).width()-$sg.width();
                }
                if($t<=0){
                    $t=0;
                }else if($t>=$(this).height()-$sg.height()){
                    $t=$(this).height()-$sg.height();
                }
                $sg.css({"left":$l,"top":$t})

                $bpic.css({
                    "left":-$l*that.scale,
                    "top":-$t*that.scale
                })
            })
        }
        topclick(){
            var that=this;
            $top.on("click",function(){
                that.num++;
                if(that.num>=$navli.size()){
                    that.num=$navli.size();
                }
                $navul.css({
                    "top":-(that.num-5)*that.oneh
                })
            })
        }
        bottomclick(){
            var that=this;
            $bottom.on("click",function(){
                that.num--;
                if(that.num<=5){
                    that.num=5;
                }else{
                    $(this).css("color","#ccc");
                    
                }
                $navul.css({
                    "top":-(that.num-5)*that.oneh
                })
            })
        }
        navlihover(){
            $navlimg.on("mouseover",function(){
                var $src=$(this).attr("src");
                // alert($src)
                $spic.find("img").attr("src",$src);
                $bpic.attr("src",$src);
            })
        }
        
    }
    
    var glass=new Glass;


 
})(jQuery)
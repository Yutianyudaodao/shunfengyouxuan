define(['jquery'],function($){
	return {
		to_details:(function(){
			var $goods=$(".youxuan_list");

			$goods.on("click",function(ev){
				// alert(ev.target["id"]);
				var $id=ev.target["id"];
				// alert($id);
				window.location.href='../../src/html/details.html?id='+$id;


			})
		})(),
	}
})


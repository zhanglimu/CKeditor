//删除tr
$(document).ready(function() {
	$(function() {
		var delimg = $("[name='trash_gray']").parent();
		var tr;
		$("[name='trash_gray']").click(function() {
			tr = $(this).parent();
			$('#del_overlay').fadeIn('fast', function() {
				$('#del_box').animate({
					'top': '150px'
				}, 500);
			});
		});
		$('#del_boxclose').click(function() {
			$('#del_box').animate({
				'top': '-500px'
			}, 500, function() {
				$('#del_overlay').fadeOut('fast');
			});
		});
		$(".del_sure").click(function() {
			$('#del_box').animate({
				'top': '-500px'
			}, 500, function() {
				$('#del_overlay').fadeOut('fast');
			});
			tr.remove();
		});
		$(".del_cancel").click(function() {
			$('#del_box').animate({
				'top': '-500px'
			}, 500, function() {
				$('#del_overlay').fadeOut('fast');
			});
		});
	});
});
//自由赛
$(document).ready(function() {
	$(function() {
		$("[name='free']").click(function() {
			$('#free_overlay').fadeIn('fast', function() {
				$('#free_box').animate({
					'top': '150px'
				}, 500);
			});
		});
		$('#free_boxclose').click(function() {
			$('#free_box').animate({
				'top': '-500px'
			}, 500, function() {
				$('#free_overlay').fadeOut('fast');
			});
		});
		$(".free_sure, .free_cancel").click(function() {
			$('#free_box').animate({
				'top': '-500px'
			}, 500, function() {
				$('#free_overlay').fadeOut('fast');
			});
		});
		$(".click").click(function() {
			var a = window.confirm("是否按赛果派奖"); //alert
		});
	});
});
//锦标赛
$(document).ready(function() {
	$(function() {
		$("[name='trophy']").click(function() {
			$('#trophy_overlay').fadeIn('fast', function() {
				$('#trophy_box').animate({
					'top': '150px'
				}, 500);
			});
		});
		$('#trophy_boxclose').click(function() {
			$('#trophy_box').animate({
				'top': '-500px'
			}, 500, function() {
				$('#trophy_overlay').fadeOut('fast');
			});
		});
		$(".trophy_sure, .trophy_cancel").click(function() {
			$('#trophy_box').animate({
				'top': '-500px'
			}, 500, function() {
				$('#trophy_overlay').fadeOut('fast');
			});
		});
	});
});
//添加赛事
$(document).ready(function() {
	$(function() {
		$(".addto,[name='scissors']").click(function() {
			$('#math_overlay').fadeIn('fast', function() {
				$('#math_box').animate({
					'top': '150px'
				}, 500);
			});
		});
		$('#math_boxclose').click(function() {
			$('#math_box').animate({
				'top': '-1000px'
			}, 500, function() {
				$('#math_overlay').fadeOut('fast');
			});
		});
		$(".math_sure, .math_cancel").click(function() {
			$('#math_box').animate({
				'top': '-1000px'
			}, 500, function() {
				$('#math_overlay').fadeOut('fast');
			});
		});
	});
});
//编辑赛事
//$(document).ready(function() {
//	$(function() {
//		$("[name='events']").click(function() {
//			$('#events_overlay').fadeIn('fast', function() {
//				$('#events_box').animate({
//					'top': '50px'
//				}, 500);
//			});
//		});
//		$('#events_boxclose').click(function() {
//			$('#events_box').animate({
//				'top': '-1500px'
//			}, 500, function() {
//				$('#events_overlay').fadeOut('fast');
//			});
//		});
//	});
//});
$(document).ready(function() {
	$(function() {
		$("[name='events']").click(function() {
			window.location.href="../samples/Englishchina.html";
		});
	});
});
//切换编辑
$(function() {
	$(".menu_tab>button:first").addClass("color");
	$("#edit>div:not(:first)").hide();
	$(".menu_tab>button").click(function() {
		var div = $("#edit").children(":eq(" + $(this).index() + ")");
		div.show().siblings().hide();
		$(this).addClass().addClass("color").siblings().removeClass("color")
	});
});
$(function() {
	$(".edit_tab>button:first").addClass("color");
	$("#edit_new>div:not(:first)").hide();
	$(".edit_tab>button").click(function() {
		var div = $("#edit_new").children(":eq(" + $(this).index() + ")");
		div.show().siblings().hide();
		$(this).addClass().addClass("color").siblings().removeClass("color")
	});
});
//切换榜单
$(function() {
	$("#menu_bangdan>li:first").addClass("se");
	$("#menu_content>div:not(:first)").hide();
	$("#menu_bangdan>li").click(function() {
		$("#menu_content").children(":eq(" + $(this).index() + ")").show().siblings().hide();
		$(this).addClass().addClass("se").siblings().removeClass("se")
	});
});

//转会
$(document).ready(function() {
	$(function() {
		$("[name='transfer']").click(function() {
			$('#transfer_overlay').fadeIn('fast', function() {
				$('#transfer_box').animate({
					'top': '150px'
				}, 500);
			});
		});
		$('#transfer_boxclose').click(function() {
			$('#transfer_box').animate({
				'top': '-500px'
			}, 500, function() {
				$('#transfer_overlay').fadeOut('fast');
			});
		});
		$(".transfer_sure, .transfer_cancel").click(function() {
			$('#transfer_box').animate({
				'top': '-500px'
			}, 500, function() {
				$('#transfer_overlay').fadeOut('fast');
			});
		});
	});
});
//发布        
$(function() {                
	$("[name='faqu'] button").toggle(function() {                    
		$(this).text("发布");      
		$(this).css("backgroundColor","#e85859");          
	}, function() {                    
		$(this).text("取消"); 
		$(this).css("backgroundColor","#999");              
	});            
})        
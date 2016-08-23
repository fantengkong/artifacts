var homeTpl = require('../tpls/home.string');
var scroll = require('../utils/scroll.js');
// 定义视图
SPA.defineView('home', {
	// 装载模板
	html: homeTpl,
	plugins: [
		'delegated', {
			name: 'avalon',
			options: function(vm) {
				vm.livelist = [];
				vm.isShowLoading=true;
			}
		}
	],
	//绑定tap事件
	bindActions: {
		'goto.detail': function(value,data) {
			SPA.open('detail', {
				param: {
					id: data.id
				}
			});
		}
	},
	//绑定视图事件
	bindEvents: {
		'show': function() {
			var vm = this.getVM();
			$.ajax({

				url: '/api/livelist.php',
				type: 'get',
				data: {
					type: 'more',
					pageNo: 1

				},
				success: function(res) {
					setTimeout(function(){
						vm.livelist = res.data;
						vm.isShowLoading=false;
					},1000)
						
				}
			});
			var mySwiper = new Swiper('#home-swiper', {
				loop: false,
				onSlideChangeStart: function(swiper) {
					var index = swiper.activeIndex;
					$('#home-nav li').eq(index).addClass('active').siblings().removeClass('active');
				}
			});
			$('#home-nav li').on('tap', function() {
				mySwiper.slideTo($(this).index());
			});
			scroll({
				scroll: this.widgets.myScroll,
				vm: vm
			})
		}
	}
});
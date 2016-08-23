var detailTpl = require('../tpls/detail.string');

// 定义视图
SPA.defineView('detail', {
	// 装载模板
	html: detailTpl,
	
	init:{
		getItem:function(id,res){
			for(var i=0;i<res.data.length;i++){
				if(res.data[i].id==id){
					return res.data[i];
				}
			}
		}
	},
	
	plugins: [
		'delegated',{
			name:'avalon',
			options:function(vm){
				vm.detail = {};
			}
		}
	],
	bindActions: {
		'back': function() {
			this.hide();
		}
	},
	bindEvents: {
		'show': function() {
			var vm = this.getVM();
			var that = this;
			$.ajax({
//				url:"/api/livelist.php",
				url:"/api/getDetail.php",
				
				type:"get",
//				data:{
//					type:'more',
//					pageNo:1
//				},
				data:{
					id:that.param.id
				},
				success:function(res){
					
//					vm.detail = that.getItem(that.param.id,res);
					vm.detail = res.data;
				}
			});
		}
	}
	
//	plugins: [
//		'delegated', {
//			name: 'avalon',
//			options: function(vm) {
//				vm.detail = {};
//			}
//		}
//	],
//	bindActions: {
//		'back': function() {
//			this.hide();
//		}
//	},
//	bindEvents: {
//		'show': function() {
//			var vm = this.getVM();
//			var that = this;
//			$.ajax({
//				url: "/api/livelist.php",
//				type: "get",
//				data: {
//					type: 'more',
//					pageNo: 1
//				},
//				success: function(res) {
//					
//					vm.detail = that.getItem(that.param.id, res);
//				}
//			});
//
//		}
//	},
//
//	init: {
//		getItem: function(id, res) {
//			for (var i = 0; i < res.data.length; i++) {
//				if (res.data[i].id == id) {
//					return res.data[i];
//				}
//			}
//		}
//	}

});
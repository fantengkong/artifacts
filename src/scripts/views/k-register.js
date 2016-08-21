var registerTpl = require('../tpls/k-register.string');

SPA.defineView('k-register', {
	html: registerTpl,
	plugins: [
		'delegated'
	],
	bindActions: {
		'back': function() {
			this.hide();
		}

	},
	bindEvents: {
		'show': function() {
			var res = /^\w+@[a-zA-Z0-9]+\.[a-z]+$/;
			var res1 = /^1\d{6,10}$/;
			var res2 = /^\w+$/;
			var col = $('section').css('color');
			var arr = [1, 1, 1, 1];
			$('.k-ruser input').on('blur', function() {
				var str = $(this).val();
				if (res.test(str) || res1.test(str) || res2.test(str)) {
					$(this).css({
						color: '#999',
						fontWeight: 100
					}).siblings().css('color', col);
					arr[0] = 0;
				} else {
					$(this).css({
						color: 'red',
						fontWeight: 'bold'
					}).siblings().css('color', 'red');
					arr[0] = 1;
				}
			});
			$('.k-rcode button').on('tap', function() {
				var Num = "";
				for (var i = 0; i < 6; i++) {
					Num += Math.floor(Math.random() * 10);
				}
				$(this).html(Num);

			});
			$('section b').on('tap', function() {
				SPA.open('k-login');
			});
			$('.k-rcode input').on('blur', function() {
				var str = $(this).val();
				if (str == $('.k-rcode button').html() && str !== '获取验证码') {
					$(this).css({
						color: '#999',
						fontWeight: 100
					}).siblings('i').css('color', col);
					arr[1] = 0;
				} else {
					$(this).css({
						color: 'red',
						fontWeight: 'bold'
					}).siblings('i').css('color', 'red');
					arr[1] = 1;
				}
			});
			$('.k-rpsd input').on('blur', function() {
				var str = $(this).val();
				if (res2.test(str)) {
					$(this).css({
						color: '#999',
						fontWeight: 100
					}).siblings().css('color', col);
					arr[2] = 0;
				} else {
					$(this).css({
						color: 'red',
						fontWeight: 'bold'
					}).siblings().css('color', 'red');
					arr[2] = 1;
				}
			});
			$('.k-rpsd-again input').on('blur', function() {
				var str = $(this).val();
				var str1 = $('.k-rpsd input').val();
				if (res2.test(str) && str == str1) {
					$(this).css({
						color: '#999',
						fontWeight: 100
					}).siblings().css('color', col);
					arr[3] = 0;
				} else {
					$(this).css({
						color: 'red',
						fontWeight: 'bold'
					}).siblings().css('color', 'red');
					arr[3] = 1;
				}
			});
			$(".k-registerbtn").on("tap", function() {
				var str1 = $('.k-ruser input').val();
				var str2 = $('.k-rpsd input').val();

				for (var i = 0; i < arr.length; i++) {
					if (arr[i] == 1) {
						alert('输入有误');
						return;
					}
				};

				$.ajax({
					url: "http://datainfo.duapp.com/shopdata/userinfo.php",
					data: {
						status: "register",
						userID: str1,
						password: str2
					},
					success: function(data) {
						if (data == 0) {
							alert("用户名已存在")
						} else if (data == 1) {
							alert("注册成功");
							SPA.open('k-login');
						} else if (data == 2) {
							alert("不好意思，出错了~~")
						}
					},
					error: function(data) {
						console.log(data)
					}
				});

			})

		}
	}

})
/*--------------------------------------------------------------------
 common.js
----------------------------------------------------------------------*/

(function(window, undefined) {

	var App = {
		global: {},
		fn: {},
		ui: {},
		utils: {},
		views: {}
	};
	window.APP = App;

})(window);

(function(App, window, decument, undefined) {


/* global
------------------------------------------------------------*/

	App.global = {

		areanavPath: '/common/include/areanav.html'  // サイドバー内エリア一覧HTMLパス

	};


/* fn
------------------------------------------------------------*/

	App.fn = {

	};


/* ui
------------------------------------------------------------*/

	App.ui = {

		/**
		 * カルーセル
		 */
		carousel: function() {
			var $el = {};
			var $imageList = {};
			var $item = {};
			var $btnList = {};
			var $btn = {};
			var autoSlide = {};
			var itemLength = 0;
			var slideWidth = 0;
			var viewNum = 0;
			var slideSpeed = 500;
			var intervalTime = 5000;
			var isAnimate = false;
			var isResize = false;
			var isAuto = true;
			var init = function(args) {
				slideSpeed = args.slideSpeed || slideSpeed;
				intervalTime = args.intervalTime || intervalTime;
				isAuto = args.autoSlide !== undefined ? args.autoSlide : isAuto;
				$el = args.$el;
				setEl();
				render();
				if(isAuto) {
					setAutoSlide();
				}
				setEvents();
				return this;
			};
			var setEl = function() {
				$imageList = $el.find('.js-carouselImageList');
				$btnList = $el.find('.js-carouselBtnList');
				$item = $imageList.children();
				return this;
			};
			var render = function() {
				itemLength = $item.length;
				imageListRender();
				btnListRender();
				return this;
			};
			var imageListRender = function() {
				slideWidth = $item.first().width();
				$item.each(function() {
					$(this).width(slideWidth);
				});
				$imageList.css({
					position: 'absolute',
					top: 0,
					left: 0,
					width: slideWidth * (itemLength+1)
				});
				$imageList.append($item.first().clone());
				$el.css({
					height: $item.first().height()
				});
				return this;
			};
			var btnListRender = function() {
				var btnListArray = [];
				for(var i=0; i<itemLength; i++) {
					btnListArray.push('<li>' + (i+1) + '</li>');
				}
				$btnList.append(btnListArray.join('')).promise().done(function() {
					$btn = $btnList.children();
					$btn.first().addClass('active');
				});
				return this;
			};
			var setEvents = function() {
				$btn.off('click').on('click', function() {
					if(!isAnimate) {
						animateSlide(this);
						isAnimate = false;
					}
				});
				$(window).resize(function() {
					if(!isResize) {
						resize();
						isResize = false;
					}
				});
				return this;
			};
			var animateSlide = function(that) {
				isAnimate = true;
				if(that) {
					viewNum = $(that).index();
				}
				$imageList.animate({
					left: -(slideWidth*viewNum)
				}, slideSpeed , function() {
					if(viewNum === itemLength) {
						$imageList.css({
							left: 0
						});
					}
				});
				$btnList.find('.active').removeClass('active');
				$btn.eq(viewNum === itemLength ? 0 : viewNum).addClass('active');
				return this;
			};
			var setAutoSlide = function() {
				if(isAuto) {
					autoSlide = setInterval(function() {
						viewNum = viewNum < itemLength ? viewNum+1 : 1;
						animateSlide();
						isAnimate = false;
					}, intervalTime);
				} else {
					clearInterval(autoSlide);
					isAuto = true;
				}
				return this;
			};
			var resize = function() {
				isResize = true;
				reset();
				imageListRender();
				return this;
			};
			var reset = function() {
				$el.css({
					height: 'auto'
				});
				$imageList.css({
					position: 'relative',
					width: 'auto'
				});
				$item.each(function() {
					$(this).css({
						width: 'auto'
					});
				});
				return this;
			};
			return { init: init };
		}

	};


/* utils
------------------------------------------------------------*/

	App.utils = {

		/**
		 * ウィンドウ表示
		 */
		thickbox: function() {
			var $el = {};
			var $btn = {};
			var $box = {};
			var $filter = {};
			var boxWidth = 0;
			var boxHeight = 0;
			var fadeSpeed = 500;
			var isOpen = false;
			var isAnimate = false;
			var init = function(args) {
				$el = args.$el;
				setEl();
				render();
				setEvents();
				return this;
			};
			var setEl = function() {
				$btn = $el.find('.js-showBoxBtn');
				$box = $el.find('.js-showBoxWindow');
				return this;
			};
			var render = function() {
				$el.append('<div class="js-thickboxFilter"></div>');
				$filter = $el.find('.js-thickboxFilter');
				$box.hide();
				return this;
			};
			var setEvents = function() {
				$btn.off('click').on('click', function() {
					if(!isAnimate) {
						if(!isOpen) {
							openWindow();
							isAnimate = false;
							isOpen = true;
						}
					}
				});
				$filter.off('click').on('click', function() {
					if(!isAnimate) {
						if(isOpen) {
							closeWindow();
							isAnimate = false;
							isOpen = false;
						}
					}
				});
				return this;
			};
			var openWindow = function() {
				isAnimate = true;
				$filter.fadeIn(fadeSpeed);
				$box.fadeIn(fadeSpeed);
				return this;
			};
			var closeWindow = function() {
				isAnimate = true;
				$filter.fadeOut(fadeSpeed);
				$box.fadeOut(fadeSpeed);
				return this;
			};
			return { init: init }
		}

	};


/* views
------------------------------------------------------------*/

	App.views = {

		/**
		 * ページ
		 */
		PageView: (function() {
			var constructor = function() {
				this.$el = {};
				this.$anchor = {};
				this.$imgBtn = {};
				this.scrollSpeed = 500;
				this.isScroll = false;
				return this;
			};
			var proto = constructor.prototype;
			proto.init = function(el) {
				this.setEl(el);
				this.render();
				this.setEvents();
				return this;
			};
			proto.setEl = function(el) {
				this.$el = $(el);
				this.$anchor = this.$el.find('a[href^="#"]');
				this.$imgBtn = this.$el.find('.btn');
				this.areaList = this.$el.find('.js-areaNavList');
				return this;
			};
			proto.render = function() {
				this.showAreaList();
				this.$el.wrap('<div style="overflow: hidden;"></div>').css('left', 0);
				return this;
			};
			proto.showAreaList = function() {
				if(this.areaList.length > 0 && App.global.areanavPath !== '') {
					this.areaList.each(function() {
						$(this).load(App.global.areanavPath);
					});
				}
				return this;
			};
			proto.setEvents = function() {
				var that = this;
				this.$anchor.off('click').on('click', function() {
					if(!that.isScroll) {
						that.smoothScroll($(this).attr('href'));
						that.isScroll = false;
					}
					return false;
				});
				this.$imgBtn.hover(function() {
					that.imageRollover(this);
				}, function() {
					that.imageRollover(this);
				});
				return this;
			};
			proto.smoothScroll = function(href) {
				this.isScroll = true;
				var $target = $(href === '#' || href === '' ? 'html' : href);
				var position = $target.offset().top;
				$('html, body').animate({
					scrollTop: position
				}, this.scrollSpeed, 'swing');
				return this;
			};
			proto.imageRollover = function(that) {
				var $that = $(that);
				var imgSrc = $that.attr('src');
				var imgPath = imgSrc.split('/');
				var imgFile = imgPath[imgPath.length -1];
				$that.attr('src', (imgFile.indexOf('_on') == -1) ? imgSrc.replace(/(\.)(gif|jpg|png)/i, '_on$1$2') : imgSrc.replace(/(\_on)(.)(gif|jpg|png)/i, '$2$3'));
				return this;
			};
			return constructor;
		})(),

		/**
		 * サイドバー
		 */
		SideBarView: (function() {
			var constructor = function() {
				this.$el = {};
				this.$btn = {};
				this.$filter = {};
				this.slideWidth = 0;
				this.isOpen = false;
				this.isAnimate = false;
				return this;
			};
			var proto = constructor.prototype;
			proto.init = function(args) {
				this.setEl(args.el);
				this.render();
				this.setEvents();
				return this;
			};
			proto.setEl = function(el) {
				this.$el = $(el);
				this.$btn = $('.js-btnSidebar');
				this.$areaList = this.$el.find('.js-areaNavList');
				return this;
			};
			proto.render = function() {
				this.slideWidth = this.$el.outerWidth();
				this.$el.after('<div class="side-mainFilter"></div>');
				this.$filter = $('.side-mainFilter');
				return this;
			};
			proto.setEvents = function() {
				var that = this;
				this.$btn.off('click').on('click', function() {
					if(!this.isAnimate) {
						that.onClickNavBtn();
						that.isAnimate = false;
					}
				});
				this.$filter.off('click').on('click', function() {
					if(!this.isAnimate) {
						that.onClickNavBtn();
						that.isAnimate = false;
					}
				});
				return this;
			};
			proto.onClickNavBtn = function() {
				this.isAnimate = true;
				this.isOpen ? this.closeSidebar() : this.showSidebar();
				return this;
			};
			proto.showSidebar = function() {
				this.$filter.fadeIn();
				$('body').width($(window).width());
				$('.page').animate({
					left: this.slideWidth
				});
				this.isOpen = true;
				return this;
			};
			proto.closeSidebar = function() {
				this.$filter.fadeOut();
				$('.page').animate({
					left: 0
				});
				this.isOpen = false;
				return this;
			};
			return constructor;
		})()

	};

})(APP, window, document);

/**
 * facebook
 */
(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v2.6";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

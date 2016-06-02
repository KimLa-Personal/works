/*--------------------------------------------------------------------
 top.js
----------------------------------------------------------------------*/

(function() {

	var global = APP.global;
	var fn = APP.fn;
	var ui = APP.ui;
	var utils = APP.utils;
	var views = APP.views;

	/**
	 * 初期処理
	 */
	var pageInit = function() {

		/* ページ */
		var pageView = new PageView();
		pageView.init('#PageView');

	};

	/**
	 * ページ
	 */
	var PageView = (function() {
		var constructor = function() {
			return this;
		};
		var proto = constructor.prototype = new views.PageView();
		proto.render = function() {
			views.PageView.prototype.render.apply(this);

			/* サイドバー */
			var sideBarView = new views.SideBarView();
			sideBarView.init({
				el: '#SideView'
			});

			$(window).load(function() {

				/* メイン */
				var mainView = new MainView();
				mainView.init({
					el: '#MainView'
				});

			});

			return this;
		};
		return constructor;
	})();

	/**
	 * メイン
	 */
	var MainView = (function() {
		var constructor = function() {
			this.$el = {};
			this.$floatingBtn = {};
			this.showScrollStart = 0;
			this.showScrollEnd = 0;
			this.isShow = false;
			this.isScroll = false;
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
			this.$floatingBtn = this.$el.find('.js-floatingBtn');
			return this;
		};
		proto.render = function() {
			this.$floatingBtn.hide();
			this.showScrollStart = $('.header').outerHeight();
			this.showScrollEnd = $('body').outerHeight() - ($(window).height()+$('.footer').outerHeight());
			return this;
		};
		proto.setEvents = function() {
			var that = this;
			$(window).scroll(function() {
				if(!global.isShowSide) {
					if(!that.isScroll) {
						that.onScrollBtnFloating($(this).scrollTop());
						that.isScroll = false;
					}
				}
			});
			return this;
		};
		proto.onScrollBtnFloating = function(scrollTop) {
			this.isScroll = true;
			if(scrollTop > this.showScrollStart && scrollTop <= this.showScrollEnd) {
				if(!this.isShow) {
					this.$floatingBtn.fadeIn();
					this.isShow = true;
				}
			} else {
				if(this.isShow) {
					this.$floatingBtn.fadeOut();
					this.isShow = false;
				}
			}
			return this;
		};
		return constructor;
	})();

	/* 初期処理 */
	pageInit();

})();

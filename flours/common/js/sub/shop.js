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
			this.sideBarView = {};
			return this;
		};
		var proto = constructor.prototype = new views.PageView();
		proto.setChildViewInstance = function() {

			/* サイドバー */
			this.sideBarView = new views.SideBarView();
			this.sideBarView.parentViewEl = this.$el;
			this.sideBarView.init({
				el: '#SideView'
			});

			/* メイン */
			this.mainView = new MainView();
			this.mainView.init({
				el: '#MainView'
			});

			/* Instagram表示 */
			var instashow = new ui.setInstashow();
			instashow.init('.js-instashowView');

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
			this.$el = $(args.el);
			this.setEl();
			this.onLoadFunction();
			this.setChildViewInstance();
			this.setEvents();
			return this;
		};
		proto.setEl = function() {
			this.$floatingBtn = this.$el.find('.js-floatingBtn');
			this.$btnThickboxTel = this.$el.find('.js-thickboxTel');
			return this;
		};
		proto.onLoadFunction = function() {
			this.$floatingBtn.show();
			this.showScrollStart = $('.header').outerHeight();
			this.showScrollEnd = $('body').outerHeight();
			return this;
		};
		proto.setChildViewInstance = function() {

			/* GoogleMap表示 */
			var googleMap = new ui.setGoogleMap();
			googleMap.init($('.js-googleMapView'));

			return this;
		};
		proto.setEvents = function() {
			var that = this;
			this.$btnThickboxTel.off('click').on('click', function() {
				var telThickboxView = new views.ThickboxView();
				telThickboxView.init(this);
			});
			/*
			$(window).scroll(function() {
				if(!global.isShowSide) {
					if(!that.isScroll) {
						that.onScrollBtnFloating($(this).scrollTop());
						that.isScroll = false;
					}
				}
			});
			*/
			return this;
		};
		proto.onScrollBtnFloating = function(scrollTop) {
			this.isScroll = true;
			if(scrollTop > this.showScrollStart) {
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

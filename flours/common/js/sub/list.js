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

			/* 店舗カセット 1番目 */
			var shopItemFirstView = new ShopItemView();
			shopItemFirstView.init({
				el: '#ShopItemFirstView'
			});

			/* 店舗カセット 2番目 */
			var shopItemSecoundView = new ShopItemView();
			shopItemSecoundView.init({
				el: '#ShopItemSecoundView'
			});

			return this;
		};
		return constructor;
	})();

	/**
	 * 店舗カセット
	 */
	var ShopItemView = (function() {
		var constructor = function() {
			this.$el = {};
			this.$imageList = {};
			return this;
		};
		var proto = constructor.prototype;
		proto.init = function(args) {
			var that = this;
			this.$el = $(args.el);
			this.$el.ready(function() {
				that.setEl();
				that.render();
				that.setEvents();
			});
			return this;
		};
		proto.setEl = function(el) {
			this.$imageList = this.$el.find('.js-carousel');
			this.$btnTel = this.$el.find('.js-onClickShowTel');
			return this;
		};
		proto.render = function() {

			/* トップビジュアル */
			var shopVisual = new ui.carousel();
			shopVisual.init({
				$el: this.$imageList,
				el: '.js-carousel',
				slideSpeed: 500,
				autoSlide: false
			});

			/* ウィンドウ表示 */
			var onClickShowTel = new utils.thickbox();
			onClickShowTel.init({
				$el: this.$btnTel
			});

			return this;
		};
		proto.setEvents = function() {
			return this;
		};
		return constructor;
	})();

	/* 初期処理 */
	pageInit();

})();

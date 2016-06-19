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
			this.setEl();
			this.onLoadFunction();
			this.setChildViewInstance();
			this.setEvents();
			return this;
		};
		proto.setEl = function(el) {
			this.$imageList = this.$el.find('.js-carousel');
			this.$btnTelThickbox = this.$el.find('.js-thickboxTel');
			this.$btnMapThickbox = this.$el.find('.js-thickboxMap');
			return this;
		};
		proto.onLoadFunction = function() {
			//this.$btnTelThickbox.find('.js-thickboxClone').hide();
			//this.$btnMapThickbox.find('.js-thickboxClone').hide();
			return this;
		};
		proto.setChildViewInstance = function() {

			/* カルーセル */
			var setCarousel = new ui.setCarousel();
			setCarousel.init({
				$el: this.$imageList
			});

			/* GoogleMap表示 */
			var googleMap = new ui.setGoogleMap();
			googleMap.init(this.$el.find('.js-googleMapView'));

			return this;
		};
		proto.setEvents = function() {
			this.$btnTelThickbox.off('click').on('click', function() {
				var telThickboxView = new views.ThickboxView();
				telThickboxView.init(this);
			});
			this.$btnMapThickbox.off('click').on('click', function() {
				var mapThickboxView = new MapThickboxView();
				mapThickboxView.init(this);
			});
			return this;
		};
		return constructor;
	})();

	/**
	 * mapThickbox
	 */
	var MapThickboxView = (function() {
		var constructor = function() {
			return this;
		};
		var proto = constructor.prototype = new views.ThickboxView();
		proto.onOpen = function() {

			/* GoogleMap表示 */
			var googleMap = new ui.setGoogleMap();
			googleMap.init(this.$thickbox.find('.js-googleMapView'));

			return this;
		};
		return constructor;
	})();

	/* 初期処理 */
	pageInit();

})();

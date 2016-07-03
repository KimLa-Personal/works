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
			this.$shopItem = {};
			this.sideBarView = {};
			return this;
		};
		var proto = constructor.prototype = new views.PageView();
		proto.onLoadFunction = function() {
			views.PageView.prototype.onLoadFunction.apply(this);
			this.$shopItemList = this.$el.find('.shopList-list');
			this.$shopItem = this.$shopItemList.find('.shopItem');
			return this;
		};
		proto.setChildViewInstance = function() {

			/* サイドバー */
			this.sideBarView = new views.SideBarView();
			this.sideBarView.parentViewEl = this.$el;
			this.sideBarView.init({
				el: '#SideView'
			});

			this.$shopItem.each(function() {

				/* 店舗カセット */
				var shopItemView = new ShopItemView();
				shopItemView.init({
					$el: $(this)
				});

			});

			return this;
		};
		proto.onRender = function() {
			this.setItemHeight();
			return this;
		};
		proto.onResize = function() {
			this.setItemHeight();
			return this;
		};
		proto.setItemHeight = function() {
			this.setMatchHeight(this.$shopItem.find('.shopItem-shopName'));
			this.setMatchHeight(this.$shopItem.find('.shopItem-coreTime'));
			return this;
		};
		proto.setMatchHeight = function($target) {
			$target.height('auto');
			if($(window).width() > 640) {
				var heightArray = [];
				$target.each(function() {
					heightArray.push($(this).height());
				});
				heightArray.sort(function(a, b) {
					if(a > b) return -1;
					if(a < b) return 1;
					return 0;
				});
				$target.height(heightArray[0]);
			}
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
			this.$btnTelThickbox = {};
			this.$btnMapThickbox = {};
			this.shopLinkUrl = '';
			return this;
		};
		var proto = constructor.prototype;
		proto.init = function(args) {
			var that = this;
			this.$el = args.$el;
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
			this.shopLinkUrl = $('.shopItem-header').children('a').attr('href');
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
			var that = this;
			this.$btnTelThickbox.off('click').on('click', function() {
				var telThickboxView = new views.ThickboxView();
				telThickboxView.init(this);
			});
			this.$btnMapThickbox.off('click').on('click', function() {
				var mapThickboxView = new MapThickboxView();
				mapThickboxView.init(this);
			});
			this.$imageList.find('img').off('click').on('click', function() {
				that.onClickImage();
			});
			return this;
		};
		proto.onClickImage = function() {
			location.href = this.shopLinkUrl;
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

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
		proto.setChildViewInstance = function() {

			/* カルーセル */
			var setCarousel = new ui.setCarousel();
			setCarousel.init({
				$el: $('.js-carousel'),
				autoplay: true
			});

			/* Instagram表示 */
			var instashow = ui.setInstashow();
			instashow.init('.js-instashowView');

			return this;
		};
		proto.onLoadFunction = function() {
			views.PageView.prototype.onLoadFunction.apply(this);
			this.setCarousel();
			return this;
		};
		proto.onRender = function() {
			this.setElPaddingTop();
			return this;
		};
		proto.onResize = function() {
			this.setElPaddingTop();
			return this;
		};
		proto.setElPaddingTop = function() {
			this.$el.css({
				paddingTop: this.$carousel.height()
			});
			return this;
		};
		return constructor;
	})();

	/* 初期処理 */
	pageInit();

})();

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

			/* Instagram表示 */
			var instashow = ui.setInstashow();
			instashow.init('.js-instashowView');

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
		};
		return constructor;
	})();

	/* 初期処理 */
	pageInit();

})();

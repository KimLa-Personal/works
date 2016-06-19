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

		areanavPath: '/common/include/areanav.html',  // サイドバー内エリア一覧HTMLパス
		isShowSide: false

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
		setCarousel: function() {
			var $el = {};
			var autoplay = false;
			var init = function(args) {
				set(args);
				onLoadFunction();
				return this;
			};
			var set = function(args) {
				$el = args.$el;
				autoplay = args.autoplay || autoplay;
				return this;
			};
			var onLoadFunction = function() {
				$el.slick({
					accessibility: false,
					autoplay: autoplay,
					autoplaySpeed: 5000,
					dots: false,
					dotsClass: 'js-carouselBtn',
					arrows: true,
					infinite: true,
					swipe: true
				});
				return this;
			};
			return { init: init };
		},

		/**
		 * GoogleMap表示
		 */
		setGoogleMap: function() {
			var $el = {};
			var $canvas = {};
			var map = {};
			var marker = {};
			var options = {};
			var positions = {};
			var init = function($view) {
				setEl($view);
				setOptions();
				render();
				setMarker();
				return this;
			};
			var setEl = function($view) {
				$el = $view;
				$canvas = $el.find('.js-googleMapCanvas');
				return this;
			};
			var setOptions = function() {
				positions = {
					x: $el.data('x'),
					y: $el.data('y'),
					zoom: $el.data('zoom') || 19
				};
				options = {
					zoom: positions.zoom,
					center: new google.maps.LatLng(positions.y, positions.x),
					mapTypeId: google.maps.MapTypeId.ROADMAP,
					mapTypeControl: false,
					draggable: false
				};
				return this;
			};
			var render = function() {
				map = new google.maps.Map($canvas.get(0), options);
				return this;
			};
			var setMarker = function() {
				marker = new google.maps.Marker({
					position: new google.maps.LatLng(positions.y, positions.x),
					map: map
				});
				return this;
			};
			return { init: init };
		},

		/**
		 * Instagram表示
		 */
		setInstashow: function() {
			var $el = {};
			var $canvas = {};
			var options = {};
			var colors = {};
			var init = function(el) {
				setEl(el);
				setOptions();
				render();
				return this;
			};
			var setEl = function(el) {
				$el = $(el);
				$canvas = $el.find('js-instaCanvas');
				return this;
			};
			var setOptions = function() {
				options = {
					api: '/common/api/',
					source: '@flowers.tokyo',
					filterOnly: $el.data('hash'),
					columns: '3',
					rows: '3',
					dragCntrol: 'false',
					direction: 'vertical',
					info: 'likesCounter, description'
				};
				colors = {
					galleryCounters: 'rgb(0, 0, 0)',
					galleryDescription: 'rgb(0, 0, 0)',
					galleryOverlay: 'rgba(237, 237, 237, 0.9)',
					galleryArrows: 'rgb(0, 156, 255)',
					galleryArrowsHover: 'rgb(0, 0, 0)',
					galleryArrowsBg: 'rgb(255, 255, 255)',
					popupOverlay: 'rgba(228, 228, 228, 0.9)',
					popupUsername: 'rgb(0, 156, 255)',
					popupUsernameHover: 'rgb(0, 0, 0)',
					popupInstagramLink: 'rgb(0, 156, 255)',
					popupInstagramLinkHover: 'rgb(0, 0, 0)',
					popupCounters: 'rgb(68, 68, 68)',
					popupAnchor: 'rgb(0, 156, 255)',
					popupAnchorHover: 'rgb(0, 0, 0)',
					popupText: 'rgb(68, 68, 68)',
					popupControls: 'rgb(147, 195, 225)',
					popupControlsHover: 'rgb(68, 68, 68)',
					popupMobileControls: 'rgb(147, 195, 225)'
				};
				return this;
			};
			var render = function() {
				$el.append('<div class="js-instaCanvas" data-is ' + setOptionData() + '></div>').promise().done(function() {
					$canvas = $el.find('.js-instaCanvas');
				});
				return this;
			};
			var setOptionData = function() {
				var setData = '';
				setData += 'data-is-api="' + options.api + '" ';
				setData += 'data-is-source="' + options.source + '" ';
				setData += 'data-is-filter-only="' + options.filterOnly + '"';
				setData += 'data-is-columns="' + options.columns + '" ';
				setData += 'data-is-rows="' + options.rows + '" ';
				setData += 'data-is-drag-control="' + options.dragCntrol + '" ';
				setData += 'data-is-direction="' + options.direction + '" ';
				setData += 'data-is-info="' + options.info + '" ';
				setData += 'data-is-color-gallery-counters="' + colors.galleryCounters + '" ';
				setData += 'data-is-color-gallery-description="' + colors.galleryDescription + '" ';
				setData += 'data-is-color-gallery-overlay="' + colors.galleryOverlay + '" ';
				setData += 'data-is-color-gallery-arrows="' + colors.galleryArrows + '" ';
				setData += 'data-is-color-gallery-arrows-hover="' + colors.galleryArrowsHover + '" ';
				setData += 'data-is-color-gallery-arrows-bg="' + colors.galleryArrowsBg + '" ';
				setData += 'data-is-color-popup-overlay="' + colors.popupOverlay + '" ';
				setData += 'data-is-color-popup-username="' + colors.popupUsername + '" ';
				setData += 'data-is-color-popup-username-hover="' + colors.popupUsernameHover + '" ';
				setData += 'data-is-color-popup-instagram-link="' + colors.popupInstagramLink + '" ';
				setData += 'data-is-color-popup-instagram-link-hover="' + colors.popupInstagramLinkHover + '" ';
				setData += 'data-is-color-popup-counters="' + colors.popupCounters + '" ';
				setData += 'data-is-color-popup-anchor="' + colors.popupAnchor + '" ';
				setData += 'data-is-color-popup-anchor-hover="' + colors.popupAnchorHover + '" ';
				setData += 'data-is-color-popup-text="' + colors.popupText + '" ';
				setData += 'data-is-color-popup-controls="' + colors.popupControls + '" ';
				setData += 'data-is-color-popup-controls-hover="' + colors.popupControlsHover + '" ';
				setData += 'data-is-color-popup-mobile-controls="' + colors.popupMobileControls + '"';
				return setData;
			};
			return { init: init };
		}

	};


/* utils
------------------------------------------------------------*/

	App.utils = {

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
				this.$views = {};
				this.$area = {};
				this.$anchor = {};
				this.$imgBtn = {};
				this.$filter = {};
				this.$areaList = {};
				this.scrollSpeed = 500;
				this.isScroll = false;
				this.isOpenFilter = false;
				return this;
			};
			var proto = constructor.prototype;
			proto.init = function(el) {
				this.setEl(el);
				this.onLoadFunction();
				this.setChildViewInstance();
				this.render();
				this.onRender();
				this.setEvents();
				this.setCustumEvents();
				return this;
			};
			proto.setEl = function(el) {
				this.$el = $(el);
				this.$views = this.$el.find('.views');
				this.$area = this.$views.find('.area');
				this.$anchor = this.$el.find('a[href^="#"]');
				this.$imgBtn = this.$el.find('.btn');
				this.$header = this.$el.find('.header');
				this.$areaList = this.$el.find('.js-areaNavList');
				return this;
			};
			proto.onLoadFunction = function() {
				this.setStyle();
				this.showAreaList();
				return this;
			};
			proto.setStyle = function() {
				return this;
			};
			proto.setChildViewInstance = function() {
				return this;
			};
			proto.render = function() {
				return this;
			};
			proto.onRender = function() {
				return this;
			};
			proto.showAreaList = function() {
				if(this.$areaList.length > 0 && App.global.areanavPath !== '') {
					this.$areaList.each(function() {
						var $this = $(this);
						$this.load(App.global.areanavPath, function() {
							$this.find('a[data-area="' + $this.data('area') + '"]').addClass('current');
						});
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
				$(window).resize(function() {
					that.onResize();
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
			proto.onResize = function() {
				return this;
			};
			proto.setCustumEvents = function() {
				var that = this;
				this.$el.on('onLoadSidebar', function() {
					that.onLoadSidebar();
				});
				this.$el.on('onShowSidebar', function(e, slideWidth) {
					that.onShowSidebar(slideWidth);
					that.isOpenFilter = true;
				});
				this.$el.on('onCloseSidebar', function(e, slideWidth) {
					that.onCloseSlidebar(slideWidth);
					that.isOpenFilter = false;
				});
				return this;
			};
			proto.onLoadSidebar = function() {
				var that = this;
				this.$views.append('<div class="js-filter"></div>').promise().done(function() {
					that.$filter = that.$el.find('.js-filter');
					that.setOnLoadSidebarEvents();
				});
				this.$views.css('left', 0);
				return this;
			};
			proto.setOnLoadSidebarEvents = function() {
				var that = this;
				this.$filter.off('click').on('click', function() {
					if(that.isOpenFilter) {
						that.onCloseSlidebar();
						that.isOpenFilter = false;
					}
				});
				return this;
			};
			proto.onShowSidebar = function(slideWidth) {
				this.$filter.fadeIn();
				$('body').width($(window).width());
				this.$views.animate({
					left: slideWidth
				});
				this.$header.animate({
					left: slideWidth
				});
				App.global.isShowSide = true;
				return this;
			};
			proto.onCloseSlidebar = function() {
				this.$filter.fadeOut();
				this.$views.animate({
					left: 0
				});
				this.$header.animate({
					left: 0
				});
				App.global.isShowSide = false;
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
				this.onLoadFunction();
				this.setEvents();
				return this;
			};
			proto.setEl = function(el) {
				this.$el = $(el);
				this.$btn = $('.js-btnSidebar');
				this.$areaList = this.$el.find('.js-areaNavList');
				return this;
			};
			proto.onLoadFunction = function() {
				var that = this;
				this.$el.ready(function() {
					that.slideWidth = that.$el.outerWidth();
					that.parentViewEl.trigger('onLoadSidebar');
				});
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
				return this;
			};
			proto.onClickNavBtn = function() {
				App.global.isShowSide ? this.closeSidebar() : this.showSidebar();
				return this;
			};
			proto.showSidebar = function() {
				this.isAnimate = true;
				this.parentViewEl.trigger('onShowSidebar', this.slideWidth);
				return this;
			};
			proto.closeSidebar = function() {
				this.isAnimate = true;
				this.parentViewEl.trigger('onCloseSidebar', this.slideWidth);
				return this;
			};
			return constructor;
		})(),

		/**
		 * thickbox
		 */
		ThickboxView: (function() {
			var constructor = function() {
				this.$el = {};
				this.$thickbox = {};
				this.$inner = {};
				this.$btnClose = {};
				this.$body = {};
				this.$filter = {};
				this.fadeSpeed = 500;
				this.isAnimate = false;
				this.isShow = false;
				return this;
			};
			var proto = constructor.prototype;
			proto.init = function(that) {
				this.setEl(that);
				this.render();
				return this;
			};
			proto.setEl = function(that) {
				this.$el = $(that);
				this.$clone = this.$el.find('.js-thickboxClone');
				return this;
			};
			proto.render = function() {
				var that = this;
				var tmpl = [];
				tmpl.push('<div class="thickbox js-thickboxView">');
				tmpl.push('  <div class="thickbox-inner">');
				tmpl.push('    <div class="thickbox-btnClose js-thickboxBtnClose">×</div>');
				tmpl.push('    <div class="thickbox-body js-thickboxBody"></div>');
				tmpl.push('  </div>');
				tmpl.push('  <div class="thickbox-filter js-thickboxFilter"></div>');
				tmpl.push('</div>');
				$('body').append(tmpl.join('')).promise().done(function() {
					that.onRender();
				});
				return this;
			};
			proto.onRender = function() {
				this.onRenderSetEl();
				this.onLoadFunction();
				this.setEvents();
				return this;
			};
			proto.onRenderSetEl = function() {
				this.$thickbox = $('.js-thickboxView');
				this.$inner = this.$thickbox.find('.thickbox-inner');
				this.$btnClose = this.$thickbox.find('.js-thickboxBtnClose');
				this.$body = this.$thickbox.find('.js-thickboxBody');
				this.$filter = this.$thickbox.find('.js-thickboxFilter');
				return this;
			};
			proto.onLoadFunction = function() {
				var that = this;
				this.$clone.clone().appendTo('.js-thickboxBody').promise().done(function() {
					that.openView();
					that.isShow = true;
				});
				return this;
			};
			proto.setEvents = function() {
				var that = this;
				this.$btnClose.off('click').on('click', function() {
					if(that.isShow) {
						that.closeView();
						that.isShow = false;
						that.isAnimate = false;
					}
				});
				this.$filter.off('click').on('click', function() {
					if(that.isShow) {
						that.closeView();
						that.isShow = false;
						that.isAnimate = false;
					}
				});
				return this;
			};
			proto.openView = function() {
				var that = this;
				this.isAnimate = true;
				if(this.$clone.data('width')) {
					this.$inner.width(this.$clone.data('width'));
				}
				this.$thickbox.fadeIn(this.fadeSpeed, function() {
					that.onOpen();
				});
				this.$inner.css({
					marginTop: -(this.$inner.outerHeight()/2),
					marginLeft: -(this.$inner.outerWidth()/2),
				});
				return this;
			};
			proto.onOpen = function() {

				return this;
			};
			proto.closeView = function() {
				var that = this;
				this.isAnimate = true;
				this.$thickbox.fadeOut(this.fadeSpeed, function() {
					that.$thickbox.remove();
				});
				return this;
			};
			return constructor;
		})()

	};

})(APP, window, document);

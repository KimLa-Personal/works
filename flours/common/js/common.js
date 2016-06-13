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
		 * プリローダー
		 */
		preloader: function() {
			var $el = {};
			var $child = {};
			var $loader = {};
			var callback = {};
			var loadUrl = '';
			var isLoad = false;
			var init = function(args) {
				callback = args.callback || {};
				setEl(args.el);
				//render();
				return this;
			};
			var setEl = function(el) {
				$el = $(el);
				$child = $el.children();
				return this;
			};
			var render = function() {
				var isIframe = $child.get(0).tagName.toLowerCase() === iframe ? true : false;
				$el.css({
					position: 'relative'
				}).append('<div class="js-loader"></div>').promise().done(function() {
					$loader = $el.find('.js-loader');
					if(isIframe) {
						$child.load(function() {
							onLoad();
						});
					} else {
						$child.ready(function() {
							onLoad();
						});
					}
				});
				return this;
			};
			var onLoad = function() {
				$loader.fadeOut();
				callback;
				removeLoader();
				return this;
			};
			var removeLoader = function() {
				$loader.remove();
				return this;
			};
			return { init: init };
		},

		/**
		 * カルーセル
		 */
		carousel: (function() {
			var constructor = function() {
				this.$el = {};
				this.$imgList = {};
				this.$item = {};
				this.$ctlBtnNext= {};
				this.$ctlBtnPrev = {};
				this.slideWidth = 0;
				this.itemLength = 0;
				this.viewNum = 0;
				this.isAnimate = false;
				this.autoSlideFn = {};
				this.isAuto = true;
				this.intervalTime = 5000;
				return this;
			};
			var proto = constructor.prototype;
			proto.init = function(args) {
				this.slideWidth = args.width;
				this.setEl(args.el);
				this.render();
				this.setAutoSlide();
				this.setEvents();
				return this;
			};
			proto.setEl = function(el) {
				this.$el = $(el);
				this.$imgList = this.$el.find('.js-carouselImageList');
				this.$item = this.$imgList.find('li');
				return this;
			};
			proto.onBeforeRender = function() {
				return this;
			};
			proto.render = function() {
				this.setStyle();
				this.renderCtlBtn();
				this.viewCtlBtn();
				return this;
			};
			proto.setStyle = function() {
				var that = this;
				this.$item.each(function() {
					$(this).width(that.slideWidth);
				});
				this.$el.css({
					width: this.slideWidth,
					height: this.$item.first().height()
				});
				this.$imgList.css({
					left: 0,
					width: this.slideWidth * this.itemLength
				});
				return this;
			};
			proto.renderCtlBtn = function() {
				var that = this;
				var tmpl = [];
				tmpl.push('<ul class="carousel-ctlBtnList">');
				tmpl.push('  <li class="carousel-ctlBtnList-btnPrev js-carouselBtnPrev"><span>前へ</span></li>');
				tmpl.push('  <li class="carousel-ctlBtnList-btnNext js-carouselBtnNext"><span>次へ</span></li>');
				tmpl.push('</ul>');
				this.$el.append(tmpl.join('')).promise().done(function() {
					that.$ctlBtnPrev = that.$el.find('.js-carouselBtnPrev');
					that.$ctlBtnNext = that.$el.find('.js-carouselBtnNext');
				});
				return this;
			};
			proto.setEvents = function() {
				var that = this;
				this.$ctlBtnPrev.off('click').on('click', function() {
					if(!that.isAnimate) {
						that.onClickSlidePrev();
						that.isAnimate = false;
					}
				});
				this.$ctlBtnNext.off('click').on('click', function() {
					if(!that.isAnimate) {
						that.onClickSlideNext();
						that.isAnimate = false;
					}
				});
				$(window).resize(function() {
					that.onResize();
				});
				return this;
			};
			proto.onClickSlideNext = function() {
				if(this.viewNum < this.itemLength-1) {
					this.viewNum++;
					this.animateSlide();
					this.stopAutoSlide();
					this.startAutoSlide();
				}
				return this;
			};
			proto.onClickSlidePrev = function() {
				if(this.viewNum !== 0) {
					this.viewNum--;
					this.animateSlide();
					this.stopAutoSlide();
					this.startAutoSlide();
				}
				return this;
			};
			proto.animateSlide = function() {
				var that = this;
				this.isAnimate = true;
				this.$imgList.animate({
					left: -(that.slideWidth * that.viewNum)
				});
				this.viewCtlBtn();
				return this;
			};
			proto.viewCtlBtn = function() {
				if(this.viewNum === 0) {
					this.$ctlBtnPrev.hide();
				} else {
					this.$ctlBtnPrev.show();
				}
				if(this.viewNum === this.itemLength-1) {
					this.$ctlBtnNext.hide();
				} else {
					this.$ctlBtnNext.show();
				}
				return this;
			};
			proto.setAutoSlide = function() {
				if(this.isAuto) {
					this.startAutoSlide();
				} else {
					this.stopAutoSlide();
				}
				return this;
			};
			proto.startAutoSlide = function() {
				var that = this;
				this.autoSlideFn = setInterval(function() {
					that.viewNum = that.viewNum < that.itemLength-1 ? that.viewNum+1 : 0;
					that.animateSlide();
					that.isAnimate = false;
				}, that.intervalTime);
				return this;
			};
			proto.stopAutoSlide = function() {
				clearInterval(this.autoSlideFn);
				this.isAuto = true;
				return this;
			};
			proto.onResize = function() {
				//this.setStyle();
				return this;
			};
			return constructor;
		})(),

		/**
		 * カルーセル
		 */

		aacarousel: function() {
			var $el = {};
			var $imageList = {};
			var $item = {};
			var $btnList = {};
			var $btn = {};
			var $btnNext = {};
			var $btnPrev = {};
			var autoSlide = {};
			var itemLength = 0;
			var slideWidth = 0;
			var viewNum = 0;
			var swipeStart = 0;
			var swipeEnd = 0;
			var slideSpeed = 500;
			var intervalTime = 5000;
			var isAnimate = false;
			var isSwipe = false;
			var isResize = false;
			var isAuto = true;
			var init = function(args) {
				slideSpeed = args.slideSpeed || slideSpeed;
				intervalTime = args.intervalTime || intervalTime;
				isAuto = false;//args.autoSlide !== undefined ? args.autoSlide : isAuto;
				$el = args.$el;
				$el.ready(function() {
					setEl();
					render();
					if(isAuto) {
						setAutoSlide();
					}
					setEvents();
				});
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
				controlBtnRender();
				imageListRender();
				btnListRender();
				viewControlBtn();
				return this;
			};
			var controlBtnRender = function() {
				var tmpl = [];
				tmpl.push('<div class="topVisual-list-ctlBtnNext js-controlBtnNext"><span>次へ</span></div>');
				tmpl.push('<div class="topVisual-list-ctlBtnPrev js-controlBtnPrev"><span>前へ</span></div>');
				$el.append(tmpl.join('')).promise().done(function() {
					$btnNext = $el.find('.js-controlBtnNext');
					$btnPrev = $el.find('.js-controlBtnPrev');
				});
				return this;
			};
			var viewControlBtn = function() {
				$btnNext.show();
				$btnPrev.show();
				if(viewNum < 1) {
					$btnPrev.hide();
				}
				if(viewNum === itemLength-1) {
					$btnNext.hide();
				}
				return this;
			};
			var imageListRender = function() {
				slideWidth = $item.first().width();
				var itemHeight = $item.first().height();
				$item.each(function() {
					$(this).width(slideWidth);
				});
				$imageList.css({
					position: 'absolute',
					top: 0,
					left: 0,
					width: slideWidth * (itemLength+1)
				});
				$el.css({
					height: itemHeight
				});
				$item.find('img').each(function() {
					$(this).css({
						width: 'auto',
						height: itemHeight
					});
				});
				$imageList.append($item.first().clone());
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
				var isSlide = !isSwipe && !isAnimate;
				$btn.off('click').on('click', function() {
					if(!isSwipe && !isAnimate) {
						animateSlide(this);
						isAnimate = false;
					}
				});
				$btnNext.off('click').on('click', function() {
					if(!isSwipe && !isAnimate) {
						viewNum++;
						animateSlide();
						isAnimate = false;
					}
				});
				$btnPrev.off('click').on('click', function() {
					if(!isSwipe && !isAnimate) {
						viewNum--;
						animateSlide();
						isAnimate = false;
					}
				});
/*
				$imageList.on('touchstart', function(e) {
					if(!isSwipe && !isAnimate) {
						onTouchStart(e, this);
					}
				});
				$imageList.on('touchmove', function(e) {
					if(isSwipe) {
						onTouchMove(e, this);
					}
				});
				$imageList.on('touchend', function(e) {
					if(isSwipe) {
						onTouchEnd(e, this);
						isSwipe = false;
					}
				});
				$(window).resize(function() {
					if(!isResize) {
						onResize();
						isResize = false;
					}
				});
*/
				return this;
			};
			var onTouchStart = function(event, that) {
				isSwipe = true;
				swipeStart = Math.floor(event.originalEvent.touches[0].pageX);
				return this;
			};
			var onTouchMove = function(event, that) {
				swipeEnd = Math.floor(event.originalEvent.touches[0].pageX);
				return this;
			};
			var onTouchEnd = function(event, that) {
				viewNum = (swipeStart - swipeEnd) < 0 ? viewNum-1 : viewNum+1;
				if(isAuto) {
					isAuto = false;
					animateSlide();
					stopAutoSlide();
					startAutoSlide();
				} else {
					animateSlide();
				}
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
				viewControlBtn();
				return this;
			};
			var setAutoSlide = function() {
				if(isAuto) {
					startAutoSlide();
				} else {
					stopAutoSlide();
				}
				return this;
			};
			var startAutoSlide = function() {
				autoSlide = setInterval(function() {
					viewNum = viewNum < itemLength ? viewNum+1 : 1;
					animateSlide();
					isAnimate = false;
				}, intervalTime);
				return this;
			};
			var stopAutoSlide = function() {
				clearInterval(autoSlide);
				isAuto = true;
				return this;
			};
			var onResize = function() {
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
			var init = function(el) {
				setEl(el);
				setOptions();
				render();
				setMarker();
				return this;
			};
			var setEl = function(el) {
				$el = $(el);
				$canvas = $el.find('.js-googleMapCanvas');
				return this;
			};
			var setOptions = function() {
				positions = {
					x: $el.data('x'),
					y: $el.data('y')
				};
				options = {
					zoom: 13,
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
		},

		/**
		 * thickbox
		 */
		thickbox: function() {
			var $el = {};
			var $child = {};
			var collection = [];
			var init = function(args) {
				setEl(args.el);
				render();
				setEvents();
				return this;
			};
			var setEl = function(el) {
				$el = $(el);
				$child = $el.children();
				return this;
			};
			var render = function() {
				$child.find('img').each(function() {
					collection.push($(this).attr('src'));
				});
				return this;
			};
			var setEvents = function() {
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
				this.isResize = false;
				return this;
			};
			var proto = constructor.prototype;
			proto.init = function(el) {
				this.setEl(el);
				this.render();
				this.onRender();
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
			proto.onRender = function() {
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
				$(window).resize(function() {
					if(!that.isResize) {
						that.onResize();
						that.isResize = false;
					}
				});
				return this;
			};
			proto.onResize = function() {
				this.isResize = true;
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
				App.global.isShowSide ? this.closeSidebar() : this.showSidebar();
				return this;
			};
			proto.showSidebar = function() {
				this.$filter.fadeIn();
				$('body').width($(window).width());
				$('.page').animate({
					left: this.slideWidth
				});
				$('.header').animate({
					left: this.slideWidth
				});
				App.global.isShowSide = true;
				return this;
			};
			proto.closeSidebar = function() {
				this.$filter.fadeOut();
				$('.page').animate({
					left: 0
				});
				$('.header').animate({
					left: 0
				});
				App.global.isShowSide = false;
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
